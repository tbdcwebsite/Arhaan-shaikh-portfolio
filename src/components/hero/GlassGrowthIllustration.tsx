"use client";

import React, { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, BarChart3, Activity } from "lucide-react";

const bars = [42, 64, 100, 72];

export function GlassGrowthIllustration() {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const reduceMotion = useReducedMotion();

  const float = (distance = 8, duration = 4) =>
    reduceMotion
      ? {}
      : {
          y: [0, -distance, 0],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  // Trajectory calibrated to terminate safely inside the viewport
  const arrowPath =
    "M45 285 L151 198 L224 231 L327 103 L367 144 L415 42";
  const arrowDepthPath =
    "M45 292 L151 205 L224 238 L327 110 L367 151 L415 49";
  const arrowRidgePath =
    "M45 279 L151 192 L224 225 L327 97 L367 138 L413 44";

  return (
    <section className="growth-scene" aria-label="Business growth analytics illustration">
      <div className="growth-glow" />
      <div className="growth-glow growth-glow-small" />

      <motion.div
        className="growth-stage"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Rear dark navy analytics block */}
        <motion.div className="dark-block" animate={float(5, 4.8)}>
          <span />
          <span />
          <span />
          <div className="block-mini-bars">
            {[22, 34, 52, 72].map((height, i) => (
              <i key={i} style={{ height }} />
            ))}
          </div>
        </motion.div>

        {/* Main translucent glass dashboard */}
        <motion.div className="glass-card dashboard" animate={float(4, 5.2)}>
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>

          <div className="dashboard-content">
            <div className="donut">
              <div className="donut-hole" />
            </div>

            <div className="legend">
              <i className="legend-dot blue" />
              <span className="line line-long" />
              <i className="legend-dot lime" />
              <span className="line line-medium" />
              <i className="legend-dot white" />
              <span className="line line-short" />
            </div>

            <div className="mini-stats">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="dashboard-footer">
            <span />
            <span />
            <span />
          </div>
        </motion.div>

        {/* Secondary translucent chart */}
        <motion.div className="glass-card chart-card" animate={float(7, 4.3)}>
          <div className="chart-top">
            <div className="donut donut-small">
              <div className="donut-hole" />
            </div>

            <div className="chart-lines">
              <span />
              <span />
              <span />
            </div>
          </div>

          <svg
            className="mini-line-chart"
            viewBox="0 0 180 62"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 48 C24 45 27 16 48 28 S77 55 96 30 S120 42 137 14 S159 22 176 4"
              stroke="#9DEB27"
              strokeWidth="3"
              strokeLinecap="round"
              opacity=".95"
            />
            <path
              d="M4 48 C24 45 27 16 48 28 S77 55 96 30 S120 42 137 14 S159 22 176 4 L176 62 L4 62 Z"
              fill={`url(#area-${id})`}
              opacity=".7"
            />
            <defs>
              <linearGradient id={`area-${id}`} x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#B7F34A" stopOpacity=".35" />
                <stop offset="1" stopColor="#B7F34A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="chart-footer-lines">
            <span />
            <span />
            <span />
          </div>
        </motion.div>

        {/* ================================================================
            3D GROWTH ARROW (Solid Beveled Arrowhead + Smooth Liquid Wave)
            ================================================================ */}
        <motion.svg
          className="growth-arrow"
          viewBox="0 0 460 330"
          fill="none"
          aria-hidden="true"
          style={{ overflow: "visible" }}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <defs>
            <linearGradient id={`arrow-${id}`} x1="50" y1="280" x2="410" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#84B800" />
              <stop offset="55%" stopColor="#CDF225" />
              <stop offset="100%" stopColor="#DDFF55" />
            </linearGradient>

            <linearGradient id={`arrow-light-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="1" stopColor="#CDF225" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id={`liquid-pulse-${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CDF225" stopOpacity="0" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#E6FF80" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#CDF225" stopOpacity="0" />
            </linearGradient>

            <filter id={`arrow-shadow-${id}`} x="-30%" y="-30%" width="170%" height="180%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          {/* 1. Base Ambient Glow Aura */}
          <path
            d={arrowDepthPath}
            stroke="#B4F52E"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".35"
            filter={`url(#arrow-shadow-${id})`}
          />

          {/* 2. 3D Underbody Depth Extrusion */}
          <motion.path
            d={arrowDepthPath}
            stroke="#557A0A"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.25,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {/* 3. Solid Vibrant Lime Core Body */}
          <motion.path
            d={arrowPath}
            stroke={`url(#arrow-${id})`}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.25,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {/* 4. Top Specular Glass Ridge */}
          <path
            d={arrowRidgePath}
            stroke={`url(#arrow-light-${id})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".95"
          />

          {/* 5. Seamless Liquid Energy Flow */}
          {!reduceMotion && (
            <motion.path
              d={arrowPath}
              stroke={`url(#liquid-pulse-${id})`}
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="130 360"
              style={{ filter: "blur(1.5px)" }}
              animate={{ strokeDashoffset: [490, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}

          {/* 6. PROMINENT 3D CHEVRON ARROWHEAD (Flawlessly Aligned at -64.8°)
              Native transform positioning ensures it stays put and never jumps on layout resize. */}
          <g transform="translate(415, 42) rotate(-64.8)" className="arrowhead-tip select-none">
            {/* 3D Underbody Extrusion / Shadow */}
            <path
              d="M 0 0 L -25 -14 L -14 0 L -25 14 Z"
              fill="#436104"
              transform="translate(1.5, 3.5)"
            />

            {/* Main 3D Glossy Arrowhead Body */}
            <path
              d="M 0 0 L -25 -14 L -14 0 L -25 14 Z"
              fill={`url(#arrow-${id})`}
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Top Specular Light Facet */}
            <path
              d="M 0 0 L -25 -14 L -14 0 Z"
              fill="#FFFFFF"
              fillOpacity="0.55"
            />

            {/* Apex Glow Beacon Node */}
            <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="7" fill="#CDF225" opacity="0.65" />
          </g>
        </motion.svg>

        {/* Floating Lower Bar Chart */}
        <motion.div className="glass-card bars-card" animate={float(6, 4.6)}>
          <div className="bar-heading">
            <span />
            <span />
          </div>

          <div className="bars">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                className={`bar bar-${index + 1}`}
                initial={reduceMotion ? false : { height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{
                  duration: 0.85,
                  delay: 0.45 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Right-Side Activity Card */}
        <motion.div className="glass-card activity-card" animate={float(5, 3.8)}>
          <div className="activity-curve">
            <svg viewBox="0 0 200 70" fill="none" aria-hidden="true">
              <path
                d="M3 58 Q48 62 75 42 T135 32 T197 4"
                stroke="#B6F43C"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {[0, 1, 2].map((item) => (
            <div className="activity-row" key={item}>
              <i />
              <span />
              <span />
            </div>
          ))}
        </motion.div>

        {/* Floating KPI Card */}
        <motion.div className="glass-card kpi-card" animate={float(8, 3.6)}>
          <div className="kpi-icon">
            <TrendingUp size={17} />
          </div>
          <div>
            <small>Revenue growth</small>
            <strong>+248%</strong>
          </div>
        </motion.div>

        {/* Small Floating Icons */}
        <motion.div className="float-icon float-icon-one" animate={float(7, 3.4)}>
          <BarChart3 size={19} />
        </motion.div>

        <motion.div className="float-icon float-icon-two" animate={float(8, 4.2)}>
          <Activity size={16} />
        </motion.div>

        {/* 3D Decorative Spheres */}
        <motion.div className="sphere sphere-lime" animate={float(10, 3.5)} />
        <motion.div className="sphere sphere-glass" animate={float(7, 4.2)} />
        <motion.div className="sphere sphere-blue" animate={float(8, 3.9)} />

        {/* Connected Network Nodes */}
        <svg className="network" viewBox="0 0 150 130" fill="none" aria-hidden="true">
          <g stroke="#B9C7CB" strokeWidth="1.2" opacity=".75">
            <path d="M15 86 L63 18 L111 62 L64 108 Z" />
            <path d="M15 86 L111 62 M63 18 L64 108" />
          </g>
          <circle cx="15" cy="86" r="6" fill="#182B48" />
          <rect x="56" y="11" width="14" height="14" rx="2" fill="#7488D9" />
          <rect x="104" y="55" width="14" height="14" rx="2" fill="#253D62" />
          <rect x="57" y="101" width="14" height="14" rx="2" fill="#C6C9F8" />
          <circle cx="15" cy="86" r="11" fill="#CDF225" opacity=".2" />
        </svg>

        <i className="light light-one" />
        <i className="light light-two" />
        <i className="light light-three" />
      </motion.div>
    </section>
  );
}

export default GlassGrowthIllustration;
