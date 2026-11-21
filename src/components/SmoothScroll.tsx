"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Accessibility: Native instant scrolling for users with reduced motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    // Register GSAP ScrollTrigger if in browser environment
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // 2. Initialize Lenis instance
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false, // Keep native touch scroll on mobile devices for natural inertia
    });

    lenisRef.current = lenis;

    // Expose lenis globally for Navbar drawer stop/start controls
    (window as any).lenis = lenis;

    // 3. Connect Lenis to GSAP ScrollTrigger & GSAP Ticker
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      // gsap ticker time is in seconds; Lenis expects milliseconds
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // 4. Same-page Anchor Link Interceptor
    // Smoothly scrolls to target with -100px offset to accommodate the floating pill Navbar
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const currentPath = window.location.pathname;
      const isCurrentHome = currentPath === "/" || currentPath === "";
      const isHash = href.startsWith("#");
      const isHomeHash = isCurrentHome && href.startsWith("/#");

      if (isHash || isHomeHash) {
        const hashId = isHash ? href : href.replace(/^\//, "");
        if (hashId === "#" || hashId === "") return;

        const targetEl = document.querySelector(hashId);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl as HTMLElement, {
            offset: -100,
            duration: 1.2,
          });
          window.history.pushState(null, "", hashId);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Initial page load hash handling (if URL contains a valid anchor)
    if (window.location.hash) {
      const initialTarget = document.querySelector(window.location.hash);
      if (initialTarget) {
        setTimeout(() => {
          lenis.scrollTo(initialTarget as HTMLElement, {
            offset: -100,
            duration: 1.2,
          });
        }, 120);
      }
    }

    // 5. Cleanup on unmount
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as any).lenis;
    };
  }, []);

  // Route Change handling: Scroll to top on pathname changes (when no hash present)
  useEffect(() => {
    if (!lenisRef.current) return;
    if (!window.location.hash) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
