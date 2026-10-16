"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-3 h-3 rounded-full bg-[#CDF225] border border-[#28282B]/20 shadow-[0_0_10px_rgba(205,242,37,0.7)]" />
          <span className="font-heading font-extrabold text-lg sm:text-xl text-[#28282B] tracking-tight">
            ARHAAN<span className="text-[#520000]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 glass-pill px-6 py-2.5 rounded-full border border-white/80 shadow-sm">
          <a
            href="#about"
            className="font-body text-sm font-medium text-[#28282B]/80 hover:text-[#28282B] transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="font-body text-sm font-medium text-[#28282B]/80 hover:text-[#28282B] transition-colors"
          >
            Services
          </a>
          <a
            href="#case-studies"
            className="font-body text-sm font-medium text-[#28282B]/80 hover:text-[#28282B] transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#contact"
            className="font-body text-sm font-medium text-[#28282B]/80 hover:text-[#28282B] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#28282B]/85">
            <span className="w-2 h-2 rounded-full bg-[#84B800] shadow-[0_0_8px_rgba(132,184,0,0.8)] animate-pulse" />
            <span>Available Now</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-[#28282B] text-[#F8F8F5] hover:bg-[#1C1735] font-body text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/70 border border-[#28282B]/10 text-[#28282B]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 rounded-2xl glass-panel border border-white/90 shadow-lg flex flex-col gap-4">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body text-sm font-semibold text-[#28282B] py-1"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body text-sm font-semibold text-[#28282B] py-1"
          >
            Services
          </a>
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body text-sm font-semibold text-[#28282B] py-1"
          >
            Case Studies
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body text-sm font-semibold text-[#28282B] py-1"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-[#CDF225] text-[#28282B] font-body text-sm font-bold py-3 rounded-full shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
