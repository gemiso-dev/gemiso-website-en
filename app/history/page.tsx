import Link from "next/link";
import Reveal from "@/components/Reveal";
import HistoryTimeline from "@/components/HistoryTimeline";
import { HISTORY_ERAS, HISTORY_STATS } from "@/components/history-data";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "History",
  description:
    "From media asset management to newsroom, archive, automated playout, and AI — the road Geminisoft has traveled since its founding in 2002.",
  path: "/history/",
});

export default function HistoryPage() {
  // 데이터는 연대순(오래된 → 최신). 화면에는 최신순으로 뒤집어 보여준다.
  const count = String(HISTORY_ERAS.length).padStart(2, "0");
  const eras = HISTORY_ERAS.slice()
    .reverse()
    .map((era, ei) => {
      const items = era.items.slice().reverse();
      return {
        ...era,
        idx: String(ei + 1).padStart(2, "0"),
        count,
        items: items.map((it, i) => ({
          ...it,
          major: !!it.major,
          last: i === items.length - 1,
        })),
      };
    });

  return (
    <>
      {/* 브레드크럼 */}
      <nav className="sol-breadcrumb" aria-label="Breadcrumb">
        <div className="gem-container sol-breadcrumb__inner">
          <Link href="/">Home</Link>
          <span className="gem-sep">|</span>
          <Link href="/#solutions">About</Link>
          <span className="gem-sep">|</span>
          <span className="sol-breadcrumb__current">History</span>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="hist-hero">
        <div className="gem-container hist-hero__inner">
          <Reveal className="hist-hero__intro">
            <div className="hist-eyebrow">
              <span className="hist-eyebrow__tick" />
              <span className="hist-eyebrow__label">About · History</span>
            </div>
            <h1 className="hist-hero__title">The Geminisoft Journey</h1>
            <p className="hist-hero__desc">
              Since our founding in 2002 — from media asset management to
              newsroom, archive, automated playout, and AI — we have grown
              alongside our customers, building broadcast media technology
              in-house.
            </p>
          </Reveal>

          <Reveal as="div" className="hist-stats">
            {HISTORY_STATS.map((s) => (
              <div key={s.k} className="hist-stat">
                <div className="hist-stat__num">{s.v}</div>
                <div className="hist-stat__label">{s.k}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 타임라인 */}
      <section className="hist-timeline">
        <div className="hist-timeline__inner">
          <Reveal className="hist-eyebrow">
            <span className="hist-eyebrow__tick" />
            <span className="hist-eyebrow__label hist-eyebrow__label--muted">
              Key Milestones
            </span>
          </Reveal>

          <HistoryTimeline eras={eras} />

          <Reveal className="hist-foot">
            <span className="hist-foot__mark">↳</span>
            <span>
              These are selected highlights — our track record spans some 600
              deployment and development projects from 2002 to today.{" "}
              <Link href="/history/detail" className="hist-inline-link">
                View the Full Detailed History →
              </Link>
            </span>
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
    </>
  );
}
