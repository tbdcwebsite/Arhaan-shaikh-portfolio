"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Target, TrendingUp, BarChart2 } from "lucide-react";

export function GlassGrowthIllustration() {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Normalized mouse coordinates (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-performance spring configuration
  const springConfig = { damping: 28, stiffness: 190, mass: 0.65 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D perspective angle
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [11, -3]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-16, 0]);

  // Differential parallax shifts
  const shiftBaseX = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const shiftBaseY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

  const shiftTabletX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const shiftTabletY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const shiftSat1X = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const shiftSat1Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const shiftSat2X = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const shiftSat2Y = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);

  const shiftSphere1X = useTransform(smoothX, [-0.5, 0.5], [-26, 26]);
  const shiftSphere1Y = useTransform(smoothY, [-0.5, 0.5], [-26, 26]);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("resize", checkViewport);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // 5 Ascending Frosted Glass Bars
  const barData = [
    { height: "28%" },
    { height: "44%" },
    { height: "60%" },
    { height: "76%" },
    { height: "94%" },
  ];

  const arrowPath =
    "M 52 248 C 105 244, 145 218, 195 178 C 245 138, 280 96, 336 68";
  const arrowHighlightPath =
    "M 52 244 C 105 240, 145 214, 195 174 C 245 134, 280 92, 336 64";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[350px] sm:max-w-[480px] lg:max-w-[560px] mx-auto aspect-[4/3.6] sm:aspect-[4/3.4] flex items-center justify-center select-none perspective-container"
      style={{ perspective: "1200px" }}
      aria-label="3D Glass Growth Illustration"
    >
      {/* 3D Rig Container with preserve-3d & gentle mobile sway */}
      <motion.div
        style={{
          rotateX: isMobile || prefersReducedMotion ? undefined : rotateX,
          rotateY: isMobile || prefersReducedMotion ? undefined : rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={
          isMobile && !prefersReducedMotion
            ? {
              opacity: 1,
              scale: 1,
              y: [0, -5, 0],
              rotateX: [5, 2, 5],
              rotateY: [-8, -3, -8],
            }
            : { opacity: 1, scale: 1, y: 0 }
        }
        transition={
          isMobile && !prefersReducedMotion
            ? {
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
              rotateX: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
              rotateY: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
            }
            : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
        className="relative w-full h-full flex items-center justify-center preserve-3d"
      >
        {/* ========================================================
            LAYER 0 (translateZ: 0px): Radial Ambient Backlight Glow
            ======================================================== */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Main Soft Radial Lime Glow (#CDF225) */}
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : { scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }
            }
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(205, 242, 37, 0.48) 0%, rgba(205, 242, 37, 0.25) 40%, rgba(205, 242, 37, 0.08) 62%, rgba(205, 242, 37, 0) 75%)",
              filter: "blur(55px)",
            }}
          />
          {/* Ambient Core Highlight */}
          <div
            className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] rounded-full opacity-65"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgba(220, 255, 60, 0.42) 0%, rgba(205, 242, 37, 0) 70%)",
              filter: "blur(32px)",
            }}
          />
        </div>

        {/* ========================================================
            LAYER 1 (translateZ: 15px): Ground Pedestal Discs & Orbital Gyro Ring
            ======================================================== */}
        <div className="hero-exit-pedestal absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{
              x: isMobile ? 0 : shiftBaseX,
              y: isMobile ? 0 : shiftBaseY,
              transform: "translateZ(15px)",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {/* Lower Glass Pedestal Base Ring */}
            <div
              className="absolute bottom-[2%] sm:bottom-[3%] w-[290px] sm:w-[420px] h-[90px] sm:h-[120px] rounded-[50%]"
              style={{
                transform: "rotateX(72deg)",
                background:
                  "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.8) 0%, rgba(240, 252, 210, 0.35) 60%, rgba(205, 242, 37, 0.18) 100%)",
                border: "1.5px solid rgba(255, 255, 255, 0.95)",
                boxShadow:
                  "0 18px 40px rgba(205, 242, 37, 0.32), inset 0 0 25px rgba(255, 255, 255, 0.85), 0 2px 6px rgba(255, 255, 255, 0.9)",
              }}
            />

            {/* Upper Pedestal Ring Rim */}
            <div
              className="absolute bottom-[5%] sm:bottom-[6.5%] w-[235px] sm:w-[340px] h-[72px] sm:h-[95px] rounded-[50%]"
              style={{
                transform: "rotateX(72deg)",
                border: "2px solid rgba(255, 255, 255, 0.95)",
                background:
                  "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.75) 0%, rgba(205, 242, 37, 0.24) 75%, transparent 100%)",
                boxShadow:
                  "0 0 32px rgba(205, 242, 37, 0.4), inset 0 0 18px rgba(255, 255, 255, 0.95)",
              }}
            />

            {/* Orbital Light Ring sweeping through the middle */}
            <div
              className="absolute w-[340px] sm:w-[490px] h-[155px] sm:h-[220px] rounded-[50%] pointer-events-none"
              style={{
                transform: "rotateX(64deg) rotateY(-18deg) translateZ(-6px)",
                border: "1.6px solid rgba(255, 255, 255, 0.85)",
                boxShadow:
                  "0 0 22px rgba(205, 242, 37, 0.38), inset 0 0 15px rgba(255, 255, 255, 0.65)",
              }}
            />
          </motion.div>
        </div>

        {/* ========================================================
            LAYER 2 (translateZ: 45px): Main Tilted Frosted Glass Slate & Growth Bars
            ======================================================== */}
        <div className="hero-exit-tablet relative flex items-center justify-center">
          <motion.div
            style={{
              x: isMobile ? 0 : shiftTabletX,
              y: isMobile ? 0 : shiftTabletY,
              transform: "translateZ(45px)",
              transformStyle: "preserve-3d",
            }}
            className="relative w-[280px] sm:w-[380px] md:w-[430px] h-[225px] sm:h-[285px] md:h-[315px] rounded-3xl glass-panel p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-[0_24px_50px_-12px_rgba(18,19,16,0.08),0_0_0_1.5px_rgba(255,255,255,0.92)_inset,0_18px_40px_rgba(205,242,37,0.2)]"
          >
            {/* Glass Sheen Specular Highlight */}
            <div className="absolute -top-[50%] -left-[20%] w-[140%] h-[100%] bg-gradient-to-b from-white/50 via-white/12 to-transparent rotate-12 pointer-events-none rounded-3xl" />

            {/* Window Control Dot Indicators */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#CDF225] border border-white/90 shadow-[0_0_8px_rgba(205,242,37,0.9)]" />
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/75 border border-white/90 shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/55 border border-white/80" />
              </div>
            </div>

            {/* Internal Stat Card: "REVENUE GROWTH +248% ↗" */}
            <div className="relative z-10 mt-1 self-start">
              <div className="glass-pill px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-white/95 shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex flex-col">
                <span className="text-[9.5px] sm:text-[10.5px] font-semibold text-[#5A5C55] uppercase tracking-wider mb-0.5">
                  Revenue Growth
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-black text-sm sm:text-lg text-[#121310] tracking-tight">
                    +248%
                  </span>
                  <motion.div
                    animate={{ y: [0, -2, 0], x: [0, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                  >
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#84CC16] stroke-[2.8]" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* 5 Ascending Frosted Glass Bar Chart Columns */}
            <div className="relative z-10 w-full h-[125px] sm:h-[160px] flex items-end justify-between px-1.5 sm:px-3 pb-1">
              {barData.map((bar, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: bar.height, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative w-[34px] sm:w-[48px] rounded-t-xl glass-bar group overflow-hidden"
                  style={{
                    height: bar.height,
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.52) 45%, rgba(205, 242, 37, 0.28) 100%)",
                    border: "1.2px solid rgba(255, 255, 255, 0.95)",
                    boxShadow:
                      "0 10px 22px -2px rgba(18, 19, 16, 0.06), inset 0 1.5px 2px 0 rgba(255, 255, 255, 1), inset 1px 0 2px 0 rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {/* Subtle Lime Inner Glow Breath */}
                  <motion.div
                    animate={{ opacity: [0.15, 0.45, 0.15] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-[#CDF225]/35 via-transparent to-white/40 pointer-events-none"
                  />

                  {/* 3D Top Cap Highlight */}
                  <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-xl bg-white/95 border-b border-white/50 shadow-[0_1px_4px_rgba(255,255,255,0.95)]" />

                  {/* Vertical Sheen Highlight Line */}
                  <div className="absolute inset-y-1 left-1 sm:left-1.5 w-[2px] bg-white/50 rounded-full" />
                </motion.div>
              ))}
            </div>

            {/* ========================================================
                3D-STYLE CURVED GROWTH ARROW SVG (5-Bar Trajectory)
                ======================================================== */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
              className="absolute inset-0 z-20 pointer-events-none overflow-visible"
            >
              <svg
                viewBox="0 0 420 310"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible filter drop-shadow-[0_12px_20px_rgba(175,235,10,0.7)] drop-shadow-[0_4px_6px_rgba(18,19,16,0.16)]"
              >
                <defs>
                  {/* Main Lime Green Body Gradient (Scoped ID) */}
                  <linearGradient
                    id={`mobileArrowBodyGrad-${uid}`}
                    x1="50"
                    y1="250"
                    x2="355"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#CDF225" />
                    <stop offset="55%" stopColor="#C4EE1B" />
                    <stop offset="100%" stopColor="#9BDC00" />
                  </linearGradient>

                  {/* Upper Ridge Specular Line Highlight */}
                  <linearGradient
                    id={`mobileArrowHighlight-${uid}`}
                    x1="50"
                    y1="242"
                    x2="355"
                    y2="52"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#F6FFA8" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#CDF225" stopOpacity="0.6" />
                  </linearGradient>

                  {/* Deep 3D Under-Shade Extrusion */}
                  <linearGradient
                    id={`mobileArrowUnderShade-${uid}`}
                    x1="50"
                    y1="260"
                    x2="355"
                    y2="70"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#759C00" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#557200" stopOpacity="0.85" />
                  </linearGradient>
                </defs>

                {/* 1. 3D Underbody Depth Extrusion (Solid fallback + Gradient) */}
                <motion.path
                  d={arrowPath}
                  stroke="#658800"
                  strokeWidth="13"
                  strokeLinecap="round"
                  fill="none"
                  transform="translate(1.5, 4)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* 2. Solid Primary Lime Base (Guarantees 100% visibility across all viewports) */}
                <motion.path
                  d={arrowPath}
                  stroke="#CDF225"
                  strokeWidth="11"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* 3. Main Glowing 3D Ribbon Gradient Body */}
                <motion.path
                  d={arrowPath}
                  stroke={`url(#mobileArrowBodyGrad-${uid})`}
                  strokeWidth="11"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* 4. Specular Highlight Strip along top ridge */}
                <motion.path
                  d={arrowHighlightPath}
                  stroke="#FFFFFF"
                  strokeOpacity="0.9"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.15,
                    delay: 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />

                {/* 5. Continuous Travelling Light Pulse Along Arrow Curve */}
                <motion.path
                  d={arrowPath}
                  stroke="#FFFFFF"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  strokeDasharray="42 330"
                  fill="none"
                  style={{ filter: "blur(1px)" }}
                  animate={{ strokeDashoffset: [372, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "linear",
                  }}
                />

                {/* 6. 3D Dimensional Arrowhead at 45 degrees */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.08, 1], opacity: 1 }}
                  transition={{
                    scale: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.9,
                    },
                    opacity: { duration: 0.25, delay: 0.8 },
                  }}
                >
                  <g transform="translate(338, 65) rotate(-38)">
                    {/* Arrowhead Under-Shadow */}
                    <path
                      d="M -16 -12 L 18 0 L -16 12 L -9 0 Z"
                      fill="#6B8E00"
                      transform="translate(1.5, 3)"
                    />
                    {/* Arrowhead Main Face */}
                    <path
                      d="M -16 -12 L 18 0 L -16 12 L -9 0 Z"
                      fill="#CDF225"
                      stroke="#FFFFFF"
                      strokeWidth="0.9"
                    />
                    {/* Arrowhead Top Highlight Facet */}
                    <path
                      d="M -16 -12 L 18 0 L -9 0 Z"
                      fill="#FFFFFF"
                      fillOpacity="0.5"
                    />
                  </g>
                </motion.g>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* ========================================================
            LAYER 3 (translateZ: 85px): Floating Satellite Card (Bottom-Right)
            "Plan / Execute / Grow"
            ======================================================== */}
        <div className="hero-exit-satellites absolute bottom-2 sm:bottom-4 right-2 sm:right-0 z-30">
          <motion.div
            style={{
              x: isMobile ? 0 : shiftSat2X,
              y: isMobile ? 0 : shiftSat2Y,
              transform: "translateZ(85px)",
              transformStyle: "preserve-3d",
            }}
            animate={prefersReducedMotion ? {} : { y: [-7, 7, -7] }}
            transition={{
              repeat: Infinity,
              duration: 3.6,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="glass-panel px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl flex items-center gap-2.5 sm:gap-3 border border-white/95 shadow-[0_14px_32px_rgba(0,0,0,0.07),0_0_18px_rgba(205,242,37,0.18)]">
              {/* Mini Bar Chart Icon */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#EFF3D8] border border-[#E0E8BD] flex items-center justify-center text-[#7EA600] shrink-0">
                <BarChart2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
              {/* Stacked Plan / Execute / Grow */}
              <div className="flex flex-col text-[10px] sm:text-[11px] font-heading font-extrabold text-[#121310] leading-tight text-left">
                <span>Plan</span>
                <span>Execute</span>
                <span className="text-[#84CC16]">Grow</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            LAYER 4 (translateZ: 115px): Floating Satellite Card (Top-Right)
            "Better Strategy / Bigger Results"
            ======================================================== */}
        <div className="hero-exit-satellites absolute top-2 sm:top-0 right-2 sm:-right-2 z-40">
          <motion.div
            style={{
              x: isMobile ? 0 : shiftSat1X,
              y: isMobile ? 0 : shiftSat1Y,
              transform: "translateZ(115px)",
              transformStyle: "preserve-3d",
            }}
            animate={prefersReducedMotion ? {} : { y: [7, -7, 7] }}
            transition={{
              repeat: Infinity,
              duration: 3.3,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="glass-panel px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl flex items-center gap-2.5 sm:gap-3 border border-white/95 shadow-[0_18px_36px_rgba(0,0,0,0.08),0_0_22px_rgba(205,242,37,0.22)]">
              {/* Target Bullseye Icon */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#EFF3D8] border border-[#E0E8BD] flex items-center justify-center text-[#7EA600] shrink-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
              {/* Strategy / Results Text */}
              <div className="flex flex-col text-left">
                <span className="font-heading font-bold text-[11px] sm:text-[12.5px] text-[#121310] leading-none mb-1">
                  Better Strategy
                </span>
                <span className="font-body font-medium text-[10px] sm:text-[11.5px] text-[#5A5C55] leading-none">
                  Bigger Results
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            LAYER 5 & 6 (translateZ: 50px - 135px): Floating 3D Spheres & Orbs
            ======================================================== */}
        {/* Large Primary Glossy Green Sphere (Lower Left) */}
        <div className="hero-exit-sphere-left absolute -left-3 sm:-left-8 bottom-[20%] sm:bottom-[23%] z-35 pointer-events-none">
          <motion.div
            style={{
              x: isMobile ? 0 : shiftSphere1X,
              y: isMobile ? 0 : shiftSphere1Y,
              transform: "translateZ(135px)",
            }}
            animate={
              prefersReducedMotion
                ? {}
                : { y: [-10, 10, -10], scale: [1, 1.06, 1] }
            }
            transition={{
              repeat: Infinity,
              duration: 3.6,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full sphere-lime-primary relative">
              <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 w-3 h-1.5 sm:w-3.5 sm:h-2 rounded-full bg-white/85 rotate-[-35deg] blur-[0.4px]" />
            </div>
          </motion.div>
        </div>

        {/* Small Glossy Green Sphere (Top-Left above slate) */}
        <div className="hero-exit-sphere-top absolute left-[14%] top-[6%] z-30 pointer-events-none">
          <motion.div
            style={{ transform: "translateZ(90px)" }}
            animate={prefersReducedMotion ? {} : { y: [8, -8, 8] }}
            transition={{
              repeat: Infinity,
              duration: 3.1,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full sphere-lime-small relative">
              <div className="absolute top-1 left-1 w-1.5 h-1 rounded-full bg-white/90 rotate-[-35deg]" />
            </div>
          </motion.div>
        </div>

        {/* Refractive Clear Glass Orb (Upper Right near satellite card) */}
        <div className="hero-exit-sphere-right absolute right-[22%] top-1.5 sm:top-1 z-35 pointer-events-none">
          <motion.div
            style={{ transform: "translateZ(125px)" }}
            animate={prefersReducedMotion ? {} : { y: [-8, 8, -8] }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full sphere-glass-clear relative">
              <div className="absolute top-1.5 left-1.5 w-2 h-1.5 rounded-full bg-white/95 rotate-[-35deg] blur-[0.3px]" />
            </div>
          </motion.div>
        </div>

        {/* Small Accent Sphere on Far-Right Orbit */}
        <div className="hero-exit-sphere-far-right absolute -right-1 sm:right-3 top-[54%] z-30 pointer-events-none">
          <motion.div
            style={{ transform: "translateZ(75px)" }}
            animate={prefersReducedMotion ? {} : { y: [9, -9, 9] }}
            transition={{
              repeat: Infinity,
              duration: 3.3,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full sphere-lime-small relative">
              <div className="absolute top-1 left-1 w-1.5 h-1 rounded-full bg-white/90 rotate-[-35deg]" />
            </div>
          </motion.div>
        </div>

        {/* Tiny Glass Bead at Lower Base */}
        <div className="hero-exit-sphere-bottom absolute left-[30%] bottom-[3%] z-20 pointer-events-none">
          <motion.div
            style={{ transform: "translateZ(50px)" }}
            animate={prefersReducedMotion ? {} : { y: [-6, 6, -6] }}
            transition={{
              repeat: Infinity,
              duration: 3.8,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full sphere-glass-clear" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default GlassGrowthIllustration;
