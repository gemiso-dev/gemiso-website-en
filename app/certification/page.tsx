import Link from "next/link";
import Reveal from "@/components/Reveal";
import { asset } from "@/components/site-config";
import { CERT_STATS, GS_CERTS, PATENTS } from "@/components/certification-data";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "Certifications",
  description:
    "GEMISO's core solutions are validated by Grade 1 GS (Good Software) certification — awarded on independently tested quality criteria — and by patents on our source technologies.",
  path: "/certification/",
});

export default function CertificationPage() {
  return (
    <>
      {/* 브레드크럼 */}
      <nav className="sol-breadcrumb" aria-label="Breadcrumb">
        <div className="gem-container sol-breadcrumb__inner">
          <Link href="/">Home</Link>
          <span className="gem-sep">|</span>
          <Link href="/#solutions">About</Link>
          <span className="gem-sep">|</span>
          <span className="sol-breadcrumb__current">Certifications</span>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="hist-hero">
        <div className="gem-container hist-hero__inner">
          <Reveal className="hist-hero__intro">
            <div className="hist-eyebrow">
              <span className="hist-eyebrow__tick" />
              <span className="hist-eyebrow__label">About · Certifications</span>
            </div>
            <h1 className="hist-hero__title">Proven Technology, Certified Quality</h1>
            <p className="hist-hero__desc">
              GEMISO's core solutions are validated by Grade 1 GS (Good
              Software) certification — awarded on independently tested quality
              criteria — and by patents on our source technologies.
            </p>
          </Reveal>

          <Reveal as="div" className="hist-stats">
            {CERT_STATS.map((s) => (
              <div key={s.k} className="hist-stat">
                <div className="hist-stat__num">{s.v}</div>
                <div className="hist-stat__label">{s.k}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* GS 인증 */}
      <section className="cert-section cert-section--top">
        <div className="gem-container">
          <Reveal className="gem-section__head">
            <div className="gem-eyebrow gem-eyebrow--mono">
              <span>GS CERTIFICATION · GOOD SOFTWARE</span>
            </div>
            <h2 className="gem-title">Top Grade in Accredited Software Quality Certification</h2>
            <p className="gem-lead">
              Our core solutions earned{" "}
              <span className="cert-lead__hl">Grade 1</span> — the highest grade
              — in GS certification, awarded by the Telecommunications
              Technology Association (TTA) for functionality, reliability, and
              usability.
            </p>
          </Reveal>

          <Reveal as="div" className="cert-grid">
            {GS_CERTS.map((c) => (
              <div className="cert-card" key={c.name}>
                <div className="cert-card__top">
                  <span className="cert-card__kind">GS Certificate</span>
                  <span className="cert-card__grade">Grade 1</span>
                </div>
                <div className="cert-card__shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(c.img)}
                    alt={`${c.name} GS certificate`}
                    loading="lazy"
                  />
                </div>
                <div className="cert-card__info">
                  <span className="cert-card__tag">{c.tag}</span>
                  <h3 className="cert-card__name">{c.name}</h3>
                  <span className="cert-card__cat">{c.cat}</span>
                  <span className="cert-card__org">
                    TTA · Telecommunications Technology Association
                  </span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 특허 */}
      <section className="cert-section cert-section--bottom">
        <div className="gem-container">
          <Reveal className="gem-section__head">
            <div className="gem-eyebrow gem-eyebrow--mono">
              <span>PATENTS</span>
            </div>
            <h2 className="gem-title">Source Technology, Secured by Patents</h2>
            <p className="gem-lead">
              We hold patents on the core technologies of media data processing
              — an independent competitive edge, free of reliance on foreign
              solutions.
            </p>
          </Reveal>

          <Reveal as="div" className="pat-grid">
            {PATENTS.map((p) => (
              <div className="pat-card" key={p.no}>
                <div className="pat-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(p.img)} alt={`${p.title} patent certificate`} loading="lazy" />
                  <span className="pat-shot__label">PATENT</span>
                </div>
                <div className="pat-body">
                  <div className="pat-body__meta">
                    <span className="pat-no">{p.no}</span>
                    <span className="pat-status">{p.status}</span>
                  </div>
                  <h3 className="pat-title">{p.title}</h3>
                  <p className="pat-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="hist-foot">
            <span className="hist-foot__mark">↳</span>
            <span>
              Copies of certificates, patents, and other technical validation
              materials are available through our sales team.
            </span>
          </Reveal>
        </div>
      </section>

      {/* CTA (accent 배경) — 솔루션 페이지와 동일한 스타일 */}
      <section className="sol-cta">
        <Reveal className="gem-container sol-cta__grid">
          <div>
            <h2 className="sol-cta__title">Need Technical Validation Materials?</h2>
            <p className="sol-cta__desc">
              Our sales team will promptly provide certificate and patent
              copies and any other materials you need for your evaluation.
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
    </>
  );
}
