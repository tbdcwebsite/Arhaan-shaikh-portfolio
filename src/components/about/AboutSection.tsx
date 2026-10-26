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
      // 1. SCROLL-DRIVEN TACTILE TILT (NO BORDER CLIPPING)
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
        { rotate: 0, y: 30 },
        { rotate: 3.5, y: 0, ease: "none" },
        0
      );

      // Parallax safe: Scale 1 to prevent readymade border clipping
      if (portraitImgRef.current) {
        tiltTimeline.fromTo(
          portraitImgRef.current,
          { yPercent: -1 },
          { yPercent: 1, ease: "none" },
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
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full text-[#121214] py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none"
    >
      {/* Grid Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

        {/* 1. TITLE (Mobile: 1st | Desktop: Left Col Row 1) */}
        <div className="order-1 lg:col-span-7 flex flex-col items-start">
          <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-sans font-semibold tracking-tight leading-[1.08] text-[#121214]">
            <span className="block overflow-hidden py-1 -my-1">
              <span className="headline-mask-inner block">Strategy Rooms</span>
            </span>
            <span className="block overflow-hidden py-1 -my-1">
              <span className="headline-mask-inner block font-serif italic font-normal text-[#EF8557]">
                &amp; Delivery Calendars.
              </span>
            </span>
          </h2>
        </div>

        {/* 2. CARD WRAPPER: PROMINENT, BALANCED SCALE */}
        <div className="order-2 lg:col-span-5 lg:row-span-2 flex justify-center items-center py-4 sm:py-6 lg:py-0 w-full">
          <div
            ref={cardRef}
            className="group relative w-full max-w-[360px] sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[530px] bg-transparent p-0 border-0 shadow-none origin-center will-change-transform flex items-center justify-center"
          >
            {/* Direct Image Frame */}
            <div ref={portraitImgRef} className="relative w-full will-change-transform">
              <Image
                alt="Arhaan Shaikh - Strategic Marketing Consultant"
                src="/images/arhaan-shaikh.png"
                width={600}
                height={750}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_45px_rgba(18,18,20,0.12)]"
              />
            </div>

            {/* Rotating Stamp Badge: Pinned & Overlapping Directly on Image Corner */}
            <div className="reveal-stamp absolute bottom-[6%] left-[3%] sm:bottom-[8%] sm:left-[4%] lg:bottom-[9%] lg:left-[4%] w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 z-30 select-none cursor-pointer">
              <div className="relative w-full h-full rounded-full bg-[#226192] shadow-[0_12px_28px_rgba(34,97,146,0.45),_0_2px_8px_rgba(0,0,0,0.2)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 origin-center">
                
                {/* Outer Rotating Text Ring */}
                <div className="absolute inset-0 animate-[spin_14s_linear_infinite] origin-center">
                  <svg className="w-full h-full p-2 origin-center" viewBox="0 0 100 100">
                    <path
                      id={stampPathId}
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[7.2px] font-mono font-bold tracking-[0.2em] uppercase fill-white">
                      <textPath href={`#${stampPathId}`} startOffset="0%">
                        • A DECADE IN THE ROOM • A DECADE IN THE ROOM
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Concentric Rotating Center Asterisk */}
                <div className="relative z-10 text-[#EF8557] text-2xl sm:text-3xl lg:text-4xl font-bold origin-center flex items-center justify-center leading-none select-none animate-[spin_20s_linear_infinite_reverse]">
                  ✳
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BODY PARAGRAPHS (Mobile: 3rd, below Card | Desktop: Left Col Row 2) */}
        <div className="order-3 lg:col-span-7 flex flex-col space-y-5 text-[#121214]/80 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
          <p className="reveal-paragraph">
            <span className="reveal-dropcap inline-block float-left text-5xl sm:text-6xl font-serif text-[#EF8557] leading-none pr-3 pt-1 font-normal select-none will-change-transform">
              I
            </span>
            ’ve spent the last decade moving between strategy rooms and delivery calendars—building positioning for founders, running campaigns, shaping brands, and sitting with teams on the days the plan meets reality.
          </p>
          <p className="reveal-paragraph">
            That mix is the point. I’ve consulted for businesses across categories and markets, and I’ve also built and led the teams that execute: brand, content, digital, performance, and production.
          </p>
          <p className="reveal-paragraph pt-1 text-[#121214]/90">
            So my advice doesn’t stay on paper. It’s shaped by years of building the teams that make growth happen.
          </p>
        </div>

      </div>
    </section>
  );
}

export { AboutSection };
