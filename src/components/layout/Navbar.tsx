"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

  const menuContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 24, filter: "blur(4px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      x: 16,
      transition: { duration: 0.2 },
    },
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto w-full max-w-6xl h-14 sm:h-16 px-4 sm:px-6 rounded-full bg-[#18181A]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)] flex items-center justify-between transition-all"
      >
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
                <motion.span
                  variants={{
                    initial: { y: 0, opacity: 0.9 },
                    hover: { y: "-130%", opacity: 0 },
                  }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] as const }}
                  className="block font-heading font-semibold text-xs tracking-[0.14em] text-white/85"
                >
                  {item.name}
                </motion.span>
                <motion.span
                  variants={{
                    initial: { y: "130%", opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] as const }}
                  className="absolute inset-0 flex items-center justify-center font-serif italic font-bold text-[15px] tracking-normal text-[#CDF225] drop-shadow-[0_0_10px_rgba(205,242,37,0.6)]"
                >
                  {item.hoverDisplay}
                </motion.span>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Desktop CTA & Mobile Transparent Hamburger */}
        <div className="flex items-center gap-2">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="hidden md:inline-flex items-center justify-center h-9 sm:h-10 px-5 sm:px-6 rounded-full bg-[#CDF225] text-[#121310] font-heading font-extrabold text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(205,242,37,0.35)] select-none cursor-pointer focus:outline-none"
          >
            LET&apos;S TALK
          </motion.a>

          {/* Transparent Background Hamburger Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Mobile Menu"
            className="md:hidden relative w-12 h-12 flex items-center justify-center bg-transparent active:scale-90 transition-transform touch-manipulation cursor-pointer z-50 focus:outline-none select-none"
          >
            <div className="w-5 h-3.5 flex flex-col justify-between items-center pointer-events-none">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as const }}
                className="w-5 h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="w-3.5 h-0.5 bg-[#CDF225] rounded-full self-end"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as const }}
                className="w-5 h-0.5 bg-white rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Compact Liquid Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 md:hidden pointer-events-auto touch-manipulation"
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "100%", opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.8 }}
              transition={{ type: "spring", damping: 28, stiffness: 250 }}
              className="fixed top-0 right-0 w-[84%] max-w-[320px] h-auto max-h-[82vh] z-50 md:hidden flex flex-col p-6 shadow-[-20px_20px_50px_rgba(0,0,0,0.7)] pointer-events-auto border-l border-b border-white/15 rounded-bl-[32px] overflow-hidden"
              style={{
                background: "rgba(18, 18, 22, 0.88)",
                backdropFilter: "blur(32px) saturate(190%)",
                WebkitBackdropFilter: "blur(32px) saturate(190%)",
                boxShadow: "-16px 16px 50px rgba(0,0,0,0.65), inset 1px -1px 0 rgba(255,255,255,0.18)",
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
                <span className="font-heading font-extrabold text-base tracking-wider text-white select-none">
                  TBDC
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                  aria-label="Close Mobile Menu"
                  className="w-11 h-11 -mr-2 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/15 active:scale-90 transition-transform touch-manipulation cursor-pointer z-50 focus:outline-none select-none"
                >
                  <span className="text-xl font-light leading-none select-none">✕</span>
                </button>
              </div>

              <div className="py-4 overflow-y-auto">
                <motion.ul
                  variants={menuContainerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex flex-col gap-3.5 w-full"
                >
                  {navItems.map((item) => (
                    <motion.li key={item.name} variants={menuItemVariants}>
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group block py-1.5 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-all text-left touch-manipulation"
                      >
                        <span className="font-heading font-bold text-lg text-white/90 group-hover:text-[#CDF225] transition-colors tracking-tight">
                          {item.hoverDisplay}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                className="pt-4 mt-1 border-t border-white/10 shrink-0"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full h-11 rounded-full bg-[#CDF225] text-[#121310] font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_8px_24px_rgba(205,242,37,0.35)] active:scale-95 transition-transform touch-manipulation"
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
