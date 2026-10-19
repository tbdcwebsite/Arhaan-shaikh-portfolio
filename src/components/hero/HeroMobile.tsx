"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import GlassGrowthIllustration from "./GlassGrowthIllustration";

export function HeroMobile() {
  return (
    <div className="flex flex-col items-start w-full relative justify-start gap-1">
      {/* Top Badge, Headline & Buttons (Tightened Vertical Rhythm) */}
      <div className="hero-mobile-text hero-headline-block flex flex-col items-start w-full shrink-0 pt-2 sm:pt-4">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#28282B] text-white shadow-sm mb-3 select-none"
        >
          <Star className="w-3 h-3 text-[#CDF225] fill-[#CDF225] shrink-0" />
          <span className="font-body font-medium text-[11px] tracking-tight text-white/95">
            Trusted by 100+ Founders &amp; CEOs
          </span>
        </motion.div>

        {/* Mobile Title Case Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-heading font-extrabold text-[clamp(1.85rem,8.2vw,2.65rem)] leading-[1.08] tracking-[-0.035em] text-[#28282B] mb-4 text-left w-full"
        >
          <span className="block">Turning Business</span>
          <span className="block">Problems Into</span>
          <span className="block text-[#8FD400] whitespace-nowrap drop-shadow-[0_2px_12px_rgba(205,242,37,0.35)]">
            Growth Strategies.
          </span>
        </motion.h1>

        {/* Side-by-Side Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-row items-center gap-2.5 w-full mb-1"
        >
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.95 }}
            className="flex-1 h-11 px-4 rounded-full bg-[#CDF225] text-[#28282B] font-body font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 whitespace-nowrap shadow-[0_6px_18px_rgba(205,242,37,0.45)] cursor-pointer select-none touch-manipulation"
          >
            <span>Work With Me</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] shrink-0" />
          </motion.a>

          <motion.a
            href="#case-studies"
            whileTap={{ scale: 0.95 }}
            className="flex-1 h-11 px-4 rounded-full bg-white border border-[#28282B]/12 text-[#28282B] font-body font-semibold text-xs sm:text-sm flex items-center justify-center whitespace-nowrap shadow-sm cursor-pointer select-none touch-manipulation"
          >
            Case Studies
          </motion.a>
        </motion.div>
      </div>

      {/* Zero Dead-Space Full-Width Mobile Illustration Container */}
      <div className="w-full relative flex items-center justify-center overflow-visible mt-0 mb-0 py-0">
        <div className="w-full scale-100 origin-center flex items-center justify-center">
          <GlassGrowthIllustration />
        </div>
      </div>
    </div>
  );
}

export default HeroMobile;
