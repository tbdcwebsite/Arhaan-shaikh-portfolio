"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

interface NavItem {
  name: string;
  href: string;
  hoverDisplay: string;
}

const navItems: NavItem[] = [
  { name: "ABOUT", href: "/#about", hoverDisplay: "About" },
  { name: "SERVICES", href: "/#services", hoverDisplay: "Services" },
  { name: "SUCCESS STORIES", href: "/#success-stories", hoverDisplay: "Success Stories" },
  { name: "JOURNAL", href: "/#journal", hoverDisplay: "Journal" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    lastScrollY.current = window.scrollY;
  }, []);

  const handleServicesEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesHovered(true);
  };

  const handleServicesLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesHovered(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Rock-solid native scroll listener for auto-hide / auto-reveal
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen || servicesHovered) {
        setHidden(false);
        return;
      }

      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 60) {
        setHidden(false);
      } else if (delta > 8) {
        setHidden(true);
      } else if (delta < -8) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen, servicesHovered]);

  useEffect(() => {
    if (mobileMenuOpen) {
      setHidden(false);
    } else {
      setMobileServicesOpen(false);
    }
  }, [mobileMenuOpen]);

  // Comprehensive Mobile Scroll Lock (Blocks body, html, touch-move, and Lenis)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const win = window as any;
    if (win.lenis && typeof win.lenis.stop === "function") {
      win.lenis.stop();
    }

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
      <header
        style={{
          transform: hidden ? "translate3d(0, -160%, 0)" : "translate3d(0, 0, 0)",
          opacity: hidden ? 0 : 1,
          visibility: hidden ? "hidden" : "visible",
        }}
        className="fixed top-3 sm:top-5 lg:top-6 inset-x-0 z-50 flex justify-center px-3 sm:px-8 md:px-12 lg:px-16 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        {/* Floating Capsule: Compact h-11 on mobile, h-16 on desktop */}
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto w-full max-w-7xl h-11 sm:h-13 md:h-16 px-4 sm:px-6 md:px-8 rounded-full bg-[#18181A]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)] flex items-center justify-between transition-all"
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center select-none group py-0.5 focus:outline-none bg-transparent hover:bg-transparent"
          >
            <span className="font-sans font-bold text-xs sm:text-sm md:text-base tracking-wider text-white">
              Arhaan Shaikh
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-transparent">
            {navItems.map((item) => {
              const isServices = item.name === "SERVICES";

              if (isServices) {
                return (
                  <div
                    key={item.name}
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                    className="relative"
                  >
                    <a
                      href={item.href}
                      className="relative px-3.5 lg:px-4 py-1.5 flex items-center justify-center focus:outline-none whitespace-nowrap bg-transparent hover:bg-transparent active:bg-transparent"
                    >
                      <motion.div
                        className="relative h-6 overflow-hidden flex items-center justify-center cursor-pointer select-none bg-transparent"
                        initial="initial"
                        whileHover="hover"
                        animate={servicesHovered ? "hover" : "initial"}
                      >
                        <motion.span
                          variants={{
                            initial: { y: 0, opacity: 0.85 },
                            hover: { y: "-130%", opacity: 0 },
                          }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          className="block font-sans font-semibold text-xs tracking-[0.14em] text-white/80 whitespace-nowrap bg-transparent"
                        >
                          {item.name}
                        </motion.span>

                        {/* Butler Italic Terracotta Hover State */}
                        <motion.span
                          style={{
                            textShadow: "0 0 12px rgba(239, 133, 87, 0.45)",
                          }}
                          variants={{
                            initial: { y: "130%", opacity: 0 },
                            hover: { y: 0, opacity: 1 },
                          }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0 flex items-center justify-center font-serif italic font-medium text-[15px] tracking-normal text-[#EF8557] whitespace-nowrap bg-transparent"
                        >
                          {item.hoverDisplay}
                        </motion.span>
                      </motion.div>
                    </a>

                    {/* Desktop Hover Dropdown Card */}
                    <AnimatePresence>
                      {servicesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-0 pt-3 z-50 pointer-events-auto"
                        >
                          <div className="w-[310px] rounded-2xl border border-white/10 bg-[#161619]/95 backdrop-blur-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col gap-0.5">
                            {SERVICES.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                onClick={() => setServicesHovered(false)}
                                className="group px-3.5 py-2.5 rounded-xl flex items-center text-left transition-all duration-200 hover:bg-white/[0.06]"
                              >
                                <span className="font-sans text-[13px] font-medium text-white/80 group-hover:text-[#EF8557] transition-colors leading-snug">
                                  {s.title}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3.5 lg:px-4 py-1.5 flex items-center justify-center focus:outline-none whitespace-nowrap bg-transparent hover:bg-transparent active:bg-transparent"
                >
                  <motion.div
                    className="relative h-6 overflow-hidden flex items-center justify-center cursor-pointer select-none bg-transparent"
                    initial="initial"
                    whileHover="hover"
                  >
                    <motion.span
                      variants={{
                        initial: { y: 0, opacity: 0.85 },
                        hover: { y: "-130%", opacity: 0 },
                      }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="block font-sans font-semibold text-xs tracking-[0.14em] text-white/80 whitespace-nowrap bg-transparent"
                    >
                      {item.name}
                    </motion.span>

                    {/* Butler Italic Terracotta Hover State */}
                    <motion.span
                      style={{
                        textShadow: "0 0 12px rgba(239, 133, 87, 0.45)",
                      }}
                      variants={{
                        initial: { y: "130%", opacity: 0 },
                        hover: { y: 0, opacity: 1 },
                      }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 flex items-center justify-center font-serif italic font-medium text-[15px] tracking-normal text-[#EF8557] whitespace-nowrap bg-transparent"
                    >
                      {item.hoverDisplay}
                    </motion.span>
                  </motion.div>
                </a>
              );
            })}
          </div>

          {/* Desktop CTA & Compact Mobile Hamburger */}
          <div className="flex items-center gap-2 bg-transparent">
            {/* Primary Action Button: #EF8557 (Warm Terracotta) */}
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="hidden md:inline-flex items-center justify-center h-9 sm:h-10 px-5 sm:px-6 rounded-full bg-[#EF8557] text-white font-sans font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_4px_18px_rgba(239,133,87,0.38)] hover:bg-[#de7343] transition-colors select-none cursor-pointer focus:outline-none"
            >
              LET&apos;S TALK
            </motion.a>

            {/* Compact Mobile Hamburger (w-9 h-9) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Mobile Menu"
              className="md:hidden relative w-9 h-9 flex items-center justify-center bg-transparent active:scale-90 transition-transform touch-manipulation cursor-pointer z-50 focus:outline-none select-none"
            >
              <div className="w-4 h-3 flex flex-col justify-between items-center pointer-events-none">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="w-4 h-0.5 bg-white rounded-full origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, x: -5 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-3 h-0.5 bg-[#EF8557] rounded-full self-end"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="w-4 h-0.5 bg-white rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* ================================================================
          PORTAL-RENDERED MOBILE DRAWER
          ================================================================ */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-[9999] pointer-events-auto md:hidden">
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

                <motion.div
                  initial={{ x: "100%", opacity: 0.8 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0.8 }}
                  transition={{ type: "spring", damping: 28, stiffness: 250 }}
                  data-lenis-prevent
                  className="fixed top-0 right-0 w-[84%] max-w-[320px] h-[78vh] max-h-[640px] z-[9999] flex flex-col justify-between p-6 shadow-[-20px_20px_60px_rgba(0,0,0,0.85)] border-l border-b border-white/15 rounded-bl-[36px] overflow-hidden overscroll-contain"
                  style={{
                    background: "rgba(18, 18, 22, 0.94)",
                    backdropFilter: "blur(32px) saturate(190%)",
                    WebkitBackdropFilter: "blur(32px) saturate(190%)",
                    boxShadow: "-16px 16px 50px rgba(0,0,0,0.75), inset 1px -1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
                    <span className="font-sans font-bold text-lg tracking-wider text-white select-none">
                      Arhaan Shaikh
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileMenuOpen(false);
                      }}
                      aria-label="Close Mobile Menu"
                      className="w-10 h-10 -mr-2 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/15 active:scale-90 transition-transform touch-manipulation cursor-pointer z-50 focus:outline-none select-none"
                    >
                      <span className="text-lg font-light leading-none select-none">✕</span>
                    </button>
                  </div>

                  {/* Links List */}
                  <div data-drawer-scrollable className="flex-1 py-3 my-auto flex flex-col overflow-y-auto">
                    <motion.ul
                      variants={menuContainerVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="flex flex-col gap-2.5 w-full my-auto"
                    >
                      {navItems.map((item) => {
                        const isServices = item.name === "SERVICES";

                        if (isServices) {
                          return (
                            <motion.li key={item.name} variants={menuItemVariants} className="flex flex-col">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setMobileServicesOpen((prev) => !prev);
                                }}
                                className="group w-full flex items-center justify-between py-1.5 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-all text-left touch-manipulation focus:outline-none"
                              >
                                <span className="font-sans font-bold text-lg text-white/90 group-hover:text-[#EF8557] transition-colors tracking-tight">
                                  {item.hoverDisplay}
                                </span>
                                <motion.span
                                  animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                  className="text-white/40 group-hover:text-[#EF8557] transition-colors flex items-center"
                                >
                                  <ChevronDown className="w-4 h-4" />
                                </motion.span>
                              </button>

                              <AnimatePresence initial={false}>
                                {mobileServicesOpen && (
                                  <motion.div
                                    key="mobile-services-accordion"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden flex flex-col gap-1 pl-4 pr-1 pt-1 pb-1"
                                  >
                                    {SERVICES.map((s) => (
                                      <Link
                                        key={s.slug}
                                        href={`/services/${s.slug}`}
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          setMobileServicesOpen(false);
                                        }}
                                        className="py-1.5 px-3 rounded-lg font-sans text-sm font-normal text-white/70 hover:text-[#EF8557] hover:bg-white/5 active:bg-white/10 transition-all text-left touch-manipulation"
                                      >
                                        {s.title}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.li>
                          );
                        }

                        return (
                          <motion.li key={item.name} variants={menuItemVariants}>
                            <a
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="group block py-1.5 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-all text-left touch-manipulation"
                            >
                              <span className="font-sans font-bold text-lg text-white/90 group-hover:text-[#EF8557] transition-colors tracking-tight">
                                {item.hoverDisplay}
                              </span>
                            </a>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </div>

                  {/* Drawer CTA: #EF8557 (Warm Terracotta) */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="pt-4 border-t border-white/10 shrink-0"
                  >
                    <a
                      href="/#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full h-11 rounded-full bg-[#EF8557] text-white font-sans font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_8px_24px_rgba(239,133,87,0.35)] hover:bg-[#de7343] active:scale-95 transition-all touch-manipulation"
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

export { Navbar as Nav };
export default Navbar;
