/**
 * 연혁 데이터 — 회사소개 > 연혁 페이지(/history)의 단일 소스.
 * 디자인(Gemiso History KR)의 타임라인 콘텐츠를 그대로 옮겨온 것.
 *
 * ── 갱신 방법 ──────────────────────────────────────────────────────────
 * 연혁은 계속 갱신된다. 데이터는 "오래된 → 최신" 순(연대순)으로 둔다.
 *   · 새 이정표가 생기면: 해당 시대(era)의 items 배열 "맨 끝"에 추가한다.
 *   · 새로운 시대 구간이 열리면: HISTORY_ERAS 배열 "맨 끝"에 era를 추가한다.
 * 페이지에서 최신순(역순)으로 뒤집어 렌더링하고, 점/연결선/번호 같은
 * 파생 값은 컴포넌트가 계산하므로 여기서는 신경 쓸 필요가 없다.
 *
 * 굵은 점(major)은 설립·특허·인증·핵심 제품처럼 강조할 이정표에만 쓴다.
 */

/** 타임라인 한 줄(이정표). */
export type HistoryItem = {
  /** 연도 또는 연·월 (예: "2002.10", "2015") */
  year: string;
  /** 모노 캡션 태그 — 없으면 생략 (예: FOUNDED, PATENT, GLOBAL) */
  tag?: string;
  /** 강조 이정표면 true(굵은 점). 기본은 약한 점. */
  major?: boolean;
  /** 이정표 제목 */
  title: string;
  /** 한 줄 설명 */
  desc: string;
};

/** 연대 구간(시대) — 제목/요약 + 그 안의 이정표들. */
export type HistoryEra = {
  /** 구간 표기 (예: "2002 — 2007") */
  range: string;
  /** 구간 제목 */
  title: string;
  /** 구간 요약 */
  desc: string;
  /** 연대순(오래된 → 최신) 이정표 목록 */
  items: HistoryItem[];
};

/** 히어로 상단 요약 지표. */
export const HISTORY_STATS: { v: string; k: string }[] = [
  { v: "2002", k: "GEMISO founded" },
  { v: "20+ yrs", k: "Media engineering" },
  { v: "Grade 1 ×3", k: "GS certifications" },
  { v: "8+ countries", k: "Overseas deployments" },
  { v: "100+", k: "Core media engineers" },
];

/** 연대순(오래된 → 최신) 시대 목록. 페이지에서 역순으로 렌더링한다. */
export const HISTORY_ERAS: HistoryEra[] = [
  {
    range: "2002 — 2007",
    title: "Founding and First Solutions",
    desc: "Starting with a single focus on broadcast media software, we built the foundational technologies of digital archiving and asset management ourselves.",
    items: [
      {
        year: "2002.10",
        tag: "FOUNDED",
        major: true,
        title: "Founded GEMISO Co., Ltd.",
        desc: "We began developing digital media software for broadcasting.",
      },
      {
        year: "2002.12",
        tag: "PRODUCT",
        title: "Registered SANit storage management program",
        desc: "We registered our first product, a media storage management software.",
      },
      {
        year: "2003",
        tag: "PRODUCT",
        title: "Released SyncRobo · SANit Share",
        desc: "We began building out a lineup of media sync and sharing solutions.",
      },
      {
        year: "2006",
        tag: "PRODUCT",
        major: true,
        title: "Developed Ariel multimedia digital archive solution",
        desc: "We developed our own archive engine, Ariel, laying the foundation for our core products.",
      },
      {
        year: "2007",
        tag: "CLIENT",
        title: "Supplied archives to CJ Media Mnet · Samsung Electronics · Woori Bank",
        desc: "We expanded delivery of our digital archive solution to broadcasters and enterprises.",
      },
    ],
  },
  {
    range: "2008 — 2013",
    title: "Technology Independence and Research",
    desc: "We secured core technologies with patents, established a corporate R&D center, and expanded into news production and overseas markets.",
    items: [
      {
        year: "2008",
        tag: "PATENT",
        major: true,
        title: "Filed MXF transfer technology patent · Supplied MXF PFR to MBC",
        desc: "We secured proprietary media data structure and partial file restore (PFR) technologies.",
      },
      {
        year: "2008",
        tag: "PRODUCT",
        title: "Filed and registered Ariel trademark",
        desc: "We officially registered our flagship product brand, Ariel, as a trademark.",
      },
      {
        year: "2008.11",
        tag: "R&D",
        title: "Supplied Full 3D ingest · preview prototype to ETRI",
        desc: "We joined the Electronics and Telecommunications Research Institute (ETRI) in developing next-generation 3D media core technologies.",
      },
      {
        year: "2010.03",
        tag: "R&D",
        major: true,
        title: "Established corporate R&D center",
        desc: "We created a dedicated organization for ongoing research into media processing technology.",
      },
      {
        year: "2010.06",
        tag: "CLIENT",
        title: "Deployed EBS digital archive · NPS system",
        desc: "We deployed archive and networked production systems at public broadcaster EBS.",
      },
      {
        year: "2010",
        tag: "GLOBAL",
        title: "Deployed archive and MAM system at Thai PBS",
        desc: "We exported our first system to an overseas public broadcaster.",
      },
      {
        year: "2011",
        tag: "CLIENT",
        title: "Deployed Arirang TV newsroom system · YTN integrated news system",
        desc: "We expanded our business into news and newsroom production systems.",
      },
      {
        year: "2013",
        tag: "GLOBAL",
        title: "Deployed media asset management system at VNA (Vietnam)",
        desc: "We continued overseas deployments at the scale of a national news agency.",
      },
    ],
  },
  {
    range: "2014 — 2018",
    title: "Localization and Recognition",
    desc: "Partnering with global standards and earning official recognition for our technology, we expanded adoption across major broadcast networks and into overseas markets.",
    items: [
      {
        year: "2014.01",
        tag: "CLIENT",
        title: "Deployed Channel A Proxima archive · production NPS",
        desc: "We deployed archive and news production systems at general programming channel Channel A.",
      },
      {
        year: "2014.11",
        tag: "PARTNER",
        title: "Signed SONY ODA license agreement",
        desc: "We secured integration with Optical Disc Archive (ODA) technology.",
      },
      {
        year: "2015.07",
        tag: "AWARD",
        major: true,
        title: "Selected as a 'Hidden Champion' in broadcast equipment",
        desc: "The Korea Radio Promotion Association (RAPA) recognized our technology and market potential.",
      },
      {
        year: "2015",
        tag: "PATENT",
        title: "Filed patent for production asset management appliance",
        desc: "We filed an additional patent for a dedicated asset management appliance.",
      },
      {
        year: "2016",
        tag: "PRODUCT",
        title: "Developed MBC UHD archive · CJ O Shopping video server",
        desc: "We advanced our archive and playout technologies for the UHD era.",
      },
      {
        year: "2018",
        tag: "GLOBAL",
        major: true,
        title: "Expanded globally to TVB (Hong Kong) · Ethiopia · China",
        desc: "We broadened solution delivery to broadcasters across Asia and Africa.",
      },
    ],
  },
  {
    range: "2019 — 2022",
    title: "Platform and Quality Certification",
    desc: "Our flagship platform earned the highest national certification grade time after time, and we expanded our client base into entertainment and AI.",
    items: [
      {
        year: "2019.07",
        tag: "CERTIFIED",
        major: true,
        title: "Obtained GS certification Grade 1 for Proxima v3.0",
        desc: "Our flagship media asset management platform met the highest software quality grade.",
      },
      {
        year: "2019.12",
        tag: "MILESTONE",
        title: "Opened Gemiso Town (company housing)",
        desc: "We strengthened our foundation by providing company housing for our people.",
      },
      {
        year: "2020.04",
        tag: "CERTIFIED",
        major: true,
        title: "GS Grade 1 for Ariel GPU Transcoder · Image Archive",
        desc: "Our core media processing products earned Grade 1 certification one after another.",
      },
      {
        year: "2020",
        tag: "CLIENT",
        title: "Deployed content media management for Big Hit Entertainment",
        desc: "We extended our media management solutions into entertainment.",
      },
      {
        year: "2020",
        tag: "CLIENT",
        title: "Deployed CJ ENM integrated CMS · integrated archive",
        desc: "We built the unified content management and archive for CJ ENM, Korea's largest media group.",
      },
      {
        year: "2021",
        tag: "CLIENT",
        title: "Deployed Nam June Paik Art Center · MBC STT HUB · NATV NRCS",
        desc: "We diversified adoption into cultural and public institutions.",
      },
      {
        year: "2022",
        tag: "AI",
        major: true,
        title: "Developed SBS Premiere NLE AI plugin · SAM subtitle technology",
        desc: "We brought AI technology into editing and subtitling workflows in earnest.",
      },
    ],
  },
  {
    range: "2023 — 2026",
    title: "AI and Next-Generation Media",
    desc: "From next-generation news production and automated playout to AI training data — we are redrawing the standard for broadcast media management.",
    items: [
      {
        year: "2023",
        tag: "CLIENT",
        major: true,
        title: "Deployed Yonhap News TV next-generation news production system",
        desc: "We designed and built a next-generation news production environment from the ground up.",
      },
      {
        year: "2023",
        tag: "CLIENT",
        title: "Deployed integrated newsroom system (NRCS) for 16 regional MBC stations",
        desc: "We unified regional broadcasters nationwide on a single newsroom system.",
      },
      {
        year: "2023",
        tag: "GLOBAL",
        title: "Deployed MAM system at Paraguay's national TV",
        desc: "We continued overseas deployments with a South American public broadcaster.",
      },
      {
        year: "2024",
        tag: "CLIENT",
        major: true,
        title: "Deployed MBC next-generation production NPS · KBS automated disaster content playout",
        desc: "We built next-generation production and disaster playout systems for terrestrial broadcasters.",
      },
      {
        year: "2025.01",
        tag: "AI",
        major: true,
        title: "Built broadcast video AI training dataset for RAPA",
        desc: "We carried out a training data project for broadcast-domain AI.",
      },
      {
        year: "2025",
        tag: "PRODUCT",
        title: "Expanded MYMY content management solution · Developed SBS next-generation PDS",
        desc: "We extended MYMY to KTV, the Korea Student Aid Foundation, the Korea Deposit Insurance Corporation, and more.",
      },
      {
        year: "2026.01",
        tag: "PARTNER",
        title: "Signed NAVER Cloud MSP partnership",
        desc: "As a NAVER Cloud managed service partner, we laid the groundwork for cloud-based media business.",
      },
      {
        year: "2026.04",
        tag: "R&D",
        major: true,
        title: "Led national broadcast media R&D program 'My Media Platform Core Technology Development'",
        desc: "We lead a national R&D program with KETI and ETRI to develop persona-AI-based personalized media technology.",
      },
    ],
  },
];
