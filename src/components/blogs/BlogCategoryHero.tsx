import React from "react";
import BlogBreadcrumb from "./BlogBreadcrumb";
import { BlogCategory } from "@/data/categories";

export interface BlogCategoryHeroProps {
  category: BlogCategory;
}

export default function BlogCategoryHero({ category }: BlogCategoryHeroProps) {
  return (
    <div className="pt-2 pb-8 border-b border-[#121214]/10 mb-8">
      <BlogBreadcrumb items={[{ label: category.label }]} />

      <h1 className="mt-4 sm:mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[#121214]">
        <span className="font-sans font-normal text-[#121214]">
          {category.title}{" "}
        </span>
        <span className="font-serif italic font-normal text-[#EF8557]">
          {category.titleAccent}.
        </span>
      </h1>

      <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#3E3D3A] leading-relaxed font-sans font-normal">
        {category.description}
      </p>
    </div>
  );
}
