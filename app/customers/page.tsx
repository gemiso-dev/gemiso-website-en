import Link from "next/link";
import Reveal from "@/components/Reveal";
import CustomersExplorer from "@/components/CustomersExplorer";
import { CASE_STUDIES, CUSTOMER_STATS } from "@/components/customers-data";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "Customers",
  description:
    "From terrestrial and news channels to public institutions, enterprises, education, finance, and broadcasters abroad — GEMISO's media technology runs in the field every day.",
  path: "/customers/",
});

export default function CustomersPage() {
  return (
    <div className="gem-dark gem-customers">
      {/* 브레드크럼 */}
      <nav className="sol-breadcrumb" aria-label="Breadcrumb">
        <div className="gem-container sol-breadcrumb__inner">
          <Link href="/">Home</Link>
          <span className="gem-sep">›</span>
          <Link href="/#solutions">About</Link>
          <span className="gem-sep">›</span>
          <span className="sol-breadcrumb__current">Customers</span>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="hist-hero">
        <div className="gem-container hist-hero__inner">
          <Reveal className="hist-hero__intro">
            <div className="hist-eyebrow">
              <span className="hist-eyebrow__tick" />
              <span className="hist-eyebrow__label">About · Customers</span>
            </div>
            <h1 className="hist-hero__title">The Media Partner Broadcasters Trust</h1>
            <p className="hist-hero__desc">
              From terrestrial and news channels to public institutions,
              enterprises, education, finance, and broadcasters abroad —
              GEMISO's media technology runs in the field every day.
            </p>
          </Reveal>

          <Reveal as="div" className="hist-stats">
            {CUSTOMER_STATS.map((s) => (
              <div key={s.k} className="hist-stat">
                <div className="hist-stat__num">{s.v}</div>
                <div className="hist-stat__label">{s.k}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 구축 사례 */}
      <section className="cust-cases">
        <div className="gem-container">
          <Reveal className="cust-cases__head">
            <div className="hist-eyebrow">
              <span className="hist-eyebrow__tick" />
              <span className="hist-eyebrow__label hist-eyebrow__label--muted">
                CASE STUDIES
              </span>
            </div>
            <h2 className="gem-title">Proven by Results</h2>
          </Reveal>

          <Reveal as="div" className="cust-cases__grid">
            {CASE_STUDIES.map((c) => (
              <a
                href={c.href}
                key={c.client}
                className="case-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="case-card__top">
                  <span className="case-card__client">{c.client}</span>
                  <span className="case-card__tag">{c.tag}</span>
                </div>
                <h3 className="case-card__outcome">{c.outcome}</h3>
                <p className="case-card__desc">{c.desc}</p>
                <span className="gem-arrow case-card__more">
                  View Case Study
                  <span className="gem-arrow-slide" aria-hidden="true">
                    <span>→</span>
                    <span>→</span>
                  </span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 고객사 섹션 헤더 */}
      <div className="gem-container cust-intro">
        <Reveal>
          <div className="hist-eyebrow">
            <span className="hist-eyebrow__tick" />
            <span className="hist-eyebrow__label hist-eyebrow__label--muted">
              CUSTOMERS
            </span>
          </div>
          <h2 className="gem-title cust-intro__title">Customers We Work With</h2>
          <p className="gem-lead cust-intro__lead">
            Browse by sector — and the list keeps growing.
          </p>
        </Reveal>
      </div>

      {/* 분야 필터 + 고객사 그리드 (클라이언트) */}
      <CustomersExplorer />

      {/* CTA (accent 배경) */}
      <section className="sol-cta">
        <Reveal className="gem-container sol-cta__grid">
          <div>
            <h2 className="sol-cta__title">Let's Build the Next Deployment Together</h2>
            <p className="sol-cta__desc">
              Tell us about your broadcast workflow and our team will design
              the right solution with you.
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
            <Link
              href="/#solutions"
              className="gem-btn gem-btn--underline-light"
            >
              Explore Solutions
              <span className="gem-arrow-slide" aria-hidden="true">
                <span>→</span>
                <span>→</span>
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
