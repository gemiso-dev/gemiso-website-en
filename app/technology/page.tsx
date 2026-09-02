import Link from "next/link";
import Reveal from "@/components/Reveal";
import ZoomableImage from "@/components/ZoomableImage";
import { asset } from "@/components/site-config";
import { TECHNOLOGIES } from "@/components/technology-data";
import { pageMetadata } from "@/components/seo";

export const metadata = pageMetadata({
  title: "Technology",
  description:
    "From ingest and encoding to media processing, NLE integration, archive, transfer, workflow, and AI — the core technologies GEMISO has built through in-house R&D.",
  path: "/technology/",
});

export default function TechnologyPage() {
  return (
    <>
      {/* 브레드크럼 */}
      <nav className="sol-breadcrumb" aria-label="Breadcrumb">
        <div className="gem-container sol-breadcrumb__inner">
          <Link href="/">Home</Link>
          <span className="gem-sep">|</span>
          <span className="sol-breadcrumb__current">Technology</span>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="hist-hero">
        <div className="gem-container hist-hero__inner">
          <Reveal className="hist-hero__intro">
            <div className="hist-eyebrow">
              <span className="hist-eyebrow__tick" />
              <span className="hist-eyebrow__label">Technology</span>
            </div>
            <h1 className="hist-hero__title">
              From Acquisition to Playout — Technology That Shapes Your Workflow
            </h1>
            <p className="hist-hero__desc">
              From ingest and encoding to media processing, NLE integration,
              archive, transfer, workflow, and AI — we cover the entire
              broadcast workflow with technology we built ourselves.
            </p>
          </Reveal>

          {/* 기술 목차 (앵커 점프) */}
          <Reveal as="nav" className="tech-toc" aria-label="Technology contents">
            {TECHNOLOGIES.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="tech-toc__link">
                {t.title}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 기술 섹션 목록 */}
      <section className="tech-list">
        {TECHNOLOGIES.map((t, i) => {
          // 평면 이미지(확대·인터랙션·프레임 없음) 처리를 적용하는 꼭지들
          const flatImages =
            t.id === "processing" || t.id === "ai-compensation";
          return (
          <Reveal as="article" key={t.id} id={t.id} className="tech-item">
            <div className="gem-container">
              <header className="tech-item__head">
                <span className="tech-item__no">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="tech-item__code">{t.code}</span>
              </header>
              <h2 className="tech-item__title">{t.title}</h2>

              {t.blocks && t.blocks.length > 0 ? (
                <>
                  {t.intro && <p className="tech-item__lead">{t.intro}</p>}
                  <div
                    className={`sol-details tech-item__details${
                      flatImages ? " tech-item__details--flat" : ""
                    }`}
                  >
                    {t.blocks.map((b) => (
                      <div key={b.code} className="sol-detail">
                        {b.image && (
                          <div
                            className={`sol-detail__media${
                              b.imageNarrow && !flatImages
                                ? " sol-detail__media--narrow"
                                : ""
                            }`}
                          >
                            {flatImages ? (
                              // 평면 이미지(확대·인터랙션 없음)
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={asset(b.image)}
                                alt={`${b.code} ${b.title} diagram`}
                                style={{
                                  width: b.imageWidth,
                                  transform: b.imageScale
                                    ? `scale(${b.imageScale})`
                                    : undefined,
                                }}
                              />
                            ) : (
                              <ZoomableImage
                                src={asset(b.image)}
                                alt={`${b.code} ${b.title} diagram`}
                              />
                            )}
                          </div>
                        )}
                        <div className="sol-detail__body">
                          <div className="sol-detail__heading">
                            <h3 className="sol-detail__title">{b.title}</h3>
                            <span className="sol-detail__sub">{b.sub}</span>
                          </div>
                          <p className="sol-detail__desc">{b.desc}</p>
                          <ul className="sol-detail__points">
                            {b.points.map((p, pi) => {
                              const i = p.indexOf(" — ");
                              return (
                                <li key={p} className="sol-detail__point">
                                  <span className="sol-detail__point-num">
                                    {String(pi + 1).padStart(2, "0")}
                                  </span>
                                  <span className="sol-detail__point-body">
                                    {i === -1 ? (
                                      p
                                    ) : (
                                      <>
                                        <strong className="sol-detail__point-label">
                                          {p.slice(0, i)}
                                        </strong>
                                        <br />
                                        {p.slice(i + 3)}
                                      </>
                                    )}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="tech-item__placeholder">{t.summary}</p>
              )}
            </div>
          </Reveal>
          );
        })}
      </section>

      {/* CTA (accent 배경) — 솔루션 페이지와 동일한 스타일 */}
      <section className="sol-cta">
        <Reveal className="gem-container sol-cta__grid">
          <div>
            <h2 className="sol-cta__title">Let's Design the Technology You Need</h2>
            <p className="sol-cta__desc">
              Tell us about your broadcast workflow and our team will help you
              find the right technology and solutions.
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
              href="/solutions/proxima/"
              className="gem-btn gem-btn--underline-light"
            >
              View Solutions
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
