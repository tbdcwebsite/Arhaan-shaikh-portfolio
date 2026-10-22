"use client";

import React, { useRef, useState, useEffect } from "react";

const STEPS = ["Listen", "Audit", "Strategize", "Execute"] as const;

export function ProcessSection() {
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = stepsContainerRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const startThreshold = vh * 0.68;
        const endThreshold = vh * 0.46;
        const totalDistance = (startThreshold - endThreshold) + rect.height;
        const currentScrolled = startThreshold - rect.top;
        const progress = Math.max(0, Math.min(1, currentScrolled / totalDistance));

        setP(progress);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const activeIdx = Math.min(
    STEPS.length - 1,
    Math.floor(p * STEPS.length)
  );

  return (
    <section
      id="process"
      className="relative w-full bg-[#121214] text-[#F8F8F5] py-24 sm:py-32 lg:py-40 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header: Clean headline without trailing badges */}
        <div className="mb-14 sm:mb-20 border-b border-white/10 pb-6 sm:pb-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.08] text-white">
            Our{" "}
            <span className="font-serif italic font-normal text-[#CDF225]">
              process.
            </span>
          </h2>
        </div>

        {/* Vertical Progress Rail & Big Steps */}
        <div ref={stepsContainerRef} className="relative pl-8 sm:pl-16 lg:pl-20">
          {/* Base Inactive Rail */}
          <div className="absolute bottom-0 left-2 top-0 w-px bg-white/10 sm:left-5" />

          {/* Glowing Active Progress Fill */}
          <div
            className="absolute left-2 top-0 w-[2px] -translate-x-px bg-[#CDF225] shadow-[0_0_12px_rgba(205,242,37,0.6)] sm:left-5 transition-all duration-150 ease-out pointer-events-none"
            style={{ height: `${p * 100}%` }}
          />

          {/* Diamond Scrub Indicator */}
          <div
            className="absolute left-2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#CDF225] shadow-[0_0_16px_rgba(205,242,37,0.85)] sm:left-5 transition-all duration-150 ease-out pointer-events-none"
            style={{ top: `${p * 100}%` }}
          />

          {/* Steps List */}
          <div className="space-y-4 sm:space-y-6">
            {STEPS.map((step, i) => {
              const isPassed = i <= activeIdx;
              const isCurrent = i === activeIdx;

              return (
                <div
                  key={step}
                  className="group flex items-baseline gap-4 sm:gap-8 lg:gap-12 py-2 sm:py-3 transition-transform duration-500"
                >
                  {/* Step Monospace Index */}
                  <span
                    className={`font-mono text-xs sm:text-sm font-semibold tracking-widest transition-colors duration-500 shrink-0 ${
                      isCurrent
                        ? "text-[#CDF225]"
                        : isPassed
                        ? "text-[#F8F8F5]/60"
                        : "text-[#F8F8F5]/20"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Giant Typography (Hollow Outline to Solid Ivory/Lime) */}
                  <span
                    style={{ fontFamily: "var(--font-display, inherit)" }}
                    className={`font-display font-heading font-extrabold tracking-tight leading-[0.95] text-[13vw] sm:text-[10vw] lg:text-[8vw] transition-all duration-500 will-change-transform ${
                      isCurrent
                        ? "text-[#F8F8F5] translate-x-3 sm:translate-x-8"
                        : isPassed
                        ? "text-[#F8F8F5]/40"
                        : "text-transparent [-webkit-text-stroke:1px_rgba(248,248,245,0.18)]"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
