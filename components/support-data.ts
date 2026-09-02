/**
 * Support page data — single source for /support.
 *
 * Two groups: hero tags and contact methods. Physical office cards were
 * removed when gemiso.com was separated from the Korean site; the contact
 * grid is sized for four cells, so a toll-free entry can be restored in
 * place (see the commented block below) once the US number is live.
 */

/** Chips shown under the support hero headline. */
export const SUPPORT_HERO_TAGS: string[] = [
  "Response within 1 business day",
  "Remote & on-site technical support",
  "Solution adoption consulting",
];

/** One cell in the contact grid. */
export type ContactMethod = {
  /** Mono label, e.g. SALES, TECHNICAL. */
  label: string;
  /** Displayed value. */
  value: string;
  /** Supporting line. */
  note: string;
  /** Link target when the cell is clickable (mailto: / tel:). */
  href?: string;
};

export const CONTACT_METHODS: ContactMethod[] = [
  {
    label: "SALES",
    value: "sales@gemiso.com",
    note: "Solution inquiries, quotes, and partnerships",
    href: "mailto:sales@gemiso.com",
  },
  {
    label: "TECHNICAL",
    value: "tech@gemiso.com",
    note: "Deployment and operations support",
    href: "mailto:tech@gemiso.com",
  },
  { label: "HOURS", value: "9 AM – 6 PM PT", note: "Monday–Friday · US Pacific Time" },
  { label: "RESPONSE", value: "1 business day", note: "Every inquiry answered" },
  // Toll-free line — restore once the US number is live, and drop one of
  // the two cells above so the grid stays at four columns.
  // { label: "TOLL-FREE", value: "+1‑800‑000‑0000", note: "Sales & support", href: "tel:+18000000000" },
];
