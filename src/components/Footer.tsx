"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

/* ------------------------------------------------------------------
   PRECISE INLINE BRAND SOCIAL ICONS (Zero external dependency issues)
   ------------------------------------------------------------------ */
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

function TwitterXIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  const email = "hello@arhaanshaikh.com";
  const phone = "+91 91524 96555";
  const phoneTel = "+919152496555";

  // Live Mumbai Time Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      style={{ backgroundColor: "#226192" }}
      className="relative w-full text-white pt-14 sm:pt-18 lg:pt-20 pb-10 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none"
    >
      {/* ==============================================================
          BACKGROUND WATERMARK: GHOST TYPOGRAPHY FOR DEPTH
          ============================================================== */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none whitespace-nowrap opacity-[0.035] font-serif italic text-[160px] sm:text-[220px] lg:text-[280px] leading-none text-white z-0">
        Arhaan Shaikh
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* ==============================================================
            PRE-FOOTER CALLOUT ROW: REMOVES PLAINNESS INSTANTLY
            ============================================================== */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 sm:pb-14 border-b border-white/15">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EF8557] animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-[0.24em] uppercase text-[#EF8557]">
                START A COLLABORATION
              </span>
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              Have an ambitious project in{" "}
              <span className="font-serif italic font-normal text-[#EF8557]">
                mind?
              </span>
            </h2>
          </div>

          <Link
            href="/#contact"
            style={{ backgroundColor: "#EF8557" }}
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl self-start md:self-auto shrink-0"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* ==============================================================
            MAIN 4-COLUMN GRID
            ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-12 sm:py-14">
          
          {/* COLUMN 1: BIO + SOCIAL ICONS (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <h3 className="font-sans font-bold text-2xl tracking-tight text-white mb-3">
              Arhaan Shaikh
            </h3>
            <p className="font-sans text-sm text-white/80 leading-relaxed max-w-sm mb-6">
              Empowering businesses with scalable growth strategies, tailored marketing systems, and high-performance digital infrastructure.
            </p>

            {/* Social Icons row placed under bio */}
            <div className="flex items-center gap-3">
              <a
                href="https://in.linkedin.com/in/arhaan555"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:border-[#EF8557] hover:text-[#EF8557] hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              {/* Twitter / X (Retained for future activation)
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:border-[#EF8557] hover:text-[#EF8557] hover:scale-105"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
              */}
              <a
                href="https://www.instagram.com/arhaanshaikh.co/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:border-[#EF8557] hover:text-[#EF8557] hover:scale-105"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:border-[#EF8557] hover:text-[#EF8557] hover:scale-105"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: EXPLORE (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-mono text-xs font-semibold tracking-[0.22em] text-white/60 mb-5">
              EXPLORE
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm tracking-wide text-white/85">
              <li>
                <Link
                  href="/#about"
                  className="transition-colors duration-200 hover:text-[#EF8557]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="transition-colors duration-200 hover:text-[#EF8557]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="transition-colors duration-200 hover:text-[#EF8557]"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/#journal"
                  className="transition-colors duration-200 hover:text-[#EF8557]"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: EXPERTISE (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-mono text-xs font-semibold tracking-[0.22em] text-white/60 mb-5">
              EXPERTISE
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-white/85">
              <li>
                <Link
                  href="/services/go-to-market"
                  className="transition-colors duration-200 hover:text-[#EF8557] flex items-center gap-1.5"
                >
                  <span>Go-To-Market Strategy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/growth-strategy"
                  className="transition-colors duration-200 hover:text-[#EF8557] flex items-center gap-1.5"
                >
                  <span>Growth Strategy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce"
                  className="transition-colors duration-200 hover:text-[#EF8557] flex items-center gap-1.5"
                >
                  <span>E-Commerce & Q-Commerce</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/brand-positioning"
                  className="transition-colors duration-200 hover:text-[#EF8557] flex items-center gap-1.5"
                >
                  <span>Brand Positioning</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT US (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-mono text-xs font-semibold tracking-[0.22em] uppercase text-white/60 mb-5">
              CONTACT US
            </h4>

            {/* Standard Contact Items */}
            <div className="flex flex-col gap-4 w-full font-sans text-xs sm:text-sm text-white/85">
              
              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 hover:text-[#EF8557] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#EF8557] shrink-0" />
                <span>{email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${phoneTel}`}
                className="flex items-center gap-2.5 hover:text-[#EF8557] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#EF8557] shrink-0" />
                <span>{phone}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-[#EF8557] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs sm:text-[13px]">
                  The Bombay Digital Company, Plot no.381, RSC Rd Number 1A, Near Axis bank, opposite Shivneri building, Gorai 2, Borivali West, Mumbai, Maharashtra 400091
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* ==============================================================
            BOTTOM DIVIDER & COPYRIGHT ROW (WITH LIVE TIME CLOCK)
            ============================================================== */}
        <div className="w-full border-t border-white/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Arhaan Shaikh. All rights reserved.</p>

          {/* Live Clock Badge */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-white/50" suppressHydrationWarning>
            <span>MUMBAI, IN</span>
            <span>•</span>
            <span className="text-white/80">{currentTime || "09:30 PM IST"}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export { Footer };
