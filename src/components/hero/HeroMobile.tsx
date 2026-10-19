"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import GlassGrowthIllustration from "./GlassGrowthIllustration";

export function HeroMobile() {
  return (
    <div className="flex flex-col items-start w-full h-full flex-1 min-h-0 justify-between">
      {/* 1. TOP TEXT CONTENT: Sits naturally with clean, uncluttered breathing room */}
      <div className="w-full shrink-0 flex flex-col items-start pt-3 sm:pt-4">
        {/* Kicker Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#28282B] text-white shadow-sm mb-3.5 select-none"
        >
          <Star className="w-3 h-3 text-[#CDF225] fill-[#CDF225] shrink-0" />
          <span className="font-body font-medium text-[11px] tracking-tight text-white/95">
            Trusted by 100+ Founders &amp; CEOs
          </span>
        </motion.div>

        {/* Headline with Relaxed Leading & Balanced Gaps */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-heading font-extrabold text-[clamp(1.9rem,8.4vw,2.75rem)] leading-[1.12] tracking-[-0.035em] text-[#28282B] mb-5 text-left w-full"
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
          className="flex flex-row items-center gap-3 w-full mb-2"
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

      {/* 2. ILLUSTRATION CONTAINER: Takes ALL remaining viewport height (flex-1) to kill bottom dead space */}
      <div className="w-full flex-1 min-h-0 flex items-center justify-center relative overflow-visible py-1">
        <div className="w-full h-full flex items-center justify-center">
          <GlassGrowthIllustration />
        </div>
      </div>
    </div>
  );
}

export default HeroMobile;
