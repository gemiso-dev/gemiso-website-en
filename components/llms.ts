/**
 * Plain-text summaries for AI crawlers (llms.txt / llms-full.txt).
 *
 * Generated from the same data the pages render (solutions-data, site-config),
 * so product names and copy never drift from the site. Only statements already
 * on the site are repeated here.
 */
import { COMPANY, SITE_DESCRIPTION, SITE_URL } from "@/components/site-config";
import { VISIBLE_SOLUTIONS, type Solution } from "@/components/solutions-data";

const PAGES: { label: string; path: string }[] = [
  { label: "Mission", path: "/mission/" },
  { label: "History", path: "/history/" },
  { label: "Certifications", path: "/certification/" },
  { label: "Customers", path: "/customers/" },
  { label: "Technology", path: "/technology/" },
  { label: "Partners", path: "/partners/" },
  { label: "Support and contact", path: "/support/" },
];

const url = (path: string) => `${SITE_URL}${path}`;

/** First sentence of a description (keeps the "—" clauses intact). */
function firstSentence(text: string): string {
  const m = text.match(/^.*?[.!?](?=\s|$)/);
  return (m ? m[0] : text).trim();
}

/** Compact index: what GEMISO is, its products and where to read more. */
export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${COMPANY.name}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "## Solutions",
    "",
    ...VISIBLE_SOLUTIONS.map(
      (s) => `- [${s.name}](${url(`/solutions/${s.id}/`)}) — ${s.cat}. ${firstSentence(s.desc)}`,
    ),
    "",
    "## Company",
    "",
    ...PAGES.map((p) => `- [${p.label}](${url(p.path)})`),
    "",
    "## Contact",
    "",
    `- Sales, quotes, partnerships: ${COMPANY.email}`,
    `- Deployment and operations support: ${COMPANY.techEmail}`,
    "",
    "## Optional",
    "",
    `- [Full product details](${url("/llms-full.txt")}): features, workflows and specifications for every solution`,
    "",
  ];
  return lines.join("\n");
}

function solutionSection(s: Solution): string[] {
  const out: string[] = [
    `## ${s.name}`,
    "",
    `URL: ${url(`/solutions/${s.id}/`)}`,
    `Category: ${s.cat}`,
    `Tagline: ${s.tagline}`,
    "",
    s.desc,
    "",
  ];
  if (s.stats.length) {
    out.push("Highlights:", ...s.stats.map((x) => `- ${x.v} — ${x.k}`), "");
  }
  if (s.features.length) {
    out.push("Key features:", ...s.features.map((f) => `- ${f.t}: ${f.d}`), "");
  }
  if (s.workflow.length) {
    out.push(`Workflow: ${s.workflow.join(" → ")}`, "");
  }
  if (s.specs.length) {
    out.push("Specifications:", ...s.specs.map((x) => `- ${x.k}: ${x.v}`), "");
  }
  if (s.details?.length) {
    out.push("Modules:", ...s.details.map((d) => `- ${d.code} (${d.title}): ${d.desc}`), "");
  }
  if (s.clients?.length) {
    out.push(`Customers shown on this product page: ${s.clients.join(", ")}`, "");
  }
  return out;
}

/** Full text of every visible product page. */
export function buildLlmsFullTxt(): string {
  const lines: string[] = [
    `# ${COMPANY.name} — full product details`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `Site: ${SITE_URL}`,
    `Contact: ${COMPANY.email} (sales) · ${COMPANY.techEmail} (support)`,
    "",
    ...VISIBLE_SOLUTIONS.flatMap(solutionSection),
  ];
  return lines.join("\n");
}
