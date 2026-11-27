import React from "react";
import Image from "next/image";

// =========================================================================
// BANNER IMAGE CONFIGURATION
// Sirf yahan Desktop aur Mobile image ka URL/path daalna hai
// =========================================================================
const HERO_BANNERS = {
  desktopSrc: "/images/smart growth desktop.png", // 👈 Desktop Banner URL/Path
  mobileSrc: "/images/smart growth mobile.png",   // 👈 Mobile Banner URL/Path
  alt: "Smart moves, real growth — Arhaan Shaikh, Growth Strategist",
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#EAE6DE] select-none"
    >
      {/* Semantic H1 for SEO & Accessibility without altering visual layout */}
      <h1 className="sr-only">
        <span className="font-sans font-normal">Smart moves, </span>
        <span className="font-serif italic font-semibold tracking-[-0.02em] text-[#226192]">real growth.</span>
        <span> — Arhaan Shaikh | Growth Strategist &amp; Marketing Architect</span>
      </h1>

      {/* 1. DESKTOP BANNER (Visible on Tablet & Desktop: md:block) */}
      <div className="hidden md:block w-full">
        <Image
          src={HERO_BANNERS.desktopSrc}
          alt={HERO_BANNERS.alt}
          width={1920}
          height={1080}
          priority
          quality={95}
          sizes="100vw"
          className="w-full h-auto block object-cover"
        />
      </div>

      {/* 2. MOBILE BANNER (Visible on Mobile Only: block md:hidden) */}
      <div className="block md:hidden w-full pb-4 sm:pb-6">
        <Image
          src={HERO_BANNERS.mobileSrc}
          alt={HERO_BANNERS.alt}
          width={750}
          height={1334}
          priority
          quality={95}
          sizes="100vw"
          className="w-full h-auto block object-cover"
        />
      </div>
    </section>
  );
}

export { Hero };
