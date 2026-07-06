import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import {
  NEWS_ARTICLES,
  getArticle,
  relatedArticles,
} from "@/components/news-data";
import { asset } from "@/components/site-config";
import { pageMetadata } from "@/components/seo";

type Params = { id: string };

/** 모든 기사를 정적 페이지로 생성(output: export). */
export function generateStaticParams(): Params[] {
  return NEWS_ARTICLES.map((a) => ({ id: String(a.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const a = getArticle(id);
  if (!a) return {};
  return pageMetadata({
    title: a.title,
    description: a.summary,
    path: `/news/${a.id}/`,
    image: a.image ?? undefined,
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const active = getArticle(id);
  if (!active) notFound();

  const related = relatedArticles(active.id);
  const paragraphs = active.summary.split("\n").filter((t) => t.trim());

  return (
    <>
      {/* 돌아가기 */}
      <div className="news-back">
        <div className="news-back__inner">
          <Link href="/news/" className="news-back__link">
            ← Back to Newsroom
          </Link>
        </div>
      </div>

      {/* 기사 헤더 */}
      <section className="news-detail__head">
        <Reveal className="news-detail__head-inner">
          <div className="news-card__meta">
            <span className="news-detail__code">
              {active.outlet || "Press Release"}
            </span>
            <span className="news-card__date">{active.date}</span>
          </div>
          <h1 className="news-detail__title">{active.title}</h1>
        </Reveal>
      </section>

      {/* 대표 이미지 */}
      {active.image && (
        <div className="news-detail__hero">
          <div className="news-detail__hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(active.image)} alt={active.title} />
          </div>
        </div>
      )}

      {/* 본문 */}
      <section className="news-detail__body">
        <div className="news-article">
          {paragraphs.map((text, i) => (
            <p key={i} className="news-article__p">
              {text}
            </p>
          ))}

          {/* 원문 보기 */}
          {active.href && (
            <a
              href={active.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gem-btn gem-btn--primary news-article__source"
            >
              {active.outlet ? `Read on ${active.outlet}` : "Read Original Article"} ↗
            </a>
          )}

          {/* 태그 + 공유 */}
          <div className="news-article__foot">
            <div className="news-article__tags">
              {active.outlet && <span className="news-tag">#{active.outlet}</span>}
              <span className="news-tag">#Geminisoft</span>
              <span className="news-tag">#BroadcastTech</span>
            </div>
            <div className="news-article__share">
              {active.href && (
                <a href={active.href} target="_blank" rel="noopener noreferrer">
                  Original Link
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 관련 소식 */}
      <section className="news-related">
        <div className="gem-container">
          <div className="gem-eyebrow gem-eyebrow--mono news-related__eyebrow">
            <span>Related News</span>
          </div>
          <div className="news-grid">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/news/${rel.id}/`}
                className="news-card news-card--compact"
              >
                <div className="news-thumb">
                  {rel.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={asset(rel.image)} alt={rel.title} loading="lazy" />
                  ) : (
                    <span className="news-thumb__ph">GEMISO NEWS</span>
                  )}
                </div>
                <div className="news-card__body">
                  <div className="news-card__meta">
                    <span className="news-card__code">
                      {rel.outlet || "Press Release"}
                    </span>
                    <span className="news-card__date">{rel.date}</span>
                  </div>
                  <h3 className="news-card__title">{rel.title}</h3>
                  <span className="gem-arrow">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="news-related__foot">
            <Link href="/news/" className="news-more__btn">
              ← View All News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
