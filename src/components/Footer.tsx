"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const NAV_PAGES = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Success Stories", href: "/#success-stories" },
  { name: "Journal", href: "/#journal" },
  { name: "Contact Us", href: "/#contact" },
];

const SERVICES_LIST = [
  { number: "01", name: "Go-to-market strategy", href: "/services/go-to-market-strategy" },
  { number: "02", name: "Growth & performance", href: "/services/growth-strategy" },
  { number: "03", name: "E-commerce | Quick commerce", href: "/services/ecommerce-quick-commerce" },
  { number: "04", name: "Marketing strategy", href: "/services/marketing-strategy" },
  { number: "05", name: "Brand positioning", href: "/services/brand-positioning" },
  { number: "06", name: "Digital strategy", href: "/services/digital-strategy" },
];

export function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  // Live IST Clock for editorial polish
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="site-footer"
      style={{ backgroundColor: "#EF8557" }}
      className="relative w-full text-[#FAF9F6] pt-16 sm:pt-24 lg:pt-32 pb-10 sm:pb-14 px-5 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* ==============================================================
            TOP / MAIN GRID SECTION
            ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 sm:pb-24">
          
          {/* Left Column: Monogram & Large Impactful Question */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            
            {/* Logo Monogram */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-8 sm:mb-12 group focus:outline-none"
            >
              <span className="font-sans font-black text-2xl tracking-tighter text-[#FAF9F6] border-2 border-[#FAF9F6] px-2 py-0.5 rounded-sm">
                A&apos;
              </span>
              <div className="flex flex-col leading-none font-sans font-bold text-[11px] tracking-[0.2em] uppercase text-[#FAF9F6]">
                <span>ARHAAN</span>
                <span className="opacity-80">SHAIKH</span>
              </div>
            </Link>

            {/* Impact Headline */}
            <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.04] text-[#FAF9F6] uppercase max-w-lg">
              <span>HAVE A BUSINESS PROBLEM </span>
              <span className="font-serif italic font-normal normal-case text-white inline-block">
                worth solving?
              </span>
            </h2>

            {/* Quick Action Trigger */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#121214] text-[#FAF9F6] font-sans font-semibold text-xs tracking-wider uppercase shadow-[0_8px_24px_rgba(18,18,20,0.25)] hover:bg-black active:scale-95 transition-all"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
            </div>
          </div>

          {/* Middle Column: Pages Navigation */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col items-start md:pl-4">
            <span className="font-mono text-[11px] font-bold tracking-[0.26em] uppercase text-white/60 mb-5 sm:mb-7">
              PAGES
            </span>

            <nav className="flex flex-col space-y-2.5 sm:space-y-3.5">
              {NAV_PAGES.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="font-sans font-bold text-sm sm:text-base tracking-wider uppercase text-[#FAF9F6]/90 hover:text-white transition-all duration-200 hover:translate-x-1.5 inline-block w-fit"
                >
                  {page.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column: Services Navigation */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col items-start">
            <span className="font-mono text-[11px] font-bold tracking-[0.26em] uppercase text-white/60 mb-5 sm:mb-7">
              SERVICES
            </span>

            <nav className="flex flex-col space-y-2.5 sm:space-y-3.5 w-full">
              {SERVICES_LIST.map((srv) => (
                <Link
                  key={srv.number}
                  href={srv.href}
                  className="group flex items-baseline gap-3 text-sm sm:text-[15px] text-[#FAF9F6]/90 hover:text-white transition-all duration-200 hover:translate-x-1.5 w-fit"
                >
                  <span className="font-mono text-[11px] text-white/50 group-hover:text-white transition-colors">
                    {srv.number}
                  </span>
                  <span className="font-sans font-medium tracking-normal">
                    {srv.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* ==============================================================
            BOTTOM BAR: COPYRIGHT & METRICS
            ============================================================== */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-[0.2em] uppercase text-white/75">
          
          {/* Left: Copyright */}
          <div className="flex items-center gap-3">
            <span>© 2026 ARHAAN SHAIKH</span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="hidden sm:inline text-[11px] text-white/80">
              MUMBAI, IN {currentTime && `[${currentTime}]`}
            </span>
          </div>

          {/* Center / Right: Tagline & Back to Top */}
          <div className="flex items-center gap-6">
            <span className="hidden lg:inline text-white/90 font-medium">
              GROWTH STARTS WITH CLARITY.
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#121214] transition-colors cursor-pointer group"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
