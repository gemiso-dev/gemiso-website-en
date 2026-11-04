import Reveal from "@/components/Reveal";
import { HOME_EVENT as ev } from "@/components/home-event-data";
import { asset } from "@/components/site-config";

/**
 * 홈 최상단 기간 한정 행사 배너.
 * 자동 종료 없음 — 내릴 때는 app/page.tsx에서 <HomeEventBanner />를 지운다.
 */
export default function HomeEventBanner() {
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
            <img src={asset(ev.image)} alt={ev.imageAlt} loading="lazy" />
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
