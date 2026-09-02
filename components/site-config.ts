/**
 * 사이트 공통 설정 — 내비게이션/푸터/회사 정보.
 * 헤더·푸터 등 공통 레이아웃이 이 데이터를 공유한다.
 */

import { SOLUTION_NAV } from "@/components/solutions-data";
import { TECHNOLOGY_NAV } from "@/components/technology-data";

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Company",
    href: "/mission/",
    children: [
      { label: "Mission", href: "/mission/" },
      { label: "History", href: "/history/" },
      { label: "Certifications", href: "/certification/" },
      { label: "Customers", href: "/customers/" },
    ],
  },
  {
    label: "Solutions",
    href: SOLUTION_NAV[0].href,
    children: SOLUTION_NAV,
  },
  {
    label: "Technology",
    href: "/technology/",
    children: TECHNOLOGY_NAV,
  },
  {
    label: "Support",
    href: "/support/",
    children: [
      { label: "Support", href: "/support/" },
      { label: "Partners", href: "/partners/" },
    ],
  },
];

/** 운영(Cloudflare) 절대 URL 기준. canonical·sitemap·OG 절대경로에 사용한다.
 *  basePath와 무관하게 항상 운영 도메인을 가리킨다(미리보기에서도 canonical은 운영을 향함). */
export const SITE_URL = "https://www.gemiso.com";

export const COMPANY = {
  name: "GEMISO",
  /** Sales, quotes, partnerships. */
  email: "sales@gemiso.com",
  /** Deployment and operations support. */
  techEmail: "tech@gemiso.com",
  /**
   * Toll-free voice line. Left empty until the US number is live —
   * every surface that shows a phone number checks `tel` first and
   * simply omits the field while it is blank.
   * When the number is ready, fill both values:
   *   tel: "+1‑800‑000‑0000", telHref: "tel:+18000000000"
   */
  tel: "",
  telHref: "",
};

export const FOOTER_COLUMNS: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "Mission", href: "/mission/" },
      { label: "History", href: "/history/" },
      { label: "Certifications", href: "/certification/" },
      { label: "Customers", href: "/customers/" },
    ],
  },
  {
    heading: "Solutions",
    links: SOLUTION_NAV,
  },
  {
    heading: "Support",
    links: [
      { label: "Support", href: "/support/" },
      { label: "Partners", href: "/partners/" },
    ],
  },
];

/** /public 자산 경로에 basePath를 붙인다(GitHub Pages 하위 경로 대응). */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
