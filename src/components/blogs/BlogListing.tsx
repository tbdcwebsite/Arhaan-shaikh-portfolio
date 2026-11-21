import React from "react";
import { Blog } from "@/data/blogs";
import BlogCard from "./BlogCard";

export interface BlogListingProps {
  blogs: Blog[];
}

export default function BlogListing({ blogs }: BlogListingProps) {
  if (blogs.length === 0) {
    return (
      <div className="my-8 rounded-2xl border border-[#121214]/12 bg-[#FAF8F5] px-6 py-14 text-center">
        <h3 className="font-sans font-bold text-xl text-[#121214] tracking-tight">
          New notes are in the works.
        </h3>
        <p className="text-sm sm:text-base text-[#6F6A5D] max-w-md mx-auto mt-2 leading-relaxed font-sans">
          Essays for this topic are currently being written. In the meantime, explore published notes across the other categories.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
