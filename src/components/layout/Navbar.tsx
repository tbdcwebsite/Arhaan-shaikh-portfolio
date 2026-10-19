"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  hoverDisplay: string;
}

const navItems: NavItem[] = [
  { name: "ABOUT", href: "#about", hoverDisplay: "About" },
  { name: "SERVICES", href: "#services", hoverDisplay: "Services" },
  { name: "SUCCESS STORIES", href: "#success-stories", hoverDisplay: "Success Stories" },
  { name: "JOURNAL", href: "#journal", hoverDisplay: "Journal" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Comprehensive Mobile Scroll Lock (Blocks body, html, touch-move, and Lenis)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    // Stop Lenis smooth scroll if present on window
    const win = window as any;
    if (win.lenis && typeof win.lenis.stop === "function") {
      win.lenis.stop();
    }

    // Block non-drawer touchmove scrolling on iOS Safari / Chrome
    const preventWindowTouch = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !target.closest("[data-drawer-scrollable]")) {
        e.preventDefault();
      }
    };

    window.addEventListener("touchmove", preventWindowTouch, { passive: false });

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.touchAction = originalBodyTouchAction;
      window.removeEventListener("touchmove", preventWindowTouch);

      if (win.lenis && typeof win.lenis.start === "function") {
        win.lenis.start();
      }
    };
  }, [mobileMenuOpen]);

  const menuContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.15,
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
    hidden: { opacity: 0, x: 20, filter: "blur(3px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      x: 14,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 pointer-events-none">
        {/* Floating Dark Pill Container */}
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto w-full max-w-7xl h-14 sm:h-16 px-5 sm:px-8 rounded-full bg-[#18181A]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)] flex items-center justify-between transition-all"
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center select-none group py-1 focus:outline-none bg-transparent hover:bg-transparent"
            style={{ backgroundColor: "transparent" }}
          >
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider text-white">
              Arhaan Shaikh
            </span>
          </a>

          {/* Desktop Navigation Links (100% Transparent Background) */}
          <div
            className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-transparent"
            style={{ backgroundColor: "transparent" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ backgroundColor: "transparent" }}
                className="relative px-3.5 lg:px-4 py-1.5 flex items-center justify-center focus:outline-none whitespace-nowrap bg-transparent hover:bg-transparent active:bg-transparent"
              >
                <motion.div
                  style={{ backgroundColor: "transparent" }}
                  className="relative h-6 overflow-hidden flex items-center justify-center cursor-pointer select-none bg-transparent hover:bg-transparent"
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.span
                    style={{ backgroundColor: "transparent" }}
                    variants={{
                      initial: { y: 0, opacity: 0.85 },
                      hover: { y: "-130%", opacity: 0 },
                    }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="block font-heading font-semibold text-xs tracking-[0.14em] text-white/80 whitespace-nowrap bg-transparent"
                  >
                    {item.name}
                  </motion.span>

                  <motion.span
                    style={{
                      backgroundColor: "transparent",
                      textShadow: "0 0 14px rgba(205, 242, 37, 0.45)",
                    }}
                    variants={{
                      initial: { y: "130%", opacity: 0 },
                      hover: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex items-center justify-center font-serif italic font-medium text-[15px] tracking-normal text-[#CDF225] whitespace-nowrap bg-transparent"
                  >
                    {item.hoverDisplay}
                  </motion.span>
                </motion.div>
              </a>
            ))}
          </div>

          {/* Desktop CTA & Mobile Transparent Hamburger */}
          <div className="flex items-center gap-2 bg-transparent" style={{ backgroundColor: "transparent" }}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="hidden md:inline-flex items-center justify-center h-9 sm:h-10 px-5 sm:px-6 rounded-full bg-[#CDF225] text-[#121310] font-heading font-extrabold text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(205,242,37,0.35)] select-none cursor-pointer focus:outline-none"
            >
              LET&apos;S TALK
            </motion.a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Mobile Menu"
              style={{ backgroundColor: "transparent" }}
              className="md:hidden relative w-12 h-12 flex items-center justify-center bg-transparent active:scale-90 transition-transform touch-manipulation cursor-pointer z-50 focus:outline-none select-none"
            >
              <div className="w-5 h-3.5 flex flex-col justify-between items-center pointer-events-none">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="w-5 h-0.5 bg-white rounded-full origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-3.5 h-0.5 bg-[#CDF225] rounded-full self-end"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="w-5 h-0.5 bg-white rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* ================================================================
          PORTAL-RENDERED MOBILE DRAWER (MOUNTED DIRECTLY TO document.body)
          Guaranteed z-[9999] immune to any parent section stacking traps
          ================================================================ */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-[9999] pointer-events-auto md:hidden">
                {/* Backdrop Overlay with Active Touch Blocking */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setMobileMenuOpen(false)}
                  onTouchMove={(e) => e.preventDefault()}
                  className="fixed inset-0 bg-black/65 backdrop-blur-md z-[9998] touch-none"
                  aria-hidden="true"
                />

                {/* Floating Liquid Glass Drawer */}
                <motion.div
                  initial={{ x: "100%", opacity: 0.8 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0.8 }}
                  transition={{ type: "spring", damping: 28, stiffness: 250 }}
                  data-lenis-prevent
                  className="fixed top-0 right-0 w-[84%] max-w-[320px] h-[74vh] max-h-[620px] z-[9999] flex flex-col justify-between p-6 shadow-[-20px_20px_60px_rgba(0,0,0,0.85)] border-l border-b border-white/15 rounded-bl-[36px] overflow-hidden overscroll-contain"
                  style={{
                    background: "rgba(18, 18, 22, 0.94)",
                    backdropFilter: "blur(32px) saturate(190%)",
                    WebkitBackdropFilter: "blur(32px) saturate(190%)",
                    boxShadow: "-16px 16px 50px rgba(0,0,0,0.75), inset 1px -1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
                    <span className="font-heading font-extrabold text-lg tracking-wider text-white select-none">
                      Arhaan Shaikh
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

                  {/* Links List */}
                  <div data-drawer-scrollable className="py-2 flex flex-col justify-center overflow-y-auto">
                    <motion.ul
                      variants={menuContainerVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="flex flex-col gap-2.5 w-full"
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

                  {/* Bottom CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="pt-4 border-t border-white/10 shrink-0"
                  >
                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full h-12 rounded-full bg-[#CDF225] text-[#121310] font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_8px_24px_rgba(205,242,37,0.35)] active:scale-95 transition-transform touch-manipulation"
                    >
                      <span>LET&apos;S TALK</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export default Navbar;
