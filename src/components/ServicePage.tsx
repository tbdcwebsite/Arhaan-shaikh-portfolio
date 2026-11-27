import Link from "next/link";
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
      <header className="relative overflow-hidden bg-[#EAE6DE] pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Copy & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-4 py-1.5 text-xs tracking-wide font-normal text-[#1A1A1A]">
                <svg
                  className="w-3.5 h-3.5 text-[#EF8557] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
                <span>{s.label}</span>
              </span>

              <h1 className="mt-5 text-[34px] sm:text-[44px] lg:text-[48px] xl:text-[56px] font-normal text-[#1A1A1A] leading-[1.08] tracking-[-0.02em] max-w-2xl">
                {s.hero.lead}{" "}
                <em className="font-serif italic font-semibold tracking-[-0.02em] text-[#EF8557]">
                  {s.hero.em}
                </em>
              </h1>

              <p className="mt-5 text-[#4A4A4A] text-base max-w-lg leading-relaxed font-normal">
                {s.hero.sub}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#226192] text-white px-6 py-3 text-sm font-medium hover:bg-[#1a4d75] transition-colors"
                >
                  <span>Work with me</span>
                  <span className="w-4 h-4 inline-flex items-center justify-center" aria-hidden="true">
                    {S.arrowR}
                  </span>
                </Link>
                <Link
                  href="/#case-studies"
                  className="inline-flex items-center rounded-full border border-black/25 text-[#1A1A1A] px-6 py-3 text-sm font-medium hover:border-black transition-colors"
                >
                  See case studies
                </Link>
              </div>
            </div>

            {/* Right Column: Tilted "At A Glance" Blueprint Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-[#FFFDF9] rounded-3xl border border-black/10 p-7 max-w-md w-full lg:rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between pb-4 mb-2 border-b border-[#EF8557]/40">
                  <span className="font-sans font-medium text-base text-[#226192]">
                    {s.heroCard.title}
                  </span>
                  <span className="text-[11px] tracking-widest font-medium uppercase text-[#EF8557]">
                    AT A GLANCE
                  </span>
                </div>

                <div className="divide-y divide-black/[0.08]">
                  {s.heroCard.rows.map((r, i) => (
                    <div key={i} className="flex items-start gap-3.5 py-3.5">
                      <span className="w-10 h-10 rounded-full bg-[#226192]/10 flex items-center justify-center text-[#226192] shrink-0">
                        <span className="w-4 h-4 inline-flex items-center justify-center">
                          <RowGlyph icon={r.icon} />
                        </span>
                      </span>
                      <div className="min-w-0">
                        <p className="font-medium text-[15px] text-[#1A1A1A] leading-snug">
                          {r.text}
                        </p>
                        <p className="font-normal text-[13px] text-[#666666] leading-snug mt-0.5">
                          {r.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2.5 mt-5">
                  {s.heroCard.metrics.map((m, i) => (
                    <div key={i} className="bg-[#EAE6DE]/60 rounded-2xl p-3 text-center">
                      <span className="block text-base font-semibold text-[#226192] leading-tight">
                        {m.value}
                      </span>
                      <span className="block text-[10px] tracking-wider uppercase text-[#666666] mt-1">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
                <a href="/contact" className="go">
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
    </main>
  );
}

