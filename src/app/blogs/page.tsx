import React from "react";
import Link from "next/link";
import { getAllCategories } from "@/lib/blog";
import { getAllBlogs, getBlogsByCategory } from "@/lib/blog";
import BlogBreadcrumb from "@/components/blogs/BlogBreadcrumb";
import CategoryNavigation from "@/components/blogs/CategoryNavigation";
import BlogListing from "@/components/blogs/BlogListing";
import { ArrowRight, SparkleIcon } from "@/components/blogs/icons";

export const metadata = {
  title: "Notes on Growth | Arhaan Shaikh",
  description:
    "Sharp, founder-focused essays on market disruption, positioning architecture, organic velocity, and conversion psychology.",
};

export default function BlogsHubPage() {
  const categories = getAllCategories();
  const allBlogs = getAllBlogs();

  return (
    <div className="w-full">
      {/* Top Breadcrumb */}
      <BlogBreadcrumb items={[]} />

      {/* Hero Header */}
      <header className="pt-4 pb-12 sm:pb-16 border-b border-[rgba(18,18,20,0.12)] mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#121214] leading-[1.05] max-w-4xl">
          Notes On{" "}
          <span className="font-serif italic font-normal text-[#EF8557]">
            Growth.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-[#3E3D3A] leading-relaxed max-w-2xl mt-4">
          Unconventional perspectives, positioning teardowns, and execution
          playbooks for founders and growth leaders building market equity.
        </p>
      </header>

      {/* Category Pills Switcher */}
      <CategoryNavigation />

      {/* 5 Category Cards Showcase */}
      <section className="mb-20 sm:mb-28">
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#226192] mb-6">
          <SparkleIcon className="w-3.5 h-3.5 text-[#EF8557]" />
          <span>5 STRATEGIC PILLARS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {categories.map((cat, idx) => {
            const count = getBlogsByCategory(cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/blogs/${cat.slug}`}
                className="group relative flex flex-col justify-between rounded-[22px] bg-[#FAF8F5] border border-[rgba(18,18,20,0.12)] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(18,18,20,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold tracking-wider uppercase text-[#6F6A5D] mb-4">
                    <span className="text-[#EF8557]">{cat.kicker}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EAE6DE] text-[#121214]">
                      {count} {count === 1 ? "Note" : "Notes"}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#121214] tracking-tight group-hover:text-[#EF8557] transition-colors leading-snug">
                    {cat.title}{" "}
                    <span className="font-serif italic font-normal text-[#EF8557]">
                      {cat.titleAccent}.
                    </span>
                  </h2>

                  <p className="text-sm text-[#3E3D3A] leading-relaxed mt-3 line-clamp-3">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[rgba(18,18,20,0.08)] flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#121214] group-hover:text-[#EF8557] transition-colors">
                    Explore Pillar
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EAE6DE] flex items-center justify-center text-[#121214] transition-all duration-300 group-hover:bg-[#EF8557] group-hover:text-white">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest Articles Feed */}
      <section className="mb-20 sm:mb-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[rgba(18,18,20,0.12)] mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EF8557] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF8557]" />
              <span>CHRONOLOGICAL RELEASES</span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] text-[#121214]">
              All Latest <span className="font-serif italic font-normal text-[#EF8557]">Notes.</span>
            </h2>
          </div>

          <p className="text-sm text-[#6F6A5D]">
            Showing {allBlogs.length} tactical growth frameworks
          </p>
        </div>

        <BlogListing blogs={allBlogs} />
      </section>

      {/* Strategic Consultation CTA Banner */}
      <section className="w-full rounded-[28px] bg-[#226192] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_24px_54px_rgba(34,97,146,0.22)]">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EF8557] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#EF8557] animate-pulse" />
            <span>DIRECT ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Have an ambitious growth problem{" "}
            <span className="font-serif italic font-normal text-[#EF8557]">
              in mind?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed mt-4 mb-8">
            Brand, positioning, performance, and tech working as one connected system.
            Let&apos;s audit your bottlenecks and map a definitive roadmap.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#EF8557] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Ambient background watermark */}
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none opacity-[0.07] font-serif italic text-[180px] leading-none text-white z-0">
          Growth
        </div>
      </section>
    </div>
  );
}

