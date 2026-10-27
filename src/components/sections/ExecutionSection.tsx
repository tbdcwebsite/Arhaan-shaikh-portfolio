"use client";

import React from "react";
import { motion } from "framer-motion";

export function ExecutionSection() {
  return (
    <section
      id="execution"
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full text-[#121214] pt-10 sm:pt-16 pb-20 sm:pb-28 overflow-hidden select-none border-t border-[#121214]/10"
    >
      <div className="relative z-10 mx-auto px-5 sm:px-8 text-center flex flex-col items-center max-w-7xl">

        {/* Top Kicker Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#121214]/10 bg-white/80 backdrop-blur-sm font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#121214]/75 mb-4 sm:mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EF8557] animate-pulse" />
          REAL-WORLD IMPACT
        </div>

        {/* ==============================================================
            HEADLINE + FULL-BLEED MOVING STRIPES STAGE (SWAPPED COLORS)
            ============================================================== */}
        <div className="relative w-full flex items-center justify-center py-10 sm:py-16 my-2">

          {/* --- FULL-BLEED MOVING STRIPES CONTAINER --- */}
          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            {/* Strip 1: Tilted Upward (-2.5deg) - SWAPPED TO CRISP WHITE */}
            <div className="absolute w-[150vw] -translate-y-5 sm:-translate-y-7 -rotate-[2.5deg] border-y border-[#121214]/10 bg-white py-2.5 sm:py-3.5 shadow-[0_12px_32px_rgba(18,18,20,0.08)] flex overflow-hidden z-[1]">
              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
                className="flex items-center gap-8 whitespace-nowrap font-mono font-bold text-xs sm:text-sm lg:text-base uppercase tracking-[0.24em] text-[#121214] will-change-transform"
              >
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="flex items-center gap-8">
                    <span>STRATEGY</span>
                    <span className="text-[#EF8557]">✦</span>
                    <span>CONTENT</span>
                    <span className="text-[#EF8557]">✦</span>
                    <span>DIGITAL</span>
                    <span className="text-[#EF8557]">✦</span>
                    <span>PERFORMANCE</span>
                    <span className="text-[#EF8557]">✦</span>
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Strip 2: Tilted Downward (+2deg) - SWAPPED TO STEEL MARINE BLUE */}
            <div className="absolute w-[150vw] translate-y-5 sm:translate-y-7 rotate-[2deg] border-y border-[#226192]/40 bg-[#226192] py-2.5 sm:py-3.5 shadow-[0_12px_32px_rgba(34,97,146,0.28)] flex overflow-hidden z-[2]">
              <motion.div
                initial={{ x: "-50%" }}
                animate={{ x: "0%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 26 }}
                className="flex items-center gap-8 whitespace-nowrap font-mono font-bold text-xs sm:text-sm lg:text-base uppercase tracking-[0.24em] text-white will-change-transform"
              >
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="flex items-center gap-8">
                    <span>BIG THINKING</span>
                    <span className="text-[#EF8557]">·</span>
                    <span>REAL EXECUTION</span>
                    <span className="text-[#EF8557]">·</span>
                    <span>MEASURABLE IMPACT</span>
                    <span className="text-[#EF8557]">·</span>
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Foreground Headline: Clean, Razor-Sharp (Zero Glow) */}
          <h2 className="relative z-10 font-sans text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.94] text-[#121214]">
            <span className="block">
              Big Thinking,
            </span>
            <span className="block font-serif italic font-normal text-[#EF8557] mt-1">
              Real Execution.
            </span>
          </h2>
        </div>

        {/* Editorial Subtitle */}
        <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-sm lg:text-base text-[#121214]/70 font-sans font-normal leading-relaxed">
          Strategy without execution is just theory. Every roadmap is built to launch, convert, and scale with speed and measurable outcomes.
        </p>

        {/* Bottom Monospace Strip */}
        <div className="mt-6 sm:mt-8 w-full flex justify-center">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#121214]/40 font-medium">
            BRAND. CONTENT. DIGITAL. PERFORMANCE.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ExecutionSection;
