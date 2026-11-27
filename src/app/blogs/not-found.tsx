import React from "react";
import Link from "next/link";
import { ArrowLeft } from "@/components/blogs/icons";

export default function BlogNotFound() {
  return (
    <div className="w-full py-24 sm:py-36 text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(18,18,20,0.08)] shadow-sm text-xs font-bold uppercase tracking-wider text-[#EF8557] mb-6">
        <span>ERROR 404</span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-[#121214] tracking-tight mb-4">
        Article or Category{" "}
        <span className="font-serif italic font-bold tracking-[-0.02em] text-[#EF8557]">
          Not Found.
        </span>
      </h1>

      <p className="text-base sm:text-lg text-[#3E3D3A] leading-relaxed mb-8">
        The note you are looking for may have been moved, renamed, or is currently being restructured.
      </p>

      <div className="flex items-center justify-center gap-4">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121214] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#EF8557] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Notes on Growth</span>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] border border-[rgba(18,18,20,0.14)] text-[#121214] text-xs font-bold uppercase tracking-wider hover:border-[#EF8557] hover:text-[#EF8557] transition-all"
        >
          <span>Homepage</span>
        </Link>
      </div>
    </div>
  );
}

