"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import "./showcase.css";

export type ShowcaseTheme = "carlos" | "living" | "thatgal";

export interface ShowcaseStat {
  id: string;
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
  useComma?: boolean;
  label: string;
  icon: "rupee" | "trend" | "bag" | "eye" | "box" | "users" | "bar" | "tag" | "file" | "star";
  delay: string;
}

export interface AnimatedCaseStudyConfig {
  theme: ShowcaseTheme;
  brandName: string;
  brandNameAccent?: string;
  emblemIcon?: "watch" | "thatgal" | "living";
  showCaseBadge?: boolean;
  heroImage: string;
  heroAlt: string;
  quoteBefore: string;
  quoteHighlight: string;
  quoteAfter?: string;
  stats: ShowcaseStat[];
  tags: string[];
  badgeTop: string;
  badgeBottom: string;
}

export const CARLOS_PHILIP_CONFIG: AnimatedCaseStudyConfig = {
  theme: "carlos",
  brandName: "CARLOS PHILIP",
  heroImage: "/case studies/carlos.png",
  heroAlt: "Carlos Philip luxury timepiece case study",
  quoteBefore:
    "“How performance marketing built Carlos Philip from zero website sales into a profitable, repeatable watch business, and uncovered a ",
  quoteHighlight: "single collection that now carries the brand.",
  quoteAfter: "”",
  stats: [
    {
      id: "revenue",
      target: 47.7,
      decimals: 1,
      prefix: "₹",
      suffix: "L",
      label: "Revenue Generated",
      icon: "rupee",
      delay: "0.10s",
    },
    {
      id: "roas",
      target: 4.6,
      decimals: 1,
      suffix: "x",
      label: "Average ROAS",
      icon: "trend",
      delay: "0.18s",
    },
    {
      id: "sold",
      target: 505,
      decimals: 0,
      suffix: "+",
      label: "Watches Sold",
      icon: "bag",
      delay: "0.26s",
    },
    {
      id: "impressions",
      target: 2.4,
      decimals: 1,
      suffix: "Cr",
      label: "Impressions",
      icon: "eye",
      delay: "0.34s",
    },
    {
      id: "aov-day",
      target: 10899,
      decimals: 0,
      prefix: "₹",
      useComma: true,
      label: "Average Order / Day",
      icon: "box",
      delay: "0.42s",
    },
  ],
  tags: [
    "Strategies",
    "Restructuring",
    "Audience Optimization",
    "Creative Testing",
    "Premium Brand Scaling",
  ],
  badgeTop: "Precision That",
  badgeBottom: "Performs",
};

export const THATGAL_CONFIG: AnimatedCaseStudyConfig = {
  theme: "thatgal",
  brandName: "That",
  brandNameAccent: "Gal",
  emblemIcon: "thatgal",
  showCaseBadge: false,
  heroImage: "/case studies/ThatGal.png",
  heroAlt: "ThatGal luxury apparel case study",
  quoteBefore:
    "“How growth marketing scaled ThatGal from a slow high-ticket catalog into a profitable, repeatable ",
  quoteHighlight: "₹2.45 Cr revenue engine on Meta",
  quoteAfter: " — and uncovered the one collection that now carries the brand.”",
  stats: [
    {
      id: "revenue",
      target: 2.45,
      decimals: 2,
      prefix: "₹",
      suffix: "Cr",
      label: "Revenue Generated",
      icon: "rupee",
      delay: "0.10s",
    },
    {
      id: "roas",
      target: 6.63,
      decimals: 2,
      suffix: "×",
      label: "Blended ROAS",
      icon: "trend",
      delay: "0.18s",
    },
    {
      id: "units",
      target: 13106,
      decimals: 0,
      useComma: true,
      label: "Units Sold · 186 SKUs",
      icon: "bag",
      delay: "0.26s",
    },
    {
      id: "customers",
      target: 10430,
      decimals: 0,
      useComma: true,
      label: "Customers Acquired",
      icon: "users",
      delay: "0.34s",
    },
    {
      id: "lift",
      target: 92,
      decimals: 0,
      prefix: "+",
      suffix: "%",
      label: "ROAS Lift vs. Prior Yr",
      icon: "bar",
      delay: "0.42s",
    },
    {
      id: "cpa",
      target: 381,
      decimals: 0,
      prefix: "₹",
      label: "Blended CPA",
      icon: "tag",
      delay: "0.50s",
    },
  ],
  tags: [
    "Account Segmentation",
    "Demand Flywheel",
    "Hero-SKU Engineering",
    "Creator-Led Growth",
    "Measurement-Led Scaling",
  ],
  badgeTop: "Growth That",
  badgeBottom: "Compounds",
};

export const LIVING_SPACES_CONFIG: AnimatedCaseStudyConfig = {
  theme: "living",
  brandName: "Living ",
  brandNameAccent: "Spaces",
  emblemIcon: "living",
  showCaseBadge: false,
  heroImage: "/case studies/living spaces.png",
  heroAlt: "Living Spaces luxury furniture and interior case study",
  quoteBefore:
    "“How growth marketing turned a half-century-old Delhi furniture house into an ",
  quoteHighlight: "AI-first content engine",
  quoteAfter:
    " — a full-funnel system that turns scrolls into showroom conversations, and conversations into sales.”",
  stats: [
    {
      id: "revenue",
      target: 20.8,
      decimals: 2,
      prefix: "₹",
      suffix: "L",
      label: "Revenue · 90 Days",
      icon: "rupee",
      delay: "0.10s",
    },
    {
      id: "roas",
      target: 5.78,
      decimals: 2,
      suffix: "×",
      label: "Blended ROAS",
      icon: "trend",
      delay: "0.18s",
    },
    {
      id: "orders",
      target: 69,
      decimals: 0,
      label: "Orders Placed",
      icon: "bag",
      delay: "0.26s",
    },
    {
      id: "aov",
      target: 30145,
      decimals: 0,
      prefix: "₹",
      useComma: true,
      label: "Avg Order Value",
      icon: "tag",
      delay: "0.34s",
    },
    {
      id: "posts",
      target: 1415,
      decimals: 0,
      useComma: true,
      label: "Posts · AI Engine",
      icon: "file",
      delay: "0.42s",
    },
    {
      id: "heritage",
      target: 50,
      decimals: 0,
      suffix: "+",
      unit: "Yrs",
      label: "Brand Heritage",
      icon: "star",
      delay: "0.50s",
    },
  ],
  tags: [
    "AI-First Content",
    "Demand Generation",
    "WhatsApp Conversion",
    "Full-Funnel System",
    "Measurement-Led",
  ],
  badgeTop: "From Rooms To",
  badgeBottom: "Revenue",
};

const MOTES = [
  { left: "12%", top: "18%", size: 4, dur: "11s", delay: "0s" },
  { left: "28%", top: "74%", size: 3, dur: "9s", delay: "1.4s" },
  { left: "44%", top: "24%", size: 5, dur: "13s", delay: "0.6s" },
  { left: "61%", top: "68%", size: 3, dur: "10s", delay: "2.1s" },
  { left: "77%", top: "32%", size: 4, dur: "12s", delay: "0.9s" },
  { left: "86%", top: "78%", size: 3, dur: "9.5s", delay: "1.8s" },
  { left: "35%", top: "48%", size: 2.5, dur: "11.5s", delay: "2.7s" },
  { left: "69%", top: "15%", size: 3.5, dur: "10.5s", delay: "0.3s" },
  { left: "19%", top: "55%", size: 3, dur: "12.5s", delay: "3.1s" },
  { left: "53%", top: "84%", size: 4, dur: "10s", delay: "1.1s" },
];

function StatIcon({ name }: { name: ShowcaseStat["icon"] }) {
  switch (name) {
    case "rupee":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 3h12" />
          <path d="M6 8h12" />
          <path d="M6 13l8.5 8" />
          <path d="M6 13h3a4 4 0 0 0 0-10" />
        </svg>
      );
    case "trend":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case "bag":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "box":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "bar":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" x2="12" y1="20" y2="10" />
          <line x1="18" x2="18" y1="20" y2="4" />
          <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
      );
    case "tag":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
          <path d="M7 7h.01" />
        </svg>
      );
    case "file":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
  }
}

function formatStatValue(value: number, stat: ShowcaseStat): string {
  const decimals = stat.decimals ?? 0;
  let numStr = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  if (stat.useComma) {
    numStr = Math.round(value).toLocaleString("en-US");
  }
  return `${stat.prefix ?? ""}${numStr}${stat.suffix ?? ""}`;
}

function AnimatedStatNumber({ stat }: { stat: ShowcaseStat }) {
  const [display, setDisplay] = useState<string>(() => formatStatValue(stat.target, stat));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(formatStatValue(stat.target, stat));
      return;
    }

    let rafId = 0;
    const duration = 1350;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = stat.target * eased;
      setDisplay(formatStatValue(current, stat));
      if (t < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setDisplay(formatStatValue(stat.target, stat));
      }
    };

    setDisplay(formatStatValue(0, stat));
    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [stat]);

  return (
    <span className="cs-stat-value">
      {display}
      {stat.unit && <span className="cs-stat-unit">{stat.unit}</span>}
    </span>
  );
}

interface AnimatedCaseStudyShowcaseProps {
  config: AnimatedCaseStudyConfig;
  fontClassName?: string;
}

export default function AnimatedCaseStudyShowcase({
  config,
  fontClassName = "",
}: AnimatedCaseStudyShowcaseProps) {
  return (
    <main
      className={`cs-showcase ${fontClassName}`}
      data-theme={config.theme}
    >
      {/* Top-Right Floating Back Button */}
      <Link
        href="/#case-studies"
        aria-label="Back to Success Stories"
        className="fixed top-5 right-5 sm:top-6 sm:right-7 z-50 inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full bg-[#161310]/80 backdrop-blur-md border border-[#bd8a5e]/45 text-[#f2ece3] hover:bg-[#bd8a5e] hover:text-[#0a0806] hover:border-[#bd8a5e] transition-all duration-300 text-xs font-semibold tracking-[0.14em] uppercase shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d1a074]"
      >
        <ArrowLeft className="w-3.5 h-3.5 stroke-[2.2]" />
        <span>Back</span>
      </Link>

      {/* Left Hero Panel */}
      <div className="cs-hero">
        <div className="cs-hero-img-wrap">
          <Image
            src={config.heroImage}
            alt={config.heroAlt}
            fill
            priority
            unoptimized={true}
            sizes="(max-width: 860px) 100vw, 40vw"
            className="object-cover object-center select-none pointer-events-none"
          />
        </div>
        <div className="cs-hero-vignette" />
        <div className="cs-hero-sweep" />
        <div className="cs-hero-edge" />
        {config.showCaseBadge !== false && (
          <div className="cs-case-badge">CASE STUDY</div>
        )}
      </div>

      {/* Right Content Panel */}
      <section className="cs-content" aria-label={`${config.brandName}${config.brandNameAccent ?? ""} Case Study Metrics`}>
        <div className="cs-grain" />

        {/* Animated Floating Gold Motes */}
        <div className="cs-motes" aria-hidden="true">
          {MOTES.map((mote, i) => (
            <span
              key={i}
              className="cs-mote"
              style={
                {
                  left: mote.left,
                  top: mote.top,
                  width: `${mote.size}px`,
                  height: `${mote.size}px`,
                  "--dur": mote.dur,
                  "--delay": mote.delay,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="cs-main">
          {/* Brand Header */}
          <header className="cs-brand-row">
            <div className="cs-emblem" aria-hidden="true">
              {config.emblemIcon === "thatgal" ? (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <path d="M16 8a5 5 0 1 0 1 5" />
                  <path d="M16 4.5V9h-4.5" />
                </svg>
              ) : config.emblemIcon === "living" ? (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11l8-6 8 6" />
                  <path d="M6 10v8h12v-8" />
                  <path d="M10 18v-4h4v4" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="7" />
                  <polyline points="12 9 12 12 14.5 13.5" />
                  <path d="M9.5 2h5" />
                  <path d="M9.5 22h5" />
                </svg>
              )}
            </div>
            <div className="cs-title-group">
              <h1 className="cs-brand-name">
                {config.brandName}
                {config.brandNameAccent && (
                  <span className="cs-brand-name-accent">{config.brandNameAccent}</span>
                )}
              </h1>
              <div className="cs-brand-rule" />
            </div>
          </header>

          {/* Italic Pull Quote */}
          <blockquote className="cs-quote">
            {config.quoteBefore}
            <span className="cs-quote-hl">{config.quoteHighlight}</span>
            {config.quoteAfter}
          </blockquote>

          {/* Animated Stat Cards */}
          <div className={`cs-stats-grid ${config.stats.length % 2 === 1 ? "cs-stats-grid--odd" : ""}`}>
            {config.stats.map((stat) => (
              <div
                key={stat.id}
                className="cs-stat-card"
                style={{ "--d": stat.delay } as React.CSSProperties}
              >
                <div className="cs-stat-top">
                  <AnimatedStatNumber stat={stat} />
                  <div className="cs-stat-icon">
                    <StatIcon name={stat.icon} />
                  </div>
                </div>
                <div className="cs-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <footer className="cs-footer">
          <div className="cs-tags">
            {config.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {idx < config.tags.length - 1 && <span className="cs-tag-dot" aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>
          <div className="cs-angled-badge">
            <span className="cs-angled-top">{config.badgeTop}</span>
            <span className="cs-angled-bottom">{config.badgeBottom}</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
