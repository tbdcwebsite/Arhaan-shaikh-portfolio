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
}

const CAMPAIGNS_DATA: CampaignStory[] = [
  {
    id: "camp-1",
    tag: "15 BUTTONS",
    imageSrc: "/images/15-buttons-case-study.webp",
    href: "/case-studies/15-buttons",
  },
  {
    id: "camp-2",
    tag: "APEX / PERFORMANCE",
    imageSrc: "/images/case-study-1.webp",
    href: "/case-studies/apex-gear",
  },
  {
    id: "camp-3",
    tag: "NOVA / CONSUMER TECH",
    imageSrc: "/images/case-study-2.webp",
    href: "/case-studies/nova-tech",
  },
  {
    id: "camp-4",
    tag: "TERRA / SUSTAINABILITY",
    imageSrc: "/images/case-study-3.webp",
    href: "/case-studies/terra-wellness",
  },
];

export default function SuccessStories() {
  return (
    <section
      id="success-stories"
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full text-[#121214] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[#121214]/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* ==============================================================
            HEADER ROW
            ============================================================== */}
        <div className="w-full flex flex-col items-start pb-10 sm:pb-14">
          {/* Eyebrow with Terracotta Pill Bar */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-8 h-1.5 rounded-full bg-[#EF8557]" />
            <span className="font-mono text-xs font-semibold tracking-[0.24em] uppercase text-[#121214]/75">
              OUR LATEST CAMPAIGNS
            </span>
          </div>

          {/* Heading with Butler Serif Italic */}
          <h2 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[#121214]">
            Success{" "}
            <span className="font-serif italic font-normal text-[#EF8557]">
              Stories.
            </span>
          </h2>

          {/* Subheading */}
          <p className="font-sans text-sm sm:text-base text-[#121214]/65 mt-2 tracking-tight">
            Selected campaigns delivering measurable ROI and scalable brand equity.
          </p>
        </div>

        {/* ==============================================================
            4-COLUMN EDITORIAL CARDS
            ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 w-full">
          {CAMPAIGNS_DATA.map((campaign) => (
            <Link
              key={campaign.id}
              href={campaign.href}
              className="group flex flex-col focus:outline-none"
            >
              {/* 🌟 1. CARD FRAME: 100% CLEAN IMAGE ONLY (ZERO OVERLAY / ZERO BUTTONS INSIDE) */}
              <div className="relative w-full h-[380px] xs:h-[400px] lg:h-[420px] rounded-[24px] lg:rounded-[28px] overflow-hidden 
                bg-[#161618] border border-white/80 shadow-[0_12px_32px_rgba(18,18,20,0.06)] 
                hover:shadow-[0_22px_44px_rgba(34,97,146,0.16)] transition-all duration-500 hover:-translate-y-1.5"
              >
                <Image
                  src={campaign.imageSrc}
                  alt={campaign.tag}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center pointer-events-none select-none transition-transform duration-700 ease-out group-hover:scale-106"
                  onError={(e) => {
                    (e.target as HTMLElement).style.opacity = "0.75";
                  }}
                />
              </div>

              {/* 🌟 2. METADATA ROW: POSITIONED DIRECTLY BELOW THE CARD */}
              <div className="w-full flex items-center justify-between pt-3.5 px-1">
                {/* Brand Name / Type */}
                <span className="font-mono text-xs sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-[#121214] group-hover:text-[#EF8557] transition-colors duration-200 truncate pr-2">
                  {campaign.tag}
                </span>

                {/* Circular Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-[#EF8557] text-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#226192] shrink-0">
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
