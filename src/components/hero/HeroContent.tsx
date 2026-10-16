"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export function HeroContent() {
  return (
    <div className="flex flex-col items-start justify-center w-full py-4">
      {/* Top Badge Placed Cleanly ABOVE "TURNING BUSINESS" */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#28282B] text-white shadow-[0_6px_18px_rgba(40,40,43,0.16)] mb-5 select-none"
      >
        <Star className="w-3.5 h-3.5 text-[#CDF225] fill-[#CDF225] shrink-0" />
        <span className="font-body font-medium text-xs sm:text-[13px] tracking-tight text-white/95">
          Trusted by 100+ Founders &amp; CEOs
        </span>
      </motion.div>

      {/* Primary 3-Line Uppercase Headline - "GROWTH STRATEGIES." on 1 single line in Lime */}
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading font-extrabold  text-[clamp(2.1rem,4.5vw,4.05rem)] tracking-[-0.035em] leading-[1.05] text-[#28282B] mb-8 lg:mb-10"
      >
        <span className="block">Turning Business</span>
        <span className="block">Problems Into</span>
        <span className="block text-[#98C900] sm:text-[#A3D900] whitespace-nowrap drop-shadow-[0_2px_14px_rgba(205,242,37,0.35)]">
          Growth Strategies.
        </span>
      </motion.h1>

      {/* Clean Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center gap-4 sm:gap-5"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center justify-center gap-2.5 bg-[#CDF225] text-[#28282B] font-body font-semibold text-base sm:text-[17px] px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(205,242,37,0.5)] hover:shadow-[0_12px_32px_rgba(205,242,37,0.75)] transition-all cursor-pointer select-none"
        >
          <span>Work With Me</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>

        <motion.a
          href="#case-studies"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center bg-white/90 border border-[#28282B]/12 text-[#28282B] font-body font-semibold text-base sm:text-[17px] px-8 py-4 rounded-full hover:bg-white shadow-sm transition-all cursor-pointer select-none"
        >
          Case Studies
        </motion.a>
      </motion.div>
    </div>
  );
}

export default HeroContent;
