"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
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
    punchline: "For High-Intent Shoppers.",
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

  // Scaled strictly for 100vh viewports (no bottom or top clipping)
  const y = useTransform(
    diff,
    [-2, -1, 0, 1, 2, 3, 4],
    [520, 270, 0, -48, -88, -120, -148]
  );

  const scale = useTransform(
    diff,
    [-2, -1, 0, 1, 2, 3, 4],
    [0.92, 1, 1, 0.93, 0.86, 0.79, 0.72]
  );

  const rotateX = useTransform(
    diff,
    [-2, -1, -0.5, 0, 1, 2, 3],
    [-20, -10, -22, 0, 10, 16, 20]
  );

  const opacity = useTransform(
    diff,
    [-2.1, -1.35, -1, 0, 3, 4.2],
    [0, 0, 1, 1, 0.88, 0]
  );

  const brightness = useTransform(
    diff,
    [-2, -1, 0, 1, 2, 3],
    [0.55, 0.95, 1, 0.85, 0.72, 0.58]
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
      className="absolute top-[35px] sm:top-[45px] lg:top-[55px] w-[290px] xs:w-[325px] sm:w-[370px] lg:w-[410px] h-[280px] xs:h-[305px] sm:h-[330px] lg:h-[345px] rounded-[22px] overflow-hidden shadow-[0_22px_45px_rgba(18,18,20,0.18)] cursor-pointer select-none border border-white/20 bg-[#121214] origin-center will-change-transform group"
    >
      {/* Background Cover Image with Gradient Scrim */}
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

      {/* Top Meta Bar */}
      <div className="absolute top-4 inset-x-5 flex items-center justify-between z-10">
        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-white/80 uppercase px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
          CASE {formattedNum} / {formattedTotal}
        </span>
        <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#EF8557] uppercase px-2.5 py-0.5 rounded-full bg-[#EF8557]/15 backdrop-blur-md border border-[#EF8557]/30">
          {card.tag}
        </span>
      </div>

      {/* Bottom Content Card */}
      <div className="absolute bottom-5 inset-x-5 text-white z-10 flex flex-col items-start">
        <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-white/60 mb-0.5">
          {card.category}
        </p>
        <h3 className="font-sans font-bold text-xl sm:text-2xl tracking-tight leading-snug mb-1 group-hover:text-[#EF8557] transition-colors">
          {card.client}
        </h3>
        <p className="font-sans text-[11px] sm:text-xs text-white/80 leading-relaxed max-w-[310px] line-clamp-2">
          {card.description}
        </p>

        {/* Metric Accent Bar */}
        <div className="mt-2.5 flex items-baseline gap-2 pt-1.5 border-t border-white/10 w-full">
          <span className="font-serif italic font-normal text-lg sm:text-xl text-[#EF8557]">
            {card.metric}
          </span>
          <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-white/65">
            {card.metricLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudiesDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Outer container scroll binds native page scroll to card progression
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const rawProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, CASE_STUDIES.length - 1]
  );

  const smoothProgress = useSpring(rawProgress, {
    stiffness: 160,
    damping: 26,
    mass: 0.45,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setActiveIndex(Math.round(latest));
  });

  // Smooth jump to any card by scrolling the native window position
  const goToCard = (index: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const trackTop = scrollTop + rect.top;
    const totalScrollableDistance = rect.height - window.innerHeight;
    const targetScroll =
      trackTop + (index / (CASE_STUDIES.length - 1)) * totalScrollableDistance;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const activeCard = CASE_STUDIES[activeIndex] || CASE_STUDIES[0];
  const indicatorTopPercent = (activeIndex / (CASE_STUDIES.length - 1)) * 100;

  return (
    // Outer scroll track: Multiplies viewport height so natural scroll flips cards
    <div
      ref={trackRef}
      id="success-stories"
      className="relative w-full"
      style={{ height: `${CASE_STUDIES.length * 110}vh` }}
    >
      {/* Pinned Sticky Section: Locked 100% to screen while scrolling */}
      <section
        style={{ backgroundColor: "#EAE6DE" }}
        className="sticky top-0 w-full h-[100dvh] max-h-[100dvh] text-[#121214] overflow-hidden select-none flex flex-col justify-between py-5 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-14 border-t border-[#121214]/10"
      >
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-between relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full my-auto">
            
            {/* ==============================================================
                LEFT COLUMN: COMPACT HEADLINE, METRIC & BUTTONS (NO OVERFLOW)
                ============================================================== */}
            <div className="lg:col-span-5 flex flex-col items-start justify-center">
              
              {/* Mask-Revealed Headline (Marked kicker text removed) */}
              <div className="w-full overflow-hidden min-h-[100px] xs:min-h-[120px] sm:min-h-[145px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`headline-${activeCard.id}`}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col"
                  >
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-sans font-black tracking-tight leading-[1.08] text-[#121214]">
                      {activeCard.headline}
                    </h2>
                    <span className="font-serif italic font-normal text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] tracking-tight leading-[1.1] text-[#EF8557] mt-0.5">
                      {activeCard.punchline}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic Metric & Narrative Excerpt */}
              <div className="w-full min-h-[85px] sm:min-h-[95px] overflow-hidden mt-2 sm:mt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desc-${activeCard.id}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-serif italic text-2xl sm:text-3xl font-normal text-[#226192]">
                        {activeCard.metric}
                      </span>
                      <div className="h-5 w-px bg-[#121214]/15" />
                      <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#121214]/65">
                        {activeCard.metricLabel}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#121214]/75 max-w-md font-sans leading-relaxed line-clamp-2">
                      {activeCard.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Buttons: Compact & Guaranteed Above the Fold */}
              <div className="mt-4 sm:mt-6 flex items-center gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-[#226192] hover:bg-[#1b4f77] active:scale-[0.98] text-white text-xs sm:text-sm font-sans font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_4px_16px_rgba(34,97,146,0.3)] transition-all cursor-pointer group"
                >
                  <span>Explore Engagement</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => goToCard((activeIndex + 1) % CASE_STUDIES.length)}
                  aria-label="Next Case Study"
                  className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#121214]/15 bg-white/70 hover:bg-white text-[#121214] transition-all cursor-pointer active:scale-95 shadow-sm"
                >
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>

            </div>

            {/* ==============================================================
                CENTER COLUMN: 3D CASCADING DECK STAGE
                ============================================================== */}
            <div className="lg:col-span-6 relative h-[360px] xs:h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
              <div
                className="relative w-full h-full flex items-center justify-center"
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
                RIGHT COLUMN: VERTICAL TIMELINE TRACK & COUNTER (DESKTOP)
                ============================================================== */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center h-full z-20">
              
              <div className="flex items-baseline font-mono mb-5">
                <span className="text-2xl font-extrabold tracking-tighter text-[#121214]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] text-[#121214]/40 font-semibold ml-0.5">
                  /{String(CASE_STUDIES.length).padStart(2, "0")}
                </span>
              </div>

              {/* Vertical Track */}
              <div className="relative h-[220px] w-[18px] flex justify-center">
                <div className="w-[1.5px] h-full bg-[#121214]/15 relative" />

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

                <motion.div
                  animate={{ top: `${indicatorTopPercent}%` }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  className="absolute -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#226192] shadow-[0_0_12px_rgba(34,97,146,0.6)] pointer-events-none flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF8557]" />
                </motion.div>
              </div>

              {/* Vertical Title Indicator */}
              <div className="mt-6 h-24 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeCard.client}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="text-[9px] font-mono tracking-[0.24em] uppercase text-[#121214]/50"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {activeCard.client}
                  </motion.span>
                </AnimatePresence>
              </div>

            </div>

          </div>

          {/* Bottom Micro Tracker for Mobile Devices */}
          <div className="flex lg:hidden items-center justify-between pt-2 pb-1 border-t border-[#121214]/10 text-[10px] font-mono tracking-widest text-[#121214]/50 uppercase">
            <span>CHAPTER {String(activeIndex + 1).padStart(2, "0")} / {String(CASE_STUDIES.length).padStart(2, "0")}</span>
            <span className="text-[#EF8557] font-semibold">{activeCard.client}</span>
          </div>

        </div>
      </section>
    </div>
  );
}

export default CaseStudiesDeck;
