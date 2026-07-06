/**
 * 파트너 데이터 — 고객지원 > 파트너 페이지(/partners)의 단일 소스.
 * 디자인(Gemiso Partners KR)의 콘텐츠를 그대로 옮겨온 것.
 *
 * 기술 협력 / 얼라이언스·학회 / 산학 협력 세 그룹으로 나눠 관리한다.
 * 새 파트너가 추가되면 해당 그룹의 items 배열에 항목을 더하면 된다.
 */

/** 히어로 상단 요약 지표. */
export const PARTNER_STATS: { v: string; k: string }[] = [
  { v: "13", k: "Partner Companies" },
  { v: "7+ Countries", k: "Global Collaboration" },
  { v: "SRT", k: "International Standards Alliance" },
  { v: "Academia", k: "University Partnerships" },
];

/** 개별 파트너 항목. */
export type Partner = {
  /** 파트너명 */
  name: string;
  /** 분류 태그 (예: 공유 스토리지, 학회) */
  kind: string;
  /** 한 줄 설명 */
  desc: string;
  /** 표시용 도메인 (예: www.elecard.com) — href는 https://disp로 만든다 */
  disp: string;
  /** 로고 이미지 경로(basePath 없이 기록). 있으면 카드에 로고를 표시한다. asset()로 감싼다. */
  logo?: string;
};

/** 파트너 그룹(섹션). */
export type PartnerGroup = {
  /** 모노 머리말 (예: 기술 협력 · TECHNOLOGY) */
  eyebrow: string;
  /** 그룹 제목 */
  title: string;
  /** 그룹 설명 */
  desc: string;
  items: Partner[];
};

export const PARTNER_GROUPS: PartnerGroup[] = [
  {
    eyebrow: "TECHNOLOGY PARTNERS",
    title: "Global Technology Partnerships",
    desc: "We build world-class solutions together with leading media technology companies.",
    items: [
      {
        name: "Dynamic Drive Pool",
        kind: "Shared Storage",
        desc: "Shared storage (SAN) solutions for media production",
        disp: "www.ddpsan.com",
        logo: "/assets/partners/dynamic-drive-pool.png",
      },
      {
        name: "Elecard",
        kind: "Codec · Analysis",
        desc: "Video compression codecs and stream analysis technology",
        disp: "www.elecard.com",
        logo: "/assets/partners/elecard.png",
      },
      {
        name: "Masstech",
        kind: "Media Management",
        desc: "Cloud-based media asset management and archiving",
        disp: "www.masstech.com",
        logo: "/assets/partners/masstech.png",
      },
      {
        name: "Nablet",
        kind: "Codec SDK",
        desc: "Broadcast codecs and editing engine components",
        disp: "www.nablet.com",
        logo: "/assets/partners/nablet.png",
      },
      {
        name: "Bluefish444",
        kind: "I/O Hardware",
        desc: "Broadcast SDI video input/output hardware",
        disp: "www.bluefish444.com",
        logo: "/assets/partners/bluefish444.png",
      },
      {
        name: "Matrox",
        kind: "I/O · Encoding",
        desc: "Video capture and encoding hardware",
        disp: "www.matrox.com",
        logo: "/assets/partners/matrox.png",
      },
      {
        name: "Nanocosmos",
        kind: "Low-Latency Streaming",
        desc: "Ultra-low-latency live streaming technology",
        disp: "www.nanocosmos.de",
        logo: "/assets/partners/nanocosmos.png",
      },
      {
        name: "Solveig Multimedia",
        kind: "Editing SDK",
        desc: "Video trimming and editing SDKs",
        disp: "www.solveigmm.com",
        logo: "/assets/partners/solveig-multimedia.png",
      },
      {
        name: "Advance Digital Tech",
        kind: "Media Technology",
        desc: "Broadcast and media technology solutions partner",
        disp: "www.advancedigitaltech.com",
        logo: "/assets/partners/advance-digital-tech.png",
      },
    ],
  },
  {
    eyebrow: "ALLIANCES & SOCIETIES",
    title: "Standards and Academic Collaboration",
    desc: "We take part in international standards and academic research, helping shape the direction of technology.",
    items: [
      {
        name: "SRT ALLIANCE",
        kind: "Standards · Protocol",
        desc: "Global alliance driving the Secure Reliable Transport (SRT) standard",
        disp: "www.srtalliance.org",
        logo: "/assets/partners/srt-alliance.png",
      },
      {
        name: "Korean Institute of Broadcast and Media Engineers (KIBME)",
        kind: "Academic Society",
        desc: "Korea's leading academic society for broadcast and media engineering research",
        disp: "www.kibme.org",
        logo: "/assets/partners/kibme.png",
      },
    ],
  },
  {
    eyebrow: "ACADEMIA",
    title: "Industry-Academia Collaboration",
    desc: "We partner with universities to cultivate the next generation of media talent.",
    items: [
      {
        name: "Dong-Ah Institute of Media and Arts (DIMA)",
        kind: "Partner University",
        desc: "Industry-academia partner university nurturing broadcast and media talent",
        disp: "www.dima.ac.kr",
        logo: "/assets/partners/dima.png",
      },
      {
        name: "Seoul Media Institute of Technology (SMIT)",
        kind: "Partner Graduate School",
        desc: "Graduate school training media technology professionals",
        disp: "www.smit.ac.kr",
        logo: "/assets/partners/smit.png",
      },
    ],
  },
];
