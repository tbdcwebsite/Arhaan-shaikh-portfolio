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
      className="relative w-full text-[#121214] pt-[64px] sm:pt-[72px] md:pt-[96px] lg:pt-[120px] pb-0 px-5 sm:px-8 lg:px-16 overflow-x-clip select-none"
    >
      {/* Grid Container */}
      <div className="max-w-[1320px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-8 lg:gap-x-14 items-center relative z-10">

        {/* 1. TITLE (Mobile: 1st | Desktop: Left Col Row 1) */}
        <div className="order-1 lg:col-span-7 flex flex-col items-start">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[60px] leading-[1.08] tracking-[-0.02em] font-normal text-[#121214]">
            <span className="block overflow-hidden py-1 -my-1">
              <span className="headline-mask-inner block font-sans font-normal leading-[1.08] tracking-[-0.02em]">
                Strategy Rooms
              </span>
            </span>
            <span className="block overflow-hidden py-1 -my-1">
              <span className="headline-mask-inner block font-serif italic font-normal text-[#EF8557] leading-[1.08]">
                &amp; Delivery Calendars.
              </span>
            </span>
          </h2>
        </div>

        {/* 2. CARD WRAPPER: SLEEK, PROPORTIONATE SCALE */}
        <div className="order-2 lg:col-span-5 lg:row-span-2 flex items-center justify-center lg:justify-end py-4 sm:py-6 lg:py-0 mb-10 sm:mb-12 lg:mb-0 w-full">
          <div
            ref={cardRef}
            className="group relative overflow-visible w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] bg-transparent p-0 border-0 shadow-none origin-center will-change-transform flex items-center justify-center"
          >
            {/* Direct Image Frame */}
            <div ref={portraitImgRef} className="relative w-full overflow-visible will-change-transform">
              <Image
                alt="Arhaan Shaikh - Strategic Marketing Consultant"
                src="/images/arhaan-shaikhportrait.png"
                width={600}
                height={750}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_45px_rgba(18,18,20,0.12)]"
              />

              {/* Rotating Stamp Badge: Center-to-Corner Aligned on Bottom-Left Vertex */}
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-22 h-22 sm:w-24 sm:h-24 lg:w-28 lg:h-28 z-20 select-none cursor-pointer">
                <div className="reveal-stamp relative w-full h-full rounded-full bg-[#226192] shadow-none flex items-center justify-center transition-transform duration-300 group-hover:scale-105 origin-center">

                {/* Outer Rotating Text Ring */}
                <div className="absolute inset-0 animate-[spin_14s_linear_infinite] origin-center">
                  <svg className="w-full h-full origin-center" viewBox="0 0 120 120">
                    <path
                      id={stampPathId}
                      d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
                      fill="none"
                    />
                    <text
                      className="font-sans uppercase fill-white"
                      style={{
                        fontSize: "8.8px",
                        letterSpacing: "0.08em",
                        fontWeight: 700,
                      }}
                    >
                      <textPath
                        href={`#${stampPathId}`}
                        startOffset="0%"
                        textLength="262"
                        lengthAdjust="spacing"
                      >
                        A DECADE IN THE ROOM · A DECADE IN THE ROOM ·{" "}
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
        </div>

        {/* 3. BODY PARAGRAPHS (Mobile: 3rd, below Card | Desktop: Left Col Row 2) */}
        <div className="order-3 lg:col-span-7 flex flex-col space-y-4 lg:space-y-5 text-[#121214]/80 text-[18px] sm:text-[19px] lg:text-[20px] leading-[1.65] max-w-[54ch] font-sans font-normal">
          <p className="reveal-paragraph">
            <span className="reveal-dropcap inline-block float-left text-5xl sm:text-6xl font-serif not-italic font-normal text-[#EF8557] leading-none pr-3 pt-1 select-none will-change-transform">
              I
            </span>
            ’ve spent the last decade moving between strategy rooms and delivery calendars, building positioning for founders, running campaigns, shaping brands, and sitting with teams on the days the plan meets reality.
          </p>
          <p className="reveal-paragraph">
            That mix is the point. I’ve consulted for businesses across categories and markets, and I’ve also built and led the teams that execute brand, content, digital,
            performance and production.
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
