/**
 * 상세 연혁 데이터 — 회사소개 > 연혁 > 상세 연혁 페이지(/history/detail)의 단일 소스.
 * 큐레이션된 [history-data.ts]와 달리, 2002년 설립 이후의 구축·개발·계약
 * 실적을 월 단위로 빠짐없이 담는다(기존 gemiso.co.kr/history의 전체 기록).
 *
 * ── 갱신 방법 ──────────────────────────────────────────────────────────
 * 데이터는 "오래된 → 최신" 순(연대순)으로 둔다.
 *   · 새 실적이 생기면: 해당 연도(year)의 items "맨 끝"에 추가한다.
 *   · 새 연도가 시작되면: HISTORY_DETAIL 배열 "맨 끝"에 연도 블록을 추가한다.
 * 페이지에서 최신순(역순)으로 뒤집어 렌더링한다.
 */

/** 한 해의 한 줄 실적. */
export type DetailItem = {
  /** 월 표기 (예: "10", "06") — 월이 특정되지 않은 실적은 생략한다. */
  month?: string;
  /** 실적 내용 */
  text: string;
};

/** 연도 블록 — 연도 + 그 해의 실적들(월 오름차순). */
export type DetailYear = {
  /** 연도 (예: "2002") */
  year: string;
  /** 그 해의 실적 목록(월 오름차순) */
  items: DetailItem[];
};

/** 연대순(오래된 → 최신) 상세 연혁. 페이지에서 역순으로 렌더링한다. */
export const HISTORY_DETAIL: DetailYear[] = [
  {
    year: "2002",
    items: [{ month: "10", text: "Founded GEMISO Co., Ltd." }],
  },
  {
    year: "2003",
    items: [{ month: "12", text: "Registered SANit program" }],
  },
  {
    year: "2004",
    items: [
      { month: "10", text: "Released SyncRobo V1.0" },
      { month: "12", text: "Released SANit Share V1.0" },
    ],
  },
  {
    year: "2005",
    items: [{ month: "02", text: "Released SyncRobo V1.4" }],
  },
  {
    year: "2006",
    items: [
      { month: "08", text: "Supplied production archive solution to CJ Media Mnet" },
      { month: "09", text: "Supplied digital archive solution to Woori Bank" },
      { month: "11", text: "Developed Ariel multimedia digital archive solution" },
    ],
  },
  {
    year: "2007",
    items: [
      { month: "03", text: "Deployed playout archive system at Samsung Electronics Gumi Plant 2" },
      { month: "06", text: "Deployed digital archive system at GS Gangnam Broadcasting" },
      { month: "07", text: "Deployed campus playout archive system at Dong-Ah Institute of Media and Arts" },
    ],
  },
  {
    year: "2008",
    items: [
      { month: "01", text: "Deployed video content management system at the Supreme Prosecutors' Office" },
      { month: "02", text: "Developed video investigation recording program for the Supreme Prosecutors' Office video content management system" },
      { month: "03", text: "Deployed weather broadcasting system at KBS" },
      { month: "06", text: "Filed patent for MXF data structure and transfer method; filed and registered Ariel trademark" },
      {
        month: "07",
        text: "Developed SGL FlashNet Connector and tape library management software for OBS",
      },
      { month: "08", text: "Supplied MXF PFR technology to MBC" },
      {
        month: "11",
        text: "Built and supplied real-time ingest and preview prototype for ETRI's broadcast-telecom convergence Full 3D reconstruction",
      },
    ],
  },
  {
    year: "2009",
    items: [
      { month: "01", text: "Deployed archiving lab CMS system at Korea National University of Arts (Future Education Preparation Group)" },
      { month: "02", text: "Supplied Ariel On-Air solution to etomato · Arte TV · Ontomato" },
      { month: "04", text: "Deployed MAM archive system at Daejeon Information & Culture Industry Promotion Agency" },
      { month: "06", text: "Deployed network MAM archive system at Areum Broadcasting Network (ABN)" },
      { month: "09", text: "Deployed video-recorded investigation system at the Supreme Prosecutors' Office" },
      {
        month: "10",
        text: "Deployed video storage and management system for ETRI's multi-view multi-camera system",
      },
      { month: "11", text: "Deployed broadcast content management system at the Supreme Prosecutors' Office" },
      { month: "12", text: "Deployed content management system at Seongnam City IPTV Expansion Center" },
    ],
  },
  {
    year: "2010",
    items: [
      {
        month: "03",
        text: "Deployed archive for the integrated digital broadcasting and education information support system at the Korea Army Academy at Yeongcheon",
      },
      { month: "04", text: "Established corporate R&D center" },
      { month: "06", text: "Deployed EBS digital archive and NPS system" },
      { month: "07", text: "Completed MBC iMNews video quality improvement project" },
      { month: "12", text: "Deployed digital data storage and management system at Eunpyeong District Office" },
    ],
  },
  {
    year: "2011",
    items: [
      { month: "01", text: "Rebuilt CJ O Shopping MAM" },
      { month: "03", text: "Deployed digital archive and MAM system at KNN (Busan Gyeongnam Broadcasting)" },
      { month: "07", text: "Deployed broadcast CMS at GS Home Shopping" },
      { month: "10", text: "Deployed broadcast CMS at Samsung Engineering" },
      { month: "12", text: "Deployed NPS system for MBC entertainment division" },
    ],
  },
  {
    year: "2012",
    items: [
      { month: "01", text: "Deployed broadcast CMS system at Seoul Cyber University" },
      { month: "05", text: "Deployed newsroom system at Arirang TV" },
      { month: "06", text: "Deployed media management system at Ulsan City Hall" },
      { month: "08", text: "Deployed archive system at Arirang TV" },
      { month: "11", text: "Deployed broadcast content management MAM system at JTV (Jeonju Broadcasting)" },
    ],
  },
  {
    year: "2013",
    items: [
      { month: "01", text: "Developed and deployed upgraded video encoding system for MBC online news" },
      { month: "02", text: "Deployed broadcast content management MAM system at KBN (KT's in-house broadcasting)" },
      { month: "03", text: "Supplied media asset management solution to Daekyo Kids TV" },
      { month: "05", text: "Supplied Ariel Rewrapper, PFR, and plug-in modules to KCA" },
      { month: "07", text: "Deployed media asset management system at VNA (Vietnam)" },
      { month: "11", text: "Deployed integrated news information system at YTN" },
    ],
  },
  {
    year: "2014",
    items: [
      { month: "01", text: "Deployed Channel A Proxima archive system" },
      { month: "04", text: "Signed SONY ODA license agreement" },
      { month: "07", text: "Developed accessibility subtitle broadcasting for SBS Plus · SBS Medianet" },
      {
        month: "09",
        text: "Developed and deployed operation system for the content standard management framework at EBS (Korea Educational Broadcasting System)",
      },
      { month: "10", text: "Deployed media asset management system at TBC (Daegu Broadcasting)" },
      { month: "11", text: "Deployed production NPS system at Channel A Sangam DDMC" },
    ],
  },
  {
    year: "2015",
    items: [
      { month: "07", text: "Deployed Proxima MAM system at Hyundai Motor Ulsan" },
      { month: "08", text: "Deployed asset management engine system at ROK Navy Headquarters" },
      { month: "09", text: "Deployed expanded MAM system at SBS Medianet" },
      {
        month: "11",
        text: "Filed patent for appliance device for broadcast production asset management systems",
      },
      { month: "12", text: "Selected as a 2015 'Hidden Champion' in broadcast equipment" },
    ],
  },
  {
    year: "2016",
    items: [
      { month: "05", text: "Deployed MAM system at ROK Navy Operations Command" },
      { month: "06", text: "Deployed video digitization and archive system for the Seoul Metropolitan Council" },
      { month: "08", text: "Deployed MAM system for KB Kookmin Bank HD upgrade project" },
      { month: "10", text: "Deployed GTV MAM system at Gyeonggi Provincial Government" },
      { month: "11", text: "Developed MBC news NPS MAM system" },
    ],
  },
  {
    year: "2017",
    items: [
      { month: "02", text: "Deployed MAM system for Samsung Fire & Marine Insurance headquarters broadcast studio relocation" },
      { month: "07", text: "Deployed Proxy CMS service at KNN" },
      { month: "11", text: "Deployed MAM system at ROK Air Force History and Records Management Group" },
      { month: "12", text: "Supplied Proxima Encoder to Vietnam's national broadcaster VOV" },
    ],
  },
  {
    year: "2018",
    items: [
      { month: "01", text: "Deployed archive system at KT&G" },
      { month: "02", text: "Deployed MAM system at Jeonnam Information & Culture Industry Promotion Agency" },
      { month: "05", text: "Deployed MAM system at Kyobo Life Insurance" },
      { month: "07", text: "Developed and deployed broadcast video server for CJ O Shopping" },
      { month: "11", text: "Developed and deployed MBC UHD archive system" },
      { month: "12", text: "Deployed MAM system at KEB Hana Bank" },
    ],
  },
  {
    year: "2019",
    items: [
      { month: "01", text: "Relocated and upgraded EBS NPS, archive, and playout MAM systems" },
      { month: "02", text: "Deployed in-house broadcasting archive MAM system at SK hynix" },
      { month: "07", text: "Deployed archive MAM system at Gyeonggi Provincial Council" },
    ],
  },
  {
    year: "2020",
    items: [
      { month: "01", text: "Obtained GS certification Grade 1 for Ariel GPU Transcoder V1.0" },
      { month: "02", text: "Won contract to deploy digital content media management system for Big Hit Entertainment" },
      { month: "03", text: "Obtained GS certification Grade 1 for Ariel Image Archive V1.0" },
      { month: "04", text: "Won contract to deploy CJ ENM integrated CMS" },
      { month: "05", text: "Won contract to deploy MAM for the Korean Culture and Information Service (Ministry of Culture, Sports and Tourism)" },
      { month: "06", text: "Won contract to develop streaming solution for CJ O Shopping" },
      { month: "07", text: "Won contract to upgrade Ariel MAM software at GS Home Shopping" },
      { month: "10", text: "Won contract to deploy 2020 English-language disaster broadcasting system at Arirang TV" },
      { month: "11", text: "Won contract to deploy CJ ENM integrated archive" },
    ],
  },
  {
    year: "2021",
    items: [
      {
        month: "01",
        text: "Won contract to deploy image archive, article transfer, and disaster broadcasting systems at TBS (Traffic Broadcasting System)",
      },
      { month: "03", text: "Won contract to upgrade breaking-news subtitle playout in the TBS newsroom system" },
      { month: "04", text: "Won contract to upgrade CMS/NDS at SBS Medianet" },
      { month: "05", text: "Won contract to deploy digital UHD infrastructure for Shinhan Bank's in-house broadcasting station" },
      { month: "06", text: "Won contract to supply and install broadcast information system for the Korea International Broadcasting Foundation" },
      { month: "08", text: "Won contract for CMS upgrade development at SBS Medianet" },
      { month: "09", text: "Won contract to develop standard metadata Open API for CJ ENM" },
      { month: "11", text: "Won contract to supply media asset management shared storage to ROK Navy Headquarters" },
      { month: "12", text: "Won contract for MBC news NPS MARS/MIDAS upgrade development" },
    ],
  },
  {
    year: "2022",
    items: [
      { month: "01", text: "Won contract for CJ ENM 2021 COCOS (CMS) upgrade" },
      { month: "04", text: "Won contract to deploy newsroom system (NRCS) at National Assembly Broadcasting (NATV)" },
      { month: "05", text: "Won contract to deploy digital service platform (MAM) at Nam June Paik Art Center" },
      { month: "09", text: "Won contract to supply ingest manager to SBS Medianet" },
      { month: "12", text: "Won contract to deploy Ariel MAM system at Hyundai Heavy Industries Ulsan" },
    ],
  },
  {
    year: "2023",
    items: [
      { month: "01", text: "Upgraded HYBE DCM system" },
      { month: "04", text: "KBS digital newsroom system enhancement and disaster broadcasting optimization project" },
      { month: "05", text: "Deployed MAM system at Dong-Ah Institute of Media and Arts" },
      { month: "06", text: "Deployed MAM system at Dongdaemun District Office" },
      { month: "07", text: "Deployed MAM system at Hyundai Heavy Industries Ulsan" },
      { month: "09", text: "Upgraded EBS web service encoding operations and deployed broadcast equipment" },
      { month: "11", text: "Upgraded CJ ENM integrated archive" },
      { month: "12", text: "Upgraded CMS archive software at Gyeonggi Provincial Government" },
    ],
  },
  {
    year: "2024",
    items: [
      { month: "01", text: "Won contract to supply TAKER SYSTEM to EBS" },
      { month: "02", text: "Won contract to develop post-production NPS integration customization for Channel A Sangam DDMC" },
      { month: "04", text: "Won contract to develop CMS for improving GS Retail's Short Pick registration process" },
      { month: "05", text: "Won contract for phase 2 deployment of integrated information system for 16 regional MBC stations" },
      { month: "06", text: "Won contract for CJ ENM COCOS upgrade deployment" },
      { month: "07", text: "Won contract to supply Proxima content management solution to KTV" },
      { month: "08", text: "Won contract to deploy MBC next-generation production NPS" },
      { month: "11", text: "Deployed KBS Digital 24 automated disaster content playout system" },
      { month: "12", text: "Developed software for MBC news NPS phase 4 upgrade project" },
    ],
  },
  {
    year: "2025",
    items: [
      { month: "01", text: "Supplied newsroom and MAM software to JTV (Jeonju Broadcasting)" },
      { month: "06", text: "Deployed MYMY content management solution at KTV" },
      { month: "07", text: "MAM upgrade project at KBN (KT's in-house broadcasting)" },
      { month: "08", text: "Upgraded broadcast system software at Radio Korea" },
      { month: "10", text: "Deployed 2025 CATV local channel DR playout system for SK Broadband" },
      { month: "11", text: "Supplied MAM software for KBS multiplatform integrated master control room (MCR)" },
    ],
  },
  {
    year: "2026",
    items: [
      { month: "01", text: "Signed NAVER Cloud MSP partnership" },
      {
        month: "04",
        text: "Led national broadcast media R&D program 'My Media Platform Core Technology Development' (with KETI · ETRI)",
      },
    ],
  },
];
