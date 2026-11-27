import React from "react";
import Image from "next/image";

// =========================================================================
// BANNER IMAGE CONFIGURATION
// Sirf yahan Desktop aur Mobile image ka URL/path daalna hai
// =========================================================================
const HERO_BANNERS = {
  desktopSrc: "/images/hero-var5.png", // 👈 Desktop Banner URL/Path
  mobileSrc: "/images/smartmove.png",   // 👈 Mobile Banner URL/Path
  alt: "Smart moves, real growth — Arhaan Shaikh, Growth Strategist",
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full overflow-hidden select-none"
    >
      {/* Semantic H1 for SEO & Accessibility without altering visual layout */}
      <h1 className="sr-only">
        <span className="font-sans font-normal">Smart moves, </span>
        <span className="font-serif italic font-semibold tracking-[-0.02em] text-[#226192]">real growth.</span>
        <span> — Arhaan Shaikh | Growth Strategist &amp; Marketing Architect</span>
      </h1>

      <div className="w-full max-w-[1920px] mx-auto">
        {/* ==============================================================
            1. DESKTOP BANNER (Visible on Tablet & Desktop: md:block)
            Guaranteed single 100vh desktop viewport fold fit.
            ============================================================== */}
        <div className="hidden md:flex items-center justify-center w-full max-h-[100dvh] overflow-hidden">
          <Image
            src={HERO_BANNERS.desktopSrc}
            alt={HERO_BANNERS.alt}
            width={1920}
            height={1080}
            priority
            quality={95}
            sizes="100vw"
            className="w-full h-auto max-h-[100dvh] object-contain block"
          />
        </div>

        {/* ==============================================================
            2. MOBILE BANNER (Visible on Mobile Only: block md:hidden)
            Trimmed excess top clearance for seamless fold positioning
            ============================================================== */}
        <div className="block md:hidden w-full -mt-2 sm:mt-0 pt-0 pb-4 sm:pb-6">
          <Image
            src={HERO_BANNERS.mobileSrc}
            alt={HERO_BANNERS.alt}
            width={750}
            height={1334}
            priority
            quality={95}
            sizes="100vw"
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>
    </section>
  );
}

export { Hero };
