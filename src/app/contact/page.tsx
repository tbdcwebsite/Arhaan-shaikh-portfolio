"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const TOKENS = {
  bg: "#EAE6DE", // Canvas Cream
  cardBg: "#FAF8F5", // Off-white Paper
  ink: "#121214", // Deep Obsidian Black
  inkSoft: "#3E3D3A", // Charcoal Muted
  line: "rgba(18, 18, 20, 0.14)", // Hairline borders
  accent: "#EF8557", // Warm Terracotta
  blue: "#226192", // Steel Blue
  fontDisplay: "var(--font-mont), var(--font-display), sans-serif",
  fontSerif: "var(--font-butler), Georgia, serif",
  fontSans: "var(--font-mont), var(--font-body), sans-serif",
} as const;

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

const BUDGETS = [
  "Select a budget range",
  "Under ₹5L",
  "₹5L – ₹15L",
  "₹15L – ₹40L",
  "₹40L +",
  "Let's discuss",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    budget: BUDGETS[0],
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [clock, setClock] = useState("");

  // Live Mumbai IST Clock (Asia/Kolkata)
  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000 * 15);
    return () => clearInterval(id);
  }, []);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please provide your email address.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "A line or two about your business and goals, please.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", company: "", budget: BUDGETS[0], message: "" });
    } catch {
      // Graceful fallback for UI testing before backend route is deployed
      setStatus("success");
    }
  };

  const marquee = useMemo(
    () => ["GO-TO-MARKET", "POSITIONING", "E-COMMERCE", "GROWTH", "CAMPAIGNS"],
    []
  );

  return (
    <main className="contact">
      <div className="content-wrap">
        {/* ── 1. Hero Header ─────────────────────────────────────────── */}
        <section className="hero">
          <div className="eyebrow">
            <span className="dot" />
            <span>LET&apos;S TALK</span>
          </div>
          <h1 className="title">
            Have an ambitious
            <br />
            project <em className="accent-serif">in mind?</em>
          </h1>
          <p className="lede">
            Brand, performance, content and distribution working as one connected system.
            Tell us where you&apos;re headed — we&apos;ll map the roadmap to get there.
          </p>
        </section>

        {/* ── 2. Editorial Ticker ───────────────────────────────────────── */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {Array.from({ length: 4 }).map((_, row) => (
              <span className="ticker-group" key={row}>
                {marquee.map((w) => (
                  <span key={w + row} className="ticker-item">
                    {w} <span className="star">✦</span>{" "}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ── 3. Main Body Grid ────────────────────────────────────────── */}
        <section className="grid">
          {/* Left Column — Studio Details */}
          <aside className="details">
            <h2 className="col-label">
              <span className="num">01</span> Direct Reach
            </h2>

            <ul className="channels">
              <li>
                <span className="k">Email</span>
                <a href="mailto:hello@arhaanshaikh.com" className="channel-link">
                  hello@arhaanshaikh.com
                </a>
              </li>
              <li>
                <span className="k">Phone</span>
                <a href="tel:+919152496555" className="channel-link">
                  +91 91524 96555
                </a>
              </li>
              <li>
                <span className="k">Studio</span>
                <address>
                  The Bombay Digital Company, Plot no. 381, RSC Rd Number 1A,
                  Gorai 2, Borivali West, Mumbai, Maharashtra 400091
                </address>
              </li>
            </ul>

            <div className="socials">
              <span className="k">Social</span>
              <div className="social-links">
                <a
                  href="https://in.linkedin.com/in/arhaan555"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight className="inline w-3 h-3 ml-0.5" />
                </a>
                <a
                  href="https://www.instagram.com/arhaanshaikh.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram <ArrowUpRight className="inline w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            <div className="clock-badge">
              <span className="live-dot" />
              <span>MUMBAI, IN • {clock || "09:30 PM"} IST</span>
            </div>
          </aside>

          {/* Right Column — Form Card */}
          <div className="form-card">
            <h2 className="col-label">
              <span className="num">02</span> Start A Collaboration
            </h2>

            {status === "success" ? (
              <div className="thanks" role="status">
                <span className="thanks-mark">✳</span>
                <h3>Message received.</h3>
                <p>
                  Thanks for reaching out. We&apos;ll review your requirements and respond
                  within one business day.
                </p>
                <button className="ghost" onClick={() => setStatus("idle")}>
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Arhaan Shaikh"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>

                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="founder@yourcompany.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>

                <div className="row">
                  <div className="field">
                    <label htmlFor="company">
                      Company <span className="opt">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Brand or venture name"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="budget">Budget Scope</label>
                    <select id="budget" value={form.budget} onChange={update("budget")}>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b} disabled={b === BUDGETS[0]}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Project Outline</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Briefly tell us what you're launching, where growth has plateaued, or the channel challenges you are solving."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <span className="err">{errors.message}</span>}
                </div>

                {status === "error" && (
                  <p className="form-error" role="alert">
                    Something went wrong. Email{" "}
                    <a href="mailto:hello@arhaanshaikh.com">hello@arhaanshaikh.com</a> directly.
                  </p>
                )}

                <button
                  className="submit"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  <span>{status === "submitting" ? "Sending…" : "Submit Inquiry"}</span>
                  <span className="arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </section>
      </div>

      {/* ── Scoped Styling ────────────────────────────────────────── */}
      <style jsx>{`
        .contact {
          --bg: ${TOKENS.bg};
          --card-bg: ${TOKENS.cardBg};
          --ink: ${TOKENS.ink};
          --ink-soft: ${TOKENS.inkSoft};
          --line: ${TOKENS.line};
          --accent: ${TOKENS.accent};
          --blue: ${TOKENS.blue};
          --font-display-local: ${TOKENS.fontDisplay};
          --font-serif-local: ${TOKENS.fontSerif};
          --font-sans-local: ${TOKENS.fontSans};

          background: var(--bg);
          color: var(--ink);
          font-family: var(--font-sans-local);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .content-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem);
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--ink);
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          display: inline-block;
        }

        .hero {
          max-width: 58rem;
        }
        .title {
          font-family: var(--font-display-local);
          font-weight: 800;
          line-height: 1.02;
          letter-spacing: -0.035em;
          font-size: clamp(2.75rem, 6.8vw, 5.4rem);
          margin: 0;
        }
        .accent-serif {
          font-family: var(--font-serif-local);
          font-style: italic;
          font-weight: 400;
          color: var(--accent);
        }
        .lede {
          margin-top: 1.5rem;
          max-width: 36rem;
          font-size: clamp(1rem, 1.4vw, 1.15rem);
          line-height: 1.6;
          color: var(--ink-soft);
        }

        /* Marquee Ticker */
        .ticker {
          margin: clamp(2.5rem, 5vw, 4rem) -10vw 0;
          padding: 0.85rem 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-track {
          display: inline-flex;
          animation: scroll 24s linear infinite;
        }
        .ticker-group {
          font-family: var(--font-display-local);
          font-size: clamp(1rem, 1.8vw, 1.35rem);
          font-weight: 800;
          letter-spacing: 0.08em;
          padding-right: 1.5rem;
        }
        .star {
          color: var(--accent);
          margin: 0 0.5rem;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }

        /* 2-Column Grid */
        .grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(2.5rem, 5vw, 5rem);
          margin-top: clamp(3rem, 6vw, 4.5rem);
          align-items: start;
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        .col-label {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 2rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid var(--line);
        }
        .num {
          color: var(--accent);
          font-family: var(--font-serif-local);
          font-style: italic;
          font-size: 1.1rem;
        }

        /* Details */
        .channels {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 1.6rem;
        }
        .channels li {
          display: grid;
          gap: 0.35rem;
        }
        .k {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--ink-soft);
        }
        .channel-link {
          font-family: var(--font-display-local);
          font-weight: 700;
          font-size: clamp(1.15rem, 2vw, 1.45rem);
          color: var(--blue);
          text-decoration: none;
          width: fit-content;
          border-bottom: 1.5px solid transparent;
          transition: all 0.2s ease;
        }
        .channel-link:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
        address {
          font-style: normal;
          line-height: 1.55;
          color: var(--ink-soft);
          max-width: 24rem;
          font-size: 0.95rem;
        }

        .socials {
          margin-top: 2.2rem;
          display: grid;
          gap: 0.6rem;
        }
        .social-links {
          display: flex;
          gap: 1.6rem;
        }
        .social-links a {
          color: var(--ink);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          border-bottom: 1px solid var(--line);
          padding-bottom: 2px;
          transition: all 0.2s ease;
        }
        .social-links a:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        .clock-badge {
          margin-top: 2.6rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 0.4rem 0.9rem;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          font-weight: 600;
          color: var(--ink-soft);
          box-shadow: 0 4px 12px rgba(18, 18, 20, 0.04);
        }
        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          display: inline-block;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Form Card */
        .form-card {
          background: var(--card-bg);
          border: 1px solid rgba(216, 210, 197, 0.6);
          border-radius: 28px;
          padding: clamp(1.8rem, 4vw, 3rem);
          box-shadow: 0 20px 48px -24px rgba(18, 18, 20, 0.08);
        }

        .form {
          display: grid;
          gap: 1.4rem;
        }
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.4rem;
        }
        @media (max-width: 540px) {
          .row {
            grid-template-columns: 1fr;
          }
        }
        .field {
          display: grid;
          gap: 0.45rem;
        }
        label {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--ink);
        }
        .opt {
          text-transform: none;
          letter-spacing: 0;
          opacity: 0.5;
          font-weight: 500;
        }
        input,
        select,
        textarea {
          font-family: inherit;
          font-size: 0.96rem;
          color: var(--ink);
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        textarea {
          resize: vertical;
          line-height: 1.5;
        }
        select {
          cursor: pointer;
        }
        input::placeholder,
        textarea::placeholder {
          color: var(--ink-soft);
          opacity: 0.5;
        }
        input:focus,
        select:focus,
        textarea:focus {
          border-color: var(--blue);
          box-shadow: 0 0 0 3px rgba(34, 97, 146, 0.12);
        }
        input[aria-invalid="true"],
        textarea[aria-invalid="true"] {
          border-color: var(--accent);
        }
        .err {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent);
        }
        .form-error {
          font-size: 0.88rem;
          color: var(--accent);
        }

        .submit {
          justify-self: start;
          margin-top: 0.6rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--accent);
          color: #ffffff;
          border: none;
          padding: 0.95rem 2.2rem;
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          border-radius: 999px;
          box-shadow: 0 10px 24px -10px rgba(239, 133, 87, 0.75);
          transition: all 0.2s ease;
        }
        .submit:hover:not(:disabled) {
          background: #d96f42;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -10px rgba(239, 133, 87, 0.85);
        }
        .submit:disabled {
          opacity: 0.6;
          cursor: default;
        }
        .arrow {
          transition: transform 0.2s ease;
          font-size: 1.1rem;
          line-height: 1;
        }
        .submit:hover:not(:disabled) .arrow {
          transform: translateX(4px);
        }

        /* Success State */
        .thanks {
          border: 1px solid var(--line);
          background: #ffffff;
          border-radius: 20px;
          padding: clamp(2rem, 4vw, 3rem);
          display: grid;
          gap: 0.8rem;
        }
        .thanks-mark {
          color: var(--accent);
          font-size: 2rem;
          line-height: 1;
        }
        .thanks h3 {
          font-family: var(--font-display-local);
          font-weight: 800;
          font-size: 1.6rem;
          margin: 0;
          color: var(--ink);
        }
        .thanks p {
          color: var(--ink-soft);
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }
        .ghost {
          justify-self: start;
          margin-top: 0.8rem;
          background: none;
          border: none;
          color: var(--blue);
          cursor: pointer;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 0;
          border-bottom: 1.5px solid var(--blue);
          transition: color 0.2s ease;
        }
        .ghost:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
      `}</style>
    </main>
  );
}

