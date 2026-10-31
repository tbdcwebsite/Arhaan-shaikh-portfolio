"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface BannerItem {
  id: number;
  src: string;
  alt: string;
  href: string;
}

const SUCCESS_BANNERS: BannerItem[] = [
  {
    id: 1,
    src: "/images/15-buttons-case-study.webp",
    alt: "15 Buttons Social Growth Case Study",
    href: "/case-studies/15-buttons",
  },
  {
    id: 2,
    src: "/images/15-buttons-case-study.webp",
    alt: "15 Buttons Performance Scaling Case Study",
    href: "/case-studies/15-buttons",
  },
  {
    id: 3,
    src: "/images/case-study-3.webp",
    alt: "Success Story Project 03",
    href: "/case-studies/project-three",
  },
  {
    id: 4,
    src: "/images/case-study-4.webp",
    alt: "Success Story Project 04",
    href: "/case-studies/project-four",
  },
];

/* =========================================================================
   CASE STUDY STACKING CARD (60FPS HARDWARE-ACCELERATED DEPTH SCALE)
   ========================================================================= */
function CaseStudyCard({
  banner,
  index,
  total,
  progress,
}: {
  banner: BannerItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - index) * 0.04;
  const range: [number, number] = [index * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale], { clamp: true });

  return (
    <div
      style={{ zIndex: index + 10 }}
      className="sticky top-[90px] sm:top-[110px] lg:top-[120px] w-full flex items-center justify-center pb-12 sm:pb-16"
    >
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
        }}
        className="w-full will-change-transform"
      >
        <Link
          href={banner.href}
          aria-label={`View ${banner.alt}`}
          className="group block w-full cursor-pointer focus:outline-none"
        >
          {/* Card Container: Natural Height & Zero Clipping */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(18,18,20,0.12)] border border-[#121214]/10 bg-white transition-all duration-500 group-hover:shadow-[0_28px_65px_rgba(18,18,20,0.20)]">
            <Image
              src={banner.src}
              alt={banner.alt}
              width={1920}
              height={1080}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1280px"
              className="w-full h-auto object-contain block select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />

            {/* Subtle hover feedback */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-300 pointer-events-none" />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   MAIN SUCCESS STORIES SECTION
   ========================================================================= */
export default function SuccessStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="success-stories"
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full text-[#121214] py-24 sm:py-32 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-16 select-none border-t border-[#121214]/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ==============================================================
            SECTION HEADER: SUCCESS STORIES
            ============================================================== */}
        <div className="mb-14 sm:mb-20 lg:mb-24 flex flex-col items-start border-b border-[#121214]/10 pb-8 sm:pb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-sans font-bold tracking-tight leading-[1.08] text-[#121214]">
            Success{" "}
            <span className="font-serif italic font-normal text-[#EF8557]">
              Stories.
            </span>
          </h2>
        </div>

        {/* ==============================================================
            CLICKABLE STICKY STACKING BANNERS (60FPS PROGRESS DEPTH SCALE)
            ============================================================== */}
        <div className="relative w-full flex flex-col items-center">
          {SUCCESS_BANNERS.map((banner, index) => (
            <CaseStudyCard
              key={banner.id}
              banner={banner}
              index={index}
              total={SUCCESS_BANNERS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export { SuccessStories };
