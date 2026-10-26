"use client";

import React, { useRef, useId } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLDivElement>(null);

  const rawId = useId();
  const stampPathId = `stamp-path-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  useGSAP(
    () => {
      if (!containerRef.current || !cardRef.current) return;

      // ==========================================
      // 1. SCROLL-DRIVEN TACTILE TILT & STABLE PARALLAX
      // ==========================================
      const tiltTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 25%",
          scrub: 1.2,
        },
      });

      // Card settles from upright (0deg) into a tactile tilt (3.5deg)
      tiltTimeline.fromTo(
        cardRef.current,
        { rotate: 0, y: 35 },
        { rotate: 3.5, y: 0, ease: "none" },
        0
      );

      // Inner image counter-parallax with guaranteed edge coverage (no gap at top)
      if (portraitImgRef.current) {
        tiltTimeline.fromTo(
          portraitImgRef.current,
          { yPercent: -2, scale: 1.12 },
          { yPercent: 2, scale: 1.08, ease: "none" },
          0
        );
      }

      // ==========================================
      // 2. KINETIC TEXT & ELEMENT REVEALS (ONCE)
      // ==========================================
      const revealTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Masked headline lines (clean vertical slide)
      revealTimeline.fromTo(
        ".headline-mask-inner",
        { y: "115%" },
        { y: "0%", duration: 0.95, stagger: 0.12, ease: "power4.out" }
      );

      // Drop Cap "I" ink stamp impact
      revealTimeline.fromTo(
        ".reveal-dropcap",
        { scale: 1.5, opacity: 0, y: -8 },
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "back.out(2.2)" },
        "-=0.4"
      );

      // Paragraph lines staggered fade
      revealTimeline.fromTo(
        ".reveal-paragraph",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power3.out" },
        "-=0.25"
      );

      // Rotating stamp scale-up entrance
      revealTimeline.fromTo(
        ".reveal-stamp",
        { scale: 0, opacity: 0, rotate: -40 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.65, ease: "back.out(1.6)" },
        "-=0.45"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      style={{ backgroundColor: "#1F3552" }}
      className="relative w-full text-white py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Background Depth Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CDF225]/[0.06] rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/[0.12] rounded-full blur-[130px] pointer-events-none -z-0" />

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">

        {/* 1. TITLE (Mobile: 1st | Desktop: Left Col Row 1) */}
        <div className="order-1 lg:col-span-7 flex flex-col items-start">
          <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] text-white">
            <span className="block overflow-hidden py-1 -my-1">
              <span className="headline-mask-inner block">Strategy Rooms</span>
            </span>
            <span className="block overflow-hidden py-1 -my-1">
              <span className="headline-mask-inner block font-serif italic font-normal text-[#CDF225]">
                &amp; Delivery Calendars.
              </span>
            </span>
          </h2>
        </div>

        {/* 2. POSTER CARD (Mobile: 2nd, directly below Title | Desktop: Right Col Rows 1-2) */}
        <div className="order-2 lg:col-span-5 lg:row-span-2 flex justify-center items-center py-6 sm:py-8 lg:py-0">
          <div
            ref={cardRef}
            className="group relative w-full max-w-[310px] sm:max-w-[380px] aspect-[4/5] bg-[#F6F5F0] p-3 sm:p-4 rounded-sm shadow-[0_24px_50px_-10px_rgba(0,0,0,0.55)] origin-center will-change-transform"
          >
            {/* Inner Frame */}
            <div className="relative w-full h-full bg-[#121310] overflow-hidden border border-black/10">
              <div ref={portraitImgRef} className="relative w-full h-full will-change-transform">
                <Image
                  alt="Founder Portrait"
                  className="object-cover object-top filter grayscale contrast-105"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  src="/images/arhaan-portrait.jpg"
                />
              </div>

              {/* Paper Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Lime Dual-Rotating Stamp Badge */}
            <div className="reveal-stamp absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 w-24 h-24 sm:w-28 sm:h-28 z-30 select-none cursor-pointer">
              <div className="relative w-full h-full rounded-full bg-[#CDF225] shadow-[0_12px_28px_rgba(205,242,37,0.35)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                {/* Clockwise Outer Ring Text in Dark Ink */}
                <div className="absolute inset-0 animate-[spin_14s_linear_infinite]">
                  <svg className="w-full h-full p-1.5" viewBox="0 0 100 100">
                    <path
                      id={stampPathId}
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[7.2px] font-bold tracking-[0.2em] uppercase fill-[#121310]">
                      <textPath href={`#${stampPathId}`} startOffset="0%">
                        • A DECADE IN THE ROOM • A DECADE IN THE ROOM
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Counter-Clockwise Center Asterisk in Dark Ink */}
                <div className="relative z-10 text-[#121310] text-xl sm:text-2xl font-bold animate-[spin_20s_linear_infinite_reverse]">
                  ✳
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BODY PARAGRAPHS (Mobile: 3rd, below Card | Desktop: Left Col Row 2) */}
        <div className="order-3 lg:col-span-7 flex flex-col space-y-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-xl">
          <p className="reveal-paragraph">
            <span className="reveal-dropcap inline-block float-left text-5xl sm:text-6xl font-serif text-[#CDF225] leading-none pr-3 pt-1 font-bold select-none will-change-transform">
              I
            </span>
            ’ve spent the last decade moving between strategy rooms and delivery calendars—building positioning for founders, running campaigns, shaping brands, and sitting with teams on the days the plan meets reality.
          </p>
          <p className="reveal-paragraph">
            That mix is the point. I’ve consulted for businesses across categories and markets, and I’ve also built and led the teams that execute: brand, content, digital, performance, and production.
          </p>
          <p className="reveal-paragraph font-serif italic text-white/95 text-lg sm:text-xl pt-1">
            So my advice doesn’t stay on paper. It’s shaped by years of building the teams that make growth happen.
          </p>
        </div>

      </div>
    </section>
  );
}

export { AboutSection };
