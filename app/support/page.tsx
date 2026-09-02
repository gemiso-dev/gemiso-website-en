import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/components/site-config";
import { SUPPORT_HERO_TAGS, CONTACT_METHODS } from "@/components/support-data";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "Support",
  description:
    "Solution consultations and technical support from GEMISO, a global media technology company. Reach sales and technical support by email, or send an inquiry and we will respond within one business day.",
  path: "/support/",
});

export default function SupportPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="sol-breadcrumb" aria-label="Breadcrumb">
        <div className="gem-container sol-breadcrumb__inner">
          <Link href="/">Home</Link>
          <span className="gem-sep">|</span>
          <span className="sol-breadcrumb__current">Support</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="hist-hero">
        <div className="gem-container hist-hero__inner">
          <Reveal className="hist-hero__intro">
            <div className="hist-eyebrow">
              <span className="hist-eyebrow__tick" />
              <span className="hist-eyebrow__label">Support · CONTACT</span>
            </div>
            <h1 className="hist-hero__title">Technical Support & Inquiries</h1>
            <p className="hist-hero__desc">
              Solution consultations and technical support from GEMISO, a
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

      {/* Contact band */}
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

      {/* Inquiry form */}
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
              Prefer email? Reach sales at{" "}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or
              technical support at{" "}
              <a href={`mailto:${COMPANY.techEmail}`}>{COMPANY.techEmail}</a>.
            </p>
          </Reveal>
          <Reveal>
            <InquiryForm />
          </Reveal>
        </div>
      </section>

      {/* CTA (accent background) */}
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
