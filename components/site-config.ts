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
  { label: "News", href: "/news/" },
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
  name: "Geminisoft Co., Ltd.",
  location: "Seoul, South Korea",
  tel: "+82‑2‑857‑1101",
  telHref: "tel:+82285711101",
  fax: "+82‑2‑6009‑9031",
  email: "sales@gemiso.com",
  addressLines: ["402 World Cup buk-ro, Mapo-gu", "Seoul, South Korea (03925)"],
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
      { label: "News", href: "/news/" },
    ],
  },
];

/** /public 자산 경로에 basePath를 붙인다(GitHub Pages 하위 경로 대응). */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
