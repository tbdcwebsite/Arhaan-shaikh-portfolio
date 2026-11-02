"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCard {
  id: string;
  number: string;
  title: string;
  href: string;
  theme: "cream" | "terracotta" | "blue";
  iconSrc: string;
  alt: string;
}

const SERVICES_DATA: ServiceCard[] = [
  {
    id: "s1",
    number: "01",
    title: "Go-To-Market Strategy",
    href: "/services/go-to-market",
    theme: "cream",
    iconSrc: "/images/Go-To-Market Startegy.png",
    alt: "Go To Market Strategy Illustration",
  },
  {
    id: "s2",
    number: "02",
    title: "Growth Strategy",
    href: "/services/growth-strategy",
    theme: "terracotta",
    iconSrc: "/images/Growth Strategy.png",
    alt: "Growth Strategy Illustration",
  },
  {
    id: "s3",
    number: "03",
    title: "E-Commerce & Quick Commerce",
    href: "/services/ecommerce",
    theme: "blue",
    iconSrc: "/images/E-Commerce & Quick Commerce.png",
    alt: "E-Commerce & Quick Commerce Illustration",
  },
  {
    id: "s4",
    number: "04",
    title: "Marketing Strategy",
    href: "/services/marketing-strategy",
    theme: "cream",
    iconSrc: "/images/Marketing Strategy.png",
    alt: "Marketing Strategy Illustration",
  },
  {
    id: "s5",
    number: "05",
    title: "Brand Positioning",
    href: "/services/brand-positioning",
    theme: "terracotta",
    iconSrc: "/images/Brand Positioning.png",
    alt: "Brand Positioning Illustration",
  },
  {
    id: "s6",
    number: "06",
    title: "Digital Strategy",
    href: "/services/digital-strategy",
    theme: "blue",
    iconSrc: "/images/Digital Strategy .png",
    alt: "Digital Strategy Illustration",
  },
];

// =========================================================================
// SEQUENTIAL CARD SCHEDULE CONFIGURATION (6 CARDS ACROSS [0.0, 1.0])
// =========================================================================
interface CardTimelineConfig {
  yInput: number[];
  yOutput: number[];
  opInput: number[];
  opOutput: number[];
  visRange: [number, number];
  plateau: [number, number];
}

const MOBILE_CARD_SCHEDULES: CardTimelineConfig[] = [
  // Card 0: Resting [0.00, 0.12], Exits [0.12, 0.17]
  {
    yInput: [0.0, 0.12, 0.17, 1.0],
    yOutput: [0, 0, -60, -60],
    opInput: [0.0, 0.12, 0.17, 1.0],
    opOutput: [1, 1, 0, 0],
    visRange: [0.0, 0.175],
    plateau: [0.0, 0.12],
  },
  // Card 1: Enters [0.12, 0.17], Resting [0.17, 0.29], Exits [0.29, 0.34]
  {
    yInput: [0.0, 0.12, 0.17, 0.29, 0.34, 1.0],
    yOutput: [60, 60, 0, 0, -60, -60],
    opInput: [0.0, 0.12, 0.17, 0.29, 0.34, 1.0],
    opOutput: [0, 0, 1, 1, 0, 0],
    visRange: [0.115, 0.345],
    plateau: [0.17, 0.29],
  },
  // Card 2: Enters [0.29, 0.34], Resting [0.34, 0.46], Exits [0.46, 0.51]
  {
    yInput: [0.0, 0.29, 0.34, 0.46, 0.51, 1.0],
    yOutput: [60, 60, 0, 0, -60, -60],
    opInput: [0.0, 0.29, 0.34, 0.46, 0.51, 1.0],
    opOutput: [0, 0, 1, 1, 0, 0],
    visRange: [0.285, 0.515],
    plateau: [0.34, 0.46],
  },
  // Card 3: Enters [0.46, 0.51], Resting [0.51, 0.63], Exits [0.63, 0.68]
  {
    yInput: [0.0, 0.46, 0.51, 0.63, 0.68, 1.0],
    yOutput: [60, 60, 0, 0, -60, -60],
    opInput: [0.0, 0.46, 0.51, 0.63, 0.68, 1.0],
    opOutput: [0, 0, 1, 1, 0, 0],
    visRange: [0.455, 0.685],
    plateau: [0.51, 0.63],
  },
  // Card 4: Enters [0.63, 0.68], Resting [0.68, 0.80], Exits [0.80, 0.85]
  {
    yInput: [0.0, 0.63, 0.68, 0.8, 0.85, 1.0],
    yOutput: [60, 60, 0, 0, -60, -60],
    opInput: [0.0, 0.63, 0.68, 0.8, 0.85, 1.0],
    opOutput: [0, 0, 1, 1, 0, 0],
    visRange: [0.625, 0.855],
    plateau: [0.68, 0.8],
  },
  // Card 5: Enters [0.80, 0.85], Resting [0.85, 1.00]
  {
    yInput: [0.0, 0.8, 0.85, 1.0],
    yOutput: [60, 60, 0, 0],
    opInput: [0.0, 0.8, 0.85, 1.0],
    opOutput: [0, 0, 1, 1],
    visRange: [0.795, 1.0],
    plateau: [0.85, 1.0],
  },
];

// =========================================================================
// MOBILE CARD ITEM (PURE ONE-CARD VISIBILITY & ZERO OVERLAP)
// =========================================================================
function MobileCardItem({
  card,
  index,
  smoothProgress,
}: {
  card: ServiceCard;
  index: number;
  smoothProgress: MotionValue<number>;
}) {
  const shouldReduceMotion = useReducedMotion();
  const config = MOBILE_CARD_SCHEDULES[index];

  const isCream = card.theme === "cream";
  const isTerracotta = card.theme === "terracotta";

  // Calibrated vertical motion (bypassed if reduced motion is requested)
  const y = useTransform(
    smoothProgress,
    config.yInput,
    shouldReduceMotion ? config.yOutput.map(() => 0) : config.yOutput,
    { clamp: true }
  );

  // Dedicated, non-overlapping opacity fade
  const opacity = useTransform(smoothProgress, config.opInput, config.opOutput, {
    clamp: true,
  });

  // Strict visibility gating: hidden when outside active transition boundaries
  const visibility = useTransform(smoothProgress, (p) => {
    return p >= config.visRange[0] && p <= config.visRange[1]
      ? "visible"
      : "hidden";
  });

  // Strict pointer events: only clickable when resting in dominant reading position
  const pointerEvents = useTransform(smoothProgress, (p) => {
    return p >= config.plateau[0] - 0.015 && p <= config.plateau[1] + 0.015
      ? "auto"
      : "none";
  });

  // Dynamic elevation: incoming and active cards always render on top
  const zIndex = useTransform(smoothProgress, (p) => {
    if (p < config.visRange[0] || p > config.visRange[1]) return 0;
    if (p >= config.plateau[0] && p <= config.plateau[1]) return 20;
    return 10;
  });

  return (
    <motion.div
      style={{
        y,
        opacity,
        visibility,
        pointerEvents,
        zIndex,
      }}
      className="absolute inset-0 flex items-center justify-center will-change-transform"
    >
      <Link
        href={card.href}
        className={`group w-full h-[470px] xs:h-[510px] sm:h-[540px] max-h-[66dvh] rounded-[28px] xs:rounded-[32px] p-6 xs:p-7 sm:p-8 flex flex-col justify-between transition-shadow duration-300 cursor-pointer focus:outline-none shadow-[0_20px_48px_rgba(18,18,20,0.14)] ${
          isCream
            ? "bg-[#FAF8F5] border border-[#121214]/10 text-[#121214]"
            : isTerracotta
            ? "bg-[#EF8557] text-white"
            : "bg-[#226192] text-white"
        }`}
      >
        {/* Top: Large Butler Number */}
        <div className="w-full flex items-start justify-start">
          <span
            className={`font-serif italic text-4xl xs:text-5xl leading-none select-none ${
              isCream ? "text-[#226192]" : "text-white"
            }`}
          >
            {card.number}
          </span>
        </div>

        {/* Center: Real Artwork Illustration */}
        <div className="relative w-full h-36 xs:h-40 flex items-center justify-center my-auto px-6 py-2">
          <Image
            src={card.iconSrc}
            alt={card.alt}
            width={160}
            height={160}
            priority={index === 0}
            className="max-h-[130px] xs:max-h-[145px] w-auto h-auto object-contain pointer-events-none select-none transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-sm"
          />
        </div>

        {/* Bottom Row: Title + Action Arrow Button */}
        <div className="w-full flex items-end justify-between gap-3 pt-3.5 border-t border-current/10">
          <h3
            className={`font-sans font-bold text-base xs:text-lg leading-snug tracking-tight max-w-[210px] ${
              isCream ? "text-[#121214]" : "text-white"
            }`}
          >
            {card.title}
          </h3>

          <div
            className={`w-9 h-9 xs:w-10 xs:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 ${
              isCream
                ? "bg-[#226192] text-white"
                : isTerracotta
                ? "bg-white text-[#EF8557]"
                : "bg-white text-[#226192]"
            }`}
          >
            <ArrowRight className="w-4 h-4 xs:w-4.5 xs:h-4.5 stroke-[2.4] transition-transform duration-300 ease-out group-hover:-rotate-45" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// =========================================================================
// MAIN QUESTIONS / SERVICES SECTION
// =========================================================================
export default function QuestionsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const desktopViewportRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState<number>(320);
  const [maxScrollX, setMaxScrollX] = useState<number>(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Balanced spring parameters provide direct thumb synchronization without latency
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    mass: 0.35,
  });

  // Track active index for the micro mobile step indicator
  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      if (latest < 0.145) setActiveCardIndex(0);
      else if (latest < 0.315) setActiveCardIndex(1);
      else if (latest < 0.485) setActiveCardIndex(2);
      else if (latest < 0.655) setActiveCardIndex(3);
      else if (latest < 0.825) setActiveCardIndex(4);
      else setActiveCardIndex(5);
    });
  }, [smoothProgress]);

  // Desktop horizontal calculations
  useEffect(() => {
    const updateMetrics = () => {
      if (!desktopViewportRef.current) return;
      const viewportWidth = desktopViewportRef.current.clientWidth;
      const gap = 20;

      const calculatedWidth = (viewportWidth - 3 * gap) / 3.5;
      const exactShift = 2.5 * calculatedWidth + 2 * gap;

      setCardWidth(calculatedWidth);
      setMaxScrollX(Math.max(0, exactShift));
    };

    updateMetrics();

    const resizeObserver = new ResizeObserver(() => {
      updateMetrics();
    });

    if (desktopViewportRef.current) {
      resizeObserver.observe(desktopViewportRef.current);
    }

    window.addEventListener("resize", updateMetrics);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  const desktopTranslateX = useTransform(smoothProgress, [0, 1], [0, -maxScrollX]);

  return (
    // 480vh on mobile ensures ~76vh of scroll per card step; 190vh on desktop
    <div
      ref={trackRef}
      id="services"
      className="relative w-full h-[480vh] lg:h-[190vh]"
    >
      <span id="questions" className="absolute -top-24 pointer-events-none opacity-0" />

      {/* 100vh Sticky Viewport */}
      <section
        style={{ backgroundColor: "#EAE6DE" }}
        className="sticky top-0 w-full h-[100dvh] max-h-[100dvh] text-[#121214] overflow-hidden select-none flex flex-col justify-between pt-5 pb-6 sm:pt-7 sm:pb-8 lg:pt-9 lg:pb-10 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-[#121214]/10"
      >
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-between relative z-10">
          
          {/* Header Row */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 sm:pb-4 shrink-0">
            <div className="flex flex-col">
              <h2 className="font-sans font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] text-[#121214]">
                Where I Usually
              </h2>
              <span className="font-serif italic font-normal text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] text-[#EF8557] mt-0.5">
                Enter The Picture.
              </span>
            </div>

            {/* Desktop Only Kicker */}
            <div className="hidden md:flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.24em] uppercase text-[#121214]/65 self-start md:self-end pb-1">
              <span>KEEP SCROLLING</span>
              <span className="text-[#EF8557] font-sans text-base">→</span>
            </div>
          </div>

          {/* ==============================================================
              DESKTOP VIEW: UNCHANGED 3.5-CARD HORIZONTAL CAROUSEL
              ============================================================== */}
          <div
            ref={desktopViewportRef}
            className="hidden lg:flex w-full flex-1 items-center overflow-hidden my-auto py-4 lg:py-6"
          >
            <motion.div
              style={{ x: desktopTranslateX }}
              className="flex items-center gap-5 will-change-transform py-3"
            >
              {SERVICES_DATA.map((card, idx) => {
                const isCream = card.theme === "cream";
                const isTerracotta = card.theme === "terracotta";

                return (
                  <Link
                    key={card.id}
                    href={card.href}
                    style={{
                      width: `${cardWidth}px`,
                      minWidth: `${cardWidth}px`,
                    }}
                    className={`group shrink-0 h-[430px] lg:h-[470px] xl:h-[500px] max-h-[62vh] rounded-[28px] lg:rounded-[32px] p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer focus:outline-none will-change-transform shadow-[0_14px_36px_rgba(18,18,20,0.08)] hover:shadow-[0_22px_48px_rgba(18,18,20,0.16)] hover:-translate-y-1 ${
                      isCream
                        ? "bg-[#FAF8F5] border border-[#121214]/10 text-[#121214]"
                        : isTerracotta
                        ? "bg-[#EF8557] text-white"
                        : "bg-[#226192] text-white"
                    }`}
                  >
                    <div className="w-full flex items-start justify-start pt-0.5">
                      <span
                        className={`font-serif italic text-3xl sm:text-4xl lg:text-[40px] leading-none select-none ${
                          isCream ? "text-[#226192]" : "text-white"
                        }`}
                      >
                        {card.number}
                      </span>
                    </div>

                    <div className="relative w-full h-32 lg:h-36 flex items-center justify-center my-auto px-6 py-2">
                      <Image
                        src={card.iconSrc}
                        alt={card.alt}
                        width={150}
                        height={150}
                        priority={idx < 4}
                        className="max-h-[120px] lg:max-h-[135px] w-auto h-auto object-contain pointer-events-none select-none transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-sm"
                      />
                    </div>

                    <div className="w-full flex items-end justify-between gap-3 pt-3.5 border-t border-current/10">
                      <h3
                        className={`font-sans font-bold text-sm lg:text-base leading-snug tracking-tight max-w-[170px] ${
                          isCream ? "text-[#121214]" : "text-white"
                        }`}
                      >
                        {card.title}
                      </h3>

                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm group-hover:scale-105 ${
                          isCream
                            ? "bg-[#226192] text-white"
                            : isTerracotta
                            ? "bg-white text-[#EF8557]"
                            : "bg-white text-[#226192]"
                        }`}
                      >
                        <ArrowRight className="w-4 h-4 stroke-[2.4] transition-transform duration-300 ease-out group-hover:-rotate-45" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* ==============================================================
              MOBILE VIEW: PURE ONE-SCROLL-ONE-CARD DEDICATED VIEWPORT
              ============================================================== */}
          <div className="flex lg:hidden w-full flex-1 flex-col items-center justify-center relative overflow-hidden my-auto py-2">
            {/* Dedicated Single Card Stage (Zero Stacking Offsets) */}
            <div className="relative w-full max-w-[340px] xs:max-w-[370px] sm:max-w-[420px] h-[480px] xs:h-[520px] sm:h-[550px] max-h-[68dvh] flex items-center justify-center">
              {SERVICES_DATA.map((card, idx) => (
                <MobileCardItem
                  key={card.id}
                  card={card}
                  index={idx}
                  smoothProgress={smoothProgress}
                />
              ))}
            </div>

            {/* Minimalist 6-Step Pagination Indicator */}
            <div className="flex items-center justify-center gap-1.5 pt-4">
              {SERVICES_DATA.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeCardIndex === dotIdx
                      ? "w-6 bg-[#EF8557]"
                      : "w-1.5 bg-[#121214]/20"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export { QuestionsSection, QuestionsSection as ServicesSection };
