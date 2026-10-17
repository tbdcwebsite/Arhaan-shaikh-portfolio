"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroContent from "@/components/hero/HeroContent";
import HeroMobile from "@/components/hero/HeroMobile";
import GlassGrowthIllustration from "@/components/hero/GlassGrowthIllustration";

export function Hero() {
  return (
    <section
      style={{ backgroundColor: "#F8F8F5" }}
      className="relative z-0 w-full min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] flex flex-col justify-start lg:justify-center bg-[#F8F8F5] text-[#28282B] pt-24 sm:pt-28 lg:pt-20 pb-8 sm:pb-12 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Floating Top Navbar Component */}
      <Navbar />

      {/* Subtle Ambient Glows on Pure #F8F8F5 */}
      <div className="absolute top-1/4 left-1/3 w-[460px] h-[460px] bg-[#CDF225]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#CDF225]/12 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Mobile Layout (< lg) */}
      <div className="w-full flex-1 flex lg:hidden">
        <HeroMobile />
      </div>

      {/* Desktop Layout (>= lg) */}
      <div className="hidden lg:flex max-w-7xl mx-auto w-full flex-1 items-center">
        <div className="w-full grid grid-cols-12 gap-8 xl:gap-12 items-center">
          <div className="col-span-6 z-10">
            <HeroContent />
          </div>
          <div className="col-span-6 flex justify-center items-center">
            <GlassGrowthIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
