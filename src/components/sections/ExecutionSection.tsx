"use client";

import React from "react";

/**
 * ExecutionSection
 * ----------------
 * "Big Thinking, Real Execution." section with two crossed diagonal marquee ribbons
 * moving in opposite directions, faded through the centre for crisp readability.
 */

interface ExecutionSectionProps {
  eyebrow?: string;
  titleTop?: string;
  titleAccent?: string;
  subtitle?: string;
  tagline?: string;
}

const NAVY_WORDS = ["BIG THINKING", "REAL EXECUTION", "MEASURABLE OUTCOMES"];
const LIGHT_WORDS = ["STRATEGY", "CONTENT", "DIGITAL", "PERFORMANCE"];
const REPEAT = 4; // Repeats inside each half-track for seamless 50% loop

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
          <span className="es-heading-top">{titleTop}</span>
          <span className="es-heading-accent">{titleAccent}</span>
        </h2>

        <p className="es-subtitle">{subtitle}</p>
        <p className="es-tagline">{tagline}</p>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
.es-root {
  --es-bg: #EAE6DE;
  --es-navy: #226192;
  --es-orange: #EF8557;
  --es-ink: #121214;
  --es-ribbon-light: #FAF8F5;
  --es-muted: #5A554E;
  --es-font-display: var(--font-mont), var(--es-brand-font, "Inter", "Helvetica Neue", Arial, sans-serif);
  --es-font-serif: var(--font-butler), Georgia, serif;
  --es-font-mono: var(--font-mono), "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;

  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: var(--es-bg);
  padding: clamp(4.5rem, 10vw, 9rem) 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid rgba(18, 18, 20, 0.08);
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
  width: 180%;
  overflow: hidden;
  display: flex;
  padding-block: clamp(0.55rem, 1.1vw, 0.9rem);
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
  gap: clamp(0.75rem, 1.5vw, 1.25rem);
  padding-right: clamp(0.75rem, 1.5vw, 1.25rem);
  white-space: nowrap;
  font-family: var(--es-font-mono);
  font-size: clamp(0.65rem, 1.1vw, 0.9rem);
  font-weight: 700;
  letter-spacing: 0.14em;
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

/* Crossed Angles + Center Fade Mask */
.es-ribbon--navy {
  transform: translate(-50%, -50%) rotate(17deg);
  background: var(--es-navy);
  color: #ffffff;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 32%, transparent 46%, transparent 54%, #000 68%, #000 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 32%, transparent 46%, transparent 54%, #000 68%, #000 92%, transparent 100%);
}

.es-ribbon--light {
  transform: translate(-50%, -50%) rotate(-17deg);
  background: var(--es-ribbon-light);
  color: var(--es-ink);
  box-shadow: 0 4px 20px rgba(18, 18, 20, 0.05);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 32%, transparent 46%, transparent 54%, #000 68%, #000 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 32%, transparent 46%, transparent 54%, #000 68%, #000 92%, transparent 100%);
}

.es-star {
  color: var(--es-orange);
  font-size: 0.9em;
}
.es-word {
  display: inline-block;
}

/* ---- Content ---- */
.es-content {
  position: relative;
  z-index: 2;
  max-width: 56rem;
  margin: 0 auto;
}

/* Soft radial halo lifts text cleanly off the crossed ribbons */
.es-content::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 125%;
  height: 160%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse at center,
    rgba(234, 230, 222, 0.94) 0%,
    rgba(234, 230, 222, 0.75) 40%,
    rgba(234, 230, 222, 0) 72%
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
  padding: 0.5rem 1.1rem;
  font-family: var(--es-font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  box-shadow: 0 10px 30px -12px rgba(18, 18, 20, 0.18);
}

.es-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: var(--es-orange);
}

.es-heading {
  margin: clamp(1.5rem, 4vw, 2.5rem) 0 0;
  font-family: var(--es-font-display);
  font-weight: 800;
  line-height: 0.96;
  letter-spacing: -0.03em;
  font-size: clamp(2.75rem, 9.5vw, 7.2rem);
}

.es-heading-top {
  display: block;
  color: var(--es-ink);
}

.es-heading-accent {
  display: block;
  color: var(--es-orange);
  font-family: var(--es-font-serif);
  font-style: italic;
  font-weight: 400;
}

.es-subtitle {
  margin: clamp(1.25rem, 3vw, 2rem) auto 0;
  max-width: 44ch;
  color: #3E3D3A;
  font-family: var(--es-font-display);
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.6;
}

.es-tagline {
  margin: clamp(1.75rem, 4vw, 2.75rem) 0 0;
  font-family: var(--es-font-mono);
  font-size: clamp(0.65rem, 1vw, 0.78rem);
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--es-muted);
}

/* Mobile Responsive Angles */
@media (max-width: 640px) {
  .es-ribbon {
    width: 260%;
  }
  .es-ribbon--navy {
    transform: translate(-50%, -50%) rotate(22deg);
  }
  .es-ribbon--light {
    transform: translate(-50%, -50%) rotate(-22deg);
  }
}
`,
        }}
      />
    </section>
  );
}

export { ExecutionSection };
