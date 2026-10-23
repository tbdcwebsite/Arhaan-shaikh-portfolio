"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export function Hero() {
  // Staggered mask container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Line mask reveal variant
  const maskLineVariants = {
    hidden: { y: "115%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative h-screen max-h-screen w-full bg-[#EAE6DE] text-[#121214] pt-20 lg:pt-24 pb-6 sm:pb-8 px-6 sm:px-10 lg:px-16 flex items-center overflow-hidden select-none">
      
      {/* Floating Top Navbar Container */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
        
        {/* ==============================================================
            LEFT COLUMN: MASKED EDITORIAL HEADLINE & ACTIONS
            ============================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* 1. Top Social-Proof Badge */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#226192] text-white shadow-sm mb-4 sm:mb-6"
          >
            <Star className="w-3.5 h-3.5 fill-[#EF8557] text-[#EF8557]"/>
            <span className="font-sans font-medium text-xs sm:text-[13px] tracking-normal">
              Trusted by 100+ Founders & CEOs
            </span>
          </motion.div>

          {/* 2. Masked Line-by-Line Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.12] text-[#121214] max-w-2xl">
            <span className="block overflow-hidden pt-1 pb-3 sm:pb-3.5 -mb-2 sm:-mb-2.5">
              <motion.span
                variants={maskLineVariants}
                className="block font-sans font-medium sm:font-semibold tracking-[-0.01em]"
              >
                Turning Business
              </motion.span>
            </span>

            <span className="block overflow-hidden pt-1 pb-3 sm:pb-3.5 -mb-2 sm:-mb-2.5">
              <motion.span
                variants={maskLineVariants}
                className="block font-sans font-medium sm:font-semibold tracking-[-0.01em]"
              >
                Problems Into
              </motion.span>
            </span>

            <span className="block overflow-hidden pt-1 pb-3 sm:pb-3.5 -mb-2 sm:-mb-2.5">
              <motion.span
                variants={maskLineVariants}
                className="block font-serif italic font-normal text-[#EF8557] pb-1"
              >
                Growth Strategies.
              </motion.span>
            </span>
          </h1>

          {/* 3. Action Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-6 sm:mt-7 flex flex-wrap items-center gap-4"
          >
            {/* Primary Action Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#226192] text-white font-sans font-medium sm:font-semibold text-xs sm:text-sm tracking-normal shadow-[0_8px_24px_rgba(34,97,146,0.25)] hover:bg-[#1b4f77] transition-colors" href="/#contact">
                <span>Work With Me</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]"/>
              </Link>
            </motion.div>

            {/* Secondary Action Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link className="inline-flex items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#226192] border border-[#121214]/15 font-sans font-medium sm:font-semibold text-xs sm:text-sm tracking-normal shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:bg-[#FAF8F5] transition-colors" href="/#success-stories">
                Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ==============================================================
            RIGHT COLUMN: FLOATING 3D GROWTH STRATEGY ILLUSTRATION
            ============================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Continuous Ambient Floating Wrapper */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] aspect-square flex items-center justify-center select-none pointer-events-none"
          >
            <Image
              src="/images/growth strategy illustration.png"
              alt="Growth Strategy Illustration"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              className="object-contain drop-shadow-[0_20px_40px_rgba(18,18,20,0.08)]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
