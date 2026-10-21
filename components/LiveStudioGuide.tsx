import { Fragment } from "react";
import { GUIDE, type Seg } from "@/components/live-studio-guide-data";

/** Plain / bold / inline-code runs. */
function Rich({ segs }: { segs: Seg[] }) {
  return (
    <>
      {segs.map((s, i) =>
        typeof s === "string" ? (
          <Fragment key={i}>{s}</Fragment>
        ) : "b" in s ? (
          <strong key={i}>{s.b}</strong>
        ) : (
          <code key={i} className="lsg-code">
            {s.c}
          </code>
        ),
      )}
    </>
  );
}

/** "a · b · c" → separate chips. */
function Chips({ text, mono = false }: { text: string; mono?: boolean }) {
  return (
    <span className="lsg-chips">
      {text.split(" · ").map((t) => (
        <span key={t} className={`lsg-chip${mono ? " lsg-chip--mono" : ""}`}>
          {t}
        </span>
      ))}
    </span>
  );
}

function Kicker({ children }: { children: string }) {
  return <div className="lsg__kicker">{children}</div>;
}

const METHOD_CLASS: Record<string, string> = {
  Software: "sw",
  "NVIDIA HW": "nv",
  "Intel HW": "in",
  "AMD HW": "amd",
  Hardware: "hw",
};

/** Hardware acceleration guide shown at the bottom of the Gemiso Live Studio page. */
export default function LiveStudioGuide() {
  const g = GUIDE;
  return (
    <div className="lsg">
      {/* Recommended specs */}
      <Kicker>{g.specs.kicker}</Kicker>
      <h3 className="lsg__h">{g.specs.heading}</h3>
      <p className="lsg__lead">
        <Rich segs={g.specs.lead} />
      </p>
      <div className="lsg-table-wrap">
        <table className="lsg-table lsg-table--spec">
          <thead>
            <tr>
              {g.specs.table.head.map((h, i) => (
                <th key={i} scope="col" className={i === g.specs.highlightCol ? "is-hl" : undefined}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {g.specs.table.rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row">
                      {c}
                    </th>
                  ) : (
                    <td key={j} className={j === g.specs.highlightCol ? "is-hl" : undefined}>
                      {c}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="lsg__callout">
        <Rich segs={g.specs.limitNote} />
      </p>
      <div className="lsg__callout lsg__callout--soft">
        <p>
          <Rich segs={g.specs.noteHead} />
        </p>
        <ul>
          {g.specs.noteList.map((segs, i) => (
            <li key={i}>
              <Rich segs={segs} />
            </li>
          ))}
        </ul>
      </div>

      {/* Hardware encoders (+ reference links) */}
      <Kicker>{g.encoders.kicker}</Kicker>
      <h3 className="lsg__h">{g.encoders.heading}</h3>
      <p className="lsg__lead">{g.encoders.lead}</p>
      <div className="lsg-cards">
        {g.encoders.cards.map((c) => (
          <article key={c.name} className="lsg-card" style={{ ["--lsg-dot" as string]: c.dot }}>
            <h4 className="lsg-card__name">
              <span className="lsg-card__dot" aria-hidden="true" />
              {c.name}
              {c.sub && <span className="lsg-card__sub">{c.sub}</span>}
            </h4>
            {c.text && <p className="lsg-card__text">{c.text}</p>}
            <div className="lsg-table-wrap">
              <table className="lsg-table lsg-table--enc">
                <thead>
                  <tr>
                    <th scope="col">Codec</th>
                    <th scope="col">Display name in settings</th>
                    <th scope="col">{c.thLast}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.codecs.map((r) => (
                    <tr key={r.label}>
                      <th scope="row">
                        {r.codec}
                        {r.soon && <span className="lsg-soon">Coming soon</span>}
                      </th>
                      <td>
                        <code className="lsg-code">{r.label}</code>
                      </td>
                      <td>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {c.points.length > 0 && (
              <ul className="lsg-card__points">
                {c.points.map((segs, i) => (
                  <li key={i}>
                    <Rich segs={segs as Seg[]} />
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
      <div className="lsg-refs">
        <h4 className="lsg__h4">{g.encoders.refs.heading}</h4>
        <ul>
          {g.encoders.refs.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} →
              </a>
            </li>
          ))}
        </ul>
        <p>{g.encoders.refs.note}</p>
      </div>

      {/* Supported codecs */}
      <Kicker>{g.codecs.kicker}</Kicker>
      <h3 className="lsg__h">{g.codecs.heading}</h3>
      <p className="lsg__lead">
        <Rich segs={g.codecs.lead} />
      </p>
      <h4 className="lsg__h4">{g.codecs.decodeHeading}</h4>
      <p className="lsg__lead">{g.codecs.decodeLead}</p>
      <div className="lsg-table-wrap">
        <table className="lsg-table lsg-table--decode">
          <thead>
            <tr>
              {g.codecs.decode.head.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {g.codecs.decode.rows.map((r) => (
              <tr key={r[0]}>
                <th scope="row">{r[0]}</th>
                <td>
                  <Chips text={r[1]} />
                </td>
                <td>
                  <Chips text={r[2]} mono />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="lsg__callout">
        <Rich segs={g.codecs.decodeNote} />
      </p>

      <h4 className="lsg__h4">{g.codecs.encodeHeading}</h4>
      <p className="lsg__sub">{g.codecs.videoHeading}</p>
      <div className="lsg-table-wrap">
        <table className="lsg-table lsg-table--video">
          <thead>
            <tr>
              {g.codecs.video.head.map((h, i) => (
                <th key={h} scope="col" className={i === 2 || i === 3 ? "is-c" : undefined}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {g.codecs.video.rows.map((r) => (
              <tr key={r[0]}>
                <td>
                  <code className="lsg-code">{r[0]}</code>
                </td>
                <td>
                  <span className={`lsg-method lsg-method--${METHOD_CLASS[r[1]] ?? "sw"}`}>{r[1]}</span>
                </td>
                {[2, 3].map((k) => (
                  <td key={k} className="is-c">
                    <span className={r[k] === "O" ? "lsg-ok" : "lsg-no"} aria-label={r[k] === "O" ? "Supported" : "Not yet"}>
                      {r[k] === "O" ? "✓" : "—"}
                    </span>
                  </td>
                ))}
                <td>{r[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="lsg__callout">
        <Rich segs={g.codecs.encodeNote} />
      </p>
      <p className="lsg__sub">{g.codecs.audioHeading}</p>
      <div className="lsg-table-wrap">
        <table className="lsg-table">
          <thead>
            <tr>
              {g.codecs.audio.head.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {g.codecs.audio.rows.map((r) => (
              <tr key={r[0]}>
                <td>
                  <code className="lsg-code">{r[0]}</code>
                </td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="lsg__callout">
        <Rich segs={g.codecs.audioNote} />
      </p>

      {/* Setup */}
      <Kicker>{g.setup.kicker}</Kicker>
      <h3 className="lsg__h">{g.setup.heading}</h3>
      <p className="lsg__lead">
        <Rich segs={g.setup.lead} />
      </p>
      <h4 className="lsg__h4">{g.setup.mustHeading}</h4>
      <div className="lsg-must">
        {g.setup.must.map((m) => (
          <div key={m.item} className="lsg-must__row">
            <div className="lsg-must__item">
              <strong>{m.item}</strong>
              <span className="lsg-chip lsg-chip--mono">{m.where}</span>
            </div>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
      <h4 className="lsg__h4">{g.setup.defaultsHeading}</h4>
      <div className="lsg-kv">
        {g.setup.defaults.map(([k, v]) => (
          <div key={k} className="lsg-kv__item">
            <span>{k}</span>
            <b>{v}</b>
          </div>
        ))}
      </div>
      <p className="lsg__callout lsg__callout--warn">
        <Rich segs={g.setup.caution} />
      </p>

      {/* Troubleshooting */}
      <Kicker>{g.faq.kicker}</Kicker>
      <h3 className="lsg__h">{g.faq.heading}</h3>
      <div className="lsg-faq">
        {g.faq.items.map((f) => (
          <details key={f.q} className="lsg-faq__item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
