import React from "react";
import Link from "next/link";
import { Blog } from "@/data/blogs";
import { getRelatedBlogs, getAllBlogs } from "@/lib/blog";
import BlogCard from "./BlogCard";
import { SparkleIcon, ArrowRight } from "./icons";

export interface RelatedBlogsProps {
  currentBlog?: Blog;
  currentCategorySlug?: string;
  limit?: number;
}

export default function RelatedBlogs({
  currentBlog,
  currentCategorySlug,
  limit = 3,
}: RelatedBlogsProps) {
  let blogs: Blog[] = [];

  if (currentBlog) {
    blogs = getRelatedBlogs(currentBlog, limit);
  } else if (currentCategorySlug) {
    // Pick latest 3 from OTHER categories
    const all = getAllBlogs();
    blogs = all.filter((b) => b.category !== currentCategorySlug).slice(0, limit);
  } else {
    blogs = getAllBlogs().slice(0, limit);
  }

  if (blogs.length === 0) return null;

  return (
    <section className="w-full mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-[rgba(18,18,20,0.12)]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EF8557] mb-2.5">
            <SparkleIcon className="w-3.5 h-3.5" />
            <span>FURTHER PERSPECTIVES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121214] tracking-tight">
            Explore <span className="font-serif italic font-semibold tracking-[-0.02em] text-[#EF8557]">More Ideas.</span>
          </h2>
        </div>

        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121214] hover:text-[#EF8557] transition-colors self-start sm:self-auto"
        >
          <span>View All Notes</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogs.map((b) => (
          <BlogCard key={b.id} blog={b} compact={true} />
        ))}
      </div>
    </section>
  );
}

