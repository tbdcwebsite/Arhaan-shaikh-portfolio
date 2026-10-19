"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface QuestionItem {
  id: string;
  number: string;
  question: string;
  href: string;
}

const QUESTIONS: QuestionItem[] = [
  {
    id: "q1",
    number: "01",
    question: "Where do I even begin with marketing?",
    href: "#contact",
  },
  {
    id: "q2",
    number: "02",
    question: "What's the right marketing budget and media split for a new brand?",
    href: "#contact",
  },
  {
    id: "q3",
    number: "03",
    question: "Which E-commerce platform is right for my brand?",
    href: "#contact",
  },
  {
    id: "q4",
    number: "04",
    question: "How do I price my product right?",
    href: "#contact",
  },
  {
    id: "q5",
    number: "05",
    question: "How do I increase my ROAS?",
    href: "#contact",
  },
  {
    id: "q6",
    number: "06",
    question: "How do we turn more traffic into sales?",
    href: "#contact",
  },
  {
    id: "q7",
    number: "07",
    question: "Are we ready to scale?",
    href: "#contact",
  },
  {
    id: "q8",
    number: "08",
    question: "How do we improve customer retention?",
    href: "#contact",
  },
];

export default function QuestionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  // Pre-triggers animation 100px before scrolling in, preventing blank screen
  const isHeaderInView = useInView(headerRef, { once: true, margin: "100px 0px -40px 0px" });

  // Scroll-driven compass rotation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const compassRotation = useTransform(scrollYProgress, [0, 1], [-45, 225]);

  return (
    <section
      ref={sectionRef}
      id="questions"
      style={{ backgroundColor: "#F8F8F5" }}
      className="relative w-full text-[#18181A] py-24 sm:py-32 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden border-t border-[#18181A]/10"
    >
      {/* Top-Right Rotating Compass Widget */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.85, y: 30 }}
        whileInView={{ opacity: 0.95, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
        style={{ rotate: reduceMotion ? 0 : compassRotation }}
        className="pointer-events-none absolute -right-8 sm:-right-4 top-8 sm:top-12 w-48 sm:w-64 md:w-80 lg:w-96 aspect-square z-10 will-change-transform select-none"
      >
        <Image
          src="/images/compass-img.png"
          alt="Vintage Compass"
          width={384}
          height={384}
          priority
          className="w-full h-full object-contain pointer-events-none drop-shadow-2xl"
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-20">
        
        {/* Header Block with Guaranteed Visible Mask Reveal */}
        <div ref={headerRef} className="mb-14 sm:mb-20 max-w-4xl">
          <div className="space-y-1 sm:space-y-2">
            
            {/* Line 1: Growth Starts With Clarity. */}
            <div className="overflow-hidden py-1">
              <motion.h2
                initial={reduceMotion ? false : { y: "100%", opacity: 0 }}
                animate={isHeaderInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
                className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.08] text-[#18181A]"
              >
                Growth Starts With Clarity.
              </motion.h2>
            </div>

            {/* Line 2: Clarity Starts Here. */}
            <div className="overflow-hidden py-1">
              <motion.span
                initial={reduceMotion ? false : { y: "100%", opacity: 0 }}
                animate={isHeaderInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                className="block font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.08] text-[#8FD400] drop-shadow-[0_2px_14px_rgba(205,242,37,0.35)]"
              >
                Clarity Starts Here.
              </motion.span>
            </div>

          </div>
        </div>

        {/* Questions Interactive Stack */}
        <ol role="list" className="relative w-full border-b border-[#18181A]/15">
          {QUESTIONS.map((item, index) => {
            const isIndented = index % 2 !== 0;

            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="w-full relative"
              >
                {/* Horizontal Divider */}
                <div className="w-full h-[1px] bg-[#18181A]/15 absolute top-0 left-0" />

                <a
                  href={item.href}
                  onMouseEnter={() => setActiveHoverId(item.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className="group w-full flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 md:px-8 rounded-none transition-colors duration-300 select-none cursor-pointer hover:bg-[#2E3DF6] focus-visible:outline-none focus-visible:bg-[#2E3DF6] focus-visible:text-white"
                >
                  {/* Left: Vintage Number + Question Text */}
                  <div
                    className={`flex items-baseline gap-4 sm:gap-8 transition-transform duration-300 group-hover:translate-x-2 sm:group-hover:translate-x-3.5 ${
                      isIndented ? "lg:pl-[11%]" : ""
                    }`}
                  >
                    {/* Italic Serif Index */}
                    <span
                      className="font-serif italic text-3xl sm:text-4xl md:text-5xl leading-none tracking-tight text-[#18181A]/85 transition-colors duration-300 group-hover:text-white"
                    >
                      {item.number}
                    </span>

                    {/* Question Title */}
                    <span
                      className="font-heading font-semibold text-lg sm:text-xl md:text-2xl tracking-[-0.015em] text-[#18181A] transition-colors duration-300 group-hover:text-white"
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Right Pop-In Circular Arrow Button */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181A] text-white flex items-center justify-center shrink-0 ml-4 transition-all duration-300 shadow-md ${
                      activeHoverId === item.id
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                  </div>
                </a>
              </motion.li>
            );
          })}
        </ol>

      </div>
    </section>
  );
}

export { QuestionsSection };
