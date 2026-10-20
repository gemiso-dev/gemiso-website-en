/**
 * schema.org structured data (JSON-LD), built only from facts the site already
 * states: company name/contacts from site-config and product copy from
 * solutions-data. Nothing here is invented — no customer counts, years,
 * addresses, ratings or prices. Because it reads solutions-data, a product
 * rename or copy edit flows through automatically.
 */
import { COMPANY, SITE_DESCRIPTION, SITE_URL } from "@/components/site-config";
import type { Solution } from "@/components/solutions-data";

const ORG_ID = `${SITE_URL}/#organization`;

/** Site-wide Organization + WebSite graph (rendered once in the root layout). */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: COMPANY.name,
        url: SITE_URL,
        logo: `${SITE_URL}/assets/gemiso-logo.svg`,
        description: SITE_DESCRIPTION,
        contactPoint: [
          { "@type": "ContactPoint", contactType: "sales", email: COMPANY.email },
          { "@type": "ContactPoint", contactType: "technical support", email: COMPANY.techEmail },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY.name,
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/** One product page → SoftwareApplication. */
export function solutionJsonLd(s: Solution) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: s.name,
    description: s.desc,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: s.cat,
    url: `${SITE_URL}/solutions/${s.id}/`,
    ...(s.image ? { image: `${SITE_URL}${s.image}` } : {}),
    featureList: s.features.map((f) => f.t),
    provider: { "@id": ORG_ID },
  };
}
