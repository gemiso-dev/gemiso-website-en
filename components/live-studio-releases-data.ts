/**
 * Gemiso Live Studio 릴리스(릴리스 노트 · 버전별 다운로드) — Bora 웹사이트 공개 API 연동.
 *
 * 스펙: Bora 팀 "Go-Live Notice"(2026-10-08).
 * - 공개 · 읽기 전용 · 키/쿠키 없음. 커스텀 헤더 없이 단순 GET만 보낸다(CORS preflight 회피).
 * - CORS 허용 origin은 gemiso.com · www.gemiso.com · gemiso.bilumis.com(https)뿐 — localhost에서는 호출되지 않는다.
 * - 모든 요청에 product=gemiso-live-studio를 붙인다. 빠지거나 오타면 Bora Studio 데이터가 오므로,
 *   다운로드 응답의 product가 일치할 때만 다운로드 링크를 쓴다.
 * - 영문 필드(notesEn · disabledReasonEn)만 쓰고, displayName*은 Bora 브랜드가 들어 있어 쓰지 않는다.
 * - 26.1.0(첫 Gemiso Live Studio 설치 파일) 전까지 두 목록 모두 비어 있다 → 메인 버튼 "Coming soon".
 */

const API_BASE = "https://bora.marchive.co.kr";
export const LIVE_STUDIO_PRODUCT = "gemiso-live-studio";
/** 목록 최대치(서버 기본 20 · 최대 100, product 필터 후 기준). */
const LIMIT = 100;

export type ReleaseUpdateType = "major" | "feature" | "patch";

export type Release = {
  /** 버전 — 예: "26.1.0" */
  version: string;
  /** 표시 이름 — "Gemiso Live Studio {version}" */
  title: string;
  updateType: ReleaseUpdateType;
  /** 배포일(YYYY-MM-DD, KST) */
  publishedAt: string;
  /** 릴리스 노트 항목(영문). "[분류] 내용" 형식이면 분류를 태그로 표시한다. 비어 있으면 숨긴다. */
  notes: string[];
  /** 설치 파일 크기(바이트) — 다운로드 항목 값 우선. */
  sizeBytes: number | null;
  /** 설치 파일 경로(절대 HTTPS URL, 받은 그대로 사용). 회수된 버전 · 다운로드 정보 없음이면 null. */
  downloadUrl: string | null;
  /** 회수(다운로드 중지)된 버전 */
  downloadDisabled: boolean;
  /** 회수 사유(영문) */
  disabledReason: string | null;
};

export type ReleasesResult =
  | { status: "ok"; releases: Release[] }
  /** 409 download_disabled — Bora 측에서 다운로드를 닫은 상태(릴리스 노트는 표시). */
  | { status: "closed"; releases: Release[] }
  | { status: "error" };

/** API 응답 항목(사용하는 필드만). 릴리스 노트 · 다운로드 항목 공통. */
type ApiItem = {
  version: string;
  updateType?: string;
  publishedAt?: string;
  notesEn?: string | null;
  sizeBytes?: number | null;
  downloadUrl?: string | null;
  downloadDisabled?: boolean;
  disabledReasonEn?: string | null;
};

const UPDATE_TYPES: ReleaseUpdateType[] = ["major", "feature", "patch"];

function url(path: string) {
  return `${API_BASE}${path}?product=${LIVE_STUDIO_PRODUCT}&limit=${LIMIT}`;
}

/** 줄 단위 텍스트 → 항목 배열. 앞머리 - * • 를 떼고 빈 줄은 버린다. */
function toLines(text?: string | null) {
  return (text ?? "")
    .split("\n")
    .map((l) => l.trim().replace(/^[-*•]\s*/, ""))
    .filter(Boolean);
}

function toRelease(note: ApiItem | undefined, dl: ApiItem | undefined): Release {
  const base = (dl ?? note)!;
  const type = (dl?.updateType ?? note?.updateType) as ReleaseUpdateType;
  const disabled = dl?.downloadDisabled === true;
  return {
    version: base.version,
    title: `Gemiso Live Studio ${base.version}`,
    updateType: UPDATE_TYPES.includes(type) ? type : "patch",
    publishedAt: dl?.publishedAt ?? note?.publishedAt ?? "",
    notes: toLines(note?.notesEn),
    sizeBytes: dl?.sizeBytes ?? note?.sizeBytes ?? null,
    downloadUrl: disabled ? null : dl?.downloadUrl ?? null,
    downloadDisabled: disabled,
    disabledReason: disabled ? dl?.disabledReasonEn?.trim() || null : null,
  };
}

type Fetched<T> = { ok: true; data: T } | { ok: false; closed?: boolean };

async function getJson<T>(path: string): Promise<Fetched<T>> {
  try {
    const res = await fetch(url(path));
    if (res.status === 409) {
      const body = (await res.json().catch(() => null)) as { code?: string } | null;
      return { ok: false, closed: body?.code === "download_disabled" };
    }
    if (!res.ok) return { ok: false };
    return { ok: true, data: (await res.json()) as T };
  } catch {
    return { ok: false };
  }
}

/**
 * 릴리스 노트 목록과 다운로드 목록을 함께 받아 버전으로 합친다(최신순).
 * 브라우저에서 호출한다(클라이언트 컴포넌트의 useEffect).
 */
export async function fetchLiveStudioReleases(): Promise<ReleasesResult> {
  const [notesRes, dlRes] = await Promise.all([
    getJson<{ items?: ApiItem[] }>("/api/release-notes"),
    getJson<{ product?: string; items?: ApiItem[] }>("/api/public/downloads"),
  ]);

  const closed = !dlRes.ok && dlRes.closed === true;
  if (!notesRes.ok && !dlRes.ok && !closed) return { status: "error" };

  const notes = notesRes.ok ? notesRes.data.items ?? [] : [];
  // product가 다르면(오타 · 서버 폴백) Bora Studio 목록일 수 있으므로 다운로드 정보를 버린다
  const dlMatches = dlRes.ok && dlRes.data.product === LIVE_STUDIO_PRODUCT;
  if (dlRes.ok && !dlMatches) {
    console.warn(`[live-studio] unexpected downloads product: ${dlRes.data.product}`);
  }
  const downloads = dlMatches && dlRes.ok ? dlRes.data.items ?? [] : [];

  const noteBy = new Map(notes.map((n) => [n.version, n]));
  const dlBy = new Map(downloads.map((d) => [d.version, d]));
  // 두 목록 모두 최신순 — 다운로드 목록 순서를 우선하고, 노트에만 있는 버전을 뒤에 붙인 뒤 날짜로 정렬
  const versions = [...new Set([...downloads.map((d) => d.version), ...notes.map((n) => n.version)])];
  const releases = versions
    .map((v) => toRelease(noteBy.get(v), dlBy.get(v)))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return { status: closed ? "closed" : "ok", releases };
}
