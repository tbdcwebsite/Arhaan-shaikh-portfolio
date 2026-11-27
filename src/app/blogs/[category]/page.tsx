import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllCategories,
  getCategoryBySlug,
  getBlogsByCategory,
} from "@/lib/blog";
import BlogCategoryHero from "@/components/blogs/BlogCategoryHero";
import CategoryNavigation from "@/components/blogs/CategoryNavigation";
import BlogListing from "@/components/blogs/BlogListing";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found | Arhaan Shaikh",
    };
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const blogs = getBlogsByCategory(category.slug);

  return (
    <div className="w-full">
      {/* Category Hero */}
      <BlogCategoryHero category={category} />

      {/* Category Filter Pills */}
      <CategoryNavigation activeCategory={category.slug} />

      {/* Category Articles Feed */}
      <section>
        <div className="flex items-center justify-between pb-6 border-b border-[rgba(18,18,20,0.12)] mb-10">
          <h2 className="text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.02em] font-normal text-[#121214]">
            Published <span className="font-serif italic font-semibold tracking-[-0.02em] text-[#EF8557]">Articles.</span>
          </h2>
          <span className="text-xs font-bold uppercase tracking-wider text-[#6F6A5D]">
            {blogs.length} {blogs.length === 1 ? "Essay" : "Essays"}
          </span>
        </div>

        <BlogListing blogs={blogs} />
      </section>
    </div>
  );
}

