"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface GrowthNote {
  id: string;
  number: string;
  title: string;
  imageSrc: string;
  alt: string;
  href: string;
  floatDuration: number;
  floatDelay: number;
}

const NOTES_DATA: GrowthNote[] = [
  {
    id: "note-1",
    number: "01",
    title: "Disrupt The Market",
    imageSrc: "/images/Go-To-Market Startegy.png",
    alt: "Go To Market Strategy Concept Artwork",
    href: "/journal/disrupt-the-market",
    floatDuration: 4.2,
    floatDelay: 0,
  },
  {
    id: "note-2",
    number: "02",
    title: "Clarity Before Channels",
    imageSrc: "/images/compass-img.png",
    alt: "Compass Direction Strategy Artwork",
    href: "/journal/clarity-before-channels",
    floatDuration: 4.8,
    floatDelay: 0.6,
  },
  {
    id: "note-3",
    number: "03",
    title: "Bad Positioning Is Expensive",
    imageSrc: "/images/Brand Positioning.png",
    alt: "Brand Positioning Strategy Artwork",
    href: "/journal/bad-positioning-is-expensive",
    floatDuration: 5.4,
    floatDelay: 0.3,
  },
  {
    id: "note-4",
    number: "04",
    title: "Virality Is A Piece Of Art",
    imageSrc: "/images/growth strategy illustration.png",
    alt: "Growth Strategy and Virality Artwork",
    href: "/journal/virality-is-a-piece-of-art",
    floatDuration: 4.5,
    floatDelay: 0.9,
  },
  {
    id: "note-5",
    number: "05",
    title: "Conversion Is A Context Problem",
    imageSrc: "/images/E-Commerce & Quick Commerce.png",
    alt: "E-Commerce Funnel and Conversion Artwork",
    href: "/journal/conversion-is-a-context-problem",
    floatDuration: 5.0,
    floatDelay: 0.4,
  },
];

// Motion Timing Tokens
const EASING_EDITORIAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.15,
    },
  },
};

const cardRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EASING_EDITORIAL,
    },
  },
};

// =========================================================================
// COLLECTIBLE 3D TACTILE NOTE CARD
// =========================================================================
function CollectibleNoteCard({ note }: { note: GrowthNote }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Normalized cursor coordinates [-0.5 to 0.5]
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Organic physics-based spring dampening
  const springConfig = { stiffness: 220, damping: 24, mass: 0.4 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  // Maximum tilt constrained to 4.5 degrees
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["4.5deg", "-4.5deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-4.5deg", "4.5deg"]);

  // Multi-layer parallax movement
  const artworkX = useTransform(smoothX, [-0.5, 0.5], ["-6px", "6px"]);
  const artworkY = useTransform(smoothY, [-0.5, 0.5], ["-6px", "6px"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      rawX.set(clientX / rect.width - 0.5);
      rawY.set(clientY / rect.height - 0.5);
    },
    [rawX, rawY, shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      variants={cardRevealVariants}
      className="snap-start shrink-0 select-none
        w-[84vw] xs:w-[320px] sm:w-[340px]
        lg:w-[calc((100%-3*24px)/4)] lg:min-w-[calc((100%-3*24px)/4)]
        h-[440px] xs:h-[460px] lg:h-[475px] xl:h-[490px]"
      style={{ perspective: 1100 }}
    >
      <Link
        href={note.href}
        className="block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF8557] rounded-[28px]"
        aria-label={`Read note on ${note.title}`}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            transformStyle: "preserve-3d",
            backgroundColor: "#FAF9F6",
          }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group relative w-full h-full rounded-[28px] p-6 sm:p-7 flex flex-col justify-between
            border border-white/90 shadow-[0_14px_36px_rgba(18,18,20,0.05)]
            hover:shadow-[0_24px_50px_rgba(34,97,146,0.12)]
            cursor-pointer will-change-transform"
        >
          {/* Card Top: Number + Rule + Heading */}
          <div className="w-full flex flex-col items-start pt-1 z-10 pointer-events-none">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="font-serif italic text-2xl lg:text-[28px] text-[#EF8557] select-none leading-none">
                {note.number}
              </span>
              <span className="w-7 h-[1.5px] bg-[#EF8557]/40 rounded-full" />
            </div>

            <h3 className="font-sans font-bold text-base lg:text-[17px] xl:text-lg leading-snug tracking-tight text-[#121214] max-w-[220px]">
              {note.title}
            </h3>
          </div>

          {/* Card Center: Living Floating Artwork with Parallax Offset */}
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : artworkX,
              y: shouldReduceMotion ? 0 : artworkY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full h-40 lg:h-44 flex items-center justify-center my-auto px-4 py-2 z-10"
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [-3.5, 3.5, -3.5],
                      rotate: [-0.6, 0.6, -0.6],
                    }
              }
              transition={{
                duration: note.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: note.floatDelay,
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={note.imageSrc}
                alt={note.alt}
                width={190}
                height={190}
                className="max-h-[135px] lg:max-h-[150px] w-auto h-auto object-contain pointer-events-none select-none transition-transform duration-500 ease-out group-hover:scale-108 drop-shadow-sm"
                onError={(e) => {
                  (e.target as HTMLElement).style.opacity = "0.75";
                }}
              />
            </motion.div>
          </motion.div>

          {/* Card Bottom: Tactile Interactive Arrow */}
          <div className="w-full flex items-center justify-start pt-2 z-10">
            <div className="w-10 h-10 rounded-full bg-[#226192] text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#EF8557] group-hover:scale-105">
              <ArrowRight className="w-4 h-4 stroke-[2.4] transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>

          {/* Card Atmospheric Specular Reflection */}
          <div className="absolute inset-0 rounded-[28px] pointer-events-none bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

// =========================================================================
// MAIN NOTES ON GROWTH SECTION
// =========================================================================
export default function NotesOnGrowth() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.18 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sync scroll metrics & update directional boundaries
  const updateScrollMetrics = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      setScrollProgress(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const progress = Math.min(1, Math.max(0, scrollLeft / maxScroll));
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < maxScroll - 6);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollMetrics();
    el.addEventListener("scroll", updateScrollMetrics, { passive: true });
    window.addEventListener("resize", updateScrollMetrics);

    return () => {
      el.removeEventListener("scroll", updateScrollMetrics);
      window.removeEventListener("resize", updateScrollMetrics);
    };
  }, [updateScrollMetrics]);

  // Programmatic scroll step execution
  const scrollByStep = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardStep = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === "right" ? cardStep : -cardStep,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="journal"
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full text-[#121214] py-18 sm:py-24 lg:py-28 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[#121214]/10 select-none overflow-hidden"
    >
      {/* Fallback alias to catch legacy /#success-stories links seamlessly */}
      <span id="success-stories" className="absolute -top-24 pointer-events-none opacity-0" />

      {/* Background Organic Architecture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-50"
        >
          <path
            d="M850 0C980 180 1140 260 1440 280V900H0V650C320 620 540 780 820 680C1080 580 1200 380 1020 180C940 90 890 40 850 0Z"
            fill="#F4EFE6"
          />
          <path
            d="M0 720C240 700 480 850 820 760C1160 670 1340 760 1440 820V900H0V720Z"
            fill="#226192"
            fillOpacity="0.03"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* ==============================================================
            HEADER ROW: CHOREOGRAPHED SEQUENTIAL REVEAL
            ============================================================== */}
        <div className="w-full flex flex-col items-start pb-10 sm:pb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-2.5 overflow-hidden">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.65, ease: EASING_EDITORIAL }}
              style={{ transformOrigin: "left" }}
              className="w-8 h-1.5 rounded-full bg-[#EF8557] inline-block"
            />
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="font-mono text-xs font-semibold tracking-[0.24em] uppercase text-[#121214]/75"
            >
              NOTES ON GROWTH
            </motion.span>
          </div>

          {/* Heading */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASING_EDITORIAL }}
              className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[#121214]"
            >
              Notes On{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="font-serif italic font-normal text-[#EF8557]"
              >
                Growth.
              </motion.span>
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="font-sans text-sm sm:text-base text-[#121214]/65 mt-2.5 tracking-tight"
          >
            Ideas worth thinking about.
          </motion.p>
        </div>

        {/* ==============================================================
            HORIZONTAL CAROUSEL: 4 CARDS DESKTOP, 5TH ON SCROLL
            ============================================================== */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full flex items-stretch gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {NOTES_DATA.map((note) => (
            <CollectibleNoteCard key={note.id} note={note} />
          ))}
        </motion.div>

        {/* ==============================================================
            MINIMALIST HORIZONTAL PROGRESS & DOCKED CAROUSEL CONTROLLERS
            ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
          className="w-full flex items-center justify-center gap-4 pt-10 sm:pt-14"
        >
          {/* Previous Step Button */}
          <button
            onClick={() => scrollByStep("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll to previous notes"
            className="w-8 h-8 rounded-full border border-[#121214]/20 flex items-center justify-center text-[#121214] transition-all duration-200 hover:border-[#226192] hover:text-[#226192] disabled:opacity-25 disabled:cursor-not-allowed hover:disabled:border-[#121214]/20 hover:disabled:text-[#121214]"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Minimalist Synchronized Rail */}
          <div className="w-44 sm:w-60 md:w-72 h-[2.5px] bg-[#121214]/15 rounded-full relative overflow-hidden">
            <div
              style={{
                width: "42%",
                transform: `translateX(${scrollProgress * 138}%)`,
              }}
              className="h-full bg-[#EF8557] rounded-full transition-transform duration-100 ease-out will-change-transform shadow-sm"
            />
          </div>

          {/* Next Step Button */}
          <button
            onClick={() => scrollByStep("right")}
            disabled={!canScrollRight}
            aria-label="Scroll to next notes"
            className="w-8 h-8 rounded-full border border-[#121214]/20 flex items-center justify-center text-[#121214] transition-all duration-200 hover:border-[#226192] hover:text-[#226192] disabled:opacity-25 disabled:cursor-not-allowed hover:disabled:border-[#121214]/20 hover:disabled:text-[#121214]"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export { NotesOnGrowth, NotesOnGrowth as JournalSection };
