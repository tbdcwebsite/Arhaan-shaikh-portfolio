"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ExpertiseCard {
  number: string;
  chapter: string;
  title: string;
  bgClass: string;
  textClass: string;
  tagClass: string;
  arrowClass: string;
  rotateDeg: number;
}

const EXPERTISE_ITEMS: ExpertiseCard[] = [
  {
    number: "01",
    chapter: "Chapter 01/06",
    title: "Go-to-market strategy",
    bgClass: "bg-[#F8F8F5]",
    textClass: "text-[#121310]",
    tagClass: "bg-[#121310]/10 text-[#121310]/80",
    arrowClass: "bg-[#121310] text-white",
    rotateDeg: -2.5,
  },
  {
    number: "02",
    chapter: "Chapter 02/06",
    title: "Growth strategy",
    bgClass: "bg-[#CDF225]",
    textClass: "text-[#121310]",
    tagClass: "bg-[#121310]/12 text-[#121310]",
    arrowClass: "bg-[#121310] text-[#CDF225]",
    rotateDeg: 2,
  },
  {
    number: "03",
    chapter: "Chapter 03/06",
    title: "E-commerce & Quick Commerce",
    bgClass: "bg-[#FF4D2E]",
    textClass: "text-white",
    tagClass: "bg-white/20 text-white",
    arrowClass: "bg-white text-[#FF4D2E]",
    rotateDeg: -2,
  },
  {
    number: "04",
    chapter: "Chapter 04/06",
    title: "Marketing strategy",
    bgClass: "bg-[#1F3552]",
    textClass: "text-white",
    tagClass: "bg-white/15 text-white/90",
    arrowClass: "bg-[#CDF225] text-[#121310]",
    rotateDeg: 2.5,
  },
  {
    number: "05",
    chapter: "Chapter 05/06",
    title: "Brand positioning",
    bgClass: "bg-[#F8F8F5]",
    textClass: "text-[#121310]",
    tagClass: "bg-[#121310]/10 text-[#121310]/80",
    arrowClass: "bg-[#121310] text-white",
    rotateDeg: -1.5,
  },
  {
    number: "06",
    chapter: "Chapter 06/06",
    title: "Digital strategy",
    bgClass: "bg-[#CDF225]",
    textClass: "text-[#121310]",
    tagClass: "bg-[#121310]/12 text-[#121310]",
    arrowClass: "bg-[#121310] text-[#CDF225]",
    rotateDeg: 2,
  },
];

/* ------------------------------------------------------------------
   MOBILE STICKY STACKED CARD (Inspired by Skiper16 + Framer Motion)
   ------------------------------------------------------------------ */
function MobileStackedCard({
  i,
  item,
  progress,
  range,
  targetScale,
}: {
  i: number;
  item: ExpertiseCard;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      style={{ zIndex: i + 1 }}
      className="sticky top-0 flex items-start justify-center h-[54vh] min-h-[350px] w-full"
    >
      <motion.div
        style={{
          scale,
          top: `calc(5.2rem + ${i * 12}px)`,
        }}
        className={`relative w-full max-w-[340px] sm:max-w-[380px] h-[280px] sm:h-[310px] ${item.bgClass} ${item.textClass} p-6 sm:p-7 rounded-[28px] flex flex-col justify-between shadow-[0_-8px_32px_rgba(0,0,0,0.5),0_20px_45px_rgba(0,0,0,0.65)] border border-white/10 origin-top select-none`}
      >
        {/* Card Header: Giant Number & Chapter Tag */}
        <div className="flex items-start justify-between">
          <span className="font-serif italic font-medium text-6xl sm:text-7xl leading-none tracking-tight">
            {item.number}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold ${item.tagClass}`}
          >
            {item.chapter}
          </span>
        </div>

        {/* Card Footer: Service Heading & Arrow */}
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-heading font-extrabold text-2xl sm:text-[26px] leading-[1.1] tracking-tight">
            {item.title}
          </h3>
          <div
            className={`w-11 h-11 rounded-full ${item.arrowClass} flex items-center justify-center shrink-0 shadow-md`}
          >
            <ArrowUpRight className="w-5 h-5 stroke-[2.4]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExpertiseSection() {
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  // Mobile scroll progress for forward/reverse stacking
  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start start", "end end"],
  });

  // Desktop horizontal pin-scroll via GSAP ScrollTrigger
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!desktopContainerRef.current || !trackRef.current) return;

        const track = trackRef.current;
        const getScrollDistance = () => track.scrollWidth - window.innerWidth + 140;

        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: desktopContainerRef.current,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.kill();
        };
      });
    },
    { scope: desktopContainerRef }
  );

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <section id="expertise" className="relative w-full bg-[#121214] text-white overflow-visible">
      {/* Anchor for #services navigation */}
      <div id="services" className="absolute top-0 left-0 w-px h-px pointer-events-none" />
      
      {/* ==============================================================
          1. DESKTOP GSAP HORIZONTAL PIN-SCROLL (>= lg)
          ============================================================== */}
      <div
        ref={desktopContainerRef}
        className="hidden lg:flex h-screen w-full flex-col justify-center overflow-hidden px-10 xl:px-16 relative"
      >
        {/* Desktop Header */}
        <div className="max-w-7xl w-full mx-auto mb-8 xl:mb-12 flex items-end justify-between select-none">
          <div>
            <h2 className="text-4xl xl:text-6xl font-heading font-extrabold tracking-tight leading-[1.08] text-white">
              <span>Where I usually </span>
              <span className="font-serif italic font-normal text-[#CDF225]">
                enter the picture.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/50 pb-2">
            <span>Keep scrolling</span>
            <span className="text-[#CDF225]">→</span>
          </div>
        </div>

        {/* Dynamic Horizontal Track */}
        <div className="w-full overflow-visible">
          <div
            ref={trackRef}
            className="flex gap-8 w-max py-6 px-4 will-change-transform"
          >
            {EXPERTISE_ITEMS.map((item) => (
              <article
                key={item.title}
                style={{ transform: `rotate(${item.rotateDeg}deg)` }}
                className={`group relative w-[330px] xl:w-[390px] h-[410px] xl:h-[460px] ${item.bgClass} ${item.textClass} p-8 rounded-[36px] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.55)] transition-all duration-400 hover:!rotate-0 hover:scale-[1.04] hover:shadow-[0_30px_70px_rgba(0,0,0,0.8)] select-none cursor-pointer shrink-0`}
              >
                {/* Giant Number & Chapter Tag */}
                <div className="flex items-start justify-between">
                  <span className="font-serif italic font-medium text-7xl xl:text-8xl leading-none tracking-tight">
                    {item.number}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold ${item.tagClass}`}
                  >
                    {item.chapter}
                  </span>
                </div>

                {/* Service Title & Arrow Button */}
                <div className="flex items-end justify-between gap-4 pt-6">
                  <h3 className="font-heading font-extrabold text-2xl xl:text-3xl leading-[1.1] tracking-tight">
                    {item.title}
                  </h3>
                  <div
                    className={`w-12 h-12 rounded-full ${item.arrowClass} flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45`}
                  >
                    <ArrowUpRight className="w-5 h-5 stroke-[2.4]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ==============================================================
          2. MOBILE STICKY STACKED CARD DECK (< lg)
          ============================================================== */}
      <div className="flex lg:hidden flex-col px-5 pt-20 pb-12 relative">
        {/* Mobile Header */}
        <div className="mb-10 select-none">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#CDF225] block mb-2">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight leading-[1.1] text-white">
            <span>Where I usually </span>
            <span className="font-serif italic font-normal text-[#CDF225]">
              enter the picture.
            </span>
          </h2>
        </div>

        {/* Scroll Container for Sticky Cards */}
        <div
          ref={mobileContainerRef}
          className="relative w-full flex flex-col pb-[35vh]"
        >
          {EXPERTISE_ITEMS.map((item, index) => {
            const total = EXPERTISE_ITEMS.length;
            const targetScale = Math.max(0.80, 1 - (total - 1 - index) * 0.035);
            const range: [number, number] = [index * (1 / total), 1];

            return (
              <MobileStackedCard
                key={item.title}
                i={index}
                item={item}
                progress={mobileScrollProgress}
                range={range}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { ExpertiseSection };
