import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { X } from "lucide-react";
import { CASE_STUDIES } from "@/lib/case-studies";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((item) => item.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} — Case Study | Arhaan Shaikh`,
    description: `Growth case study for ${study.title} by Arhaan Shaikh.`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="relative w-full min-h-screen bg-[#EAE6DE] flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 selection:bg-[#EF8557] selection:text-white">
      
      {/* ── FLOATING CLOSE BUTTON ─────────────────────────────────── */}
      <Link
        href="/#case-studies"
        aria-label="Close Case Study"
        className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#121214] text-[#EAE6DE] 
          shadow-[0_10px_25px_rgba(0,0,0,0.18)] hover:bg-[#EF8557] hover:scale-105 transition-all duration-300 font-sans text-xs font-bold tracking-widest uppercase"
      >
        <span>Close</span>
        <X className="w-4 h-4 stroke-[2.5]" />
      </Link>

      {/* ── HORIZONTAL BANNER CONTAINER ───────────────────────────── */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center py-12 sm:py-16">
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(18,18,20,0.12)] border border-[#121214]/10 bg-[#FAF8F5]">
          <Image
            src={study.banner}
            alt={`${study.title} Case Study Banner`}
            width={1920}
            height={1080}
            unoptimized={true}
            priority
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>

    </main>
  );
}

