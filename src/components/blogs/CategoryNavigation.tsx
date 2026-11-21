import React from "react";
import Link from "next/link";
import { BLOG_CATEGORIES } from "@/data/categories";

export interface CategoryNavigationProps {
  activeCategory?: string; // undefined means "All Notes"
}

export default function CategoryNavigation({
  activeCategory,
}: CategoryNavigationProps) {
  return (
    <nav
      aria-label="Blog Categories"
      className="flex items-center gap-2 lg:flex-nowrap overflow-x-auto py-5 my-6 border-y border-[#121214]/10 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <Link
        href="/blogs"
        className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 border transition-all ${
          !activeCategory
            ? "bg-[#121214] text-[#EAE6DE] border-[#121214] shadow-sm"
            : "bg-[#FAF8F5] text-[#121214] border-[#121214]/20 hover:border-[#EF8557] hover:text-[#EF8557]"
        }`}
      >
        All Notes
      </Link>

      {BLOG_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.slug;
        return (
          <Link
            key={cat.slug}
            href={`/blogs/${cat.slug}`}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 border transition-all ${
              isActive
                ? "bg-[#121214] text-[#EAE6DE] border-[#121214] shadow-sm"
                : "bg-[#FAF8F5] text-[#121214] border-[#121214]/20 hover:border-[#EF8557] hover:text-[#EF8557]"
            }`}
          >
            {cat.label}
          </Link>
        );
      })}
    </nav>
  );
}
