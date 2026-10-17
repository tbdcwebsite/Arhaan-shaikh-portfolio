"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  hoverDisplay: string;
}

const navItems: NavItem[] = [
  { name: "ABOUT", href: "#about", hoverDisplay: "About" },
  { name: "QUESTIONS", href: "#questions", hoverDisplay: "Questions" },
  { name: "EXPERTISE", href: "#expertise", hoverDisplay: "Expertise" },
  { name: "PROCESS", href: "#process", hoverDisplay: "Process" },
  { name: "NOTES", href: "#notes", hoverDisplay: "Notes" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      {/* Floating Dark Pill Container */}
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto w-full max-w-6xl h-14 sm:h-16 px-4 sm:px-6 rounded-full bg-[#18181A]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)] flex items-center justify-between transition-all"
      >
        {/* Brand Logo (TBDC/founder) */}
        <a
          href="#"
          className="flex items-center gap-0.5 select-none group py-1"
        >
          <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider text-white">
            TBDC
          </span>
          <span className="font-serif italic font-bold text-sm sm:text-base text-[#CDF225] tracking-tight group-hover:drop-shadow-[0_0_12px_rgba(205,242,37,0.7)] transition-all">
            /founder
          </span>
        </a>

        {/* Desktop Navigation Links with Kinetic Rolling Hover */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-3.5 py-1.5 flex items-center justify-center focus:outline-none"
            >
              <motion.div
                className="relative h-6 overflow-hidden flex items-center justify-center cursor-pointer select-none"
                initial="initial"
                whileHover="hover"
              >
                {/* Layer 1: Default Uppercase Sans Typography (Rolls UP) */}
                <motion.span
                  variants={{
                    initial: { y: 0, opacity: 0.9 },
                    hover: { y: "-130%", opacity: 0 },
                  }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-heading font-semibold text-xs tracking-[0.14em] text-white/85"
                >
                  {item.name}
                </motion.span>

                {/* Layer 2: Stylized Italic Serif in #CDF225 (Rolls UP from bottom) */}
                <motion.span
                  variants={{
                    initial: { y: "130%", opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center font-serif italic font-bold text-[15px] tracking-normal text-[#CDF225] drop-shadow-[0_0_10px_rgba(205,242,37,0.6)]"
                >
                  {item.hoverDisplay}
                </motion.span>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Right Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* "LET'S TALK" Pill Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center justify-center h-9 sm:h-10 px-5 sm:px-6 rounded-full bg-[#CDF225] text-[#121310] font-heading font-extrabold text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(205,242,37,0.35)] hover:shadow-[0_6px_22px_rgba(205,242,37,0.6)] select-none cursor-pointer"
          >
            LET&apos;S TALK
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-white" />
            ) : (
              <Menu className="w-4 h-4 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto md:hidden absolute top-[72px] sm:top-[80px] w-[92%] max-w-sm rounded-3xl bg-[#18181A]/98 backdrop-blur-2xl border border-white/10 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] flex flex-col gap-3"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <span className="font-heading font-semibold text-xs tracking-[0.12em] text-white/80 group-hover:text-white">
                  {item.name}
                </span>
                <span className="font-serif italic font-bold text-sm text-[#CDF225]">
                  {item.hoverDisplay}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
