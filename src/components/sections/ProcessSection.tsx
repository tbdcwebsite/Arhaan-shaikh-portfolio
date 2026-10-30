"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Ear, Search, Compass, TrendingUp } from "lucide-react";

interface RoadmapStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Listen",
    description: "Understand the business, goals and audience.",
    icon: Ear,
  },
  {
    id: "step-2",
    number: "02",
    title: "Audit",
    description: "Find the gaps across brand, content, channels and performance.",
    icon: Search,
  },
  {
    id: "step-3",
    number: "03",
    title: "Strategize",
    description: "Build a tailored roadmap with clear priorities.",
    icon: Compass,
  },
  {
    id: "step-4",
    number: "04",
    title: "Execute",
    description: "Turn plans into results with the right team and tools.",
    icon: TrendingUp,
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Outer runway scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.45,
  });

  // Step 1: Listen (Active upon entering)
  const node1Bg = useTransform(smoothProgress, [0, 0.05], ["#226192", "#226192"]);
  const node1IconColor = useTransform(smoothProgress, [0, 0.05], ["#FFFFFF", "#FFFFFF"]);

  // Step 2: Audit (Fills when continuous line reaches it at ~0.33)
  const node2Bg = useTransform(smoothProgress, [0.30, 0.34], ["#FFFFFF", "#226192"], {
    clamp: true,
  });
  const node2IconColor = useTransform(smoothProgress, [0.30, 0.34], ["#226192", "#FFFFFF"], {
    clamp: true,
  });

  // Step 3: Strategize (Fills when continuous line reaches it at ~0.62)
  const node3Bg = useTransform(smoothProgress, [0.60, 0.64], ["#FFFFFF", "#226192"], {
    clamp: true,
  });
  const node3IconColor = useTransform(smoothProgress, [0.60, 0.64], ["#226192", "#FFFFFF"], {
    clamp: true,
  });

  // Step 4: Execute (Fills when continuous line reaches it at ~0.90)
  const node4Bg = useTransform(smoothProgress, [0.88, 0.92], ["#FFFFFF", "#226192"], {
    clamp: true,
  });
  const node4IconColor = useTransform(smoothProgress, [0.88, 0.92], ["#226192", "#FFFFFF"], {
    clamp: true,
  });

  // Continuous desktop horizontal rail fill (0.05 -> 0.90)
  const desktopLineScale = useTransform(smoothProgress, [0.05, 0.90], [0, 1], {
    clamp: true,
  });

  // Continuous mobile vertical rail fill (0.05 -> 0.90)
  const mobileLineScale = useTransform(smoothProgress, [0.05, 0.90], [0, 1], {
    clamp: true,
  });

  const nodeBgs = [node1Bg, node2Bg, node3Bg, node4Bg];
  const nodeColors = [node1IconColor, node2IconColor, node3IconColor, node4IconColor];

  return (
    <div
      ref={containerRef}
      id="process"
      className="relative w-full h-[220vh] md:h-[240vh]"
    >
      {/* 100vh Sticky Viewport */}
      <section
        style={{ backgroundColor: "#EAE6DE" }}
        className="sticky top-0 w-full h-[100dvh] max-h-[100dvh] text-[#121214] overflow-hidden select-none flex flex-col justify-between py-6 xs:py-8 sm:py-10 lg:py-14 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 border-t border-[#121214]/10"
      >
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-between relative z-10">
          
          {/* ==============================================================
              SECTION HEADER
              ============================================================== */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 shrink-0 border-b border-[#121214]/10">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-2 h-2 rounded-full bg-[#EF8557] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#226192]">
                  A CLEAR PATH TO GROWTH
                </span>
              </div>

              <h2 className="font-sans font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[#121214]">
                Roadmap to{" "}
                <span className="font-serif italic font-normal text-[#EF8557]">
                  success.
                </span>
              </h2>
            </div>

            <p className="font-sans italic text-xs xs:text-sm sm:text-base text-[#121214]/75 max-w-xs md:text-right leading-relaxed">
              Brand, performance, content and tech working as one connected system.
            </p>
          </div>

          {/* ==============================================================
              DESKTOP VIEW: HORIZONTAL CONNECTED ROADMAP (IMAGE 1:1)
              ============================================================== */}
          <div className="hidden md:flex w-full flex-1 items-center justify-between relative my-auto py-10">
            <div className="relative w-full">
              {/* Single Continuous Collinear Rail */}
              <div className="absolute left-[12.5%] right-[12.5%] top-[48px] lg:top-[56px] -translate-y-1/2 h-[2px] bg-[#121214]/15 z-0">
                {/* Terracotta Accent Dots at Segment Midpoints */}
                <span className="absolute left-[16.67%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#EF8557] ring-4 ring-[#EAE6DE] z-10 shadow-sm" />
                <span className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#EF8557] ring-4 ring-[#EAE6DE] z-10 shadow-sm" />
                <span className="absolute left-[83.33%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#EF8557] ring-4 ring-[#EAE6DE] z-10 shadow-sm" />

                {/* Animated Active Fill */}
                <motion.div
                  style={{
                    scaleX: desktopLineScale,
                    transformOrigin: "left",
                  }}
                  className="w-full h-full bg-[#226192] origin-left will-change-transform"
                />
              </div>

              {/* 4 Step Columns */}
              <div className="w-full grid grid-cols-4 items-start">
                {ROADMAP_STEPS.map((step, idx) => {
                  const IconComponent = step.icon;

                  return (
                    <div
                      key={step.id}
                      className="relative flex flex-col items-center text-center px-2"
                    >
                      {/* Circular Node with Optical Isolation Ring */}
                      <motion.div
                        style={{
                          backgroundColor: nodeBgs[idx],
                        }}
                        className="relative z-10 w-24 h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center border border-[#121214]/15 shadow-[0_10px_25px_rgba(18,18,20,0.08)] mb-6 cursor-default ring-8 ring-[#EAE6DE]"
                      >
                        <motion.div style={{ color: nodeColors[idx] }}>
                          <IconComponent className="w-9 h-9 lg:w-11 lg:h-11 stroke-[1.6]" />
                        </motion.div>
                      </motion.div>

                      {/* Enlarged Typography */}
                      <div className="flex flex-col items-center max-w-[260px]">
                        <span className="font-serif italic text-4xl lg:text-5xl text-[#EF8557] mb-1.5 lg:mb-2">
                          {step.number}
                        </span>
                        <h3 className="font-sans font-bold text-2xl lg:text-3xl text-[#121214] tracking-tight mb-2">
                          {step.title}
                        </h3>
                        <p className="font-sans text-sm lg:text-[15px] text-[#121214]/75 leading-relaxed max-w-[260px]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ==============================================================
              MOBILE VIEW: FULL-HEIGHT VERTICAL DISTRIBUTION
              ============================================================== */}
          <div className="flex md:hidden w-full flex-1 flex-col justify-between relative pt-6 pb-6 px-1">
            {/* Continuous Vertical Rail from center of Node 01 to center of Node 04 */}
            <div className="absolute top-[52px] bottom-[52px] left-7 xs:left-8 w-[2px] bg-[#121214]/15 -translate-x-1/2 z-0">
              {/* Terracotta Accent Dots at Segment Midpoints */}
              <span className="absolute top-[16.7%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#EF8557] z-10 shadow-sm" />
              <span className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#EF8557] z-10 shadow-sm" />
              <span className="absolute top-[83.3%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#EF8557] z-10 shadow-sm" />

              {/* Progress-driven Active Fill */}
              <motion.div
                style={{
                  scaleY: mobileLineScale,
                  transformOrigin: "top",
                }}
                className="w-full h-full bg-[#226192] will-change-transform"
              />
            </div>

            {/* 4 Steps Spaced Evenly Across Available Height */}
            {ROADMAP_STEPS.map((step, idx) => {
              const IconComponent = step.icon;

              return (
                <div
                  key={step.id}
                  className="relative z-10 flex items-center gap-4 xs:gap-5"
                >
                  {/* Circular Node Icon (Calibrated w-14/w-16) */}
                  <motion.div
                    style={{
                      backgroundColor: nodeBgs[idx],
                    }}
                    className="relative w-14 h-14 xs:w-16 xs:h-16 rounded-full shrink-0 flex items-center justify-center border border-[#121214]/15 shadow-[0_6px_16px_rgba(18,18,20,0.06)]"
                  >
                    <motion.div style={{ color: nodeColors[idx] }}>
                      <IconComponent className="w-6 h-6 xs:w-7 xs:h-7 stroke-[1.8]" />
                    </motion.div>
                  </motion.div>

                  {/* Step Metadata */}
                  <div className="flex flex-col items-start pr-1">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="font-serif italic text-xl xs:text-2xl text-[#EF8557]">
                        {step.number}
                      </span>
                      <h3 className="font-sans font-bold text-lg xs:text-xl text-[#121214] tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs xs:text-sm text-[#121214]/75 leading-relaxed max-w-[260px] xs:max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}

export { ProcessSection };
