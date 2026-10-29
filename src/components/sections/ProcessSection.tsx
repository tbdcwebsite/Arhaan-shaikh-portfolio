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

  // ==============================================================
  // STEP 1: LISTEN (Active upon entering)
  // ==============================================================
  const node1Bg = useTransform(
    smoothProgress,
    [0, 0.05],
    ["#226192", "#226192"]
  );
  const node1IconColor = useTransform(
    smoothProgress,
    [0, 0.05],
    ["#FFFFFF", "#FFFFFF"]
  );

  // Line 1: Fills from Node 1 to Node 2 (0.05 -> 0.32)
  const line1Scale = useTransform(smoothProgress, [0.05, 0.32], [0, 1], {
    clamp: true,
  });

  // ==============================================================
  // STEP 2: AUDIT (Fills when Line 1 reaches it at ~0.32)
  // ==============================================================
  const node2Bg = useTransform(
    smoothProgress,
    [0.30, 0.34],
    ["#FFFFFF", "#226192"],
    { clamp: true }
  );
  const node2IconColor = useTransform(
    smoothProgress,
    [0.30, 0.34],
    ["#226192", "#FFFFFF"],
    { clamp: true }
  );

  // Line 2: Fills from Node 2 to Node 3 (0.35 -> 0.62)
  const line2Scale = useTransform(smoothProgress, [0.35, 0.62], [0, 1], {
    clamp: true,
  });

  // ==============================================================
  // STEP 3: STRATEGIZE (Fills when Line 2 reaches it at ~0.62)
  // ==============================================================
  const node3Bg = useTransform(
    smoothProgress,
    [0.60, 0.64],
    ["#FFFFFF", "#226192"],
    { clamp: true }
  );
  const node3IconColor = useTransform(
    smoothProgress,
    [0.60, 0.64],
    ["#226192", "#FFFFFF"],
    { clamp: true }
  );

  // Line 3: Fills from Node 3 to Node 4 (0.65 -> 0.90)
  const line3Scale = useTransform(smoothProgress, [0.65, 0.90], [0, 1], {
    clamp: true,
  });

  // ==============================================================
  // STEP 4: EXECUTE (Fills when Line 3 reaches it at ~0.90)
  // ==============================================================
  const node4Bg = useTransform(
    smoothProgress,
    [0.88, 0.92],
    ["#FFFFFF", "#226192"],
    { clamp: true }
  );
  const node4IconColor = useTransform(
    smoothProgress,
    [0.88, 0.92],
    ["#226192", "#FFFFFF"],
    { clamp: true }
  );

  // Helpers for node states
  const nodeBgs = [node1Bg, node2Bg, node3Bg, node4Bg];
  const nodeColors = [node1IconColor, node2IconColor, node3IconColor, node4IconColor];
  const lineScales = [line1Scale, line2Scale, line3Scale];

  return (
    // Runway height provides smooth forward/reverse control
    <div
      ref={containerRef}
      id="process"
      className="relative w-full h-[220vh] md:h-[240vh]"
    >
      {/* 100vh Sticky Viewport */}
      <section
        style={{ backgroundColor: "#EAE6DE" }}
        className="sticky top-0 w-full h-[100dvh] max-h-[100dvh] text-[#121214] overflow-hidden select-none flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[#121214]/10"
      >
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-between relative z-10">
          
          {/* ==============================================================
              SECTION HEADER (IMAGE 1:1)
              ============================================================== */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pb-5 shrink-0 border-b border-[#121214]/10">
            {/* Left: Eyebrow + Main Title */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#EF8557] animate-pulse" />
                <span className="font-mono text-xs font-semibold tracking-[0.24em] uppercase text-[#226192]">
                  A CLEAR PATH TO GROWTH
                </span>
              </div>

              <h2 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[#121214]">
                Roadmap to{" "}
                <span className="font-serif italic font-normal text-[#EF8557]">
                  success.
                </span>
              </h2>
            </div>

            {/* Right: Narrative Kicker */}
            <p className="font-sans italic text-sm sm:text-base text-[#121214]/75 max-w-xs md:text-right leading-relaxed">
              Brand, performance, content and tech working as one connected system.
            </p>
          </div>

          {/* ==============================================================
              DESKTOP VIEW: HORIZONTAL SCROLL-DRIVEN CONNECTED ROADMAP (IMAGE 1:1)
              ============================================================== */}
          <div className="hidden md:flex w-full flex-1 items-center justify-between relative my-auto py-6 lg:py-8">
            {ROADMAP_STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              const hasNext = idx < ROADMAP_STEPS.length - 1;

              return (
                <div
                  key={step.id}
                  className="relative flex-1 flex flex-col items-center text-center px-2"
                >
                  {/* Connecting Line to next step */}
                  {hasNext && (
                    <div className="absolute top-10 lg:top-12 left-[50%] right-[-50%] h-[2px] z-0 flex items-center">
                      {/* Background Inactive Line */}
                      <div className="w-full h-full bg-[#121214]/15 relative">
                        {/* Middle Terracotta Accent Dot */}
                        <span className="absolute left-1/2 -top-[3px] -translate-x-1/2 w-2 h-2 rounded-full bg-[#EF8557] z-10 shadow-sm" />
                        
                        {/* Animated Blue Fill Line (Scroll Driven) */}
                        <motion.div
                          style={{
                            scaleX: lineScales[idx],
                            transformOrigin: "left",
                          }}
                          className="absolute inset-0 h-full bg-[#226192] will-change-transform"
                        />
                      </div>
                    </div>
                  )}

                  {/* Circular Node Icon (Fills Blue on Contact) */}
                  <motion.div
                    style={{
                      backgroundColor: nodeBgs[idx],
                    }}
                    className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center border border-[#121214]/15 shadow-[0_10px_25px_rgba(18,18,20,0.08)] transition-shadow duration-300 mb-5 lg:mb-6 cursor-default"
                  >
                    <motion.div style={{ color: nodeColors[idx] }}>
                      <IconComponent className="w-8 h-8 lg:w-9 lg:h-9 stroke-[1.6]" />
                    </motion.div>
                  </motion.div>

                  {/* Step Metadata: 01, Listen, Description */}
                  <div className="flex flex-col items-center max-w-[210px]">
                    <span className="font-serif italic text-2xl lg:text-3xl text-[#EF8557] mb-1">
                      {step.number}
                    </span>
                    <h3 className="font-sans font-bold text-lg lg:text-xl text-[#121214] tracking-tight mb-1.5">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#121214]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ==============================================================
              MOBILE VIEW: VERTICAL SCROLL-DRIVEN CONNECTED ROADMAP
              ============================================================== */}
          <div className="flex md:hidden w-full flex-1 flex-col justify-center relative my-auto py-3 pl-3">
            {ROADMAP_STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              const hasNext = idx < ROADMAP_STEPS.length - 1;

              return (
                <div key={step.id} className="relative flex items-start gap-4 pb-5 last:pb-0">
                  {/* Vertical Progress Rail */}
                  {hasNext && (
                    <div className="absolute top-12 left-6 bottom-0 w-[2px] bg-[#121214]/15 -translate-x-1/2 z-0">
                      {/* Middle Terracotta Accent Dot */}
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#EF8557] z-10 shadow-sm" />
                      
                      <motion.div
                        style={{
                          scaleY: lineScales[idx],
                          transformOrigin: "top",
                        }}
                        className="w-full h-full bg-[#226192] will-change-transform"
                      />
                    </div>
                  )}

                  {/* Circular Node */}
                  <motion.div
                    style={{
                      backgroundColor: nodeBgs[idx],
                    }}
                    className="relative z-10 w-12 h-12 rounded-full shrink-0 flex items-center justify-center border border-[#121214]/15 shadow-sm"
                  >
                    <motion.div style={{ color: nodeColors[idx] }}>
                      <IconComponent className="w-5 h-5 stroke-[1.8]" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex flex-col items-start pr-2">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="font-serif italic text-lg text-[#EF8557]">
                        {step.number}
                      </span>
                      <h3 className="font-sans font-bold text-base text-[#121214]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs text-[#121214]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Micro Tracker */}
          <div className="w-full flex items-center justify-between pt-3 border-t border-[#121214]/10 text-[10px] font-mono tracking-widest text-[#121214]/50 uppercase shrink-0">
            <span>SCROLL DRIVEN JOURNEY</span>
            <span className="text-[#EF8557] font-semibold">01 LISTEN → 04 EXECUTE</span>
          </div>

        </div>
      </section>
    </div>
  );
}

export { ProcessSection };
