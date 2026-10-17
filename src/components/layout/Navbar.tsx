"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Luxury "Lazy" Motion Variants with Blur Deceleration
  const menuContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Deliberate lazy spacing between items
        delayChildren: 0.32,   // Waits for the drawer slide to settle first
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 35, filter: "blur(6px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Apple/Awwwards silky deceleration
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      filter: "blur(4px)",
      transition: { duration: 0.25 },
    },
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      {/* Floating Dark Pill Container */}
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto w-full max-w-6xl h-14 sm:h-16 px-5 sm:px-6 rounded-full bg-[#18181A]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)] flex items-center justify-between transition-all"
      >
        {/* Brand Logo (TBDC Only) */}
        <a
          href="#"
          className="flex items-center select-none group py-1 focus:outline-none"
        >
          <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider text-white">
            TBDC
          </span>
        </a>

        {/* Desktop Navigation Links */}
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
                {/* Layer 1: Default Uppercase */}
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

                {/* Layer 2: Hover Display */}
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
          {/* "LET'S TALK" Pill Button (Desktop only) */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="hidden md:inline-flex items-center justify-center h-9 sm:h-10 px-5 sm:px-6 rounded-full bg-[#CDF225] text-[#121310] font-heading font-extrabold text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(205,242,37,0.35)] hover:shadow-[0_6px_22px_rgba(205,242,37,0.6)] select-none cursor-pointer focus:outline-none"
          >
            LET&apos;S TALK
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
            className="md:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors focus:outline-none"
          >
            <Menu className="w-4 h-4 text-white" />
          </button>
        </div>
      </nav>

      {/* ================================================================
          RIGHT-SIDE SLIDING MOBILE DRAWER WITH LAZY LUXURY CASCADE
          ================================================================ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay with Click-Outside Dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/65 backdrop-blur-sm z-50 md:hidden pointer-events-auto"
              aria-hidden="true"
            />

            {/* Sliding Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-[340px] h-full bg-[#121214] border-l border-white/10 z-50 md:hidden flex flex-col justify-between p-6 sm:p-8 shadow-[-20px_0_50px_rgba(0,0,0,0.6)] pointer-events-auto"
            >
              {/* Drawer Top Bar: Brand & Close Button */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-heading font-extrabold text-lg tracking-wider text-white">
                  TBDC
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Menu"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/15 active:scale-95 transition-all focus:outline-none"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Lazy Staggered Navigation List */}
              <motion.ul
                variants={menuContainerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col gap-2 my-auto py-6"
              >
                {navItems.map((item, index) => (
                  <motion.li key={item.name} variants={menuItemVariants}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-3.5 px-3 rounded-2xl hover:bg-white/5 transition-all text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-white/30 group-hover:text-[#CDF225] transition-colors">
                          0{index + 1}
                        </span>
                        <span className="font-heading font-bold text-lg text-white/90 group-hover:text-white transition-colors">
                          {item.hoverDisplay}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#CDF225] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Synchronized Lazy Footer CTA Pill */}
              <motion.div
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] as const }}
                className="pt-6 border-t border-white/10 flex flex-col gap-3"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full h-12 rounded-full bg-[#CDF225] text-[#121310] font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_8px_24px_rgba(205,242,37,0.35)] active:scale-98 transition-transform"
                >
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
