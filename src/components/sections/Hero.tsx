"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const maskLineVariants = {
    hidden: { y: "125%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    // Hard-locked 100dvh container without vertical scrollbar leaks
    <section className="relative w-full h-[100dvh] max-h-[100dvh] bg-[#EAE6DE] text-[#121214] pt-24 xs:pt-26 sm:pt-28 lg:pt-24 pb-4 sm:pb-6 px-4 xs:px-6 sm:px-8 lg:px-16 flex flex-col justify-between items-center overflow-hidden select-none">

      {/* Floating Top Navbar Container */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between items-center lg:grid lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-10 relative z-10 min-h-0">

        {/* ==============================================================
            TOP/LEFT: CLEAN CLEARANCE HEADLINE & ACTIONS
            ============================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left shrink-0"
        >
          {/* Top Social-Proof Badge (Clean 20px-24px Clearance below Navbar) */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#226192] text-white shadow-sm mb-2 xs:mb-2.5 sm:mb-4 lg:mb-5"
          >
            <Star className="w-3 h-3 fill-[#EF8557] text-[#EF8557]" />
            <span className="font-sans font-medium text-[11px] sm:text-xs lg:text-[13px] tracking-normal">
              Trusted by 100+ Founders & CEOs
            </span>
          </motion.div>

          {/* Masked Headline (Responsive Mobile Scale) */}
          <h1 className="w-full text-[30px] xs:text-[34px] sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.08] sm:leading-[1.12] text-[#121214] max-w-none sm:max-w-2xl mx-auto lg:mx-0">
            {/* Line 1 */}
            <span className="block overflow-hidden pt-0.5 pb-1.5 sm:pb-3 -mb-1 sm:-mb-2">
              <motion.span
                variants={maskLineVariants}
                className="block font-sans font-medium sm:font-semibold tracking-[-0.01em]"
              >
                Turning Business
              </motion.span>
            </span>

            {/* Line 2 */}
            <span className="block overflow-hidden pt-0.5 pb-1.5 sm:pb-3 -mb-1 sm:-mb-2">
              <motion.span
                variants={maskLineVariants}
                className="block font-sans font-medium sm:font-semibold tracking-[-0.01em]"
              >
                Problems Into
              </motion.span>
            </span>

            {/* Line 3: Butler Serif Italic */}
            <span className="block overflow-hidden pt-0.5 pb-2 sm:pb-3.5 -mb-1 sm:-mb-2">
              <motion.span
                variants={maskLineVariants}
                className="block font-serif italic font-normal text-[#EF8557] tracking-normal"
              >
                Growth Strategies.
              </motion.span>
            </span>
          </h1>

          {/* Action Buttons (Centered on mobile, left-aligned on desktop) */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-2.5 xs:mt-3.5 sm:mt-5 lg:mt-6 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full xs:w-auto"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-1.5 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#226192] text-white font-sans font-medium sm:font-semibold text-xs sm:text-sm tracking-normal shadow-[0_4px_16px_rgba(34,97,146,0.22)] hover:bg-[#1b4f77] transition-colors"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/#success-stories"
                className="inline-flex items-center justify-center px-4.5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-[#226192] border border-[#121214]/15 font-sans font-medium sm:font-semibold text-xs sm:text-sm tracking-normal shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-[#FAF8F5] transition-colors"
              >
                Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ==============================================================
            BOTTOM/RIGHT: OPTIMIZED PROPORTIONAL HERO ILLUSTRATION
            ============================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full lg:col-span-5 relative flex-1 min-h-0 flex items-center justify-center py-2 lg:py-0"
        >
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-[290px] xs:max-w-[330px] sm:max-w-[390px] lg:max-w-[460px] xl:max-w-[500px] h-full max-h-[250px] xs:max-h-[290px] sm:max-h-[350px] lg:max-h-[440px] flex items-center justify-center"
          >
            <Image
              src="/images/growth strategy illustration.png"
              alt="Growth Strategy Illustration"
              width={500}
              height={500}
              priority
              className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(18,18,20,0.06)] select-none pointer-events-none"
            />
          </motion.div>
        </motion.div>

      </div>

      {/* Subtle Warm Brand Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-[#EF8557]/8 rounded-full blur-[100px] pointer-events-none -z-0" />
    </section>
  );
}

export default Hero;
