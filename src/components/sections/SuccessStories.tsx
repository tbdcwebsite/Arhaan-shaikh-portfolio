"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CampaignStory {
  id: string;
  tag: string;
  imageSrc: string;
  href: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

const CAMPAIGNS_DATA: CampaignStory[] = [
  {
    id: "camp-1",
    tag: "15 BUTTONS / FASHION",
    imageSrc: "/images/15-buttons-case-study.webp",
    href: "/case-studies/15-buttons",
    metrics: [
      { value: "2M+", label: "IMPRESSIONS" },
      { value: "4.5X", label: "ROAS" },
      { value: "850K+", label: "CLICKS" },
      { value: "150%", label: "ENGAGEMENT" },
    ],
  },
  {
    id: "camp-2",
    tag: "APEX / PERFORMANCE",
    imageSrc: "/images/case-study-1.webp",
    href: "/case-studies/apex-gear",
    metrics: [
      { value: "3.2M+", label: "IMPRESSIONS" },
      { value: "5.1X", label: "ROAS" },
      { value: "920K+", label: "CLICKS" },
      { value: "185%", label: "ENGAGEMENT" },
    ],
  },
  {
    id: "camp-3",
    tag: "NOVA / CONSUMER TECH",
    imageSrc: "/images/case-study-2.webp",
    href: "/case-studies/nova-tech",
    metrics: [
      { value: "1.8M+", label: "IMPRESSIONS" },
      { value: "4.2X", label: "ROAS" },
      { value: "640K+", label: "CLICKS" },
      { value: "135%", label: "ENGAGEMENT" },
    ],
  },
  {
    id: "camp-4",
    tag: "TERRA / SUSTAINABILITY",
    imageSrc: "/images/case-study-3.webp",
    href: "/case-studies/terra-wellness",
    metrics: [
      { value: "2.4M+", label: "IMPRESSIONS" },
      { value: "4.8X", label: "ROAS" },
      { value: "780K+", label: "CLICKS" },
      { value: "160%", label: "ENGAGEMENT" },
    ],
  },
];

export default function SuccessStories() {
  return (
    <section
      id="success-stories"
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full text-[#121214] py-14 sm:py-18 lg:py-20 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[#121214]/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* ==============================================================
            HEADER ROW
            ============================================================== */}
        <div className="w-full flex flex-col items-center text-center pb-10 sm:pb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#EF8557] animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-[0.24em] uppercase text-[#226192]">
              OUR LATEST CAMPAIGNS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sans font-bold text-3xl sm:text-5xl lg:text-[54px] tracking-tight leading-[1.05] text-[#121214]">
            Success{" "}
            <span className="font-serif italic font-normal text-[#EF8557]">
              Stories.
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#121214]/65 mt-2.5 max-w-md tracking-tight">
            Selected campaigns delivering measurable ROI and scalable brand equity.
          </p>
        </div>

        {/* ==============================================================
            4-COLUMN EDITORIAL CARDS
            ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6 w-full">
          {CAMPAIGNS_DATA.map((campaign) => (
            <Link
              key={campaign.id}
              href={campaign.href}
              className="group relative w-full h-[390px] xs:h-[410px] lg:h-[425px] xl:h-[440px] rounded-[26px] overflow-hidden 
                border border-white/80 shadow-[0_12px_32px_rgba(18,18,20,0.08)] hover:shadow-[0_20px_46px_rgba(34,97,146,0.18)]
                transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between p-5 sm:p-6 focus:outline-none"
            >
              {/* FULL-BLEED BACKGROUND IMAGE */}
              <div className="absolute inset-0 z-0 bg-[#141517]">
                <Image
                  src={campaign.imageSrc}
                  alt={campaign.tag}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center pointer-events-none select-none transition-transform duration-700 ease-out group-hover:scale-106"
                  onError={(e) => {
                    (e.target as HTMLElement).style.opacity = "0.7";
                  }}
                />
                
                {/* Editorial Scrim Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/30 z-0 transition-opacity duration-300 group-hover:opacity-95" />
              </div>

              {/* CARD BODY: 4 HUD METRICS (CLEANLY CENTERED) */}
              <div className="w-full grid grid-cols-2 gap-x-3 gap-y-3 z-10 my-auto pt-4 pb-2 border-y border-white/15">
                {campaign.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flex flex-col items-start">
                    <span className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-white leading-tight">
                      {m.value}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-white/70 mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CARD BOTTOM: BRANDNAME / TYPE (LEFT) & ACTIVE CIRCLE BUTTON (RIGHT) */}
              <div className="w-full flex items-center justify-between z-10 pt-3">
                {/* Brandname / Type Tag */}
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-white/90 bg-black/45 px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-sm truncate max-w-[calc(100%-48px)]">
                  {campaign.tag}
                </span>

                {/* Active Circle Arrow Button */}
                <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#EF8557] text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#226192] shrink-0 ml-2">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.4] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export { SuccessStories };
