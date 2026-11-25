import React from "react";
import Link from "next/link";

export interface SectionEyebrowProps {
  text: string;
  href?: string;
  variant?: "default" | "blue" | "terracotta";
  shape?: "pill" | "dot";
  className?: string;
}

export default function SectionEyebrow({
  text,
  href,
  variant = "default",
  shape = "pill",
  className = "",
}: SectionEyebrowProps) {
  const textColor =
    variant === "terracotta"
      ? "text-[#EF8557]"
      : variant === "blue"
        ? "text-[#226192]"
        : "text-[#121214]/75";

  const shapeElement =
    shape === "dot" ? (
      <span className="w-2 h-2 rounded-full bg-[#EF8557] shrink-0 animate-pulse" />
    ) : (
      <span className="w-7 sm:w-8 h-1.5 rounded-full bg-[#EF8557] shrink-0 transition-transform origin-left group-hover:scale-x-110" />
    );

  const content = (
    <>
      {shapeElement}
      <span
        className={`font-sans font-bold text-[12px] lg:text-[13px] leading-[1.4] tracking-[0.12em] uppercase transition-colors ${textColor} ${
          href ? "group-hover:text-[#EF8557]" : ""
        }`}
      >
        {text}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-2.5 mb-3 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#226192] focus-visible:ring-offset-2 rounded-full ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 mb-3 select-none ${className}`}
    >
      {content}
    </div>
  );
}
