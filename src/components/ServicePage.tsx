import "./service-page.css";
import type { Service, RowIcon } from "@/lib/services";

/* ---- inline icons (zero dependencies) ---- */
const S = {
  arrowR: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowUpR: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
};

function RowGlyph({ icon }: { icon: RowIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;

  switch (icon) {
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 3 3 5-6" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M3 12h18M3 6h18M3 18h12" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "tag":
      return (
        <svg {...common}>
          <path d="M20.6 13.4L13.4 20.6a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 3 12.2V5a2 2 0 0 1 2-2h7.2a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8z" />
          <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function ServicePage({ service }: { service: Service }) {
  const s = service;

  return (
    <main className="svc">
      {/* ---------------- HERO ---------------- */}
      <header className="hero">
        <div className="container grid">
          <div>
            <span className="pill reveal d1">
              <span className="star">★</span>&nbsp;{s.label}
            </span>
            <h1 className="reveal d2">
              {s.hero.lead} <em className="hl">{s.hero.em}</em>
            </h1>
            <p className="sub reveal d3">{s.hero.sub}</p>
            <div className="ctas reveal d4">
              <a href="#book" className="btn btn-blue">
                Work with me {S.arrowR}
              </a>
              <a href="/case-studies" className="btn btn-ghost">
                See case studies
              </a>
            </div>
          </div>

          <div className="herocard-wrap reveal d3">
            <div className="herocard">
              <div className="hc-top">
                <b>{s.heroCard.title}</b>
                <span>at a glance</span>
              </div>
              {s.heroCard.rows.map((r, i) => (
                <div className="hc-row" key={i}>
                  <span className="dot">
                    <RowGlyph icon={r.icon} />
                  </span>
                  <p>
                    {r.text}
                    <small>{r.sub}</small>
                  </p>
                </div>
              ))}
              <div className="hc-metrics">
                {s.heroCard.metrics.map((m, i) => (
                  <div key={i}>
                    <b>{m.value}</b>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="stamp" aria-hidden="true">
              <span className="ast">✳</span>
              <svg viewBox="0 0 120 120">
                <defs>
                  <path
                    id={`circ-${s.slug}`}
                    d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                  />
                </defs>
                <text>
                  <textPath href={`#circ-${s.slug}`} startOffset="0%">
                    {s.label.toUpperCase()} · ARHAAN SHAIKH ·{" "}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* ---------------- PAINS ---------------- */}
      <section className="pains">
        <div className="container">
          <span className="eyebrow">Sound familiar?</span>
          <h2>The problems this tends to solve.</h2>
          <div className="list">
            {s.pains.map((p, i) => (
              <div className="row" key={i}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FIT ---------------- */}
      <section className="fit">
        <div className="container">
          <span className="eyebrow">Who this is for</span>
          <h2>A fit check, up front.</h2>
          <div className="cols">
            <div className="fitcard yes">
              <h3>
                <span className="tagi">{S.check}</span>A good fit if
              </h3>
              <ul>
                {s.fit.yes.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="fitcard no">
              <h3>
                <span className="tagi">{S.cross}</span>Probably not if
              </h3>
              <ul>
                {s.fit.no.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- DELIVERABLES ---------------- */}
      <section className="deliver">
        <div className="container">
          <div className="head">
            <span className="eyebrow">What you get</span>
            <h2>What you walk away with.</h2>
            <p>Everything you need, documented and yours to keep.</p>
          </div>
          <div className="grid">
            {s.deliverables.map((d, i) => (
              <div className="d" key={i}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <b>{d.title}</b>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- STEPS ---------------- */}
      <section className="steps">
        <span className="wm" aria-hidden="true">
          Process
        </span>
        <div className="container">
          <span className="eyebrow on-blue">How it works</span>
          <h2>A simple way of working.</h2>
          <div className="grid">
            {s.steps.map((st, i) => (
              <div className="s" key={i}>
                <span className="n">{i + 1}</span>
                <b>{st.title}</b>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- RESULT ---------------- */}
      <section className="result">
        <div className="container">
          <span className="eyebrow">Results · sample</span>
          <blockquote>&ldquo;{s.result.quote}&rdquo;</blockquote>
          <p className="who">
            — {s.result.who} <span>(Representative Case)</span>
          </p>
          <div className="rr">
            <div className="x">
              <b>Situation</b>
              <span>{s.result.situation}</span>
            </div>
            <div className="x">
              <b>What we did</b>
              <span>{s.result.did}</span>
            </div>
            <div className="x">
              <b>Result</b>
              <span>{s.result.outcome}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PACKAGES ---------------- */}
      <section className="pkg">
        <div className="container">
          <span className="eyebrow">Ways to work together</span>
          <h2>Pick a starting point.</h2>
          <div className="cards">
            {s.packages.map((p, i) => (
              <div className={`pcard ${i === 0 ? "a" : "b"}`} key={i}>
                <span className="pnum">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <p className="desc">{p.desc}</p>
                <a href="#book" className="go">
                  {p.cta} <span className="circ">{S.arrowUpR}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="faq">
        <div className="container">
          <span className="eyebrow">Common questions</span>
          <h2>Good to know.</h2>
          {s.faqs.map((f, i) => (
            <details key={i} open={i === 0}>
              <summary>
                {f.q}
                <span className="pm" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="finalcta" id="book">
        <div className="container">
          <div className="inner">
            <span className="wm" aria-hidden="true">
              Arhaan
            </span>
            <div>
              <span className="eyebrow on-blue">Start a collaboration</span>
              <h2>
                {s.finalCta.lead} <em className="hl">{s.finalCta.em}</em>
              </h2>
            </div>
            <a href="/contact" className="btn btn-orange">
              Let&apos;s build together {S.arrowUpR}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

