"use client";

import React from "react";
import { motion } from "framer-motion";

export function ExecutionSection() {
  return (
    <section
      id="execution"
      className="relative w-full bg-[#121214] text-[#F8F8F5] pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden select-none"
    >
      <div className="relative z-10 mx-auto px-5 sm:px-8 text-center flex flex-col items-center">

        {/* Top Kicker Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-[#161618] font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#F8F8F5]/80 mb-4 sm:mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CDF225] animate-pulse" />
          REAL-WORLD IMPACT
        </div>

        {/* ==============================================================
            HEADLINE + STRIPES STAGE (STRIPES LOCKED ONLY TO THIS BOX)
            ============================================================== */}
        <div className="relative w-full flex items-center justify-center py-6 sm:py-10 my-1">

          {/* --- INTERSECTING STRIPES: BOUND STRICTLY BEHIND THE HEADLINE --- */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            {/* Strip 1: Tilted Upward (-2.5deg) - Locked behind Line 1 ("Big Thinking,") */}
            <div className="absolute w-[135%] -ml-[17%] -translate-y-6 sm:-translate-y-8 -rotate-[2.5deg] border-y border-[#CDF225]/40 bg-[#19191D] py-2.5 sm:py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex overflow-hidden z-[1]">
              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
                className="flex items-center gap-8 whitespace-nowrap font-mono font-bold text-xs sm:text-sm lg:text-base uppercase tracking-[0.24em] text-[#CDF225] will-change-transform"
              >
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="flex items-center gap-8">
                    <span>STRATEGY</span>
                    <span className="text-white/50">✦</span>
                    <span>CONTENT</span>
                    <span className="text-white/50">✦</span>
                    <span>DIGITAL</span>
                    <span className="text-white/50">✦</span>
                    <span>PERFORMANCE</span>
                    <span className="text-white/50">✦</span>
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Strip 2: Tilted Downward (+2deg) - Locked behind Line 2 ("Real Execution.") */}
            <div className="absolute w-[135%] -ml-[17%] translate-y-6 sm:translate-y-8 rotate-[2deg] border-y border-white/15 bg-[#141417] py-2.5 sm:py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex overflow-hidden z-[2]">
              <motion.div
                initial={{ x: "-50%" }}
                animate={{ x: "0%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
                className="flex items-center gap-8 whitespace-nowrap font-mono font-bold text-xs sm:text-sm lg:text-base uppercase tracking-[0.24em] text-[#F8F8F5]/85 will-change-transform"
              >
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="flex items-center gap-8">
                    <span>BIG THINKING</span>
                    <span className="text-[#CDF225]">·</span>
                    <span>REAL EXECUTION</span>
                    <span className="text-[#CDF225]">·</span>
                    <span>MEASURABLE IMPACT</span>
                    <span className="text-[#CDF225]">·</span>
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Foreground Headline: Clean Sandwich with Contact Shadows */}
          <h2 className="relative z-10 display font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[0.94] text-[#F8F8F5]">
            <span
              className="block"
              style={{
                textShadow:
                  "0 4px 20px rgba(18,18,20,0.95), 0 0 35px rgba(18,18,20,0.95)",
              }}
            >
              Big Thinking,
            </span>
            <span
              className="block font-serif italic font-normal text-[#CDF225] mt-1"
              style={{
                textShadow:
                  "0 4px 20px rgba(18,18,20,0.95), 0 0 30px rgba(18,18,20,0.95)",
              }}
            >
              Real Execution.
            </span>
          </h2>
        </div>

        {/* Editorial Subtitle (Zero Stripe Overlap) */}
        <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-sm lg:text-base text-[#F8F8F5]/65 font-sans font-light leading-relaxed">
          Strategy without execution is just theory. Every roadmap is built to launch, convert, and scale with speed and measurable outcomes.
        </p>

        {/* Bottom Monospace Strip (Divider Line Removed) */}
        <div className="mt-6 sm:mt-8 w-full flex justify-center">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#F8F8F5]/45 font-medium">
            BRAND. CONTENT. DIGITAL. PERFORMANCE.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ExecutionSection;
