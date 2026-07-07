/**
 * 고객사 데이터 — 회사소개 > 고객사 페이지(/customers)의 단일 소스.
 * 디자인(Gemiso Customers KR)의 콘텐츠를 그대로 옮겨온 것.
 *
 * 분야(category)별 고객사 목록과 대표 구축 사례를 한 곳에서 관리한다.
 * 새 고객사/사례가 추가되면 해당 배열에 항목을 더하면 된다.
 *
 * 로고: 각 고객사는 안정적인 slug를 가지며, 로고 파일을
 *   public/assets/customers/<slug>.png
 * 경로에 두면 그리드에 자동으로 표시된다. 파일이 없으면 회사명 텍스트로 대체된다.
 * (CustomersExplorer가 <img onError>로 누락/깨진 로고를 텍스트로 폴백한다.)
 */

/** 히어로 상단 요약 지표. */
export const CUSTOMER_STATS: { v: string; k: string }[] = [
  { v: "600+", k: "Deployment & Development Projects" },
  { v: "Nationwide", k: "Major Broadcasters in Operation" },
  { v: "8+ Countries", k: "Overseas System Deployments" },
  { v: "20+ Years", k: "of Earned Trust" },
];

/** 대표 구축 사례 카드. */
export type CaseStudy = {
  /** 고객사명 */
  client: string;
  /** 모노 태그 (예: MAM, NCS) */
  tag: string;
  /** 핵심 성과 한 줄 */
  outcome: string;
  /** 한 줄 설명 */
  desc: string;
  /** 구축 사례 자료 링크 (외부 PDF) */
  href: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "EBS",
    tag: "MAM",
    outcome: "Completed a file-based broadcast system",
    desc: "Built a digital production environment that seamlessly integrates production, playout, and archiving with the Ariel MAM.",
    href: "https://ba0baf98-1b92-4a3e-8ed6-db31fc82621c.filesusr.com/ugd/1df771_674f0380433449bcb7ca12bfdccf6934.pdf",
  },
  {
    client: "TBS",
    tag: "NCS",
    outcome: "Relocated to Sangam with zero downtime",
    desc: "Upgraded NPS and archiving alongside the headquarters relocation and deployed a new Zodiac newsroom computer system.",
    href: "https://ba0baf98-1b92-4a3e-8ed6-db31fc82621c.filesusr.com/ugd/1df771_739d3e037d944adc8bf218f40bfb0656.pdf",
  },
  {
    client: "Channel A",
    tag: "NPS",
    outcome: "Linked the Gwanghwamun and Sangam production centers",
    desc: "Enabled smooth media transfer between the two production centers and unified the archive with an Ariel MAM-based NPS.",
    href: "https://ba0baf98-1b92-4a3e-8ed6-db31fc82621c.filesusr.com/ugd/1df771_b7affa19a1a6445ebc0121a94254a8f5.pdf",
  },
  {
    client: "SBS Medianet",
    tag: "MAM",
    outcome: "Unified MAM across 7 channels",
    desc: "Deployed an enterprise-grade MAM spanning seven specialty channels, integrated with the news and playout systems.",
    href: "https://ba0baf98-1b92-4a3e-8ed6-db31fc82621c.filesusr.com/ugd/1df771_6014c22fea0440299d04f16587019182.pdf",
  },
];

/** 고객사 분야 분류. id는 customer.cat과 매칭된다. */
export type CustomerCategory = { id: string; label: string };

export const CUSTOMER_CATEGORIES: CustomerCategory[] = [
  { id: "all", label: "All" },
  { id: "media", label: "Media" },
  { id: "gov", label: "Public" },
  { id: "enterprise", label: "Enterprise" },
  { id: "edu", label: "Education" },
  { id: "finance", label: "Finance" },
  { id: "global", label: "Global" },
];

export type Customer = {
  /** 표시 이름 (로고 파일이 없을 때 텍스트로 노출) */
  name: string;
  /** 분야 id (CustomerCategory.id) */
  cat: string;
  /** 로고 파일명 slug — /assets/customers/<slug>.png */
  slug: string;
};

/** 고객사 로고 파일 경로(basePath 없이 기록). asset()로 감싸 사용한다. */
export function customerLogo(slug: string): string {
  return `/assets/customers/${slug}.png`;
}

/** [이름, slug] 튜플 배열을 분야 cat의 Customer[]로 펼친다. */
function group(cat: string, rows: [name: string, slug: string][]): Customer[] {
  return rows.map(([name, slug]) => ({ name, slug, cat }));
}

export const CUSTOMERS: Customer[] = [
  ...group("media", [
    ["MBC", "mbc"],
    ["SBS", "sbs"],
    ["KBS", "kbs"],
    ["EBS", "ebs"],
    ["YTN", "ytn"],
    ["Yonhap News TV", "yonhapnews-tv"],
    ["Channel A", "channel-a"],
    ["Arirang TV", "arirang"],
    ["TBS", "tbs"],
    ["KTV", "ktv"],
    ["CJ ENM", "cj-enm"],
    ["SBS Medianet", "sbs-medianet"],
    ["KNN", "knn"],
    ["TBC (Daegu)", "tbc"],
    ["Gwangju MBC", "gwangju-mbc"],
    ["MBC Chungbuk", "chungbuk-mbc"],
    ["CPBC (Catholic Peace Broadcasting)", "cpbc"],
    ["GS Home Shopping", "gs-shop"],
    ["CJ O Shopping", "cj-oshopping"],
  ]),
  ...group("gov", [
    ["Ministry of Justice", "moj"],
    ["Supreme Prosecutors' Office", "spo"],
    ["Korean National Police Agency", "police"],
    ["National Assembly Broadcasting (NATV)", "natv"],
    ["Gyeonggi Province GTV", "gtv"],
    ["Korea Expressway Corporation", "ex-korea"],
    ["Rural Development Administration", "rda"],
    ["Korean Film Archive", "kofa"],
    ["Korea Radio Promotion Association (RAPA)", "rapa"],
    ["Korea International Broadcasting Foundation", "kbf"],
    ["Ansan City Hall", "ansan"],
    ["Uiseong County Office", "uiseong"],
    ["Yangju City Hall", "yangju"],
    ["ROK Navy Headquarters", "rokn"],
    ["ROK Air Force History Records Group", "rokaf-history"],
    ["Seoul Metropolitan Council", "seoul-council"],
    ["Korea Student Aid Foundation", "kosaf"],
  ]),
  ...group("enterprise", [
    ["Samsung Electronics", "samsung-electronics"],
    ["Samsung Engineering", "samsung-engineering"],
    ["Hyundai Motor Company", "hyundai-motor"],
    ["HD Hyundai Heavy Industries", "hhi"],
    ["SK hynix", "sk-hynix"],
    ["HYBE", "hybe"],
    ["YG Entertainment", "yg"],
    ["KT&G", "ktng"],
    ["KT In-house Broadcasting", "kt"],
    ["Cheil Worldwide", "cheil"],
    ["Nam June Paik Art Center", "njp-art-center"],
    ["Youngnak Church", "youngnak"],
  ]),
  ...group("edu", [
    ["Seoul Cyber University", "scu"],
    ["Dong-Ah Institute of Media and Arts (DIMA)", "dima"],
    ["Korea National University of Arts", "karts"],
    ["Honam University", "honam"],
  ]),
  ...group("finance", [
    ["Samsung Fire & Marine Insurance", "samsung-fire"],
    ["Shinhan Bank", "shinhan"],
    ["Woori Bank", "woori"],
    ["KB Kookmin Bank", "kb"],
    ["Hana Bank", "hana"],
    ["Kyobo Life Insurance", "kyobo"],
    ["Korea Deposit Insurance Corporation", "kdic"],
  ]),
  ...group("global", [
    ["TPBS (Thailand)", "tpbs"],
    ["TNN24 (Thailand)", "tnn"],
    ["VNA (Vietnam)", "vna"],
    ["VOV (Vietnam)", "vov"],
    ["TVB (Hong Kong)", "tvb"],
    ["Huimai Group (China)", "huimai"],
    ["Ethiopia Educational Broadcasting", "ebc-ethiopia"],
    ["Radio Pakistan", "radio-pakistan"],
    ["Paraguay\nNational TV", "py-tv"],
    ["Bangladesh Education Institute", "bd-edu"],
  ]),
];
