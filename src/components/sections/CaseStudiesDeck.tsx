"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface CaseStudyData {
  id: number;
  tag: string;
  category: string;
  client: string;
  headline: string;
  punchline: string;
  metric: string;
  metricLabel: string;
  description: string;
  image: string;
  slug: string;
}

const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 1,
    tag: "D2C SCALING",
    category: "Full-Funnel Growth",
    client: "Aura Living",
    headline: "Scaling Direct Demand",
    punchline: "Without Sacrificing Margin.",
    metric: "+318%",
    metricLabel: "YoY DTC REVENUE",
    description:
      "Engineered paid acquisition channels, optimized unit economics, and restructured the product catalog for high-LTV customer journeys.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
    slug: "aura-living",
  },
  {
    id: 2,
    tag: "GTM ROADMAP",
    category: "SaaS & Platform",
    client: "Kinetix Tech",
    headline: "Positioning Seed-Stage Tech",
    punchline: "For Enterprise Traction.",
    metric: "$2.4M",
    metricLabel: "PIPELINE GENERATED",
    description:
      "Clarified enterprise positioning, aligned product marketing with founder narrative, and built closed-loop sales enablement systems.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
    slug: "kinetix-tech",
  },
  {
    id: 3,
    tag: "RETENTION ENGINE",
    category: "E-Commerce",
    client: "Lumina Wellness",
    headline: "Turning One-Time Buyers",
    punchline: "Into Predictable MRR.",
    metric: "38.4%",
    metricLabel: "REPEAT PURCHASE RATE",
    description:
      "Architected lifecycle email flows, behavioral replenishment triggers, and an editorial loyalty program that slashed blended churn.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    slug: "lumina-wellness",
  },
  {
    id: 4,
    tag: "PERFORMANCE LAB",
    category: "Omnichannel Retail",
    client: "Verve Apparel",
    headline: "Restructuring Media Spend",
    punchline: "From Leakage To Precision.",
    metric: "4.2x",
    metricLabel: "BLENDED ROAS",
    description:
      "Eliminated ad-budget waste across Meta & Google Ads through creative testing sprints, whitelisting creators, and custom landing experiences.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
    slug: "verve-apparel",
  },
  {
    id: 5,
    tag: "REBRAND & POSITIONING",
    category: "Luxury Goods",
    client: "Elysian Atelier",
    headline: "Reframing Heritage Goods",
    punchline: "For High-Intent Modern Shoppers.",
    metric: "-42%",
    metricLabel: "BLENDED CAC",
    description:
      "Elevated digital brand assets, refined editorial storytelling, and built an exclusive invite-only drop architecture that drove organic frenzy.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
    slug: "elysian-atelier",
  },
  {
    id: 6,
    tag: "ECOMMERCE INFRA",
    category: "Shopify Plus",
    client: "Novus Performance",
    headline: "Re-architecting Speed",
    punchline: "And Frictionless Checkout.",
    metric: "+26.8%",
    metricLabel: "CHECKOUT CONVERSION",
    description:
      "Rebuilt the core store UX on custom headless components, eradicating cart abandonment friction and mobile bounce rates.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    slug: "novus-performance",
  },
];

function DeckCard({
  card,
  index,
  total,
  smoothProgress,
  onSelect,
}: {
  card: CaseStudyData;
  index: number;
  total: number;
  smoothProgress: any;
  onSelect: () => void;
}) {
  const diff = useTransform(smoothProgress, (p: number) => index - p);

  const y = useTransform(
    diff,
    [-2, -1, 0, 1, 2, 3, 4],
    [640, 340, -15, -72, -122, -164, -200]
  );

  const scale = useTransform(
    diff,
    [-2, -1, 0, 1, 2, 3, 4],
    [0.92, 1, 1, 0.92, 0.84, 0.76, 0.68]
  );

  const rotateX = useTransform(
    diff,
    [-2, -1, -0.5, 0, 1, 2, 3],
    [-22, -12, -24, 0, 12, 18, 22]
  );

  const opacity = useTransform(
    diff,
    [-2.1, -1.35, -1, 0, 3, 4.2],
    [0, 0, 1, 1, 0.9, 0]
  );

  const brightness = useTransform(
    diff,
    [-2, -1, 0, 1, 2, 3],
    [0.55, 0.95, 1, 0.85, 0.7, 0.55]
  );

  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  const zIndex = useTransform(diff, (d) => {
    if (d < -1.1) return 10 - Math.floor(Math.abs(d));
    if (d < -0.2) return 45;
    if (d <= 0.3) return 50;
    return 40 - Math.round(d);
  });

  const formattedNum = String(card.id).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  return (
    <motion.div
      onClick={onSelect}
      style={{
        y,
        scale,
        rotateX,
        opacity,
        filter,
        zIndex,
        transformPerspective: 1200,
      }}
      className="absolute top-[90px] w-[310px] xs:w-[340px] sm:w-[390px] lg:w-[420px] h-[350px] sm:h-[375px] rounded-[24px] overflow-hidden shadow-[0_24px_50px_rgba(18,18,20,0.18)] cursor-pointer select-none border border-white/20 bg-[#121214] origin-center will-change-transform group"
    >
      {/* Background Cover Image with Soft Scrim */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={card.image}
          alt={card.client}
          fill
          unoptimized
          draggable={false}
          className="object-cover object-center pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/95 via-[#121214]/40 to-[#121214]/30 pointer-events-none" />
      </div>

      {/* Top Meta Capsule Bar */}
      <div className="absolute top-5 inset-x-6 flex items-center justify-between z-10">
        <span className="font-mono text-[10px] tracking-[0.22em] text-white/80 uppercase px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
          CASE {formattedNum} / {formattedTotal}
        </span>
        <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[#EF8557] uppercase px-2.5 py-1 rounded-full bg-[#EF8557]/15 backdrop-blur-md border border-[#EF8557]/30">
          {card.tag}
        </span>
      </div>

      {/* Bottom Content Card */}
      <div className="absolute bottom-6 inset-x-6 text-white z-10 flex flex-col items-start">
        <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-white/60 mb-1">
          {card.category}
        </p>
        <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight leading-snug mb-2 group-hover:text-[#EF8557] transition-colors">
          {card.client}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed max-w-[320px] line-clamp-2">
          {card.description}
        </p>

        {/* Metric Accent Badge */}
        <div className="mt-3.5 flex items-baseline gap-2 pt-2 border-t border-white/10 w-full">
          <span className="font-serif italic font-normal text-xl sm:text-2xl text-[#EF8557]">
            {card.metric}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/65">
            {card.metricLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudiesDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rawProgress = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const smoothProgress = useSpring(0, {
    stiffness: 130,
    damping: 24,
    mass: 0.8,
  });

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val));

  const goToCard = useCallback(
    (index: number) => {
      const target = clamp(index, 0, CASE_STUDIES.length - 1);
      rawProgress.current = target;
      smoothProgress.set(target);
      setActiveIndex(target);
    },
    [smoothProgress]
  );

  // Boundary-aware scroll & touch physics (Never traps user in an infinite scroll jail)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const current = rawProgress.current;
      const isAtTop = current <= 0.05;
      const isAtBottom = current >= CASE_STUDIES.length - 1 - 0.05;

      // If at boundary and user keeps scrolling out, release native scroll!
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        return; // Allow native page scroll
      }

      e.preventDefault();
      const delta = e.deltaY * 0.0024;
      const next = clamp(current + delta, 0, CASE_STUDIES.length - 1);
      rawProgress.current = next;
      smoothProgress.set(next);
      setActiveIndex(Math.round(next));
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const current = rawProgress.current;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      const isAtTop = current <= 0.05;
      const isAtBottom = current >= CASE_STUDIES.length - 1 - 0.05;

      if ((isAtTop && deltaY < 0) || (isAtBottom && deltaY > 0)) {
        return; // Allow native swipe escape
      }

      if (e.cancelable) e.preventDefault();
      const delta = deltaY * 0.005;
      touchStartY = currentY;
      const next = clamp(current + delta, 0, CASE_STUDIES.length - 1);
      rawProgress.current = next;
      smoothProgress.set(next);
      setActiveIndex(Math.round(next));
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [smoothProgress]);

  const activeCard = CASE_STUDIES[activeIndex] || CASE_STUDIES[0];
  const indicatorTopPercent =
    (activeIndex / (CASE_STUDIES.length - 1)) * 100;

  return (
    <section
      ref={containerRef}
      id="success-stories"
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full h-[100dvh] min-h-[720px] max-h-[960px] text-[#121214] overflow-hidden select-none flex items-center justify-center px-5 sm:px-10 lg:px-16 border-t border-[#121214]/10"
    >
      <div className="w-full max-w-7xl h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

        {/* ==============================================================
            LEFT COLUMN: DYNAMIC KINETIC MASK REVEALS
            ============================================================== */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center pt-8 sm:pt-0">
          
          {/* Static Top Category Label */}
          <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.24em] text-[#121214]/50 uppercase mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF8557]" />
            <span>PROVEN OUTCOMES</span>
            <span>·</span>
            <span>CHAPTER {String(activeIndex + 1).padStart(2, "0")}</span>
          </div>

          {/* Mask-Revealed Headline */}
          <div className="w-full overflow-hidden min-h-[140px] sm:min-h-[175px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`headline-${activeCard.id}`}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-sans font-black tracking-tight leading-[1.06] text-[#121214]">
                  {activeCard.headline}
                </h2>
                <span className="font-serif italic font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.1] text-[#EF8557] mt-1">
                  {activeCard.punchline}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mask-Revealed Metric & Transformation Excerpt */}
          <div className="w-full min-h-[105px] overflow-hidden mt-3 sm:mt-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`desc-${activeCard.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-3xl sm:text-4xl font-normal text-[#226192]">
                    {activeCard.metric}
                  </span>
                  <div className="h-6 w-px bg-[#121214]/15" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#121214]/65">
                    {activeCard.metricLabel}
                  </span>
                </div>

                <p className="text-xs sm:text-sm lg:text-base text-[#121214]/75 max-w-md font-sans leading-relaxed">
                  {activeCard.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Row */}
          <div className="mt-6 sm:mt-8 flex items-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#226192] hover:bg-[#1b4f77] active:scale-[0.98] text-white text-xs sm:text-sm font-sans font-semibold px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(34,97,146,0.3)] transition-all cursor-pointer group"
            >
              <span>Explore Engagement</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => goToCard((activeIndex + 1) % CASE_STUDIES.length)}
              aria-label="Next Case Study"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#121214]/15 bg-white/70 hover:bg-white text-[#121214] transition-all cursor-pointer active:scale-95 shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* ==============================================================
            CENTER COLUMN: 3D CASCADING DECK STAGE
            ============================================================== */}
        <div className="lg:col-span-6 relative h-full flex items-center justify-center">
          <div
            className="relative w-full h-[620px] sm:h-[700px] flex items-center justify-center"
            style={{ perspective: "1400px" }}
          >
            {CASE_STUDIES.map((card, idx) => (
              <DeckCard
                key={card.id}
                card={card}
                index={idx}
                total={CASE_STUDIES.length}
                smoothProgress={smoothProgress}
                onSelect={() => goToCard(idx)}
              />
            ))}
          </div>
        </div>

        {/* ==============================================================
            RIGHT COLUMN: VERTICAL TIMELINE TRACK & COUNTER
            ============================================================== */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center h-full z-20">
          
          {/* Chapter Numerical Counter */}
          <div className="flex items-baseline font-mono mb-6">
            <span className="text-3xl font-extrabold tracking-tighter text-[#121214]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-xs text-[#121214]/40 font-semibold ml-1">
              /{String(CASE_STUDIES.length).padStart(2, "0")}
            </span>
          </div>

          {/* Vertical Track Rail */}
          <div className="relative h-[260px] w-[20px] flex justify-center">
            {/* Rail Background */}
            <div className="w-[1.5px] h-full bg-[#121214]/15 relative" />

            {/* Clickable Step Beads */}
            <div className="absolute inset-0 flex flex-col justify-between items-center">
              {CASE_STUDIES.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => goToCard(idx)}
                  aria-label={`Go to ${c.client}`}
                  className="w-4 h-3 flex items-center justify-center group cursor-pointer focus:outline-none"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-2.5 h-2.5 bg-[#EF8557] ring-4 ring-[#EF8557]/20"
                        : "w-1 h-1 bg-[#121214]/30 group-hover:bg-[#121214]/70"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Glowing Active Position Marker (Steel Blue + Terracotta Pulse) */}
            <motion.div
              animate={{ top: `${indicatorTopPercent}%` }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="absolute -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#226192] shadow-[0_0_12px_rgba(34,97,146,0.6)] pointer-events-none flex items-center justify-center"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#EF8557]" />
            </motion.div>
          </div>

          {/* Vertical Client Label */}
          <div className="mt-8 h-28 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeCard.client}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-[10px] font-mono tracking-[0.26em] uppercase text-[#121214]/50"
                style={{ writingMode: "vertical-rl" }}
              >
                {activeCard.client}
              </motion.span>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CaseStudiesDeck;
