import Link from "next/link";
import Reveal from "@/components/Reveal";
import NewsGrid from "@/components/NewsGrid";
import { NEWS_ARTICLES } from "@/components/news-data";
import { asset } from "@/components/site-config";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "News",
  description:
    "Press coverage, press releases, and product news from GEMISO — all in one place.",
  path: "/news/",
});

export default function NewsListPage() {
  const [featured, ...rest] = NEWS_ARTICLES;

  return (
    <>
      {/* 브레드크럼 */}
      <nav className="sol-breadcrumb" aria-label="Breadcrumb">
        <div className="gem-container sol-breadcrumb__inner">
          <Link href="/">Home</Link>
          <span className="gem-sep">›</span>
          <span className="sol-breadcrumb__current">News</span>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="news-hero">
        <div className="gem-container">
          <Reveal>
            <div className="gem-eyebrow gem-eyebrow--mono">
              <span>NEWSROOM</span>
            </div>
            <h1 className="news-hero__title">Newsroom</h1>
            <p className="news-hero__desc">
              Press coverage, press releases, and product news from GEMISO
              — all in one place.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 주요 소식 (featured) — 연한 그레이 섹션 */}
      <section className="news-featured-sec">
        <div className="gem-container">
          <Reveal className="gem-eyebrow gem-eyebrow--mono news-list__eyebrow">
            <span>Featured</span>
          </Reveal>

          <Reveal as="div">
            <Link href={`/news/${featured.id}/`} className="news-featured">
              <div className="news-featured__img">
                <span className="news-featured__badge">FEATURED</span>
                {featured.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={asset(featured.image)} alt={featured.title} />
                ) : (
                  <span className="news-thumb__ph">GEMISO NEWS</span>
                )}
              </div>
              <div className="news-featured__body">
                <div className="news-card__meta">
                  <span className="news-card__code">
                    {featured.outlet || "Press Release"}
                  </span>
                  <span className="news-card__date">{featured.date}</span>
                </div>
                <h2 className="news-featured__title">{featured.title}</h2>
                <p className="news-featured__excerpt">{featured.summary}</p>
                <span className="gem-arrow">
                  Learn More
                  <span className="gem-arrow-slide" aria-hidden="true">
                    <span>→</span>
                    <span>→</span>
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 전체 소식 — 흰색 섹션 */}
      <section className="news-list">
        <div className="gem-container">
          <div className="news-list__head">
            <div className="gem-eyebrow gem-eyebrow--mono">
              <span>All News</span>
            </div>
            <span className="news-list__total">{NEWS_ARTICLES.length} articles</span>
          </div>

          <Reveal as="div">
            <NewsGrid articles={rest} total={NEWS_ARTICLES.length} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
