"use client";

import React from "react";

/**
 * ExecutionSection
 * ----------------
 * "Big Thinking, Real Execution." section with two crossed diagonal marquee ribbons
 * moving in opposite directions, smoothly faded through the center for crisp readability.
 */

interface ExecutionSectionProps {
  eyebrow?: string;
  titleTop?: string;
  titleAccent?: string;
  subtitle?: string;
  tagline?: string;
}

const NAVY_WORDS = ["BIG THINKING", "REAL EXECUTION", "MEASURABLE IMPACT"];
const LIGHT_WORDS = ["STRATEGY", "PERFORMANCE"];
const REPEAT = 6; // Seamless 50% loop

function RibbonTrack({ words }: { words: string[] }) {
  const items: React.ReactNode[] = [];
  for (let r = 0; r < REPEAT; r++) {
    words.forEach((w, i) => {
      items.push(
        <span className="es-word" key={`w-${r}-${i}`}>
          {w}
        </span>
      );
      items.push(
        <span className="es-star" aria-hidden="true" key={`s-${r}-${i}`}>
          ✦
        </span>
      );
    });
  }
  return <div className="es-ribbon-track">{items}</div>;
}

export default function ExecutionSection({
  eyebrow = "REAL-WORLD IMPACT",
  titleTop = "Big Thinking,",
  titleAccent = "Real Execution.",
  subtitle = "Strategy without execution is just theory. Every roadmap is built to launch, convert, and scale with speed and measurable outcomes.",
  tagline = "BRAND. CONTENT. DIGITAL. PERFORMANCE.",
}: ExecutionSectionProps) {
  return (
    <section id="execution" className="es-root" aria-labelledby="es-heading">
      {/* Crossed Moving Marquee Ribbons */}
      <div className="es-ribbons" aria-hidden="true">
        {/* Navy Ribbon: Moves Left */}
        <div className="es-ribbon es-ribbon--navy">
          <div className="es-marquee-mover es-marquee--left">
            <RibbonTrack words={NAVY_WORDS} />
            <RibbonTrack words={NAVY_WORDS} />
          </div>
        </div>

        {/* Light Ribbon: Moves Right */}
        <div className="es-ribbon es-ribbon--light">
          <div className="es-marquee-mover es-marquee--right">
            <RibbonTrack words={LIGHT_WORDS} />
            <RibbonTrack words={LIGHT_WORDS} />
          </div>
        </div>
      </div>

      {/* Foreground Editorial Content */}
      <div className="es-content">
        <span className="es-eyebrow">
          <span className="es-dot" />
          {eyebrow}
        </span>

        <h2 id="es-heading" className="es-heading">
          <span className="es-heading-top font-sans font-bold">{titleTop}</span>
          <span className="es-heading-accent font-serif italic font-normal">{titleAccent}</span>
        </h2>

        <p className="es-subtitle">{subtitle}</p>
        <p className="es-tagline">{tagline}</p>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
.es-root {
  --es-bg: #F4F0E5;
  --es-navy: #1D507E;
  --es-orange: #EF8557;
  --es-ink: #121214;
  --es-ribbon-light: #FAF8F5;
  --es-muted: #8C867E;
  --es-font-display: "Mont", sans-serif;
  --es-font-serif: "Butler", Georgia, serif;

  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: var(--es-bg);
  padding: clamp(5.5rem, 11vw, 9.5rem) 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* ---- Ribbons ---- */
.es-ribbons {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.es-ribbon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 220%;
  overflow: hidden;
  display: flex;
  padding-block: clamp(0.7rem, 1.35vw, 1.15rem);
}

/* Continuous Marquee Wrapper */
.es-marquee-mover {
  display: flex;
  width: max-content;
  will-change: transform;
}

.es-marquee--left {
  animation: es-scroll-left 28s linear infinite;
}

.es-marquee--right {
  animation: es-scroll-right 32s linear infinite;
}

.es-ribbon-track {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: clamp(0.85rem, 1.6vw, 1.4rem);
  padding-right: clamp(0.85rem, 1.6vw, 1.4rem);
  white-space: nowrap;
  font-family: var(--font-mont), sans-serif;
  font-size: clamp(0.72rem, 1.1vw, 0.95rem);
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

@keyframes es-scroll-left {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

@keyframes es-scroll-right {
  0% {
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .es-marquee--left,
  .es-marquee--right {
    animation: none;
  }
}

/* Crossed Angles + Smooth Center Fade */
.es-ribbon--navy {
  z-index: 1;
  transform: translate(-50%, -50%) rotate(13deg);
  background: var(--es-navy);
  color: #ffffff;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 24%, rgba(0,0,0,0.12) 42%, transparent 48%, transparent 52%, rgba(0,0,0,0.12) 58%, #000 76%, #000 95%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 24%, rgba(0,0,0,0.12) 42%, transparent 48%, transparent 52%, rgba(0,0,0,0.12) 58%, #000 76%, #000 95%, transparent 100%);
}

.es-ribbon--light {
  z-index: 2;
  transform: translate(-50%, -50%) rotate(-13deg);
  background: var(--es-ribbon-light);
  color: var(--es-ink);
  box-shadow: 0 10px 32px rgba(18, 18, 20, 0.08);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 25%, rgba(0,0,0,0.18) 42%, transparent 48%, transparent 52%, rgba(0,0,0,0.18) 58%, #000 75%, #000 95%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 25%, rgba(0,0,0,0.18) 42%, transparent 48%, transparent 52%, rgba(0,0,0,0.18) 58%, #000 75%, #000 95%, transparent 100%);
}

.es-star {
  color: var(--es-orange);
  font-size: 0.9em;
}
.es-word {
  display: inline-block;
}

/* ---- Foreground Content ---- */
.es-content {
  position: relative;
  z-index: 10;
  max-width: 56rem;
  margin: 0 auto;
}

/* Soft luminous halo lifts text cleanly off the crossed ribbons */
.es-content::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 48%;
  width: 120%;
  height: 150%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse at center,
    rgba(244, 240, 229, 0.88) 0%,
    rgba(244, 240, 229, 0.55) 45%,
    rgba(244, 240, 229, 0) 78%
  );
  z-index: -1;
  pointer-events: none;
}

.es-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: #ffffff;
  color: var(--es-ink);
  border: 1px solid rgba(18, 18, 20, 0.08);
  border-radius: 999px;
  padding: 0.45rem 1.15rem;
  font-family: var(--es-font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  box-shadow: 0 4px 16px -2px rgba(18, 18, 20, 0.08);
}

.es-dot {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: var(--es-orange);
}

.es-heading {
  margin: clamp(1.4rem, 3.5vw, 2.25rem) 0 0;
  font-size: clamp(2.75rem, 1.4rem + 5vw, 5.75rem);
}

.es-heading-top {
  display: block;
  font-family: var(--es-font-display);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: var(--es-ink);
}

.es-heading-accent {
  display: block;
  font-family: "Butler", Georgia, serif !important;
  font-style: italic !important;
  font-weight: 400 !important;
  line-height: 1.04;
  letter-spacing: -0.015em;
  color: var(--es-orange);
  margin-top: 0.08em;
}

.es-subtitle {
  margin: clamp(1.4rem, 3vw, 2.1rem) auto 0;
  max-width: 54ch;
  color: #383531;
  font-family: var(--es-font-display);
  font-weight: 400;
  font-size: clamp(1rem, 1.4vw, 1.25rem);
  line-height: 1.65;
}

.es-tagline {
  margin: clamp(2rem, 4vw, 3rem) 0 0;
  font-family: var(--es-font-display);
  font-size: clamp(0.68rem, 0.9vw, 0.78rem);
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--es-muted);
}

/* Mobile Responsive Angles */
@media (max-width: 640px) {
  .es-ribbon {
    width: 320%;
  }
  .es-ribbon--navy {
    transform: translate(-50%, -50%) rotate(20deg);
  }
  .es-ribbon--light {
    transform: translate(-50%, -50%) rotate(-20deg);
  }
}
`,
        }}
      />
    </section>
  );
}

export { ExecutionSection };
