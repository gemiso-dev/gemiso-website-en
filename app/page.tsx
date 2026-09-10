import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroScrollButton from "@/components/HeroScrollButton";
import CustomerMarquee from "@/components/CustomerMarquee";
import CopyField from "@/components/CopyField";
import { COMPANY, asset } from "@/components/site-config";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "Broadcasting, Rebuilt with AX — AI Media Platform for Broadcasters",
  description:
    "GEMISO delivers AX technology for AI-driven, platform-aware broadcasting. We build new media business models that put broadcasters shoulder to shoulder with global OTT services.",
  path: "/",
});

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
  { num: "Tier-1", label: "In operation at national broadcast networks" },
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
    <div className="gem-home">
      {/* 히어로 (+ 브랜드 스테이트먼트 통합) */}
      <section className="gem-hero gem-hero--split">
        <div className="gem-container gem-hero__grid">
          <Reveal>
            <div className="gem-eyebrow gem-eyebrow--badge">
              <span>Broadcast AI Transformation Partner</span>
            </div>
            <h1 className="gem-hero__title">
              Your AI Broadcast Transformation Partner
              <br />
              <span className="gem-hero__hl">
                A Quarter Century Of Creative Innovation
              </span>
            </h1>
            <p className="gem-hero__desc">
              Built on technology trusted by leading broadcasters, we&apos;re
              shaping what&apos;s next in broadcasting workflows with AI.
            </p>
            <div className="gem-hero__actions">
              <a href="#solutions" className="gem-btn gem-btn--outline">
                Explore Solutions
                <span className="gem-arrow-slide" aria-hidden="true">
                  <span>→</span>
                  <span>→</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal className="gem-hero__media">
            <video
              className="gem-hero__video"
              src={asset("/assets/hero/landing-video.mp4")}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          </Reveal>
        </div>
        <HeroScrollButton />
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
              proprietary solutions developed by GEMISO.
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
              <span>Why GEMISO</span>
            </div>
            <h2 className="gem-title">Why Broadcasters Choose GEMISO</h2>
          </Reveal>

          <Reveal as="div" className="gem-reasons">
            {REASONS.map((r, i) => (
              <div key={i} className="gem-reason">
                <div className="gem-reason__head">
                  <span className="gem-reason__icon">{r.icon}</span>
                  <h3>{r.title}</h3>
                </div>
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
        {/* 고객사 롤링 배너 */}
        <div className="gem-marquee" aria-label="Customers">
          <CustomerMarquee />
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
              GEMISO develops and owns the core media technologies behind
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

      {/* Contact CTA */}
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
              <div className="gem-info-cell__label">Sales</div>
              <CopyField
                text={COMPANY.email}
                label="Sales email"
                href={`mailto:${COMPANY.email}`}
              >
                {COMPANY.email}
              </CopyField>
            </div>
            <div className="gem-info-cell">
              <div className="gem-info-cell__label">Technical Support</div>
              <CopyField
                text={COMPANY.techEmail}
                label="Support email"
                href={`mailto:${COMPANY.techEmail}`}
              >
                {COMPANY.techEmail}
              </CopyField>
            </div>
            <div className="gem-info-cell">
              <div className="gem-info-cell__label">Hours</div>
              <div className="gem-info-cell__value gem-info-cell__value--sm">
                9 AM – 6 PM Pacific Time
                <br />
                Monday–Friday
              </div>
            </div>
            {/* Takes the toll-free number as soon as COMPANY.tel is filled in. */}
            <div className="gem-info-cell">
              <div className="gem-info-cell__label">
                {COMPANY.tel ? "Phone" : "Response"}
              </div>
              <div className="gem-info-cell__value gem-info-cell__value--sm">
                {COMPANY.tel ? (
                  <a href={COMPANY.telHref}>{COMPANY.tel}</a>
                ) : (
                  "Within 1 business day"
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
