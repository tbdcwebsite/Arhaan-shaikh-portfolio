"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldAlert,
  Sparkles,
  Layers,
  Clock,
  Briefcase,
  Check,
  TrendingUp,
  Workflow,
  FileCode2,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/services-data";

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

/**
 * React Bits Spotlight Card:
 * Smooth mouse-tracking radial flashlight glow following cursor position
 */
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden bg-white rounded-2xl border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-black/20 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, rgba(205, 242, 37, 0.16), transparent 80%)`,
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col justify-between">{children}</div>
    </div>
  );
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  return (
    <main className="relative min-h-screen w-full bg-[#F8F8F5] text-[#121214] pt-28 sm:pt-36 pb-28 px-5 sm:px-8 lg:px-14 xl:px-20 overflow-hidden select-none">
      
      {/* Subtle Architectural Paper Texture & Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
        aria-hidden="true"
      />

      {/* Ambient Subtle Lime Spotlight */}
      <div
        className="pointer-events-none absolute left-1/2 top-14 -translate-x-1/2 w-[750px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(205,242,37,0.3)_0%,_rgba(248,248,245,0)_70%)] blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col">
        
        {/* Top Breadcrumb & Metadata Rail */}
        <div className="mb-8 sm:mb-12 flex items-center justify-between border-b border-black/[0.08] pb-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#121214]/60 hover:text-[#121214] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Overview</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#121214]/70">
            <span className="w-2 h-2 rounded-full bg-[#84D400]" />
            <span>{service.shortLabel}</span>
          </div>
        </div>

        {/* ==============================================================
            1. HERO: BALANCED EDITORIAL TITLE (THEME-ALIGNED SCALE)
            ============================================================== */}
        <section className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/[0.08] bg-white shadow-sm font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#121214] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84D400] animate-pulse" />
            Strategic Practice Area
          </div>

          {/* Scaled-down Balanced Typographic Title */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-[#121214] max-w-5xl">
            {service.headlineLead}{" "}
            <span className="font-serif italic font-normal text-[#6B9C00]">
              {service.italicPunch}
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg text-[#121214]/75 font-sans font-normal leading-relaxed">
            {service.executiveSummary}
          </p>

          {/* Editorial Metadata Ribbon (No Heavy Box Border) */}
          <div className="mt-8 pt-6 border-t border-black/[0.08] flex flex-wrap items-center gap-y-4 gap-x-8 font-mono text-xs uppercase tracking-wider text-[#121214]/65">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#6B9C00]" />
              <span className="text-[#121214]/40">Window:</span>
              <span className="font-bold text-[#121214]">{service.specs.timeline}</span>
            </div>
            <div className="flex items-center gap-2">
              <Workflow className="w-3.5 h-3.5 text-[#6B9C00]" />
              <span className="text-[#121214]/40">Cadence:</span>
              <span className="font-bold text-[#121214]">{service.specs.cadence}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#6B9C00]" />
              <span className="text-[#121214]/40">Stage:</span>
              <span className="font-bold text-[#121214]">{service.specs.idealFor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#84D400]" />
              <span className="text-[#121214]/40">Leadership:</span>
              <span className="font-bold text-[#121214]">{service.specs.leadTier}</span>
            </div>
          </div>
        </section>

        {/* ==============================================================
            2. VISUAL ARCHITECTURE SCHEMATIC (FRICTION VS. THESIS FLOW)
            ============================================================== */}
        <section className="mb-20 sm:mb-28">
          <div className="mb-6 flex items-baseline justify-between border-b border-black/[0.08] pb-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#6B9C00] font-bold block mb-1">
                01 / Strategic Architecture
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#121214]">
                Friction Deconstruction & Engineered Thesis
              </h3>
            </div>
            <span className="font-mono text-xs text-[#121214]/40 hidden sm:block">SYSTEM FLOW</span>
          </div>

          {/* Asymmetric Visual Flow Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
            
            {/* Left Side: Legacy Market Breakdown List */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-red-600 font-bold mb-4">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Market Friction Nodes</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-[#121214] mb-4">
                  {service.marketFriction.heading}
                </h4>
                <div className="space-y-3.5">
                  {service.marketFriction.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#121214]/70 font-sans leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-red-50 text-red-600 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                        ✕
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Visual Flow Connector */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="h-44 w-px bg-gradient-to-b from-red-200 via-[#CDF225] to-[#84D400] relative">
                <span className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 rounded-full bg-[#121214] border-2 border-[#CDF225] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CDF225] animate-ping" />
                </span>
              </div>
            </div>

            {/* Right Side: Engineered Thesis Visual Platform */}
            <div className="lg:col-span-6 bg-[#161618] text-[#F8F8F5] rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-[0_14px_36px_rgba(0,0,0,0.18)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CDF225]/15 blur-2xl pointer-events-none rounded-full" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CDF225]/20 text-[#CDF225] font-mono text-[10px] uppercase tracking-wider font-semibold">
                  <Layers className="w-3 h-3" />
                  Proprietary Framework
                </span>
                <span className="font-mono text-[11px] text-white/40">Verified Architecture</span>
              </div>

              <h4 className="font-heading text-xl font-bold text-white mb-3">
                {service.strategicThesis.heading}
              </h4>

              <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                {service.strategicThesis.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/50 uppercase tracking-widest">
                <span className="text-[#CDF225]">● Continuous Sprint Loop</span>
                <span>Zero Speculation</span>
              </div>
            </div>

          </div>
        </section>

        {/* ==============================================================
            3. VISUAL TELEMETRY MATRIX (MOTION PROGRESS BARS)
            ============================================================== */}
        <section className="mb-20 sm:mb-28">
          <div className="mb-6 flex items-baseline justify-between border-b border-black/[0.08] pb-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#6B9C00] font-bold block mb-1">
                02 / Telemetry & Impact
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#121214]">
                Empirical Performance Benchmarks
              </h3>
            </div>
            <TrendingUp className="w-5 h-5 text-[#6B9C00] hidden sm:block" />
          </div>

          {/* Visual Gauge Comparison Strips (With Spotlight Effect) */}
          <div className="space-y-4">
            {service.telemetryMetrics.map((item, idx) => (
              <SpotlightCard key={item.metric} className="p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="md:w-1/3">
                    <span className="font-mono text-[10px] text-[#6B9C00] font-bold uppercase tracking-wider block mb-1">
                      Target Metric [0{idx + 1}]
                    </span>
                    <h4 className="font-heading text-base font-bold text-[#121214]">
                      {item.metric}
                    </h4>
                    <p className="font-sans text-xs text-[#121214]/60 mt-1 leading-normal">
                      {item.impactNote}
                    </p>
                  </div>

                  {/* Comparative Visual Bars */}
                  <div className="md:w-7/12 flex flex-col justify-center space-y-3">
                    {/* Status Quo Bar */}
                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-[#121214]/50 mb-1">
                        <span>Industry Average Baseline</span>
                        <span>{item.industryAvg}</span>
                      </div>
                      <div className="w-full h-2 bg-black/[0.06] rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-[#121214]/30 rounded-full" />
                      </div>
                    </div>

                    {/* Engineered Target Bar (Animated Motion Spring Bar) */}
                    <div>
                      <div className="flex justify-between text-xs font-mono font-bold text-[#121214] mb-1">
                        <span className="text-[#6B9C00] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#84D400]" />
                          Engineered Benchmark
                        </span>
                        <span className="text-[#121214] font-extrabold">{item.engineeredBenchmark}</span>
                      </div>
                      <div className="w-full h-2.5 bg-black/[0.06] rounded-full overflow-hidden p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "92%" }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.15 }}
                          className="h-full bg-gradient-to-r from-[#CDF225] to-[#84D400] rounded-full shadow-[0_0_12px_rgba(205,242,37,0.4)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ==============================================================
            4. SPRINT ROADMAP (ARCHITECTURAL ANCHORED RAIL)
            ============================================================== */}
        <section className="mb-20 sm:mb-28">
          <div className="mb-10 flex items-baseline justify-between border-b border-black/[0.08] pb-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#6B9C00] font-bold block mb-1">
                03 / Execution Rhythm
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#121214]">
                Linear Sprint Delivery Rail
              </h3>
            </div>
            <span className="font-mono text-xs text-[#121214]/40 hidden sm:block">
              4 SEQUENTIAL PHASES
            </span>
          </div>

          {/* Timeline Stage with Bounded Vertical Spine */}
          <div className="relative pl-10 sm:pl-16 space-y-8 sm:space-y-10">
            
            {/* Continuous Vertical Rail Spine (Starts at Node 1 center, Ends at Node 4 center) */}
            <div
              className="pointer-events-none absolute left-[15px] sm:left-[23px] top-7 bottom-7 w-[2px] bg-gradient-to-b from-[#84D400] via-black/20 to-black/10"
              aria-hidden="true"
            />

            {service.roadmapPhases.map((phase, idx) => {
              const isFirst = idx === 0;

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative group"
                >
                  {/* ==============================================================
                      ANCHORED NODE + HORIZONTAL CONNECTOR BRIDGE
                      ============================================================== */}
                  <div className="absolute -left-10 sm:-left-16 top-7 -translate-y-1/2 flex items-center">
                    {/* The Node */}
                    <div
                      className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                        isFirst
                          ? "bg-[#121214] border-2 border-[#84D400] shadow-[0_0_14px_rgba(132,212,0,0.4)]"
                          : "bg-white border-2 border-black/20 group-hover:border-[#121214] group-hover:scale-105"
                      }`}
                    >
                      {isFirst ? (
                        /* Active Glowing Diamond Core */
                        <span className="w-2.5 h-2.5 rotate-45 bg-[#CDF225] animate-pulse" />
                      ) : (
                        /* Step Number Core */
                        <span className="font-mono text-[10px] font-bold text-[#121214]/60 group-hover:text-[#121214]">
                          {phase.phase}
                        </span>
                      )}
                    </div>

                    {/* Horizontal Connector Arm (Physically docks the rail to the card) */}
                    <div
                      className={`h-[1.5px] transition-colors duration-300 ${
                        isFirst
                          ? "w-6 sm:w-10 bg-gradient-to-r from-[#84D400] to-black/20"
                          : "w-6 sm:w-10 bg-black/10 group-hover:bg-black/30"
                      }`}
                    />
                  </div>

                  {/* ==============================================================
                      THE DOCKED PHASE CARD
                      ============================================================== */}
                  <SpotlightCard
                    className={`bg-white rounded-2xl border p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 ${
                      isFirst
                        ? "border-black/[0.12] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                        : "border-black/[0.08] group-hover:border-black/20"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                            isFirst
                              ? "bg-[#CDF225] text-[#121214]"
                              : "bg-black/[0.04] text-[#121214]/70"
                          }`}
                        >
                          PHASE {phase.phase}
                        </span>
                        <h4 className="font-heading text-base sm:text-lg font-bold text-[#121214]">
                          {phase.title}
                        </h4>
                      </div>
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#121214]/40 uppercase tracking-wider">
                        Milestone Delivery
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#121214]/70 leading-relaxed max-w-3xl">
                      {phase.focus}
                    </p>

                    <div className="mt-4 pt-3 border-t border-black/[0.05] flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#84D400] shrink-0" />
                      <span className="font-mono text-xs font-semibold text-[#121214]/85">
                        Artifact: {phase.output}
                      </span>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ==============================================================
            5. TANGIBLE ARTIFACTS (CLEAN MODULAR TOKENS)
            ============================================================== */}
        <section className="mb-20 sm:mb-28">
          <div className="mb-6 flex items-baseline justify-between border-b border-black/[0.08] pb-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#6B9C00] font-bold block mb-1">
                04 / Handover Assets
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#121214]">
                Tangible Deliverables & System IP
              </h3>
            </div>
            <FileCode2 className="w-5 h-5 text-[#6B9C00] hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.artifactsLedger.map((artifact, idx) => (
              <SpotlightCard
                key={artifact.title}
                className="p-5 sm:p-6 hover:border-black/25 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#6B9C00]">
                      ASSET // 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-black/[0.04] text-[#121214]/60 font-medium">
                      {artifact.scope}
                    </span>
                  </div>

                  <h4 className="font-heading text-base font-bold text-[#121214] mb-1">
                    {artifact.title}
                  </h4>
                </div>

                <p className="font-mono text-[11px] text-[#121214]/45 uppercase tracking-wider mt-4 pt-3 border-t border-black/[0.05]">
                  Format: {artifact.format}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ==============================================================
            6. EXECUTIVE CTA: GROUNDED OBSIDIAN ANCHOR WITH MAGNETIC BUTTON
            ============================================================== */}
        <section className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#121214] text-[#F8F8F5] shadow-[0_24px_70px_rgba(0,0,0,0.18)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-white/10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.26em] text-[#CDF225] block mb-2 font-semibold">
              Direct Principal Engagement
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Ready to deploy {service.shortLabel.toLowerCase()}?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-white/70 font-sans font-light leading-relaxed">
              Direct senior immersion with zero junior agency handoffs. Quarterly capacity is strictly limited.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link
              href="/#contact"
              className="relative group overflow-hidden px-8 py-3.5 rounded-full bg-[#CDF225] text-[#121214] font-heading font-extrabold text-xs uppercase tracking-[0.16em] flex items-center gap-2 hover:bg-[#d8fb3b] shadow-[0_4px_20px_rgba(205,242,37,0.35)] hover:shadow-[0_0_32px_rgba(205,242,37,0.65)] transition-all duration-300 whitespace-nowrap shrink-0"
            >
              {/* Shine sweep effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
              <span className="relative z-10">Initiate Strategic Call</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 stroke-[2.5]" />
            </Link>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
