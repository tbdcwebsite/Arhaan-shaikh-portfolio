"use client";

import React from "react";
import { motion } from "framer-motion";

interface NoteCard {
  id: string;
  number: string;
  title: string;
  theme: "blue" | "cream";
  renderIllustration: () => React.ReactNode;
}

const NOTES_DATA: NoteCard[] = [
  {
    id: "note-1",
    number: "01",
    title: "Disrupt the Market",
    theme: "blue",
    renderIllustration: () => (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Trajectory launch arc behind the rocket */}
        <path
          d="M38 126C52 110 74 74 116 52"
          stroke="#226192"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          strokeOpacity="0.45"
        />
        {/* Orbital dots */}
        <circle cx="128" cy="88" r="2.5" fill="#226192" />
        <circle cx="34" cy="94" r="2.5" fill="#EF8557" />
        <circle cx="76" cy="54" r="1.8" fill="#EF8557" />

        {/* Billowing exhaust cloud plume */}
        <path
          d="M18 132C22 120 32 116 40 120C46 112 58 112 64 120C72 114 84 116 88 126C94 128 98 134 96 140H18V132Z"
          stroke="#226192"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#FAF9F6"
        />

        {/* Thrust fire vector */}
        <path
          d="M86 104L76 118L90 114L84 128"
          stroke="#EF8557"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Rocket Body */}
        <path
          d="M112 40C98 44 82 60 78 80L94 96C114 92 130 76 134 62C136 48 126 39 112 40Z"
          stroke="#226192"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#FFFFFF"
        />

        {/* Rocket Fins */}
        <path
          d="M78 80L64 84C62 90 66 100 70 102L80 98"
          stroke="#226192"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="#FAF9F6"
        />
        <path
          d="M94 96L98 106C104 108 114 104 116 100L112 90"
          stroke="#226192"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="#FAF9F6"
        />

        {/* Rocket Window */}
        <circle cx="108" cy="62" r="6" stroke="#EF8557" strokeWidth="2" fill="#FAF9F6" />
      </svg>
    ),
  },
  {
    id: "note-2",
    number: "02",
    title: "Clarity before channels",
    theme: "cream",
    renderIllustration: () => (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Orbital trajectory dashed arc */}
        <path
          d="M36 122C38 100 50 62 90 46C112 37 128 42 132 50"
          stroke="#226192"
          strokeWidth="1.4"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
        />
        <circle cx="126" cy="46" r="3" stroke="#226192" strokeWidth="1.6" fill="#FFFFFF" />
        <circle cx="78" cy="48" r="2.5" fill="#226192" />

        {/* Compass Outer Dial Ring */}
        <circle cx="80" cy="82" r="36" stroke="#226192" strokeWidth="2" fill="#FFFFFF" />

        {/* Compass Cardinal Marks */}
        <line x1="80" y1="50" x2="80" y2="56" stroke="#226192" strokeWidth="2" strokeLinecap="round" />
        <line x1="80" y1="108" x2="80" y2="114" stroke="#226192" strokeWidth="2" strokeLinecap="round" />
        <line x1="48" y1="82" x2="54" y2="82" stroke="#226192" strokeWidth="2" strokeLinecap="round" />
        <line x1="106" y1="82" x2="112" y2="82" stroke="#226192" strokeWidth="2" strokeLinecap="round" />

        {/* North Arrow (Warm Terracotta) */}
        <path
          d="M80 82L98 56L80 74L80 82Z"
          fill="#EF8557"
          stroke="#EF8557"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        {/* South Arrow (Steel Blue) */}
        <path
          d="M80 82L62 108L80 90L80 82Z"
          fill="#226192"
          stroke="#226192"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        {/* Center Pivot Ring */}
        <circle cx="80" cy="82" r="3.5" fill="#FAF9F6" stroke="#226192" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: "note-3",
    number: "03",
    title: "Bad positioning is expensive",
    theme: "blue",
    renderIllustration: () => (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Ripple Guides */}
        <circle
          cx="62"
          cy="82"
          r="42"
          stroke="#226192"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          strokeOpacity="0.25"
        />

        {/* Secondary Back Hang Tag (Steel Blue Shadow) */}
        <path
          d="M74 48L98 56L108 108L76 118L58 88L74 48Z"
          stroke="#226192"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="#E2EBF2"
        />

        {/* Primary Foreground Hang Tag */}
        <path
          d="M84 44L108 54L118 106L84 118L64 86L84 44Z"
          stroke="#226192"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="#FFFFFF"
        />

        {/* Tag String Eyelet */}
        <circle cx="86" cy="58" r="4" stroke="#226192" strokeWidth="1.8" fill="#FFFFFF" />

        {/* Tag String Loop */}
        <path
          d="M86 54C86 36 102 38 104 46"
          stroke="#226192"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Indian Rupee Symbol (₹) In Terracotta */}
        <path
          d="M88 78H98M88 84H97M89 84C95 84 97 89 93 93L87 99M93 93L100 102"
          stroke="#EF8557"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Accent Terracotta Price Dot */}
        <circle cx="124" cy="84" r="3.5" fill="#EF8557" />
      </svg>
    ),
  },
  {
    id: "note-4",
    number: "04",
    title: "Virality is a piece of Art",
    theme: "cream",
    renderIllustration: () => (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Radiating Curved & Straight Network Filaments */}
        <path d="M80 80L48 54" stroke="#226192" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80L60 38" stroke="#226192" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80L108 44" stroke="#226192" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80L122 62" stroke="#226192" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80L126 94" stroke="#226192" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80L116 122" stroke="#226192" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80L84 126" stroke="#226192" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80L50 114" stroke="#226192" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80L36 86" stroke="#226192" strokeWidth="1.5" strokeLinecap="round" />

        {/* Dashed Secondary Jump Vector */}
        <path
          d="M108 44C118 48 124 52 126 62"
          stroke="#226192"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />

        {/* Outer Steel Blue Nodes with White Fill */}
        <circle cx="48" cy="54" r="3.5" stroke="#226192" strokeWidth="1.8" fill="#FFFFFF" />
        <circle cx="60" cy="38" r="3" stroke="#226192" strokeWidth="1.8" fill="#FFFFFF" />
        <circle cx="108" cy="44" r="3.5" stroke="#226192" strokeWidth="1.8" fill="#FFFFFF" />
        <circle cx="126" cy="94" r="3.5" stroke="#226192" strokeWidth="1.8" fill="#FFFFFF" />
        <circle cx="116" cy="122" r="3.5" stroke="#226192" strokeWidth="1.8" fill="#FFFFFF" />
        <circle cx="50" cy="114" r="3.5" stroke="#226192" strokeWidth="1.8" fill="#FFFFFF" />
        <circle cx="36" cy="86" r="3.5" stroke="#226192" strokeWidth="1.8" fill="#FFFFFF" />

        {/* Terracotta Highlight Nodes */}
        <circle cx="122" cy="62" r="4" stroke="#EF8557" strokeWidth="1.5" fill="#EF8557" fillOpacity="0.25" />
        <circle cx="44" cy="124" r="3" stroke="#EF8557" strokeWidth="1.5" fill="#FFFFFF" />
        <circle cx="84" cy="126" r="3" fill="#226192" />
        <circle cx="100" cy="118" r="2.2" fill="#EF8557" />
        <circle cx="68" cy="62" r="2" fill="#EF8557" />

        {/* Central Core Pulse */}
        <circle cx="80" cy="80" r="7" fill="#EF8557" />
        <circle cx="80" cy="80" r="11" stroke="#EF8557" strokeWidth="1.2" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "note-5",
    number: "05",
    title: "Conversion is a context problem",
    theme: "blue",
    renderIllustration: () => (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Floating Contextual Input Shapes */}
        <circle cx="68" cy="42" r="3.5" stroke="#226192" strokeWidth="1.8" fill="#FFFFFF" />
        <circle cx="58" cy="54" r="2.5" stroke="#226192" strokeWidth="1.5" fill="#FFFFFF" />
        <rect
          x="90"
          y="40"
          width="8"
          height="8"
          transform="rotate(45 90 40)"
          stroke="#226192"
          strokeWidth="1.8"
          fill="#FFFFFF"
        />
        <path d="M106 52L112 60H100L106 52Z" stroke="#226192" strokeWidth="1.6" fill="#FFFFFF" />
        <rect x="74" y="52" width="6" height="6" stroke="#226192" strokeWidth="1.4" fill="#FFFFFF" opacity="0.6" />

        {/* Funnel Outline */}
        <path
          d="M48 68H116L92 104V116H72V104L48 68Z"
          stroke="#226192"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="#FFFFFF"
        />

        {/* Funnel Rim */}
        <ellipse cx="82" cy="68" rx="34" ry="4.5" stroke="#226192" strokeWidth="1.8" fill="#E8F0F7" />

        {/* Ambient Context Arc */}
        <path
          d="M40 84C46 112 76 128 122 108"
          stroke="#226192"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          strokeOpacity="0.4"
        />
        <path
          d="M120 48C134 68 132 94 122 108"
          stroke="#226192"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          strokeOpacity="0.4"
        />

        {/* Conversion Droplet Exiting Funnel */}
        <circle cx="82" cy="130" r="4.5" stroke="#EF8557" strokeWidth="2" fill="#FAF9F6" />
      </svg>
    ),
  },
];

export default function NotesOnGrowth() {
  return (
    <section
      id="journal"
      style={{ backgroundColor: "#FAF9F6" }}
      className="relative w-full text-[#121214] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[#121214]/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ==============================================================
            SECTION HEADER (IMAGE 1:1 MATCHING)
            ============================================================== */}
        <div className="w-full flex flex-col items-start pb-10 sm:pb-12 lg:pb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#EF8557] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#121214]/65">
              NOTES ON GROWTH
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sans font-bold text-3xl sm:text-5xl lg:text-[54px] tracking-tight leading-[1.05] text-[#121214]">
            Notes on{" "}
            <span className="font-serif italic font-normal text-[#EF8557]">
              growth.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-[#121214]/65 mt-2 tracking-tight">
            Ideas worth thinking about.
          </p>
        </div>

        {/* ==============================================================
            DESKTOP VIEW: EXACT 5-COLUMN EDITORIAL GRID
            ============================================================== */}
        <div className="hidden lg:grid grid-cols-5 gap-4 xl:gap-5 w-full">
          {NOTES_DATA.map((note) => {
            const isBlue = note.theme === "blue";

            return (
              <motion.div
                key={note.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                style={{
                  backgroundColor: isBlue ? "#EDF3F7" : "#F5F2EB",
                }}
                className="group rounded-[22px] p-5 xl:p-6 flex flex-col justify-between h-[380px] xl:h-[400px] border border-white/80 shadow-[0_10px_28px_rgba(18,18,20,0.04)] hover:shadow-[0_20px_40px_rgba(34,97,146,0.10)] transition-all duration-300 cursor-default"
              >
                {/* Top: 01 — */}
                <div className="w-full flex items-center gap-2.5 pt-0.5">
                  <span className="font-serif italic text-2xl xl:text-[26px] text-[#EF8557] leading-none select-none">
                    {note.number}
                  </span>
                  <span className="w-7 h-[1.2px] bg-[#EF8557]/45 rounded-full" />
                </div>

                {/* Center: Hand-Crafted Vector Illustration */}
                <div className="relative w-full h-36 xl:h-40 flex items-center justify-center my-auto p-2 transition-transform duration-500 ease-out group-hover:scale-105">
                  {note.renderIllustration()}
                </div>

                {/* Bottom: Title */}
                <div className="w-full pt-3">
                  <h3 className="font-sans font-bold text-[15px] xl:text-base leading-snug tracking-tight text-[#121214] max-w-[175px]">
                    {note.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ==============================================================
            MOBILE & TABLET: POLISHED SWIPEABLE SNAP CAROUSEL
            ============================================================== */}
        <div className="flex lg:hidden w-full overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8">
          {NOTES_DATA.map((note) => {
            const isBlue = note.theme === "blue";

            return (
              <div
                key={note.id}
                style={{
                  backgroundColor: isBlue ? "#EDF3F7" : "#F5F2EB",
                }}
                className="snap-center shrink-0 w-[240px] xs:w-[260px] sm:w-[275px] h-[350px] rounded-[22px] p-5 flex flex-col justify-between border border-white/80 shadow-[0_8px_24px_rgba(18,18,20,0.06)]"
              >
                <div className="w-full flex items-center gap-2.5">
                  <span className="font-serif italic text-2xl text-[#EF8557]">
                    {note.number}
                  </span>
                  <span className="w-6 h-[1.2px] bg-[#EF8557]/45 rounded-full" />
                </div>

                <div className="relative w-full h-36 flex items-center justify-center my-auto p-2">
                  {note.renderIllustration()}
                </div>

                <div className="w-full pt-3">
                  <h3 className="font-sans font-bold text-sm leading-snug tracking-tight text-[#121214]">
                    {note.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export { NotesOnGrowth, NotesOnGrowth as JournalSection };

