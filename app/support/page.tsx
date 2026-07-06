import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/components/site-config";
import {
  SUPPORT_HERO_TAGS,
  CONTACT_METHODS,
  OFFICES,
} from "@/components/support-data";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "Support",
  description:
    "Solution consultations and technical support from Geminisoft, a global media technology company. Find phone and email contacts plus our Seoul and Ho Chi Minh City locations.",
  path: "/support/",
});

export default function SupportPage() {
  return (
    <>
      {/* 브레드크럼 */}
      <nav className="sol-breadcrumb" aria-label="Breadcrumb">
        <div className="gem-container sol-breadcrumb__inner">
          <Link href="/">Home</Link>
          <span className="gem-sep">|</span>
          <span className="sol-breadcrumb__current">Support</span>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="hist-hero">
        <div className="gem-container hist-hero__inner">
          <Reveal className="hist-hero__intro">
            <div className="hist-eyebrow">
              <span className="hist-eyebrow__tick" />
              <span className="hist-eyebrow__label">Support · CONTACT</span>
            </div>
            <h1 className="hist-hero__title">Technical Support & Inquiries</h1>
            <p className="hist-hero__desc">
              Solution consultations and technical support from Geminisoft, a
              global media technology company. Any question about your broadcast
              workflow is welcome.
            </p>
            <div className="sup-tags">
              {SUPPORT_HERO_TAGS.map((t) => (
                <span key={t} className="sup-tag">
                  <span className="sup-tag__dot" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 연락처 밴드 */}
      <section className="sup-contact-section">
        <div className="gem-container">
          <div className="hist-eyebrow sup-section-eyebrow">
            <span className="hist-eyebrow__tick" />
            <span className="hist-eyebrow__label hist-eyebrow__label--muted">
              GET IN TOUCH
            </span>
          </div>
          <div className="sup-contact">
            {CONTACT_METHODS.map((c) => {
              const inner = (
                <>
                  <div className="sup-contact__label">{c.label}</div>
                  <div className="sup-contact__value">{c.value}</div>
                  <div className="sup-contact__note">{c.note}</div>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="sup-contact__cell">
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="sup-contact__cell">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 문의 폼 */}
      <section id="inquiry" className="inq-section">
        <div className="gem-container inq-grid">
          <Reveal className="inq-intro">
            <div className="hist-eyebrow">
              <span className="hist-eyebrow__tick" />
              <span className="hist-eyebrow__label hist-eyebrow__label--muted">
                INQUIRY
              </span>
            </div>
            <h2 className="inq-title">Solution Inquiry</h2>
            <p className="inq-desc">
              Leave your inquiry and we will get back to you within 24 business
              hours. Consultations, quotes, and technical questions are all
              welcome.
            </p>
            <p className="inq-side-note">
              For urgent matters, reach us directly at{" "}
              <a href={COMPANY.telHref}>02-857-1101</a> or{" "}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>
          </Reveal>
          <Reveal>
            <InquiryForm />
          </Reveal>
        </div>
      </section>

      {/* 오피스 */}
      <section className="sup-offices">
        <div className="gem-container">
          <div className="sup-offices__head">
            <div className="sup-offices__intro">
              <div className="hist-eyebrow">
                <span className="hist-eyebrow__tick" />
                <span className="hist-eyebrow__label hist-eyebrow__label--muted">
                  OFFICES
                </span>
              </div>
              <h2 className="sup-offices__title">Three Locations Across Seoul and Ho Chi Minh City</h2>
              <p className="sup-offices__desc">
                Our headquarters, media control center, and Vietnam
                representative office support broadcast customers up close.
              </p>
            </div>
          </div>

          <div className="sup-office-grid">
            {OFFICES.map((o, i) => (
              <div key={o.name} className="sup-office">
                <div className="sup-office__top">
                  <span className="sup-office__tag">{o.tag}</span>
                  <span className="sup-office__idx">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="sup-office__name">{o.name}</h3>
                <p className="sup-office__addr">{o.addr}</p>
                <a
                  href={o.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sup-office__map"
                >
                  View on Map ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (accent 배경) */}
      <section className="sol-cta">
        <Reveal className="gem-container sol-cta__grid">
          <div>
            <h2 className="sol-cta__title">Evaluating a Solution?</h2>
            <p className="sol-cta__desc">
              Tell us about your broadcast workflow and scale, and we will
              propose the right configuration and quote.
            </p>
          </div>
          <div className="sol-cta__actions">
            <a href="#inquiry" className="gem-btn gem-btn--invert">
              Contact Us
            </a>
            <Link href="/#solutions" className="gem-btn gem-btn--underline-light">
              Explore Solutions →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
