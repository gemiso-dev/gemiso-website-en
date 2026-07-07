/**
 * 솔루션 데이터 — 개별 솔루션 상세 페이지(/solutions/[slug])의 단일 소스.
 * 디자인(Gemiso Solution KR)의 6개 솔루션 콘텐츠를 그대로 옮겨온 것.
 */

/** 히어로 목업 종류 — 솔루션 성격에 맞는 장식 패널을 고른다. */
export type SolutionMockType =
  | "grid" // 미디어 자산 그리드
  | "rundown" // 뉴스 큐시트
  | "schedule" // 송출 스케줄
  | "waveform" // 라디오 멀티트랙
  | "ai"; // AI 자막/메타데이터

export type Solution = {
  /** URL 슬러그 = 해시 식별자 */
  id: string;
  /** 제품 코드(모노 캡션) */
  code: string;
  /** 제품명 */
  name: string;
  /** 한글 분류명 */
  ko: string;
  /** 카테고리 라벨 */
  cat: string;
  /** 메뉴·푸터 내비게이션용 짧은 분류 라벨(예: "자산 관리"). */
  short: string;
  /** 솔루션 탭에서 강조할 때 코드 옆에 붙는 배지(예: "AI"). 있으면 탭이 강조 스타일이 된다. */
  badge?: string;
  mock: SolutionMockType;
  /** 히어로에 쓸 실제 제품 스크린샷 경로(있으면 mock 대신 표시). asset()로 감싼다. */
  image?: string;
  tagline: string;
  desc: string;
  trust: string;
  stats: { v: string; k: string }[];
  features: { t: string; d: string; ai?: boolean; mark?: string }[];
  workflow: string[];
  specs: { k: string; v: string }[];
  /** 도입 고객 마키(있으면 가로 스크롤 섹션 표시). */
  clients?: string[];
  /** 기능 상세 섹션 제목(없으면 "다섯 개의 엔진, 하나의 {name}." 기본값). */
  detailsHeading?: string;
  /** 핵심 기능 상세 설명(있으면 이미지와 함께 모듈별 상세 섹션 표시). */
  details?: {
    /** 모듈 코드(모노 캡션) — 예: "MAIA Video" */
    code: string;
    /** 모듈 제목 */
    title: string;
    /** 영문 부제(모노) */
    sub: string;
    /** 한 문단 설명 */
    desc: string;
    /** 세부 기능 목록 */
    points: string[];
    /** 모듈 스크린샷 경로. asset()로 감싼다. 없으면 mock 목업으로 대체. */
    image?: string;
    /** 세로형(모바일 등) 스크린샷 — 폭을 좁게 제한하고 가운데 정렬한다. */
    imageNarrow?: boolean;
    /** 스크린샷이 없을 때 표시할 목업 종류(없으면 솔루션 기본 mock 사용). */
    mock?: SolutionMockType;
    /** 헤더 → 번호 기능 리스트 사이 간격을 넓게(항목별 예외). */
    wideGap?: boolean;
  }[];
};

export const SOLUTIONS: Solution[] = [
  {
    id: "proxima",
    code: "PROXIMA",
    name: "Proxima",
    ko: "Media Asset Management",
    cat: "Media Asset Management · MAM",
    short: "Asset Management",
    mock: "grid",
    image: "/assets/solutions/proxima/main.png",
    tagline: "Manage the Full Media Asset Lifecycle",
    desc: "Proxima manages the entire media pipeline from the moment content arrives — from ingest and transcoding to storage, analysis, and distribution — all in one system developed through Geminisoft's own R&D.",
    trust: "In production at broadcasters and government agencies in Korea and abroad",
    stats: [
      { v: "Under 10 min", k: "Proxy generation for 1 hour of video" },
      { v: "Korea's first", k: "Web browser-based MAM (2006)" },
    ],
    features: [
      { t: "Versatile Media Ingest", d: "Supports multiple ingest paths — video servers, DeckLink IO boards, file ingest, and automated watch-folder monitoring." },
      { t: "Automatic Proxy Transcoding", d: "Automatically generates high-compression, low-resolution proxies for lightweight preview anywhere, with GPU acceleration to cut transcoding time." },
      { t: "Automatic Cataloging", d: "Detects scene changes to extract key frames and storyboards, and attaches metadata at the segment level." },
      { t: "Web-Based Unified Search", d: "Find assets in a web interface as intuitive as a search engine, then double-click to play or edit instantly. No installation required." },
      { t: "Dynamic Metadata Schema", d: "Administrators define content types and metadata to fit each site, and new fields become searchable the moment they are added." },
      { t: "Native NLE Integration", d: "Plugins for Adobe Premiere, Final Cut Pro, and EDIUS send finished edits straight into the MAM." },
      { t: "AI Analysis Integration", d: "Connects to Geminisoft's MAIA AI to analyze video and generate captions and metadata from STT and object recognition.", ai: true },
      { t: "Secure Storage & Archive", d: "Archives to LTO and ODA via the LTFS-based IMArchive, and reduces ransomware risk with object storage." },
    ],
    workflow: ["Ingest", "Proxy & Transcode", "Cataloging", "Search & Metadata", "Production Integration", "Archive & Distribution"],
    specs: [
      { k: "INGEST", v: "Video servers · DeckLink · File · Watch folders" },
      { k: "TRANSCODE", v: "High-compression proxy · GPU acceleration (AMD EPYC · Intel Xeon · NVIDIA)" },
      { k: "NLE", v: "Adobe Premiere · Final Cut Pro · EDIUS" },
      { k: "ARCHIVE", v: "LTFS · LTO · ODA · DIVArchive · StorNext · BlackPearl" },
      { k: "STORAGE", v: "NAS · SAN · iSCSI · AWS S3 · Object storage" },
      { k: "AI", v: "Vision AI · STT (Naver · Google · Amazon) · Machine translation" },
      { k: "DEPLOY", v: "On-premises · Hybrid cloud" },
    ],
    detailsHeading: "Six stages, one Proxima",
    details: [
      {
        code: "PROXIMA Ingest",
        title: "Media Ingest",
        sub: "Media Ingest",
        desc: "The workflow begins the moment media arrives. Proxima takes in media through every path — video servers, files, and automated watch folders.",
        points: [
          "Versatile ingest modules — supports commercial video servers, DeckLink IO boards, file ingest, and automated watch-folder monitoring.",
          "Timeline-based ingest — monitor recordings in progress in real time on a timeline view.",
          "Ingest automation — detects files arriving in watch folders and triggers the ingest workflow automatically.",
        ],
        mock: "schedule",
        image: "/assets/solutions/proxima/ingest.png",
      },
      {
        code: "PROXIMA Transcode",
        title: "Proxy & Transcoding",
        sub: "Proxy & Transcoding",
        desc: "Full-resolution masters are too large to play smoothly in a browser and strain the network. The automatic transcoder creates high-compression, low-resolution proxies for lightweight preview anywhere.",
        points: [
          "Automatic proxy generation — creates a proxy for one hour of video in under 10 minutes.",
          "GPU acceleration — speeds up transcoding 7 to 12 times on AMD EPYC, Intel Xeon, and NVIDIA GPU environments, cutting the time to 5–9 minutes.",
          "Format conversion — converts a wide range of source formats into broadcast and distribution formats.",
        ],
        mock: "grid",
        image: "/assets/solutions/proxima/proxy.png",
      },
      {
        code: "PROXIMA Catalog",
        title: "Cataloging",
        sub: "Cataloging",
        desc: "Automatically detects scene changes to structure video, and attaches metadata to each segment — turning footage into searchable assets.",
        points: [
          "Scene change detection & key frames — extracts key frames at scene changes or set intervals to build storyboards.",
          "Segment metadata — enter and manage metadata at the scene-segment level.",
          "Automated AI analysis — analyzes video with Google and Amazon Vision AI to generate metadata automatically.",
        ],
        mock: "ai",
        image: "/assets/solutions/proxima/catalog.png",
      },
      {
        code: "PROXIMA Search",
        title: "Search & Metadata",
        sub: "Search & Metadata",
        desc: "Find assets in a web interface as intuitive as any search engine. In 2006, Proxima launched as Korea's first web browser-based MAM.",
        points: [
          "Web-based search — double-click a result to play it instantly, then view and edit its metadata.",
          "Dynamic metadata schema — administrators define field types such as text, tree, checkbox, date, and number, and new fields become searchable immediately.",
          "No installation — runs in standard browsers (Chrome, Firefox, Safari, Edge) on Windows, macOS, and Linux alike.",
        ],
        mock: "grid",
        image: "/assets/solutions/proxima/search.png",
      },
      {
        code: "PROXIMA Edit",
        title: "Production Integration",
        sub: "NLE Integration",
        desc: "Plugins for the major editing systems send finished edits straight into the MAM — no separate tools required.",
        points: [
          "NLE plugins — available for Adobe Premiere, Apple Final Cut Pro, and Grass Valley EDIUS.",
          "Custom panels — search MAM assets and upload finished cuts directly from the editing panel.",
          "File-based workflow — exchange media with editing systems seamlessly at the file level.",
        ],
        mock: "grid",
        image: "/assets/solutions/proxima/integration.jpg",
      },
      {
        code: "PROXIMA Archive",
        title: "Archive & Storage",
        sub: "Archive & Storage",
        desc: "Keep media safe for the long term. The LTFS-based IMArchive writes to tape, while workflows automate storage tiering and backup.",
        points: [
          "IMArchive — archives to LTO and ODA on an LTFS foundation, with checksum verification, a RESTful API, and integration with third-party solutions (DIVArchive, StorNext, BlackPearl).",
          "Broad storage support — works with NAS, SAN, and iSCSI file storage plus AWS S3 and object storage, reducing ransomware risk with object storage.",
          "Automated backup & access control — automates backups through workflows and governs access with Active Directory and Open Directory.",
        ],
        mock: "rundown",
        image: "/assets/solutions/proxima/archive.avif",
      },
    ],
  },
  {
    id: "zodiac",
    code: "ZODIAC",
    name: "Zodiac",
    ko: "Newsroom",
    cat: "Newsroom · NRCS",
    short: "Newsroom",
    mock: "rundown",
    image: "/assets/solutions/zodiac/main.png",
    tagline: "From Planning to Playout, All in One Newsroom",
    desc: "Zodiac manages the full TV news production workflow in a single system — from planning and reporting to script writing, rundown creation, and playout automation. Across desktop and mobile, it keeps every step connected through to on-air.",
    trust: "Deployed at MBC, YTN, KTV, TBS, cpbc, Arirang TV, and more",
    stats: [
      { v: "PC & Mobile", k: "Identical working environment" },
      { v: "MOS", k: "Standard protocol integration" },
    ],
    features: [
      { t: "News Planning & Issue Management", d: "Organize and prioritize daily issues, carry them through planning, coverage, and story stages, and manage assignment and vehicle schedules alongside." },
      { t: "Story Writing & Desk Approval", d: "Supports story types from standard to breaking news, automatically estimates run time from story length, and handles desk approval." },
      { t: "Rundown", d: "Drag stories into place, reorder them, and see running time and item counts tallied in real time." },
      { t: "Video & Graphics Integration", d: "Search and preview video and graphics in the MAM, request edits, and map finished material to stories." },
      { t: "Playout Automation", d: "Controls video servers, CG, and prompters to take the rundown to air exactly as built, reflecting rundown changes in real time." },
      { t: "Mobile Newsroom", d: "Reporters in the field write and manage stories, search video, and check rundowns from their phones." },
      { t: "AI Analysis Integration", d: "Connects to Geminisoft's MAIA AI to analyze video and generate captions and metadata from STT and object recognition.", ai: true },
    ],
    workflow: ["Planning", "Coverage", "Story Writing", "Desk Approval", "Rundown", "Playout"],
    specs: [
      { k: "INTEGRATION", v: "MOS · BIS · MAM" },
      { k: "PLAYOUT", v: "Video servers (VDCP) · CG · Prompter" },
      { k: "VIDEO SERVER", v: "Harmonic · Imagine · GrassValley K2" },
      { k: "CLIENT", v: "Desktop · Mobile (Android · iOS) · Web" },
      { k: "DEPLOY", v: "On-premises · Cloud" },
    ],
    detailsHeading: "Five stages, one Zodiac",
    details: [
      {
        code: "ZODIAC Planning",
        title: "News Planning",
        sub: "News Planning",
        desc: "The planning stage: organize daily issues, review incoming tips, and build the coverage schedule. Selected issues and content plans convert directly into stories.",
        points: [
          "Issue management — create, search, and prioritize daily issue lists for use across planning, coverage, and story stages.",
          "Expired issue handling — issues past their deadline are automatically retired from the planning stage.",
          "Coverage & vehicle scheduling — assign camera crews and dispatch and manage news vehicles by time period.",
        ],
        image: "/assets/solutions/zodiac/planning.png",
      },
      {
        code: "ZODIAC Article",
        title: "Story Management & Writing",
        sub: "Article Management",
        desc: "The story management stage: write stories and scripts in a standard editor, attach video and graphics, and carry them through desk approval.",
        points: [
          "Multiple story types — supports standard and breaking news, with embargo settings, automatic run-time estimation from story length, and keyboard-shortcut writing.",
          "Story locking — prevents conflicting edits when multiple users open the same story, and locks held by unresponsive editors can be released.",
          "Video & graphics integration — search and preview MAM assets, request edits via EDL, and map finished material to stories.",
        ],
        image: "/assets/solutions/zodiac/article.png",
      },
      {
        code: "ZODIAC Cuesheet",
        title: "Rundown Building & Editing",
        sub: "Cuesheet & Rundown",
        desc: "The rundown stage: drag stories into place to build the rundown, with running time and item counts tallied in real time.",
        points: [
          "Drag-and-drop building — drag stories into position, reorder them, and watch duration and item counts update in real time.",
          "Scheduling integration (BIS) — manage master, weekly, and daily schedules, and build the newscast against the confirmed daily schedule.",
          "Mobile rundown — check rundowns in mobile Zodiac (creation and changes are primarily on PC).",
        ],
        image: "/assets/solutions/zodiac/cuesheet.png",
      },
      {
        code: "ZODIAC Playout",
        title: "News Playout Automation",
        sub: "Broadcast Automation",
        desc: "The playout automation stage: takes the rundown and controls video servers, CG, and prompters to put stories on air in order, reflecting rundown changes in real time.",
        points: [
          "Video playout (Video Taker) — controls Harmonic, Imagine, and GrassValley K2 (VDCP) video servers for playback and preview, and handles last-minute running-order changes.",
          "CG playout (CG Taker) — automatically builds a caption rundown from story captions and links it to on-air templates (Visual Research, Compix, and more).",
          "Prompter & MOS integration — streams rundown and story content to the prompter in real time, and connects to external systems over the MOS protocol.",
        ],
        image: "/assets/solutions/zodiac/playout.png",
      },
      {
        code: "ZODIAC Mobile",
        title: "Mobile Newsroom",
        sub: "Mobile Newsroom",
        desc: "A mobile system that delivers the same news production capabilities as the PC — anytime, anywhere.",
        points: [
          "Mobile-first UI — a dedicated mobile interface with icons and color coding for at-a-glance readability.",
          "Story writing & video search — write and manage stories in the field and search for the footage you need.",
          "Cross-platform — supports both Android and iOS.",
        ],
        image: "/assets/solutions/zodiac/mobile.png",
        imageNarrow: true,
      },
    ],
  },
  {
    id: "talos",
    code: "TALOS",
    name: "TALOS",
    ko: "Automated Playout",
    cat: "Automated Playout · APC (Automation Playout Controller)",
    short: "Playout",
    mock: "schedule",
    image: "/assets/solutions/talos/sec.png",
    tagline: "Automated playout that never stops",
    desc: "TALOS receives schedules — or lets you build them — and controls video servers and other playout equipment to put content on air in order. From broadcasters to playout service providers, corporate channels, and YouTube Live, it automates playout without interruption.",
    trust: "On air at major Korean channels",
    stats: [
      { v: "Multi-channel", k: "Simultaneous automated playout" },
      { v: "Dual & triple", k: "Redundant, uninterrupted playout" },
    ],
    features: [
      { t: "Software Master Switcher", d: "PCS plays media without a hardware switcher, handling CG and logo keyers, audio mixing, and recording — all on one screen." },
      { t: "Schedule Integration", d: "Receives schedules from a scheduling system or lets you build them directly, then expands them into playout events." },
      { t: "Flexible Output Formats", d: "SDI output as standard, with optional RTMP, UDP, SRT, RTP, and RTSP streaming outputs." },
      { t: "Uninterrupted Redundancy", d: "DCS maintains its own event queue so playout continues even if the upstream controller fails, with dual and triple redundant configurations." },
      { t: "Multi-Channel Timeline Monitoring", d: "SEC and MCC monitor up to four channels at once on a timeline, so faults are caught and handled fast." },
      { t: "Flexible Configuration", d: "Deploys to fit your environment, from all-in-one (CIAB) to the traditional split architecture used by broadcasters." },
    ],
    workflow: ["Schedule Reception", "Event Preparation (SEC)", "Device Control (DCS)", "Playback & Playout (PCS)", "Multi-Channel Monitoring (MCC)"],
    specs: [
      { k: "MODULES", v: "PCS · DCS · SEC · MCC" },
      { k: "OUTPUT", v: "SDI · RTMP · UDP · SRT · RTP · RTSP" },
      { k: "RECORDING", v: "MXF · MP4" },
      { k: "REDUNDANCY", v: "Dual & triple redundancy · Persistent event queue" },
      { k: "CONFIG", v: "All-in-one (CIAB) · Split (Traditional)" },
      { k: "INTEGRATION", v: "Scheduling · Video servers · Routers · Graphics" },
    ],
    detailsHeading: "Four modules, one TALOS",
    details: [
      {
        code: "TALOS PCS",
        title: "Playback Control",
        sub: "Playback Controller System",
        desc: "The playout engine — a software-based master switcher that plays media. It supports most broadcast formats and handles CG and logo keyers, audio mixing, and recording on one screen.",
        points: [
          "Software master switcher — plays and switches media without a separate hardware switcher.",
          "Keyers & audio mixing — supports keyers for CG and logo overlay, audio mixing, and MXF/MP4 recording.",
          "Flexible outputs — SDI as standard, with optional RTMP, UDP, SRT, RTP, and RTSP streaming.",
        ],
        image: "/assets/solutions/talos/pcs.png",
      },
      {
        code: "TALOS DCS",
        title: "Device Control",
        sub: "Device Control Server",
        desc: "The server that controls playout equipment — switchers, video servers, routers, and graphics. It maintains its own event queue, so playout continues even if the upstream controller (SEC) fails.",
        points: [
          "Unified device control — controls switchers, video servers, routers, and graphics systems together.",
          "Persistent event queue — holds scheduled events in its own queue so playout never stops, even during an SEC failure.",
          "Dual & triple configurations — supports redundant configurations for reliability.",
        ],
        image: "/assets/solutions/talos/dcs.png",
      },
      {
        code: "TALOS SEC",
        title: "Schedule Control",
        sub: "Schedule Event Controller",
        desc: "The controller that receives schedules, prepares events, and provides the operator monitoring screen. It watches up to four channels at once on a timeline.",
        points: [
          "Schedule reception & event preparation — takes in the schedule and expands it into playout events.",
          "Timeline monitoring — view up to four channels simultaneously on a timeline.",
          "Event grouping — bundles related events such as titles, commercials, and programs for at-a-glance management.",
        ],
        image: "/assets/solutions/talos/sec.png",
      },
      {
        code: "TALOS MCC",
        title: "Multi-Channel Monitoring",
        sub: "Multi Channel Controller",
        desc: "The monitoring and control tool that brings the status of every running channel onto one timeline view. In multi-channel operations, faults are identified and handled fast.",
        points: [
          "All channels on one screen — see the status of every running channel at once.",
          "Timeline status display — shows each channel's progress in a timeline format.",
          "Rapid fault response — detects and responds to anomalies quickly across multi-channel environments.",
        ],
        image: "/assets/solutions/talos/mcc.png",
      },
    ],
  },
  {
    id: "emotion",
    code: "EMOTION",
    name: "Emotion",
    ko: "Radio",
    cat: "Radio Production & Playout",
    short: "Radio",
    mock: "waveform",
    image: "/assets/solutions/emotion/track.png",
    tagline: "Radio without hardware lock-in",
    desc: "Emotion is an integrated radio broadcasting solution built for working radio producers and technical directors. Six modules connect the entire chain — recording and production, live broadcast, automated playout, monitoring, and quality control.",
    trust: "An integrated solution distilled from 40+ years of radio operations expertise",
    stats: [
      { v: "30%+", k: "Reduction in editing time" },
      { v: "40+ years", k: "Radio operations expertise" },
    ],
    features: [
      { t: "Emotion Track — Recording & Production", d: "Record, edit, and produce audio in multitrack, with support for diverse input formats, high-quality conversion, and third-party effect plugins." },
      { t: "Emotion Live — Live Production", d: "Manage studio playout playlists through an intuitive interface, with audio content search, CD ripping, and a main/spare architecture." },
      { t: "Emotion Fly — Automated Playout", d: "Receives playlists and plays audio automatically through the PGM switcher, with real-time waveform monitoring and error alarms." },
      { t: "Emotion Sysflow — System Monitoring", d: "Monitors system health in real time and detects failovers and equipment faults. In emergencies, automatic music keeps dead air off the airwaves." },
      { t: "Emotion QC — Quality Control", d: "Automatically verifies broadcast files for defects, with triple-server consistency checks and waveform pre-listening.", mark: "QC" },
      { t: "Emotion Web — Web-Based Management", d: "Manage users, programs, folders, and task assignments from the web, with system usage monitoring and producer request handling." },
    ],
    workflow: ["Recording & Production", "Live Scheduling", "Quality Check (QC)", "Automated Playout", "Monitoring"],
    specs: [
      { k: "MODULES", v: "Track · Live · Fly · Sysflow · QC · Web" },
      { k: "EDITING", v: "Multitrack · Third-party effect plugins" },
      { k: "PLAYOUT", v: "Automated · Live · PGM switcher integration" },
      { k: "REDUNDANCY", v: "Main/spare redundancy · Triple-server consistency" },
      { k: "PLATFORM", v: "Software (hardware-independent) · Network scalability" },
    ],
    detailsHeading: "Six modules, one Emotion",
    details: [
      {
        code: "Emotion Track",
        title: "Recording & Production",
        sub: "Recording Production",
        desc: "The core production software for multitrack audio recording, editing, and production. It runs free of hardware lock-in and supports diverse input formats with high-quality conversion.",
        points: [
          "Multitrack recording & editing — produce programs while handling multiple tracks reliably.",
          "Diverse input formats & high-quality conversion — takes in a range of source formats and converts them to broadcast quality.",
          "Third-party effect plugins — integrate external audio effect plugins for post-processing.",
          "Network scalability — a hardware-independent architecture that scales the working environment across the network.",
        ],
        image: "/assets/solutions/emotion/track.png",
      },
      {
        code: "Emotion Live",
        title: "Live Production",
        sub: "Live Production",
        desc: "Live production software for managing studio playout playlists. An intuitive editing interface lets you rework the lineup quickly, even while the show is on air.",
        points: [
          "Playlist management — build studio playlists and operate them in real time.",
          "Intuitive editing interface — edit items quickly, even during a live broadcast.",
          "Audio content search & CD ripping — find the material you need instantly and bring CDs into the digital library.",
          "Main/spare architecture — a main and spare configuration keeps live broadcasts stable.",
        ],
        image: "/assets/solutions/emotion/live.png",
      },
      {
        code: "Emotion Fly",
        title: "Automated Playout",
        sub: "Playout Automation",
        desc: "Playout software that receives playlists and plays audio automatically through the PGM switcher. Real-time waveform monitoring and error alarms keep you safely on air.",
        points: [
          "Playlist reception & automatic playback — receives the scheduled list and plays it out at exactly the right moment.",
          "PGM switcher integration — outputs audio through the program switcher.",
          "Real-time waveform monitoring — watch the playout signal as a live waveform.",
          "Multiple redundancy & error alarms — redundancy options and an error alarm system keep playout uninterrupted.",
        ],
        image: "/assets/solutions/emotion/fly.png",
      },
      {
        code: "Emotion Sysflow",
        title: "System Monitoring",
        sub: "System Control",
        desc: "Monitoring software that watches the broadcast system in real time, detecting failures and equipment faults. In emergencies, automatic music playout keeps dead air off the airwaves.",
        points: [
          "Real-time health monitoring — see the state of the entire system at a glance.",
          "Failover & fault detection — detects equipment faults and failovers across temperature, power, modules, and more.",
          "Emergency automatic music — plays music automatically during an outage to prevent dead air.",
        ],
        image: "/assets/solutions/emotion/sysflow.png",
      },
      {
        code: "Emotion QC",
        title: "Quality Control",
        sub: "Quality Control",
        desc: "Quality control software that automatically verifies broadcast files for defects. It checks consistency across the triple-server setup and supports waveform pre-listening.",
        points: [
          "Automatic file verification — determines whether broadcast files are defect-free, automatically.",
          "Triple-server consistency check — verifies that files match across multiple servers.",
          "Waveform pre-listening — review content by waveform before it goes to air.",
        ],
        image: "/assets/solutions/emotion/qc.png",
      },
      {
        code: "Emotion Web",
        title: "Web-Based Management",
        sub: "Web Management",
        desc: "A unified management tool for administering users, programs, folders, and task assignments from the web. Monitor system usage and handle producer requests in one place.",
        points: [
          "User, program & folder management — manage your organization and content structure from the web.",
          "Task assignment — assign production tasks and track their progress.",
          "Usage monitoring & producer requests — view system usage and handle producer requests.",
        ],
        image: "/assets/solutions/emotion/web.png",
      },
    ],
  },
  {
    id: "winner-s",
    code: "WINNER S",
    name: "Winner S",
    ko: "Audio File System",
    cat: "Audio File System",
    short: "Audio File System",
    mock: "waveform",
    image: "/assets/solutions/winner-s/chain.png",
    tagline: "An audio file system optimized for the digital era",
    desc: "Winner S is an audio file system optimized for digital operations, built on networking and a high-capacity database. It organizes programs, broadcast material, commercials, and music in a database, and connects the entire audio broadcast chain — production, scheduling, commercials, live broadcast, automated playout, and monitoring — across nine workstations.",
    trust: "A digital audio file system built on networking and a high-capacity database",
    stats: [
      { v: "Up to 32 channels", k: "Multichannel audio editing" },
      { v: "Main/spare", k: "Redundant, uninterrupted playout" },
    ],
    features: [
      { t: "Launcher — Integrated Terminal", d: "The unified entry point that launches the audio file system quickly, with permission-based user login, access control, and announcements." },
      { t: "Winner Chain — Automated Playout (APC)", d: "Receives the daily schedule and plays out broadcasts automatically. Audio router integration switches channels automatically, and main/spare redundancy adds reliability." },
      { t: "Winner Live — Live On-Air", d: "A rundown-driven live broadcast workstation, with automatic loading of scheduled commercials, emergency broadcast, fast material and music search, and drag-and-drop." },
      { t: "Winner Recording — Production", d: "A production workstation that unifies recording and editing, with up to 32-channel multichannel, unlimited undo, dual monitors, and automatic remaining-time calculation while editing." },
      { t: "Winner Manager — Scheduling", d: "Create and manage weekly and daily schedules, with commercial data registration, per-program rundowns, recording-file checks, and per-user editing permissions." },
      { t: "Winnerwave — NLE Editing", d: "A non-linear audio editor that handles WAV, MP3, MP2, WMA, ASF, FLAC, and more, with audio extraction from video and editing beyond 32 channels." },
      { t: "Winner CF — Commercials", d: "Manage commercials systematically through an intuitive UI, with fast material search by advertiser or title, daily commercial schedule search and printing, and synchronization with the playout program." },
      { t: "Winner Music Bank — Music Bank", d: "A light, simple audio archive, with CD ripping, organized management by album, artist, and genre, and basic audio editing." },
      { t: "Winner Watch — Integrated Alerts", d: "Monitors the broadcast status of every workstation and the APC on one screen, raising alarms on system failure and managing operations in real time with log analysis.", mark: "Monitoring" },
    ],
    workflow: ["Production & Recording", "Scheduling", "Commercial Registration", "Live On-Air", "Automated Playout", "Integrated Monitoring"],
    specs: [
      { k: "MODULES", v: "Launcher · Chain · Live · Recording · Manager · Winnerwave · CF · Music Bank · Watch" },
      { k: "PLAYOUT", v: "APC automated playout · Automatic audio router channel switching" },
      { k: "EDITING", v: "Multichannel (up to 32) · Unlimited undo · Sound-card independent" },
      { k: "FORMAT", v: "WAV · MP3 · MP2 · WMA · ASF · FLAC, and more" },
      { k: "REDUNDANCY", v: "Main/spare redundancy (High Availability)" },
      { k: "MONITORING", v: "Integrated alerts (Winner Watch) · Log analysis" },
    ],
    detailsHeading: "Nine workstations, one Winner S",
    details: [
      {
        code: "WINNER S Launcher",
        title: "Integrated Terminal",
        sub: "Integrated Terminal",
        desc: "The unified entry point that launches every workstation in the audio file system from one place, controlling access by permission and delivering announcements.",
        points: [
          "Quick launch — start audio file system programs easily and quickly.",
          "Permission-based login — user login with access control by permission level.",
          "Announcements — delivers operational notices to workstations.",
        ],
        image: "/assets/solutions/winner-s/launcher.png",
      },
      {
        code: "WINNER S Chain",
        title: "Automated Playout (APC)",
        sub: "Automatic Program Control",
        desc: "The playout workstation that receives the daily schedule and puts broadcasts to air automatically. It switches channels through the audio router and stays uninterrupted with main/spare redundancy.",
        points: [
          "Automated daily playout — plays out broadcasts from the schedule, notifying users of schedule changes and updating automatically.",
          "Audio router integration — switches and monitors channels automatically.",
          "Redundancy & playout supervision — a main/spare configuration delivers High Availability, with pre-air material supervision, alarms, and waveform verification.",
        ],
        image: "/assets/solutions/winner-s/chain.png",
      },
      {
        code: "WINNER S Live",
        title: "Live On-Air",
        sub: "Live On-Air",
        desc: "The workstation for running live broadcasts from the rundown. It loads scheduled commercials automatically and supports emergency broadcast and fast material search.",
        points: [
          "Rundown-driven operation — scheduled commercials load automatically when the rundown is opened.",
          "Emergency broadcast — a standby emergency broadcast capability for the unexpected.",
          "Fast search & drag-and-drop — find material and music quickly, with mouse drag-and-drop and automatic high-quality audio conversion.",
        ],
        image: "/assets/solutions/winner-s/live.png",
      },
      {
        code: "WINNER S Recording",
        title: "Production",
        sub: "Recording & Production",
        desc: "A production workstation that unifies recording and editing. It handles multichannel audio and keeps production stable with robust recovery.",
        points: [
          "Multichannel production — record and edit in the audio editor and save as schedule material (up to 32 channels; 6 recommended).",
          "Live integration & dual monitors — integrates with the live broadcast program and supports dual-monitor setups.",
          "Automatic remaining-time calculation & unlimited undo — calculates remaining time automatically while editing, with unlimited undo for powerful recovery.",
        ],
        image: "/assets/solutions/winner-s/recording.png",
      },
      {
        code: "WINNER S Manager",
        title: "Scheduling",
        sub: "Scheduling",
        desc: "The workstation for creating and managing weekly and daily broadcast schedules. Register commercial data and build per-program rundowns.",
        points: [
          "Weekly & daily scheduling — create and manage schedules, registering commercial data and placing it per program.",
          "Rundowns & recording checks — create and view per-program rundowns, and flag whether recording files are present.",
          "Schedule error flagging & permissions — highlights scheduling errors and sets editing permissions per user.",
        ],
        image: "/assets/solutions/winner-s/manager.png",
      },
      {
        code: "WINNER S Winnerwave",
        title: "Audio Editing (NLE)",
        sub: "Non-Linear Editor",
        desc: "A non-linear editor for audio production. It handles a wide range of formats, edits multichannel audio, and is independent of the sound card.",
        points: [
          "Wide format support — supports WAV, MP3, MP2, WMA, ASF, FLAC, and more, and extracts audio from video.",
          "Multichannel editing & sharing — edit beyond 32 channels and share your edits.",
          "Sound-card independence & recovery — runs regardless of sound card and recovers robustly from unexpected errors.",
        ],
        image: "/assets/solutions/winner-s/recording.png",
      },
      {
        code: "WINNER S CF",
        title: "Commercials",
        sub: "Commercial Management",
        desc: "The workstation for systematic commercial management. Find material fast through an intuitive UI and stay synchronized with the playout program.",
        points: [
          "Fast material search — find commercial material quickly by advertiser or title.",
          "Daily commercial scheduling — search and print the daily commercial schedule, with notifications to staff when it changes.",
          "Playout sync & billing — synchronizes with the playout program, with enhanced ad-fee calculation.",
        ],
        image: "/assets/solutions/winner-s/manager.png",
      },
      {
        code: "WINNER S Music Bank",
        title: "Music Bank",
        sub: "Audio Archive",
        desc: "A light, simple audio archive program. Rip audio from CDs and keep it organized.",
        points: [
          "CD ripping — extracts audio from CDs into the library.",
          "Organized management — organizes tracks by album, artist, and genre.",
          "Simple environment & editing — basic audio editing in a straightforward interface.",
        ],
        image: "/assets/solutions/winner-s/musicbank.png",
      },
      {
        code: "WINNER S Watch",
        title: "Integrated Alerts",
        sub: "Integrated Monitoring",
        desc: "The monitoring workstation that watches the broadcast status of every workstation and the APC on one screen, raising alarms on failure and analyzing logs.",
        points: [
          "Integrated monitoring — supervise the broadcast status of every workstation and the APC on a single screen.",
          "Failure alarms — sounds an alarm when a system failure occurs.",
          "Log analysis — analyzes logs to manage system health in real time.",
        ],
        image: "/assets/solutions/winner-s/watch.png",
      },
    ],
  },
  {
    id: "maia",
    code: "MAIA",
    name: "MAIA",
    ko: "AI Technology",
    cat: "Media AI Engine · Media AI Agent",
    short: "AI",
    badge: "AI",
    mock: "ai",
    image: "/assets/solutions/maia/video.png",
    tagline: "The AI engine suite built for broadcast",
    desc: "MAIA (Media AI Agent) is a unified engine that analyzes video, speech, faces, on-screen text, and prompting with AI — turning vast media libraries into searchable assets.",
    trust: "On-premises deployment — your content never leaves the facility",
    stats: [
      { v: "116+ classes", k: "Automatic object detection" },
      { v: "On-premises", k: "Content stays in your facility" },
    ],
    features: [
      { t: "MAIA Video — Scene Understanding", d: "Segments video into frames, shots, and scenes, then converts each scene's content into text stored as searchable metadata.", ai: true },
      { t: "MAIA Speech — Speech Recognition (STT)", d: "Multiple STT engines — Google, Amazon, Naver Clova, Whisper — plus speaker diarization turn every utterance into searchable text.", ai: true },
      { t: "MAIA Face — Face Recognition", d: "Automatically extracts and clusters people in video, then finds every appearance of a person across the entire archive from a single photo.", ai: true },
      { t: "MAIA Character — Text Recognition (OCR)", d: "Detects on-screen text — captions, lower thirds, CG — and indexes it in searchable form.", ai: true },
      { t: "MAIA Object — Object Recognition", d: "Detects 133 object classes and generates structured metadata for video at the scene level.", ai: true },
      { t: "MAIA Prompter — AI Prompter", d: "AI matches the presenter's voice to the script in real time and scrolls automatically. No dedicated operator required.", ai: true },
      { t: "Natural-Language Unified Search", d: "Unifies face, object, STT, and scene data so you can search the archive in everyday language.", ai: true },
    ],
    workflow: ["Ingest", "AI Analysis (Video · Speech · Face · Text)", "Metadata & Indexing", "Natural-Language Search", "Use & Reuse"],
    specs: [
      { k: "MODULES", v: "Video · Speech · Face · Character · Prompter" },
      { k: "STT", v: "Google · Amazon · Naver Clova · Whisper · Daglo" },
      { k: "VISION", v: "Scene segmentation · 116+ object classes · OCR · Face recognition" },
      { k: "SEARCH", v: "Unified natural-language search across faces, objects, STT, and scenes" },
      { k: "DEPLOY", v: "On-premises · Cloud SaaS · Hybrid" },
    ],
    details: [
      {
        code: "MAIA Video",
        title: "Scene Recognition",
        sub: "Scene Change Detection",
        desc: "AI automatically segments video into frames, shots, and scenes, organizing each segment into structured metadata. It runs on-premises, so your content never leaves the facility.",
        points: [
          "Object detection — classifies and auto-tags more than 116 classes — people, vehicles, animals, backgrounds — using panoptic segmentation.",
          "Video summaries & scene descriptions — generative AI writes a human-readable description for every scene.",
          "Natural-language search — unifies face, object, STT, and scene data so you can search the archive in everyday language.",
        ],
        image: "/assets/solutions/maia/video.png",
      },
      {
        code: "MAIA Speech",
        title: "Speech Recognition (STT)",
        sub: "Speech-to-Text",
        desc: "Every word spoken on air becomes searchable text — automatically, accurately, and in real time.",
        points: [
          "Multi-engine STT hub — choose from Google, Amazon Transcribe, Naver Clova, OpenAI Whisper, and Daglo.",
          "Speaker diarization — identifies who said what, and when, with timecode.",
          "Keyword search within captions jumps straight to edit points, with AI caption editing, automatic summaries, and caption file downloads.",
          "Deploy as cloud SaaS (usage-based billing) or fully on-premises with Whisper.",
        ],
        image: "/assets/solutions/maia/speech.png",
      },
      {
        code: "MAIA Face",
        title: "Face Recognition",
        sub: "Face Recognition",
        desc: "Find every appearance of an on-air talent across the entire archive in seconds, not hours.",
        points: [
          "Automatic face extraction — detects faces via landmark analysis and clusters the same person automatically.",
          "Image-based search — upload a single photo and instantly find every matching appearance.",
          "Person timelines — shows each person's appearances on a shot-level visual timeline.",
        ],
        image: "/assets/solutions/maia/face.png",
      },
      {
        code: "MAIA Character",
        title: "Text Recognition (OCR)",
        sub: "OCR Detection",
        desc: "Automatically detects, indexes, and searches lower thirds, channel chyrons, and on-screen graphic text.",
        points: [
          "Full-frame analysis mode — detects every text region on screen automatically, with no setup.",
          "Region-select mode — drag to define regions of interest and extract text from exactly the areas you want.",
          "Supports multiple languages — Korean, English, Chinese, Japanese, and more — across a wide range of fonts.",
        ],
        image: "/assets/solutions/maia/character.png",
      },
      {
        code: "MAIA Prompter",
        title: "AI Prompter",
        sub: "AI-Powered Live Prompting",
        desc: "A prompter that listens to the presenter, matches their speech to the script in real time, and scrolls automatically.",
        points: [
          "Real-time voice matching — analyzes the presenter's speech and tracks the script position automatically.",
          "No operator required — scrolls fully automatically, with no dedicated staff.",
          "Deploys on-premises or in the cloud (including Whisper Live).",
        ],
        image: "/assets/solutions/maia/prompter.png",
      },
    ],
  },
  {
    id: "mymy",
    code: "MYMY",
    name: "MYMY",
    ko: "Content Archive",
    cat: "Content Management System · CMS",
    short: "Archive",
    mock: "grid",
    image: "/assets/solutions/mymy.png",
    tagline: "The content you need, the moment you need it",
    desc: "Keep video, images, and documents organized in one place, and find the content you want instantly — by metadata, AI semantic search, STT captions, and more.",
    trust: "Powering the modernization of the KBS content archive",
    stats: [
      { v: "70%", k: "Reduction in search time" },
      { v: "Multi-mode search", k: "Metadata · AI · STT · Map" },
    ],
    features: [
      { t: "Unified Archive", d: "Manage every kind of media — video, audio, images, and documents (HWP, PPT, DOC, XLS) — in a single space." },
      { t: "Metadata Search", d: "Explore and find the content you want instantly, filtered by any combination of conditions." },
      { t: "Standards-Based Metadata", d: "A standard metadata schema based on KS X ISO 15836 (Dublin Core) and DCMI Terms, with code lists (valueListCode), keeps you aligned with national metadata standards." },
      { t: "AI Semantic Search", d: "Find semantically similar content using natural language.", ai: true },
      { t: "STT Caption Search", d: "Automatically transcribes speech into captions, then searches them down to the exact position.", ai: true },
      { t: "Face-Recognition People Management", d: "Identifies people in content with face recognition, and manages per-person appearance frequency, similarity, and biographical metadata.", ai: true },
      { t: "Relationship Graph", d: "Visualizes the connections between content so you can explore related assets by following the links." },
      { t: "Collaboration & Communication", d: "Group content into collections to share, exchange feedback in comments, and work together as a team." },
      { t: "External Authentication & SSO", d: "Integrates with OIDC and SAML identity providers (Google Workspace, Microsoft Entra ID, Okta, and more) for hybrid authentication alongside local login." },
      { t: "Groups & Permissions", d: "Manage user groups and control content permissions precisely with per-category access restrictions (ACL)." },
      { t: "Audit Logging", d: "Records every activity — content views, edits, downloads, and tool calls — for secure traceability and accountability.", mark: "Security" },
      { t: "REST API Integration", d: "An OpenAPI (Swagger) REST API connects content and metadata with external systems and automates your workflows." },
      { t: "AI Agent Collaboration", d: "Through MCP (Model Context Protocol), external AI agents such as Claude perform search, retrieval, and metadata tasks directly.", ai: true },
    ],
    workflow: ["Register & Store", "Metadata & Classification", "Search & Explore", "Review", "Workflow & Distribution"],
    specs: [
      { k: "SEARCH", v: "Metadata · AI semantic · STT captions · Map" },
      { k: "METADATA", v: "KS X ISO 15836 (Dublin Core) · DCMI Terms" },
      { k: "GRAPH", v: "Content relationship graph" },
      { k: "STORAGE", v: "Multi-storage — S3, local, and more" },
      { k: "DOCUMENT", v: "HWP · PPT · DOC · XLS, and more" },
      { k: "AUTOMATION", v: "Workflows · Webhooks · API" },
      { k: "AI AGENT", v: "MCP integration — Claude Code · Desktop, and more" },
    ],
    clients: [
      "KBS",
      "Korea Deposit Insurance Corporation",
      "Uiseong County",
      "Broadcast AI Dataset",
      "Korea Student Aid Foundation",
      "MBC Chungbuk",
      "Yangju City",
      "Youngnak Church",
    ],
  },
  {
    id: "g-sam",
    code: "G-SAM",
    name: "G-SAM",
    ko: "Content Distribution",
    cat: "Social Platform Content Distribution",
    short: "Content Distribution",
    mock: "schedule",
    image: "/assets/solutions/g-sam/main.png",
    tagline: "One piece of content, every channel",
    desc: "G-SAM is a distribution solution that publishes and manages one piece of content across multiple social platforms — YouTube, Facebook, Instagram, X (Twitter), and TikTok. From scheduled publishing to playlist and caption management, analytics, and archiving, it connects the entire multi-channel operation.",
    trust: "1 Source Multi-Use — register once, publish to every channel",
    stats: [
      { v: "1 Source", k: "Multi-Use multi-platform distribution" },
      { v: "Multi-channel", k: "YouTube · Facebook · Instagram · X · TikTok" },
    ],
    features: [
      { t: "Unified Social Distribution", d: "Publish one piece of content to multiple social platforms at once — YouTube, Facebook, Instagram, X (Twitter), and TikTok." },
      { t: "Scheduled Publishing & Status Monitoring", d: "Schedule content for automatic publishing, monitor distribution status in real time, and bulk-edit metadata." },
      { t: "Distribution Schedule Management", d: "Publishes content automatically at the scheduled time, with daily, weekly, and monthly schedules and progress visible at a glance." },
      { t: "YouTube Playlist & Caption Management", d: "View, create, and edit playlists, and serve metadata — titles, descriptions — and captions in multiple languages." },
      { t: "Analytics Dashboard", d: "Brings channel, video, and revenue statistics into one dashboard for an at-a-glance view of operations and performance." },
    ],
    workflow: ["Content Ingest", "Metadata Setup", "Scheduled Publishing", "Multi-Platform Distribution", "Analytics", "Archive"],
    specs: [
      { k: "SNS", v: "YouTube · Facebook · Instagram · X (Twitter) · TikTok" },
      { k: "SCHEDULE", v: "Daily · Weekly · Monthly scheduled publishing" },
      { k: "ANALYTICS", v: "Channel · Video · Revenue dashboards" },
      { k: "METADATA", v: "Multilingual metadata · Captions · Playlist management" },
    ],
    detailsHeading: "Four capabilities, one G-SAM",
    details: [
      {
        code: "G-SAM Deploy",
        title: "Multi-Platform Distribution",
        sub: "Multi-Platform Distribution",
        desc: "One piece of content, published to multiple social platforms at once — the 1 Source Multi-Use approach. G-SAM adapts to each platform's formats and features automatically.",
        points: [
          "Social platform integration — publishes content to YouTube, Facebook, Instagram, X (Twitter), and TikTok.",
          "Platform-specific features — YouTube caption and playlist management, and split video publishing for Instagram and X.",
          "Bulk metadata editing — update titles, descriptions, and other metadata across multiple items at once.",
        ],
        image: "/assets/solutions/g-sam/deploy.png",
      },
      {
        code: "G-SAM Schedule",
        title: "Distribution Schedule Management",
        sub: "Distribution Schedule",
        desc: "Publishes content automatically at the scheduled time, with daily, weekly, and monthly schedule views that keep operations on a steady rhythm.",
        points: [
          "Scheduled publishing — publishes content automatically at the time you set.",
          "Schedule views — see the distribution schedule at a glance by day, week, or month.",
          "Status monitoring — track in-progress distributions in real time.",
        ],
        image: "/assets/solutions/g-sam/schedule.png",
      },
      {
        code: "G-SAM Analytics",
        title: "Analytics",
        sub: "Analytics & Statistics",
        desc: "Brings channel, video, and revenue statistics into a single dashboard — from subscriber, view, and watch-time trends to revenue analysis, every metric your operation needs.",
        points: [
          "Unified dashboard — view channel operations and performance on one screen.",
          "Channel & video statistics — analyze growth metrics such as subscribers, views, and watch time, plus per-video engagement.",
          "Revenue analysis — analyze channel revenue and compare trends over time.",
        ],
        image: "/assets/solutions/g-sam/analytics.png",
      },
      {
        code: "G-SAM Archive",
        title: "Archive Management",
        sub: "Archive Management",
        desc: "Tracks the history of published content and keeps it systematically stored, so your assets stay reliably managed.",
        points: [
          "Distribution history — trace when and to which platform each item was published.",
          "Content storage & ownership — keep internally registered content organized, stored, and managed.",
        ],
        image: "/assets/solutions/g-sam/archive.png",
        wideGap: true,
      },
    ],
  },
];

/** generateStaticParams / 링크에서 쓰는 슬러그 목록. */
export const SOLUTION_SLUGS = SOLUTIONS.map((s) => s.id);

/** 헤더/푸터 내비게이션에서 쓰는 솔루션 드롭다운 링크 목록(순서는 SOLUTIONS 기준). */
export const SOLUTION_NAV = SOLUTIONS.map((s) => ({
  label: `${s.name} · ${s.short}`,
  href: `/solutions/${s.id}/`,
}));

/** 슬러그로 솔루션 하나를 찾는다(없으면 undefined). */
export function getSolution(id: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.id === id);
}
