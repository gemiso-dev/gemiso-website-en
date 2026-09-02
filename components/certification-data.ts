/**
 * 인증 현황 데이터 — 회사소개 > 인증 현황 페이지(/certification)의 단일 소스.
 * 디자인(Gemiso Certification KR)의 콘텐츠를 그대로 옮겨온 것.
 *
 * GS 인증(한국정보통신기술협회·TTA)과 보유 특허를 한 곳에서 관리한다.
 * 새 인증/특허가 추가되면 해당 배열에 항목을 더하면 된다.
 */

/** 히어로 상단 요약 지표. */
export const CERT_STATS: { v: string; k: string }[] = [
  { v: "5", k: "GS Certifications, Grade 1" },
  { v: "2", k: "Registered Patents" },
  { v: "Grade 1", k: "Highest GS Certification Grade" },
  { v: "TTA", k: "Certified by the Telecommunications Technology Association" },
];

/** GS 인증(1등급) 솔루션 목록. */
export type GsCert = {
  /** 솔루션·버전명 (예: "프록시마 V6.0") */
  name: string;
  /** 분류 한 줄 (예: "AI 콘텐츠 관리 솔루션") */
  cat: string;
  /** 모노 태그 (예: AI MAM, ARCHIVE) */
  tag: string;
  /** 인증서 이미지 경로(/assets/certification/...) — basePath 없이 기록 */
  img: string;
};

export const GS_CERTS: GsCert[] = [
  {
    name: "Proxima V6.0",
    cat: "AI Content Management Solution",
    tag: "AI MAM",
    img: "/assets/certification/gs-proxima-v6.jpg",
  },
  {
    name: "MYMY v3.0",
    cat: "Content Archive",
    tag: "ARCHIVE",
    img: "/assets/certification/gs-mymy-v3.jpg",
  },
  {
    name: "Proxima v3.0",
    cat: "Media Asset Management",
    tag: "MAM",
    img: "/assets/certification/gs-proxima-v3.jpg",
  },
  {
    name: "Ariel Image Archive v1.0",
    cat: "Image Archive",
    tag: "ARCHIVE",
    img: "/assets/certification/gs-ariel-image-archive.jpg",
  },
  {
    name: "Ariel GPU Transcoder V1.0",
    cat: "GPU Transcoding",
    tag: "TRANSCODE",
    img: "/assets/certification/gs-ariel-gpu-transcoder.jpg",
  },
];

/** 보유 특허 목록. */
export type Patent = {
  /** 모노 번호 라벨 (예: "PATENT 01") */
  no: string;
  /** 상태 배지 (예: "등록") */
  status: string;
  /** 특허 명칭 */
  title: string;
  /** 한 줄 설명 */
  desc: string;
  /** 특허증 이미지 경로(/assets/certification/...) — basePath 없이 기록 */
  img: string;
};

export const PATENTS: Patent[] = [
  {
    no: "PATENT 01",
    status: "Registered",
    title: "Data Structure and Transmission Method Thereof",
    desc: "Foundational technology for media data structure design and efficient transmission — the basis of our MXF-based file transfer.",
    img: "/assets/certification/patent-01.jpg",
  },
  {
    no: "PATENT 02",
    status: "Registered",
    title:
      "Data Processing Apparatus and Method for Implementing a Server Providing Specific Functions Such as Editing During Recording",
    desc: "A data processing apparatus and method for implementing a server that provides functions such as editing simultaneously with recording.",
    img: "/assets/certification/patent-02.jpg",
  },
];
