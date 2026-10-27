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
        const startThreshold = vh * 0.72;
        const endThreshold = vh * 0.35;
        const totalDistance = startThreshold - endThreshold + rect.height;
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
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full text-[#121214] py-24 sm:py-32 lg:py-40 overflow-hidden select-none border-t border-[#121214]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* Section Header: Clean Mont + Butler Pairing */}
        <div className="mb-14 sm:mb-20 border-b border-[#121214]/10 pb-6 sm:pb-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold sm:font-extrabold tracking-tight leading-[1.08] text-[#121214]">
            Our{" "}
            <span className="font-serif italic font-normal text-[#EF8557]">
              process.
            </span>
          </h2>
        </div>

        {/* Vertical Progress Rail & Big Steps */}
        <div ref={stepsContainerRef} className="relative pl-8 sm:pl-16 lg:pl-20">
          
          {/* Base Inactive Rail */}
          <div className="absolute bottom-0 left-2 top-0 w-px bg-[#121214]/15 sm:left-5" />

          {/* Glowing Active Progress Fill (Steel Marine Blue) */}
          <div
            className="absolute left-2 top-0 w-[2px] -translate-x-px bg-[#226192] shadow-[0_0_10px_rgba(34,97,146,0.45)] sm:left-5 transition-all duration-150 ease-out pointer-events-none"
            style={{ height: `${p * 100}%` }}
          />

          {/* Diamond Scrub Indicator (Terracotta #EF8557 Accent) */}
          <div
            className="absolute left-2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#EF8557] shadow-[0_0_14px_rgba(239,133,87,0.7)] sm:left-5 transition-all duration-150 ease-out pointer-events-none"
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
                        ? "text-[#EF8557]"
                        : isPassed
                        ? "text-[#226192]"
                        : "text-[#121214]/25"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Giant Typography: Hollow Outlines on Cream to Solid Charcoal */}
                  <span
                    className={`font-sans font-bold sm:font-extrabold tracking-tight leading-[0.95] text-[13vw] sm:text-[10vw] lg:text-[8vw] transition-all duration-500 will-change-transform ${
                      isCurrent
                        ? "text-[#121214] translate-x-3 sm:translate-x-8"
                        : isPassed
                        ? "text-[#121214]/40"
                        : "text-transparent [-webkit-text-stroke:1.5px_rgba(18,18,20,0.22)]"
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
