import Link from "next/link";
import Reveal from "@/components/Reveal";
import { asset } from "@/components/site-config";
import { PARTNER_STATS, PARTNER_GROUPS } from "@/components/partners-data";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "Partners",
  description:
    "GEMISO partners with world-class media technology companies, international standards alliances, and universities to build a better broadcast media environment together.",
  path: "/partners/",
});

export default function PartnersPage() {
  return (
    <>
      {/* 브레드크럼 */}
      <nav className="sol-breadcrumb" aria-label="Breadcrumb">
        <div className="gem-container sol-breadcrumb__inner">
          <Link href="/">Home</Link>
          <span className="gem-sep">|</span>
          <Link href="/support/">Support</Link>
          <span className="gem-sep">|</span>
          <span className="sol-breadcrumb__current">Partners</span>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="hist-hero">
        <div className="gem-container hist-hero__inner">
          <Reveal className="hist-hero__intro">
            <div className="hist-eyebrow">
              <span className="hist-eyebrow__tick" />
              <span className="hist-eyebrow__label">Support · Partners</span>
            </div>
            <h1 className="hist-hero__title">Building the Media Ecosystem Together</h1>
            <p className="hist-hero__desc">
              GEMISO partners with world-class media technology companies,
              international standards alliances, and universities to build a
              better broadcast media environment together.
            </p>
          </Reveal>

          <Reveal as="div" className="hist-stats">
            {PARTNER_STATS.map((s) => (
              <div key={s.k} className="hist-stat">
                <div className="hist-stat__num">{s.v}</div>
                <div className="hist-stat__label">{s.k}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 파트너 그룹 */}
      <section className="part-section">
        <div className="gem-container">
          {PARTNER_GROUPS.map((g, gi) => (
            <Reveal
              as="div"
              key={g.title}
              className={`part-group${gi === 0 ? " part-group--first" : ""}`}
            >
              <div className="part-group__head">
                <div className="part-group__intro">
                  <div className="hist-eyebrow">
                    <span className="hist-eyebrow__tick" />
                    <span className="hist-eyebrow__label hist-eyebrow__label--muted">
                      {g.eyebrow}
                    </span>
                  </div>
                  <h2 className="part-group__title">{g.title}</h2>
                  <p className="part-group__desc">{g.desc}</p>
                </div>
                <span className="part-group__count">
                  {String(g.items.length).padStart(2, "0")} partners
                </span>
              </div>

              <div className="part-grid">
                {g.items.map((p, i) => (
                  <a
                    key={p.name}
                    href={`https://${p.disp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="part-card"
                  >
                    <div className="part-card__top">
                      <span className="part-card__idx">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="part-card__kind">{p.kind}</span>
                    </div>
                    {p.logo && (
                      <div className="part-card__logo">
                        <img
                          src={asset(p.logo)}
                          alt={`${p.name} logo`}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <h3 className="part-card__name">{p.name}</h3>
                    <p className="part-card__desc">{p.desc}</p>
                    <span className="part-card__link">{p.disp} ↗</span>
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA (accent 배경) */}
      <section className="sol-cta">
        <Reveal className="gem-container sol-cta__grid">
          <div>
            <h2 className="sol-cta__title">Interested in Partnering with Us?</h2>
            <p className="sol-cta__desc">
              We welcome partnership proposals of every kind — technology
              collaboration, distribution, and industry-academia cooperation.
              Tell us how we can work together.
            </p>
          </div>
          <div className="sol-cta__actions">
            <Link href="/support/#inquiry" className="gem-btn gem-btn--invert">
              Contact Us
              <span className="gem-arrow-slide" aria-hidden="true">
                <span>→</span>
                <span>→</span>
              </span>
            </Link>
            <Link href="/#solutions" className="gem-btn gem-btn--underline-light">
              Explore Solutions
              <span className="gem-arrow-slide" aria-hidden="true">
                <span>→</span>
                <span>→</span>
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
