import type { CSSProperties } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ScrollHighlightText from "@/components/ScrollHighlightText";
import HeroScrollButton from "@/components/HeroScrollButton";
import CustomerMarquee from "@/components/CustomerMarquee";
import CopyField from "@/components/CopyField";
import { COMPANY, asset } from "@/components/site-config";
import { NEWS_ARTICLES } from "@/components/news-data";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "Broadcasting, Rebuilt with AX — AI Media Platform for Broadcasters",
  description:
    "Geminisoft delivers AX technology for AI-driven, platform-aware broadcasting. We build new media business models that put broadcasters shoulder to shoulder with global OTT services.",
  path: "/",
});

/** 홈 뉴스 섹션 — 뉴스룸 데이터의 최신 3건과 연동. */
const LATEST_NEWS = NEWS_ARTICLES.slice(0, 3);

/* ----------------------------------------------------------------- 데이터 */

const SOLUTIONS: {
  num: string;
  tag: string;
  title: string;
  desc: string;
  /** true면 목록에서 숨긴다(코드는 유지, 플래그만 제거하면 복구). */
  hidden?: boolean;
}[] = [
  {
    num: "01",
    tag: "PROXIMA",
    title: "Media Asset Management",
    desc: "Manage media assets from ingest to distribution with software codecs and NLE integration.",
  },
  {
    num: "02",
    tag: "ZODIAC",
    title: "Newsroom (NRCS)",
    desc: "Connect newsroom workflows across desktop and mobile, from planning and script writing to rundown creation and playout.",
  },
  {
    num: "03",
    tag: "TALOS",
    title: "Automated Playout (APC)",
    desc: "Automate program schedules and video server control in one APC system for stable on-air operations.",
  },
  {
    num: "04",
    tag: "EMOTION",
    title: "Radio",
    desc: "Hardware-independent radio production and playout — with multitrack editing and rundown support.",
    // 현재 미취급 솔루션 — 숨김. 복구하려면 이 줄을 지운다.
    hidden: true,
  },
  {
    num: "05",
    tag: "WINNER-S",
    title: "Audio File System",
    desc: "Run radio operations and manage audio assets across nine connected terminals in a networked, database-backed system.",
  },
  {
    num: "06",
    tag: "MAIA",
    title: "AI Technology",
    desc: "Generate metadata and subtitles with broadcast-trained AI, making media libraries fully searchable.",
  },
  {
    num: "07",
    tag: "MYMY",
    title: "Content Archive",
    desc: "Archive digital and video content long-term, with fast search across growing media libraries.",
  },
  {
    num: "08",
    tag: "G-SAM",
    title: "Content Distribution",
    desc: "Distribute content and track performance across YouTube, Instagram, X, and more.",
  },
];

const REASONS = [
  {
    icon: (
      // 미디어 처리 기술의 진화 — 우상향 추이
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 24 L12 16 L18 21 L28 9" />
        <path d="M21 9 L28 9 L28 16" />
      </svg>
    ),
    title: "Evolving Media Processing",
    desc: "We continuously advance our media processing technology to keep pace with a rapidly changing media landscape — helping customers adapt without replacing their existing platform.",
  },
  {
    icon: (
      // 자체 보유한 핵심 기술 — 칩(코어)
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="10" y="10" width="12" height="12" rx="1" />
        <path d="M13 4 V8 M19 4 V8 M13 24 V28 M19 24 V28 M4 13 H8 M4 19 H8 M24 13 H28 M24 19 H28" />
      </svg>
    ),
    title: "Proprietary Core Technology",
    desc: "Our engineers develop and own the core technologies behind our solutions — built to support the needs of modern broadcast environments worldwide.",
  },
  {
    icon: (
      // 한발 앞선 AX·AI 기술 지원 — 스파클(AI)
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 4 L16 11 L23 13 L16 15 L14 22 L12 15 L5 13 L12 11 Z" />
        <path d="M23 20 L24 23 L27 24 L24 25 L23 28 L22 25 L19 24 L22 23 Z" />
      </svg>
    ),
    title: "AX and AI, Ahead of the Curve",
    desc: "We research and apply the AX and AI technologies broadcasters need — helping customers stay ahead of change and lead what comes next.",
  },
  {
    icon: (
      // 방송 워크플로우에 대한 이해 — 흐름(파이프라인)
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="7" cy="9" r="3" />
        <circle cx="7" cy="23" r="3" />
        <circle cx="25" cy="16" r="3" />
        <path d="M10 9 H16 a3 3 0 0 1 3 3 V15 M10 23 H16 a3 3 0 0 0 3 -3 V17 M19 16 H22" />
      </svg>
    ),
    title: "Broadcast Workflow Expertise",
    desc: "We understand the full broadcast workflow, from production to playout, and design systems that fit real-world operations.",
  },
  {
    icon: (
      // 상생하는 성장 — 맞물린 협력
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="16" r="7" />
        <circle cx="20" cy="16" r="7" />
      </svg>
    ),
    title: "Growing Together",
    desc: "We grow through genuine collaboration with customers and partners, sharing the value created in every project.",
  },
];

const STATS = [
  { num: "20+ yrs", label: "Of accumulated media engineering" },
  { num: "Grade 1", label: "GS Certification — Proxima v3.0" },
  { num: "2015", label: "Named a Hidden Champion in broadcast equipment" },
  { num: "Nationwide", label: "In operation at Korea's major broadcasters" },
];

const TECH_ITEMS = [
  { n: "01", t: "Ingest & Video Encoding", d: "Software-based codec encoding for the formats broadcasters use every day" },
  { n: "02", t: "NLE Integration", d: "Native integration with editing systems and file-based workflows" },
  { n: "03", t: "Media Processing", d: "Transcoding, conversion, and normalization of media at scale" },
  { n: "04", t: "Cut Editing", d: "Fast, frame-accurate trimming and clip assembly" },
  { n: "05", t: "Archive System", d: "Reliable, searchable long-term storage for ever-growing libraries" },
  { n: "06", t: "Cataloging", d: "Rich metadata and indexing that make every asset findable" },
  { n: "07", t: "Media Transfer", d: "MOV–MXF and LXF–MXF transfer management via Transfer Manager" },
  { n: "08", t: "Workflow Management", d: "End-to-end orchestration of tasks and approvals" },
  { n: "09", t: "News Workflow", d: "Planning, reporting, desk, and rundowns in one newsroom" },
];

/* ------------------------------------------------------------------ 페이지 */

export default function Home() {
  return (
    <>
      {/* 히어로 */}
      <section
        className="gem-hero gem-hero--center"
        style={
          {
            // 데스크탑/모바일 배경을 CSS 변수로 넘겨 globals.css에서 미디어쿼리로 갈아끼운다.
            "--hero-bg": `url(${asset("/assets/hero/hero-bg5.webp")})`,
            "--hero-bg-sm": `url(${asset("/assets/hero/hero-bg5-mobile.webp")})`,
          } as CSSProperties
        }
      >
        <div className="gem-container gem-hero__grid gem-hero__grid--center">
          <Reveal>
            <div className="gem-eyebrow gem-eyebrow--badge">
              <span>Broadcast AI Transformation Partner</span>
            </div>
            <h1 className="gem-hero__title">
              Beyond Legacy —
              <br />
              Broadcasting,{" "}
              <br className="br-sm" />
              Rebuilt with <span className="gem-hero__hl">AX</span>
            </h1>
            <div className="gem-hero__actions">
              <Link href="/support/#inquiry" className="gem-btn gem-btn--primary">
                Discuss AX Strategy
                <span className="gem-arrow-slide" aria-hidden="true">
                  <span>→</span>
                  <span>→</span>
                </span>
              </Link>
            </div>
            {/* 신뢰 문구 임시 숨김
            <p className="gem-hero__note">
              Trusted by MBC, YTN, SBS, EBS, KTV, TBS, and Arirang TV.
            </p>
            */}
          </Reveal>
        </div>
        <HeroScrollButton />
      </section>

      {/* 브랜드 스테이트먼트 (토스 스타일 대형 문장) */}
      <section id="statement" className="gem-statement">
        <div className="gem-container">
          <Reveal>
            <ScrollHighlightText
              className="gem-statement__text"
              lines={[
                "Everyone talks about AX, but Geminisoft proves it in the field.",
                "Built on technology trusted by leading broadcasters,",
                "we're shaping what's next in broadcasting with AI.",
              ]}
            />
            <div className="gem-statement__actions">
              <a href="#solutions" className="gem-btn gem-btn--link">
                Explore Solutions
                <span className="gem-arrow-slide" aria-hidden="true">
                  <span>→</span>
                  <span>→</span>
                </span>
              </a>
            </div>
            {/* 고객사 롤링 배너 — Explore Solutions 버튼 아래 */}
            <div className="gem-marquee gem-marquee--inline" aria-label="Customers">
              <CustomerMarquee />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 솔루션 */}
      <section id="solutions" className="gem-section">
        <div className="gem-container">
          <Reveal className="gem-section__head">
            <div className="gem-eyebrow">
              <span>Solutions</span>
            </div>
            <h2 className="gem-title gem-title--nowrap">
              The Entire Media Lifecycle on One Platform
            </h2>
            <p className="gem-lead">
              From camera to playout and archive, every step is powered by
              proprietary solutions developed by Geminisoft.
            </p>
          </Reveal>

          <div className="gem-grid-cards">
            {SOLUTIONS.filter((s) => !s.hidden).map((s, i) => (
              <Link
                key={s.tag}
                href={`/solutions/${s.tag.toLowerCase()}/`}
                className="gem-card"
              >
                <div className="gem-card__meta">
                  <span className="gem-card__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="gem-card__tag">{s.tag}</span>
                </div>
                <h3 className="gem-card__title">{s.title}</h3>
                <p className="gem-card__desc">{s.desc}</p>
                <span className="gem-arrow">
                  Learn More
                  <span className="gem-arrow-slide" aria-hidden="true">
                    <span>→</span>
                    <span>→</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 선택 이유 + 통계 */}
      <section className="gem-section">
        <div className="gem-container">
          <Reveal className="gem-section__head">
            <div className="gem-eyebrow">
              <span>Why Geminisoft</span>
            </div>
            <h2 className="gem-title">Why Broadcasters Choose Geminisoft</h2>
          </Reveal>

          <Reveal as="div" className="gem-reasons">
            {REASONS.map((r, i) => (
              <div key={i} className="gem-reason">
                <span className="gem-reason__icon">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </Reveal>

          <Reveal as="div" className="gem-stats">
            {STATS.map((s, i) => (
              <div key={i} className="gem-stat">
                <div className="gem-stat__num">{s.num}</div>
                <div className="gem-stat__label">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 기술 */}
      <section className="gem-section gem-section--alt">
        <div className="gem-container">
          <Reveal className="gem-section__head">
            <div className="gem-eyebrow">
              <span>Technology</span>
            </div>
            <h2 className="gem-title">Proprietary Core Media Technologies</h2>
            <p className="gem-lead">
              Geminisoft develops and owns the core media technologies behind
              its solutions — spanning media asset management, archiving, and
              newsroom workflows.
            </p>
          </Reveal>

          <Reveal as="div" className="gem-grid-lines">
            {TECH_ITEMS.map((t) => (
              <div key={t.n} className="gem-tech">
                <span className="gem-tech__num">{t.n}</span>
                <h3>{t.t}</h3>
                <p>{t.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 뉴스 */}
      <section id="news" className="gem-section">
        <div className="gem-container">
          <Reveal className="gem-news__head">
            <div>
              <div className="gem-eyebrow">
                <span>News</span>
              </div>
              <h2 className="gem-title">The Latest from Geminisoft</h2>
            </div>
            <Link href="/news/" className="gem-news__more">
              View All News →
            </Link>
          </Reveal>

          <Reveal as="div" className="gem-news-grid">
            {LATEST_NEWS.map((n) => (
              <Link
                key={n.id}
                href={`/news/${n.id}/`}
                className="gem-news-card"
              >
                <div className="gem-news-card__thumb">
                  {n.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={asset(n.image)} alt={n.title} loading="lazy" />
                  ) : (
                    <span className="news-thumb__ph">GEMISO NEWS</span>
                  )}
                </div>
                <div className="gem-news-card__body">
                  <div className="gem-news-card__meta">
                    <span className="gem-news-card__cat">
                      {n.outlet || "Press Release"}
                    </span>
                    {n.date && (
                      <span className="gem-news-card__date">{n.date}</span>
                    )}
                  </div>
                  <h3 className="gem-news-card__title">{n.title}</h3>
                  <p className="gem-news-card__desc">{n.summary}</p>
                  <span className="gem-arrow">
                    Read More
                    <span className="gem-arrow-slide" aria-hidden="true">
                      <span>→</span>
                      <span>→</span>
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 컨택트 CTA */}
      <section id="contact" className="gem-contact">
        <Reveal className="gem-container gem-contact__grid">
          <div>
            <h2 className="gem-contact__title">Need More Information?</h2>
            <p className="gem-contact__desc">
              Tell us about your broadcast workflow and our team will help you
              find the right solution.
            </p>
            <div className="gem-contact__actions">
              <Link
                href="/support/#inquiry"
                className="gem-btn gem-btn--invert"
              >
                Contact Us
              </Link>
              <a
                href="#solutions"
                className="gem-btn gem-btn--underline-light"
              >
                Explore Solutions
                <span className="gem-arrow-slide" aria-hidden="true">
                  <span>→</span>
                  <span>→</span>
                </span>
              </a>
            </div>
          </div>

          <div className="gem-contact__info">
            <div className="gem-info-cell">
              <div className="gem-info-cell__label">Phone</div>
              <div className="gem-info-cell__value">{COMPANY.tel}</div>
            </div>
            <div className="gem-info-cell">
              <div className="gem-info-cell__label">Email</div>
              <CopyField
                text={COMPANY.email}
                label="Email"
                href={`mailto:${COMPANY.email}`}
              >
                {COMPANY.email}
              </CopyField>
            </div>
            <div className="gem-info-cell">
              <div className="gem-info-cell__label">Fax</div>
              <div className="gem-info-cell__value">{COMPANY.fax}</div>
            </div>
            <div className="gem-info-cell">
              <div className="gem-info-cell__label">Address</div>
              <CopyField
                text={COMPANY.addressLines.join(" ")}
                label="Address"
                small
              >
                {COMPANY.addressLines[0]}
                <br />
                {COMPANY.addressLines[1]}
              </CopyField>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
