import Link from "next/link";
import Reveal from "@/components/Reveal";
import { HISTORY_DETAIL } from "@/components/history-detail-data";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "Detailed History",
  description:
    "The complete record of GEMISO's deployments, development projects, and contracts since 2002, organized by year and month.",
  path: "/history/detail/",
});

/** 월 표기("01"~"12") → 영문 월 약어 */
const MONTHS_EN = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export default function HistoryDetailPage() {
  // 데이터는 연대순(오래된 → 최신). 화면에는 최신순으로 뒤집어 보여준다.
  const years = HISTORY_DETAIL.slice().reverse();
  const allYears = HISTORY_DETAIL.map((y) => Number(y.year));
  const latest = Math.max(...allYears);
  const earliest = Math.min(...allYears);
  const total = HISTORY_DETAIL.reduce((n, y) => n + y.items.length, 0);

  return (
    <div className="gem-dark gem-history-detail">
      {/* 브레드크럼 */}
      <nav className="sol-breadcrumb" aria-label="Breadcrumb">
        <div className="gem-container sol-breadcrumb__inner">
          <Link href="/">Home</Link>
          <span className="gem-sep">›</span>
          <Link href="/#solutions">About</Link>
          <span className="gem-sep">›</span>
          <Link href="/history">History</Link>
          <span className="gem-sep">›</span>
          <span className="sol-breadcrumb__current">Detailed History</span>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="hist-hero">
        <div className="gem-container hist-hero__inner">
          <Reveal className="hist-hero__intro">
            <div className="hist-eyebrow">
              <span className="hist-eyebrow__tick" />
              <span className="hist-eyebrow__label">About · Detailed History</span>
            </div>
            <h1 className="hist-hero__title">Every Step of the Way</h1>
            <p className="hist-hero__desc">
              Every deployment, development project, and contract since our
              founding in 2002, organized by year and month. For selected
              highlights only, see the{" "}
              <Link href="/history" className="hist-inline-link">
                History
              </Link>{" "}
              page.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 상세 타임라인 */}
      <section className="hist-timeline">
        <div className="hist-timeline__inner">
          <Reveal className="hist-eyebrow hist-detail__head">
            <span className="hist-eyebrow__tick" />
            <span className="hist-eyebrow__label hist-eyebrow__label--muted">
              Full Record · {latest}–{earliest} · {total} entries
            </span>
          </Reveal>

          <div className="hist-detail">
            {years.map((y, yi) => {
              const items = y.items.slice().reverse();
              return (
                <Reveal as="div" key={y.year} className="tl-row hist-detail__row">
                  <div className="tl-year">{y.year}</div>
                  <div className="tl-rail">
                    <span
                      className={`tl-rail__line${
                        yi === years.length - 1 ? " tl-rail__line--stub" : ""
                      }`}
                    />
                    <span className="tl-dot tl-dot--minor" />
                  </div>
                  <div className="tl-body">
                    <ul className="hist-detail__list">
                      {items.map((it, i) => (
                        <li className="hist-detail__item" key={`${it.month ?? ""}-${i}`}>
                          <span className="hist-detail__month">
                            {it.month ? MONTHS_EN[Number(it.month) - 1] : ""}
                          </span>
                          <span className="hist-detail__text">{it.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="hist-foot">
            <span className="hist-foot__mark">↳</span>
            <Link href="/history" className="hist-inline-link">
              ← Back to Key Milestones
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA (accent 배경) — 솔루션 페이지와 동일한 스타일 */}
      <section className="sol-cta">
        <Reveal className="gem-container sol-cta__grid">
          <div>
            <h2 className="sol-cta__title">Ready to Write the Next Chapter Together?</h2>
            <p className="sol-cta__desc">
              Tell us about your broadcast workflow and our team will help you
              find the right solution.
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
