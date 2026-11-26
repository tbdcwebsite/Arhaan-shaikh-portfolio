"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

interface SuccessStory {
  id: string;
  slug: string;
  title: string;
  imageSrc: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    slug: "carlos-philip",
    title: "Carlos Philip",
    imageSrc: "/case studies/carlos.png",
  },
  {
    id: "story-2",
    slug: "atrangi",
    title: "Atrangi",
    imageSrc: "/case studies/atrangi.png",
  },
  {
    id: "story-3",
    slug: "thatgal",
    title: "ThatGal",
    imageSrc: "/case studies/ThatGal.png",
  },
  {
    id: "story-4",
    slug: "living-spaces",
    title: "Living Spaces",
    imageSrc: "/case studies/living spaces.png",
  },
];

export default function SuccessStories() {
  return (
    <section
      id="case-studies"
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full text-[#121214] pt-[72px] md:pt-[96px] lg:pt-[120px] pb-0 px-6 sm:px-10 lg:px-16 select-none overflow-hidden"
    >
      {/* Anchor alias for backwards-compatibility */}
      <span id="success-stories" className="sr-only" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* ==============================================================
            HEADER ROW
            ============================================================== */}
        <div className="w-full flex flex-col items-start">
          <SectionEyebrow text="OUR LATEST CAMPAIGNS" />

          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[60px] leading-[1.08] tracking-[-0.02em] font-normal text-[#121214]">
            <span className="font-sans font-normal leading-[1.08] tracking-[-0.02em]">
              Success{" "}
            </span>
            <span className="font-serif italic font-normal text-[#EF8557] leading-[1.08]">
              Stories.
            </span>
          </h2>

          <p className="font-sans font-normal text-[16px] lg:text-[17px] leading-[1.6] text-[#121214]/65 mt-4 lg:mt-5 max-w-[54ch]">
            Selected campaigns delivering measurable ROI and scalable brand equity.
          </p>
        </div>

        {/* ==============================================================
            4-COLUMN EDITORIAL CARDS
            ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 w-full mt-10 lg:mt-12">
          {SUCCESS_STORIES.map((story) => (
            <Link
              key={story.id}
              href={`/case-studies/${story.slug}`}
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#226192] focus-visible:ring-offset-2 rounded-[8px]"
            >
              {/* CARD IMAGE FRAME (100% CLEAN IMAGE ONLY) */}
              <div className="relative w-full h-[380px] xs:h-[400px] lg:h-[420px] rounded-[8px] overflow-hidden 
                bg-[#161618] border border-white/80 shadow-[0_12px_32px_rgba(18,18,20,0.06)] 
                hover:shadow-[0_22px_44px_rgba(34,97,146,0.16)] transition-all duration-500 hover:-translate-y-1.5"
              >
                <Image
                  src={story.imageSrc}
                  alt={story.title}
                  fill
                  unoptimized={true}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CARD METADATA ROW: BRAND NAME (LEFT) + ARROW BUTTON (RIGHT) */}
              <div className="w-full flex items-center justify-between pt-3.5 px-1">
                {/* Brand Name */}
                <h3 className="font-sans font-bold text-base lg:text-[17px] tracking-tight text-[#121214] group-hover:text-[#EF8557] transition-colors duration-200 truncate pr-2">
                  {story.title}
                </h3>

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
