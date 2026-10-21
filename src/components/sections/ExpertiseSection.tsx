"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ExpertiseCard {
  number: string;
  title: string;
  bgClass: string;
  textClass: string;
  arrowClass: string;
  rotateDeg: number;
}

const EXPERTISE_ITEMS: ExpertiseCard[] = [
  {
    number: "01",
    title: "Go-to-market strategy",
    bgClass: "bg-[#F8F8F5]",
    textClass: "text-[#121310]",
    arrowClass: "bg-[#121310] text-white",
    rotateDeg: -2.5,
  },
  {
    number: "02",
    title: "Growth strategy",
    bgClass: "bg-[#CDF225]",
    textClass: "text-[#121310]",
    arrowClass: "bg-[#121310] text-[#CDF225]",
    rotateDeg: 2,
  },
  {
    number: "03",
    title: "E-commerce & Quick Commerce",
    bgClass: "bg-[#FF4D2E]",
    textClass: "text-white",
    arrowClass: "bg-white text-[#FF4D2E]",
    rotateDeg: -2,
  },
  {
    number: "04",
    title: "Marketing strategy",
    bgClass: "bg-[#1F3552]",
    textClass: "text-white",
    arrowClass: "bg-[#CDF225] text-[#121310]",
    rotateDeg: 2.5,
  },
  {
    number: "05",
    title: "Brand positioning",
    bgClass: "bg-[#F8F8F5]",
    textClass: "text-[#121310]",
    arrowClass: "bg-[#121310] text-white",
    rotateDeg: -1.5,
  },
  {
    number: "06",
    title: "Digital strategy",
    bgClass: "bg-[#CDF225]",
    textClass: "text-[#121310]",
    arrowClass: "bg-[#121310] text-[#CDF225]",
    rotateDeg: 2,
  },
];

/* ------------------------------------------------------------------
   MOBILE PINNED CARD COMPONENT
   - Tall luxury card aspect ratio (h: 440px)
   - Centered vertically in stage
   - Chapter pill removed for pure minimalist typography
   - Clean 100vh offscreen translation with opacity culling
   ------------------------------------------------------------------ */
function MobileStackedCard({
  i,
  item,
  total,
  progress,
}: {
  i: number;
  item: ExpertiseCard;
  total: number;
  progress: MotionValue<number>;
}) {
  const startProgress = i === 0 ? 0 : (i - 1) * 0.2;
  const endProgress = i === 0 ? 0 : i * 0.2;

  // Off-screen translation
  const y = useTransform(
    progress,
    i === 0 ? [0, 1] : [startProgress, endProgress],
    i === 0 ? ["0px", "0px"] : ["100vh", "0px"]
  );

  // Opacity culling so next cards never peek at the bottom
  const opacity = useTransform(
    progress,
    i === 0 ? [0, 1] : [startProgress, Math.min(1, startProgress + 0.05)],
    i === 0 ? [1, 1] : [0, 1]
  );

  // Subtle 3D deck scale
  const targetScale = Math.max(0.86, 1 - (total - 1 - i) * 0.028);
  const scaleRange = i === 0 ? [0, 1] : [endProgress, 1];
  const scaleTransform = useTransform(progress, scaleRange, [1, targetScale]);
  const scale = i === total - 1 ? 1 : scaleTransform;

  return (
    <motion.article
      style={{
        y,
        scale,
        opacity,
        top: `calc(50% - 220px + ${i * 8}px)`,
        zIndex: 10 + i,
        transformOrigin: "top center",
      }}
      className={`pointer-events-auto absolute flex flex-col justify-between w-[calc(100%-32px)] max-w-[370px] sm:max-w-[390px] h-[440px] sm:h-[470px] shrink-0 rounded-[32px] p-7 sm:p-8 border border-white/10 shadow-[0_-14px_40px_rgba(0,0,0,0.55),0_28px_60px_rgba(0,0,0,0.7)] select-none ${item.bgClass} ${item.textClass}`}
    >
      {/* Top: Giant Minimalist Serif Number */}
      <div className="flex items-start justify-between">
        <span className="font-serif italic font-medium text-7xl sm:text-8xl leading-none tracking-tight">
          {item.number}
        </span>
      </div>

      {/* Bottom: Service Title & Pop-In Action Button */}
      <div className="flex items-end justify-between gap-4 pt-6">
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl leading-[1.08] tracking-tight">
          {item.title}
        </h3>
        <div
          className={`w-12 h-12 rounded-full ${item.arrowClass} flex items-center justify-center shrink-0 shadow-md`}
        >
          <ArrowUpRight className="w-5 h-5 stroke-[2.4]" />
        </div>
      </div>
    </motion.article>
  );
}

export default function ExpertiseSection() {
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  // Mobile scroll progress across the h-[360vh] runway
  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileTrackRef,
    offset: ["start start", "end end"],
  });

  /* Desktop GSAP Horizontal Pinning */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const container = desktopContainerRef.current;
        const track = trackRef.current;

        if (!container || !track) return;

        const getScrollDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth + 140);

        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        });

        return () => tween.kill();
      });

      return () => mm.revert();
    },
    { scope: desktopContainerRef }
  );

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      id="expertise"
      className="relative w-full bg-[#121214] text-white overflow-visible"
    >
      <div
        id="services"
        className="absolute top-0 left-0 w-px h-px pointer-events-none"
      />

      {/* ==============================================================
          1. DESKTOP GSAP HORIZONTAL PIN-SCROLL (>= lg)
          ============================================================== */}
      <div
        ref={desktopContainerRef}
        className="hidden lg:flex h-screen w-full flex-col justify-center overflow-hidden px-10 xl:px-16 relative"
      >
        <div className="max-w-7xl w-full mx-auto mb-8 xl:mb-12 flex items-end justify-between select-none">
          <h2 className="text-4xl xl:text-6xl font-heading font-extrabold tracking-tight leading-[1.08] text-white">
            Where I usually{" "}
            <span className="font-serif italic font-normal text-[#CDF225]">
              enter the picture.
            </span>
          </h2>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/50 pb-2">
            <span>Keep scrolling</span>
            <span className="text-[#CDF225]">→</span>
          </div>
        </div>

        <div className="w-full overflow-visible">
          <div
            ref={trackRef}
            className="flex gap-8 w-max py-6 px-4 will-change-transform"
          >
            {EXPERTISE_ITEMS.map((item) => (
              <article
                key={item.title}
                style={{ transform: `rotate(${item.rotateDeg}deg)` }}
                className={`
                  group relative w-[330px] xl:w-[390px]
                  h-[440px] xl:h-[480px]
                  ${item.bgClass} ${item.textClass}
                  p-8 rounded-[36px] flex flex-col justify-between
                  shadow-[0_20px_50px_rgba(0,0,0,0.55)]
                  transition-all duration-300
                  hover:!rotate-0 hover:scale-[1.04]
                  hover:shadow-[0_30px_70px_rgba(0,0,0,0.8)]
                  select-none cursor-pointer shrink-0
                `}
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif italic font-medium text-7xl xl:text-8xl leading-none tracking-tight">
                    {item.number}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4 pt-6">
                  <h3 className="font-heading font-extrabold text-2xl xl:text-3xl leading-[1.1] tracking-tight">
                    {item.title}
                  </h3>

                  <div
                    className={`
                      w-12 h-12 rounded-full ${item.arrowClass}
                      flex items-center justify-center shrink-0 shadow-md
                      transition-transform duration-300
                      group-hover:scale-110 group-hover:rotate-45
                    `}
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
          2. MOBILE: SINGLE PINNED VIEWPORT ARCHITECTURE (< lg)
          ============================================================== */}
      <div
        ref={mobileTrackRef}
        className="flex lg:hidden relative w-full h-[360vh]"
      >
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-start px-4 sm:px-6 pt-12 pb-4 overflow-hidden select-none">
          
          {/* Header Block */}
          <header className="shrink-0 w-full mb-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#CDF225] block mb-1">
              Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight leading-[1.12] text-white">
              Where I usually{" "}
              <span className="font-serif italic font-normal text-[#CDF225]">
                enter the picture.
              </span>
            </h2>
          </header>

          {/* Cards Stage: Perfectly Centered */}
          <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden">
            {EXPERTISE_ITEMS.map((item, index) => (
              <MobileStackedCard
                key={item.title}
                i={index}
                item={item}
                total={EXPERTISE_ITEMS.length}
                progress={mobileScrollProgress}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export { ExpertiseSection };