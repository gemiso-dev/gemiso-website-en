"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  fetchLiveStudioReleases,
  type Release,
  type ReleasesResult,
  type ReleaseUpdateType,
} from "@/components/live-studio-releases-data";

const TYPE_LABEL: Record<ReleaseUpdateType, string> = {
  major: "Major release",
  feature: "Feature update",
  patch: "Patch",
};

function formatSize(bytes: number) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function formatDate(iso: string) {
  // yyyy-MM-dd(KST) 날짜 그대로 — 시간대 변환으로 하루 밀리지 않게 UTC로 고정
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** "[분류] 내용" → { tag, text } */
function splitNote(note: string) {
  const m = note.match(/^\[([^\]]+)\]\s*(.*)$/);
  return m ? { tag: m[1], text: m[2] } : { tag: null, text: note };
}

function isAvailable(r: Release) {
  return !r.downloadDisabled && !!r.downloadUrl;
}

function Meta({ release }: { release: Release }) {
  return (
    <p className="lsd-meta">
      {release.publishedAt && <span>{formatDate(release.publishedAt)}</span>}
      <span>{TYPE_LABEL[release.updateType]}</span>
      {release.sizeBytes != null && <span>{formatSize(release.sizeBytes)}</span>}
    </p>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M2.5 13.5h11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 릴리스 노트 팝업 — ESC · 배경 클릭으로 닫고, 열려 있는 동안 배경 스크롤을 잠근다. */
function ReleaseNotesDialog({
  release,
  canDownload,
  onClose,
}: {
  release: Release;
  canDownload: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div className="lsd-dialog" onClick={onClose}>
      <div
        // 포털로 body에 렌더되어 페이지의 .gem-dark 밖에 있으므로 다크 토큰을 직접 적용
        className="lsd-dialog__panel gem-dark"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lsd-dialog-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lsd-dialog__head">
          <div>
            <span className="lsd-dialog__eyebrow">Release notes</span>
            <h3 id="lsd-dialog-title" className="lsd-dialog__title">
              {release.title}
            </h3>
            <Meta release={release} />
          </div>
          <button
            type="button"
            className="lsd-dialog__close"
            aria-label="Close"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 5 19 19 M19 5 5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ul className="lsd-notes">
          {release.notes.map((n) => {
            const { tag, text } = splitNote(n);
            return (
              <li key={n} className="lsd-notes__item">
                {tag && <span className="lsd-notes__tag">{tag}</span>}
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
        {canDownload && isAvailable(release) && (
          <div className="lsd-dialog__foot">
            <a href={release.downloadUrl!} className="gem-btn gem-btn--primary lsd-btn">
              <DownloadIcon />
              Download {release.version}
            </a>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}

/**
 * 릴리스 노트 · 버전별 다운로드 — Bora 공개 API를 브라우저에서 호출한다.
 * 메인 버튼 = 다운로드 가능한 첫 버전. 없으면(26.1.0 출시 전 포함) "Coming soon"으로 비활성.
 */
export default function LiveStudioDownloads() {
  const [result, setResult] = useState<ReleasesResult | null>(null);
  const [open, setOpen] = useState<Release | null>(null);

  useEffect(() => {
    let alive = true;
    fetchLiveStudioReleases().then((r) => alive && setResult(r));
    return () => {
      alive = false;
    };
  }, []);

  if (result?.status === "error") {
    return (
      <div className="lsd">
        <p className="lsd-status">
          We couldn&apos;t load the release information. Please try again later or{" "}
          <Link href="/support/#inquiry">contact us</Link>.
        </p>
      </div>
    );
  }

  const loading = result === null;
  const releases = result?.releases ?? [];
  const closed = result?.status === "closed";
  const canDownload = !closed;
  const mainRelease = canDownload ? releases.find(isAvailable) : undefined;
  // 카드에 보여 줄 버전 — 다운로드 가능한 첫 버전, 없으면 최신 버전
  const featured = mainRelease ?? releases[0];
  const others = releases.filter((r) => r !== featured);

  const mainLabel = loading
    ? "Loading…"
    : closed
      ? "Downloads temporarily unavailable"
      : releases.length === 0
        ? "Coming soon"
        : "Download unavailable";

  return (
    <div className="lsd">
      <div className="lsd-latest" aria-busy={loading}>
        <div className="lsd-latest__info">
          {featured ? (
            <>
              <span className="lsd-badge">Latest</span>
              <h3 className="lsd-latest__title">{featured.title}</h3>
              <Meta release={featured} />
              {featured.notes.length > 0 && (
                <ul className="lsd-latest__highlights">
                  {featured.notes.slice(0, 3).map((n) => (
                    <li key={n}>{splitNote(n).text}</li>
                  ))}
                </ul>
              )}
              {featured.disabledReason && (
                <p className="lsd-reason">{featured.disabledReason}</p>
              )}
            </>
          ) : (
            <>
              {!loading && <span className="lsd-badge">Coming soon</span>}
              <h3 className="lsd-latest__title">Gemiso Live Studio</h3>
              <p className="lsd-latest__lead">
                {loading
                  ? "Checking for the latest release…"
                  : "The first release is on its way. Download and release notes will appear here once it's available."}
              </p>
            </>
          )}
        </div>
        <div className="lsd-latest__actions">
          {mainRelease ? (
            <a href={mainRelease.downloadUrl!} className="gem-btn gem-btn--primary lsd-btn">
              <DownloadIcon />
              Download for Windows
            </a>
          ) : (
            <button type="button" className="gem-btn gem-btn--primary lsd-btn" disabled>
              {mainLabel}
            </button>
          )}
          {featured && featured.notes.length > 0 && (
            <button
              type="button"
              className="gem-btn gem-btn--outline lsd-btn"
              onClick={() => setOpen(featured)}
            >
              Release notes
            </button>
          )}
          <span className="lsd-latest__req">Windows 10/11 (64-bit)</span>
        </div>
      </div>

      {others.length > 0 && (
        <div className="lsd-list">
          <h3 className="lsd-list__title">Previous versions</h3>
          {others.map((r) => (
            <div key={r.version} className="lsd-row">
              <span className="lsd-row__version">{r.version}</span>
              <div className="lsd-row__meta">
                <Meta release={r} />
                {r.disabledReason && <p className="lsd-reason">{r.disabledReason}</p>}
              </div>
              <div className="lsd-row__actions">
                {r.notes.length > 0 && (
                  <button type="button" className="lsd-link" onClick={() => setOpen(r)}>
                    Release notes
                  </button>
                )}
                {canDownload && isAvailable(r) ? (
                  <a
                    href={r.downloadUrl!}
                    className="lsd-link lsd-link--download"
                    aria-label={`Download ${r.title}`}
                  >
                    <DownloadIcon />
                    Download
                  </a>
                ) : (
                  <button
                    type="button"
                    className="lsd-link lsd-link--download"
                    disabled
                    aria-label={`${r.title} download unavailable`}
                  >
                    <DownloadIcon />
                    Unavailable
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="lsd-note">
        A license is required to run Gemiso Live Studio. After installing,{" "}
        <Link href="/support/#inquiry">contact us</Link> to request your license.
      </p>

      {open && (
        <ReleaseNotesDialog
          release={open}
          canDownload={canDownload}
          onClose={() => setOpen(null)}
        />
      )}
    </div>
  );
}
