"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface GrowthNote {
  id: string;
  number: string;
  title: string;
  imageSrc: string;
  alt: string;
  href: string;
}

const NOTES_DATA: GrowthNote[] = [
  {
    id: "note-1",
    number: "01",
    title: "Disrupt The Market",
    imageSrc: "/Blogs img/Disrupt the market.png",
    alt: "Disrupt The Market",
    href: "/journal/disrupt-the-market",
  },
  {
    id: "note-2",
    number: "02",
    title: "Clarity Before Channels",
    imageSrc: "/Blogs img/Clarity Before Channels.png",
    alt: "Clarity Before Channels",
    href: "/journal/clarity-before-channels",
  },
  {
    id: "note-3",
    number: "03",
    title: "Bad Positioning Is Expensive",
    imageSrc: "/Blogs img/Bad Positioning is Expensive.png",
    alt: "Bad Positioning Is Expensive",
    href: "/journal/bad-positioning-is-expensive",
  },
  {
    id: "note-4",
    number: "04",
    title: "Virality Is A Piece Of Art",
    imageSrc: "/Blogs img/Virality is a Piece of Art.png",
    alt: "Virality Is A Piece Of Art",
    href: "/journal/virality-is-a-piece-of-art",
  },
  {
    id: "note-5",
    number: "05",
    title: "Conversion Is A Context Problem",
    imageSrc: "/Blogs img/Conversion Is A Context Problem.png",
    alt: "Conversion Is A Context Problem",
    href: "/journal/conversion-is-a-context-problem",
  },
];

export default function NotesOnGrowth() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sync scroll progress and toggle button states
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

  // Click handler for Chevron buttons
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
      id="journal"
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full text-[#121214] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[#121214]/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* ==============================================================
            HEADER ROW
            ============================================================== */}
        <div className="w-full flex flex-col items-start pb-10 sm:pb-14">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-8 h-1.5 rounded-full bg-[#EF8557]" />
            <span className="font-mono text-xs font-semibold tracking-[0.24em] uppercase text-[#121214]/75">
              NOTES ON GROWTH
            </span>
          </div>

          <h2 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[#121214]">
            Notes On{" "}
            <span className="font-serif italic font-normal text-[#EF8557]">
              Growth.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#121214]/65 mt-2 tracking-tight">
            Ideas worth thinking about.
          </p>
        </div>

        {/* ==============================================================
            CAROUSEL: CARDS WITH FULL-BLEED BACKGROUND IMAGES
            ============================================================== */}
        <div
          ref={scrollRef}
          className="w-full flex items-stretch gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-3 px-1 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {NOTES_DATA.map((note) => (
            <Link
              key={note.id}
              href={note.href}
              className="group snap-start shrink-0 rounded-[28px] lg:rounded-[32px] p-6 lg:p-7 flex flex-col justify-between 
                relative overflow-hidden cursor-pointer transition-all duration-300
                bg-[#FAF9F6] border border-white/90 shadow-[0_14px_36px_rgba(18,18,20,0.06)] hover:shadow-[0_22px_48px_rgba(34,97,146,0.12)] hover:-translate-y-1.5
                w-[280px] xs:w-[310px] sm:w-[330px] lg:w-[calc((100%-3*24px)/4)] lg:min-w-[calc((100%-3*24px)/4)] h-[440px] lg:h-[470px]"
            >
              {/* 🌟 IMAGE AS FULL CARD BACKGROUND */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={note.imageSrc}
                  alt={note.alt}
                  fill
                  sizes="(max-width: 1024px) 85vw, 25vw"
                  className="object-cover object-center pointer-events-none select-none transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* TOP: NUMBER + TITLE (Sits over the background image) */}
              <div className="w-full flex flex-col items-start pt-1 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-serif italic text-2xl lg:text-3xl text-[#EF8557] select-none leading-none drop-shadow-sm">
                    {note.number}
                  </span>
                  <span className="w-6 h-[1.5px] bg-[#EF8557]/45 rounded-full" />
                </div>

                <h3 className="font-sans font-bold text-base lg:text-lg leading-snug tracking-tight text-[#121214] max-w-[210px] drop-shadow-sm">
                  {note.title}
                </h3>
              </div>

              {/* BOTTOM: ARROW BUTTON (Sits over the background image) */}
              <div className="w-full flex items-center justify-start pt-2 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#226192] text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#EF8557] group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 stroke-[2.4] transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ==============================================================
            BOTTOM SCRUBBER & RESTORED CHEVRON BUTTONS (< & >)
            ============================================================== */}
        <div className="w-full flex items-center justify-center gap-4 pt-10 sm:pt-12">
          {/* Previous Button (<) */}
          <button
            type="button"
            onClick={() => scrollByStep("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-full border border-[#121214]/25 bg-white/60 backdrop-blur-sm flex items-center justify-center text-[#121214] transition-all duration-200 hover:border-[#226192] hover:bg-white hover:text-[#226192] disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Synchronized Progress Track */}
          <div className="w-44 sm:w-60 md:w-72 h-[3px] bg-[#121214]/15 rounded-full relative overflow-hidden">
            <div
              style={{
                width: "42%",
                transform: `translateX(${scrollProgress * 138}%)`,
              }}
              className="h-full bg-[#EF8557] rounded-full transition-transform duration-100 ease-out will-change-transform shadow-sm"
            />
          </div>

          {/* Next Button (>) */}
          <button
            type="button"
            onClick={() => scrollByStep("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-full border border-[#121214]/25 bg-white/60 backdrop-blur-sm flex items-center justify-center text-[#121214] transition-all duration-200 hover:border-[#226192] hover:bg-white hover:text-[#226192] disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

      </div>
    </section>
  );
}

export { NotesOnGrowth, NotesOnGrowth as JournalSection };
