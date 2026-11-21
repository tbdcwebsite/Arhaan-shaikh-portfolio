import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/data/blogs";
import { formatDate, readingTime } from "@/lib/blog";
import { ArrowRight, ClockIcon } from "./icons";

export interface BlogCardProps {
  blog: Blog;
  compact?: boolean;
}

export default function BlogCard({ blog, compact = false }: BlogCardProps) {
  const href = `/blogs/${blog.category}/${blog.slug}`;
  const formattedDate = formatDate(blog.publishedAt);
  const time = readingTime(blog);

  return (
    <article className="group relative flex flex-col justify-between rounded-[22px] sm:rounded-[24px] bg-[#FAF8F5] border border-[#121214]/12 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(18,18,20,0.08)]">
      <div>
        {/* Top Media Banner with Clean Centered Framing to prevent text clipping */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[16px] bg-[#FAF8F5] border border-[#121214]/10 mb-5 flex items-center justify-center p-2">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            unoptimized={true}
            className="object-contain object-center pointer-events-none select-none transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Metadata Row */}
        <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-[#6F6A5D] mb-3">
          <span>{formattedDate}</span>
          <span className="text-[#121214]/25">•</span>
          <span className="inline-flex items-center gap-1">
            <ClockIcon className="w-3 h-3 text-[#EF8557]" />
            {time}
          </span>
        </div>

        {/* Article Title */}
        <h3
          className={`font-sans font-bold text-[#121214] tracking-tight leading-snug transition-colors duration-200 group-hover:text-[#EF8557] ${
            compact ? "text-lg line-clamp-2" : "text-xl sm:text-2xl line-clamp-2"
          }`}
        >
          <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#226192] focus-visible:ring-offset-2 rounded after:absolute after:inset-0">
            {blog.title}
          </Link>
        </h3>

        {/* Excerpt */}
        {!compact && (
          <p className="font-sans font-normal text-sm sm:text-base text-[#3E3D3A] leading-relaxed mt-3 line-clamp-3">
            {blog.excerpt}
          </p>
        )}
      </div>

      {/* Card Action Link */}
      <div className="pt-5 mt-5 border-t border-[#121214]/10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#121214] transition-colors duration-200 group-hover:text-[#EF8557]">
          <span>Read Note</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#EF8557]" />
        </span>

        <span className="w-8 h-8 rounded-full bg-[#EAE6DE] flex items-center justify-center text-[#121214] transition-all duration-300 group-hover:bg-[#EF8557] group-hover:text-white">
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
}
