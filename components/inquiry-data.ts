/**
 * 문의 폼 데이터 — 고객지원 페이지(/support) 문의 폼의 단일 소스.
 *
 * 백엔드는 구글폼이다: 별도 서버 없이 브라우저에서 구글폼의
 * formResponse 엔드포인트로 POST하면 응답이 구글폼(연결된 스프레드시트)에
 * 그대로 쌓인다. 정적 사이트(output: "export")에서도 동작한다.
 *
 * 주의: entry ID와 선택형 옵션의 `value` 문자열은 구글폼 정의와
 * 바이트 단위로 일치해야 한다(일부 옵션은 이중 공백 포함 — 다르면
 * 해당 항목이 접수되지 않는다). 화면 표시는 `label`을 쓴다.
 * 구글폼 필드를 수정하면 이 파일의 ID·옵션도 함께 갱신할 것.
 */

const FORM_ID = "1FAIpQLSfnc3SXzc5kPrc_--P7fm2qXZmnNZ_eyqIFE3TvgY4KyHc9jg";

/** 구글폼 제출 엔드포인트. */
export const INQUIRY_FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

/** 구글폼 필드별 entry ID. */
export const INQUIRY_ENTRY = {
  /** 고객사명 */
  company: "entry.1074900279",
  /** 담당자 성함 (필수) */
  name: "entry.245811556",
  /** 연락처 (전화번호) */
  phone: "entry.726976256",
  /** 이메일 주소 (필수) */
  email: "entry.1891017430",
  /** 관심 있는 솔루션 분야 (체크박스, 복수) */
  solutions: "entry.422132355",
  /** 솔루션 도입 희망 시기 (객관식) */
  timeline: "entry.1350514734",
  /** 문의 상세 내용 (장문) */
  message: "entry.1634809982",
  /** 우리 서비스를 어떻게 알게 되셨나요? (드롭다운) */
  referral: "entry.1824020655",
} as const;

/** 선택형 옵션 한 개 — label은 화면 표시용, value는 구글폼 제출용 원본. */
export type InquiryOption = {
  label: string;
  value: string;
};

/** 관심 있는 솔루션 분야 (복수 선택). */
export const INQUIRY_SOLUTIONS: InquiryOption[] = [
  { label: "Media Asset Management — Proxima", value: "Media Asset Management — Proxima" },
  { label: "Newsroom — Zodiac", value: "Newsroom — Zodiac" },
  { label: "Automated Playout — Talos", value: "Automated Playout — Talos" },
  // 현재 미취급 솔루션 — 숨김. 복구하려면 주석을 해제한다.
  // { label: "Radio — Emotion", value: "Radio — Emotion" },
  { label: "Audio File System — Winner S", value: "Audio File System — Winner S" },
  { label: "AI Technology — MAIA", value: "AI Technology — MAIA" },
  { label: "Content Archive — MYMY", value: "Content Archive — MYMY" },
  { label: "Content Distribution — G-SAM", value: "Content Distribution — G-SAM" },
];

/** 솔루션 도입 희망 시기 (단일 선택). */
export const INQUIRY_TIMELINES: InquiryOption[] = [
  { label: "As soon as possible", value: "As soon as possible" },
  { label: "Within 1 month", value: "Within 1 month" },
  { label: "Within 3 months", value: "Within 3 months" },
  { label: "Not decided · gathering information", value: "Not decided · gathering information" },
];

/** 우리 서비스를 알게 된 경로 (드롭다운). */
export const INQUIRY_REFERRALS: InquiryOption[] = [
  { label: "Search engine (Google, etc.)", value: "Search engine (Google, etc.)" },
  { label: "Social media ads", value: "Social media ads" },
  { label: "Referral", value: "Referral" },
  { label: "Existing business partner", value: "Existing business partner" },
  { label: "Other", value: "Other" },
];
