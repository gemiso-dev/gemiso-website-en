import Reveal from "@/components/Reveal";
import { HOME_EVENT as ev } from "@/components/home-event-data";
import { asset } from "@/components/site-config";

/**
 * 홈 최상단 기간 한정 행사 배너.
 * 자동 종료 없음 — 내릴 때는 app/page.tsx에서 <HomeEventBanner />를 지운다.
 *
 * - 배너 이미지(`ev.image`)가 있으면: 가로형 배너를 카드 전체 폭으로 보여주고,
 *   일정·장소는 배너에 들어 있으므로 아래에 배지·제목·CTA만 한 줄로 둔다.
 * - 없으면: CSS 스폰서 포스터 + 일정·장소 표를 2단으로 보여준다.
 */
export default function HomeEventBanner() {
  if (ev.image) {
    return (
      <section className="gem-event" aria-label="Upcoming event">
        <div className="gem-container">
          <Reveal className="gem-event__card gem-event__card--banner">
            <a
              href={ev.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gem-event__banner"
            >
              <img src={asset(ev.image)} alt={ev.imageAlt} />
            </a>

            <div className="gem-event__bar">
              <div>
                <span className="gem-event__badge">
                  <span className="gem-event__dot" aria-hidden="true" />
                  {ev.eyebrow}
                </span>
                <h2 className="gem-event__title">{ev.title}</h2>
              </div>
              <EventCta />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="gem-event" aria-label="Upcoming event">
      <div className="gem-container">
        <Reveal className="gem-event__card">
          <a
            href={ev.href}
            target="_blank"
            rel="noopener noreferrer"
            className="gem-event__media"
          >
            <span className="gem-event__poster" role="img" aria-label={ev.imageAlt}>
              <span className="gem-event__poster-tier">Gold Sponsor</span>
              <img
                className="gem-event__poster-logo"
                src={asset("/assets/gemiso-logo-invert.svg")}
                alt=""
              />
              <span className="gem-event__poster-rule" aria-hidden="true" />
              <span className="gem-event__poster-event">
                2027 Silicon Valley
                <br />
                Video Summit
              </span>
              <span className="gem-event__poster-date">January 26, 2027</span>
            </span>
          </a>

          <div className="gem-event__body">
            <span className="gem-event__badge">
              <span className="gem-event__dot" aria-hidden="true" />
              {ev.eyebrow}
            </span>
            <h2 className="gem-event__title">{ev.title}</h2>
            <p className="gem-event__desc">{ev.desc}</p>

            <dl className="gem-event__meta">
              {ev.meta.map((m) => (
                <div key={m.label} className="gem-event__meta-row">
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>

            <EventCta />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EventCta() {
  return (
    <a
      href={ev.href}
      target="_blank"
      rel="noopener noreferrer"
      className="gem-btn gem-btn--primary gem-event__cta"
    >
      {ev.cta}
      <span className="gem-arrow-slide" aria-hidden="true">
        <span>→</span>
        <span>→</span>
      </span>
    </a>
  );
}
