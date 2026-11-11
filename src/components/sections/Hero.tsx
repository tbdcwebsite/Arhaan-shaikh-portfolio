import React from "react";
import Image from "next/image";

// =========================================================================
// BANNER IMAGE CONFIGURATION
// Sirf yahan Desktop aur Mobile image ka URL/path daalna hai
// =========================================================================
const HERO_BANNERS = {
  desktopSrc: "/images/hero-var5.png", // 👈 Desktop Banner URL/Path
  mobileSrc: "/images/smartmove.png",   // 👈 Mobile Banner URL/Path
  alt: "Arhaan Shaikh — Growth Strategist",
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full overflow-hidden select-none"
    >
      <div className="w-full max-w-[1920px] mx-auto">
        {/* ==============================================================
            1. DESKTOP BANNER (Visible on Tablet & Desktop: md:block)
            ============================================================== */}
        <div className="hidden md:block w-full">
          <Image
            src={HERO_BANNERS.desktopSrc}
            alt={HERO_BANNERS.alt}
            width={1920}
            height={1080}
            priority
            quality={95}
            sizes="100vw"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* ==============================================================
            2. MOBILE BANNER (Visible on Mobile Only: block md:hidden)
            ============================================================== */}
        <div className="block md:hidden w-full">
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
