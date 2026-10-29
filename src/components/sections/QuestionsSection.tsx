"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
    iconSrc: "/img/service-1.svg",
    alt: "Go To Market Strategy Vector",
  },
  {
    id: "s2",
    number: "02",
    title: "Growth Strategy",
    href: "/services/growth-strategy",
    theme: "terracotta",
    iconSrc: "/img/service-2.svg",
    alt: "Growth Strategy Vector",
  },
  {
    id: "s3",
    number: "03",
    title: "E-Commerce & Quick Commerce",
    href: "/services/ecommerce",
    theme: "blue",
    iconSrc: "/img/service-3.svg",
    alt: "E-Commerce & Quick Commerce Vector",
  },
  {
    id: "s4",
    number: "04",
    title: "Marketing Strategy",
    href: "/services/marketing-strategy",
    theme: "cream",
    iconSrc: "/img/service-4.svg",
    alt: "Marketing Strategy Vector",
  },
  {
    id: "s5",
    number: "05",
    title: "Brand Positioning",
    href: "/services/brand-positioning",
    theme: "terracotta",
    iconSrc: "/img/service-5.svg",
    alt: "Brand Positioning Vector",
  },
  {
    id: "s6",
    number: "06",
    title: "Digital Strategy",
    href: "/services/digital-strategy",
    theme: "blue",
    iconSrc: "/img/service-6.svg",
    alt: "Digital Strategy Vector",
  },
];

export default function QuestionsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const desktopViewportRef = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const [maxScrollX, setMaxScrollX] = useState(0);

  // Scroll distance binding
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.5,
  });

  // Calculate pixel-perfect desktop horizontal translation with exact flush docking
  useEffect(() => {
    const calculateDistance = () => {
      if (desktopViewportRef.current) {
        const W = desktopViewportRef.current.clientWidth;
        if (W > 0) {
          const cardWidth = (W - 3 * 20) / 3.5;
          const exactShift = 2.5 * cardWidth + 2 * 20;
          setMaxScrollX(Math.max(0, exactShift));
        }
      }
    };

    calculateDistance();

    const resizeObserver = new ResizeObserver(() => {
      calculateDistance();
    });

    if (desktopViewportRef.current) {
      resizeObserver.observe(desktopViewportRef.current);
    }
    if (desktopTrackRef.current) {
      resizeObserver.observe(desktopTrackRef.current);
    }

    window.addEventListener("resize", calculateDistance);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const desktopTranslateX = useTransform(smoothProgress, [0, 1], [0, -maxScrollX]);

  return (
    // Outer scroll runway
    <div
      ref={trackRef}
      id="services"
      className="relative w-full h-[460vh] lg:h-[190vh]"
    >
      {/* Fallback anchor for old links */}
      <span id="questions" className="absolute -top-24 pointer-events-none opacity-0" />

      {/* Pinned 100vh Sticky Viewport */}
      <section
        style={{ backgroundColor: "#EAE6DE" }}
        className="sticky top-0 w-full h-[100dvh] max-h-[100dvh] text-[#121214] overflow-hidden select-none flex flex-col justify-between py-5 sm:py-7 lg:py-8 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[#121214]/10"
      >
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-between relative z-10">

          {/* ==============================================================
              SECTION HEADER (PINNED TOP IN 100VH)
              ============================================================== */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#121214]/10 pb-4 sm:pb-5 shrink-0">
            {/* Title */}
            <div className="flex flex-col">
              <h2 className="font-sans font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] text-[#121214]">
                Where I Usually
              </h2>
              <span className="font-serif italic font-normal text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] text-[#EF8557] mt-0.5">
                Enter The Picture.
              </span>
            </div>

            {/* Right Action Hint: Hidden on mobile (<768px), visible on md+ */}
            <div className="hidden md:flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.24em] uppercase text-[#121214]/65 self-start md:self-end pb-1">
              <span>KEEP SCROLLING</span>
              <span className="text-[#EF8557] font-sans text-base">→</span>
            </div>
          </div>

          {/* ==============================================================
              DESKTOP VIEW: 3.5 CARDS RATIO + ZERO CLIPPING VERTICAL PADDING
              ============================================================== */}
          <div
            ref={desktopViewportRef}
            className="hidden lg:flex w-full flex-1 items-center overflow-hidden my-auto py-5 lg:py-8 [container-type:inline-size]"
          >
            <motion.div
              ref={desktopTrackRef}
              style={{ x: desktopTranslateX }}
              className="flex items-center gap-5 will-change-transform py-4 lg:py-5"
            >
              {SERVICES_DATA.map((card) => {
                const isCream = card.theme === "cream";
                const isTerracotta = card.theme === "terracotta";

                return (
                  <Link
                    key={card.id}
                    href={card.href}
                    // Container Query Math: exactly 3.5 cards visible at rest
                    style={{
                      width: "calc((100cqw - 60px) / 3.5)",
                    }}
                    className={`group shrink-0 h-[420px] lg:h-[460px] xl:h-[490px] max-h-[60vh] rounded-[28px] lg:rounded-[32px] p-5 xl:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer focus:outline-none will-change-transform shadow-[0_12px_30px_rgba(18,18,20,0.08)] hover:shadow-[0_22px_45px_rgba(18,18,20,0.16)] ${isCream
                        ? "bg-[#FAF8F5] border border-[#121214]/10 text-[#121214]"
                        : isTerracotta
                          ? "bg-[#EF8557] text-white"
                          : "bg-[#226192] text-white"
                      }`}
                  >
                    {/* Top: Butler Italic Number */}
                    <div className="w-full flex items-start justify-start">
                      <span
                        className={`font-serif italic text-3xl sm:text-4xl leading-none select-none ${isCream ? "text-[#226192]" : "text-white"
                          }`}
                      >
                        {card.number}
                      </span>
                    </div>

                    {/* Center: Vector Illustration from /img/ folder */}
                    <div className="relative w-full h-36 lg:h-44 flex items-center justify-center my-auto px-2">
                      <Image
                        src={card.iconSrc}
                        alt={card.alt}
                        width={180}
                        height={180}
                        className={`w-full h-full object-contain pointer-events-none select-none transition-transform duration-500 ease-out group-hover:scale-105 ${!isCream ? "brightness-0 invert" : ""
                          }`}
                        onError={(e) => {
                          (e.target as HTMLElement).style.opacity = "0.7";
                        }}
                      />
                    </div>

                    {/* Bottom Row: Title + 45° Hover Arrow */}
                    <div className="w-full flex items-end justify-between gap-2.5 pt-3 border-t border-current/10">
                      <h3
                        className={`font-sans font-bold text-xs sm:text-sm lg:text-[13px] xl:text-[14px] leading-snug tracking-tight max-w-[150px] ${isCream ? "text-[#121214]" : "text-white"
                          }`}
                      >
                        {card.title}
                      </h3>

                      {/* Circular Button with 45° Rotating Arrow on Card Hover */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 shadow-sm ${isCream
                            ? "bg-[#226192] text-white"
                            : isTerracotta
                              ? "bg-white text-[#EF8557]"
                              : "bg-white text-[#226192]"
                          }`}
                      >
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.4] transition-transform duration-300 ease-out group-hover:-rotate-45" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* ==============================================================
              MOBILE / TABLET VIEW: STICKY STACKING CARDS
              ============================================================== */}
          <div className="flex lg:hidden w-full flex-1 items-center justify-center relative overflow-hidden my-auto py-2">
            <div className="relative w-full max-w-[360px] xs:max-w-[390px] sm:max-w-[430px] h-[470px] xs:h-[510px] sm:h-[540px] max-h-[66dvh] flex items-center justify-center">
              {SERVICES_DATA.map((card, idx) => {
                const isCream = card.theme === "cream";
                const isTerracotta = card.theme === "terracotta";

                // Paced stacking runway: 0.0 to 0.86 distributes cards 1-5, with 0.86 to 1.00 buffer for Card 06
                const activeRange = 0.86;
                const totalCards = SERVICES_DATA.length;
                const step = activeRange / (totalCards - 1);
                const start = idx === 0 ? 0 : (idx - 1) * step;
                const end = idx === 0 ? 0 : idx * step;

                const y = useTransform(
                  smoothProgress,
                  [Math.max(0, start), Math.min(1, end)],
                  [idx === 0 ? 0 : 380, 0]
                );

                const scale = useTransform(
                  smoothProgress,
                  [end, Math.min(1, end + step)],
                  [1, 0.94]
                );

                const opacity = useTransform(
                  smoothProgress,
                  [Math.max(0, start - 0.04), Math.max(0, start + 0.03)],
                  [idx === 0 ? 1 : 0, 1]
                );

                return (
                  <motion.div
                    key={card.id}
                    style={{
                      y: idx === 0 ? 0 : y,
                      scale: idx === totalCards - 1 ? 1 : scale,
                      opacity,
                      top: `${idx * 8}px`,
                      zIndex: idx + 10,
                    }}
                    className="absolute inset-x-0 will-change-transform"
                  >
                    <Link
                      href={card.href}
                      className={`group w-full h-[470px] xs:h-[510px] sm:h-[540px] max-h-[66dvh] rounded-[28px] xs:rounded-[32px] p-6 xs:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer focus:outline-none shadow-[0_16px_36px_rgba(18,18,20,0.14)] ${isCream
                          ? "bg-[#FAF8F5] border border-[#121214]/10 text-[#121214]"
                          : isTerracotta
                            ? "bg-[#EF8557] text-white"
                            : "bg-[#226192] text-white"
                        }`}
                    >
                      <div className="w-full flex items-start justify-start">
                        <span
                          className={`font-serif italic text-4xl xs:text-5xl leading-none select-none ${isCream ? "text-[#226192]" : "text-white"
                            }`}
                        >
                          {card.number}
                        </span>
                      </div>

                      <div className="relative w-full h-48 xs:h-54 sm:h-60 flex items-center justify-center my-auto px-2">
                        <Image
                          src={card.iconSrc}
                          alt={card.alt}
                          width={240}
                          height={240}
                          className={`w-full h-full object-contain pointer-events-none select-none ${!isCream ? "brightness-0 invert" : ""
                            }`}
                          onError={(e) => {
                            (e.target as HTMLElement).style.opacity = "0.7";
                          }}
                        />
                      </div>

                      <div className="w-full flex items-end justify-between gap-3 pt-3.5 border-t border-current/10">
                        <h3
                          className={`font-sans font-bold text-base xs:text-lg leading-snug tracking-tight max-w-[220px] ${isCream ? "text-[#121214]" : "text-white"
                            }`}
                        >
                          {card.title}
                        </h3>

                        <div
                          className={`w-8 h-8 xs:w-9 xs:h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm ${isCream
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
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export { QuestionsSection, QuestionsSection as ServicesSection };
