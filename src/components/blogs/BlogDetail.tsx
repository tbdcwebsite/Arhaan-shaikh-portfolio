"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog, ContentBlock } from "@/data/blogs";
import { BlogCategory } from "@/data/categories";
import {
  getAllCategories,
  getBlogsByCategory,
  formatDate,
  readingTime,
} from "@/lib/blog";
import BlogBreadcrumb from "./BlogBreadcrumb";
import { ClockIcon, ArrowRight } from "./icons";

export interface BlogDetailProps {
  blog: Blog;
  category: BlogCategory;
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`transition-transform duration-200 ${open ? "rotate-45" : ""}`}
      width="14"
      height="14"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 1v13M1 7.5h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 0 0-1.63 1.62c0 .89.73 1.61 1.63 1.61.89 0 1.62-.72 1.62-1.61A1.63 1.63 0 0 0 7.84 6.2z" />
    </svg>
  );
}

function XIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkCopyIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function renderFormattedText(text: string): React.ReactNode {
  // Matches markdown links [label](url) or bold text **bold**
  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      const linkLabel = match[2];
      const linkHref = match[3];
      const isExternal = linkHref.startsWith("http");

      parts.push(
        <a
          key={`link-${match.index}`}
          href={linkHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[#EF8557] underline underline-offset-2 hover:opacity-85 font-semibold transition-opacity"
        >
          {linkLabel}
        </a>
      );
    } else if (match[4]) {
      parts.push(
        <strong key={`bold-${match.index}`} className="font-bold text-[#121214]">
          {match[4]}
        </strong>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function RenderContentBlock({ block, idx }: { block: ContentBlock; idx: number }) {
  switch (block.type) {
    case "paragraph":
      if (block.text.startsWith("What you can do:")) {
        const rest = block.text.slice("What you can do:".length);
        return (
          <div
            key={`p-${idx}`}
            className="my-7 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border-l-4 border-l-[#EF8557] border border-[#121214]/10 text-[16.5px] leading-[1.75] text-[#3E3D3A]"
          >
            <strong className="font-sans font-bold text-[#121214] block sm:inline mr-2">
              What you can do:
            </strong>
            {renderFormattedText(rest.trim())}
          </div>
        );
      }
      return (
        <p key={`p-${idx}`} className="font-sans font-normal text-[17px] leading-[1.75] text-[#3E3D3A] mb-6">
          {renderFormattedText(block.text)}
        </p>
      );

    case "heading2":
      return (
        <h2 key={`h2-${idx}`} id={`section-${idx}`} className="font-sans font-bold text-2xl text-[#121214] mt-9 mb-3.5 tracking-tight">
          {block.text}
        </h2>
      );

    case "heading3":
      return (
        <h3 key={`h3-${idx}`} id={`subsection-${idx}`} className="font-sans font-bold text-xl text-[#121214] mt-7 mb-2.5 tracking-tight">
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul key={`ul-${idx}`} className="list-disc pl-6 space-y-2.5 mb-6 font-sans text-[17px] leading-[1.75] text-[#3E3D3A]">
          {block.items.map((item, i) => {
            const colonIdx = item.indexOf(":");
            if (colonIdx > 0 && colonIdx < 70 && !item.startsWith("http")) {
              const prefix = item.substring(0, colonIdx + 1);
              const rest = item.substring(colonIdx + 1);
              return (
                <li key={`li-${idx}-${i}`}>
                  <strong className="font-bold text-[#121214]">{renderFormattedText(prefix)}</strong>
                  {renderFormattedText(rest)}
                </li>
              );
            }
            return <li key={`li-${idx}-${i}`}>{renderFormattedText(item)}</li>;
          })}
        </ul>
      );

    case "quote":
      return (
        <blockquote
          key={`q-${idx}`}
          className="border-l-[3px] border-[#EF8557] pl-5 my-8 font-serif italic font-normal text-[22px] leading-[1.45] text-[#121214]"
        >
          “{block.text}”
          {(block.author || block.role) && (
            <footer className="mt-2 text-xs font-sans not-italic font-bold uppercase tracking-wider text-[#6F6A5D]">
              <span>{block.author}</span>
              {block.role && <span> — {block.role}</span>}
            </footer>
          )}
        </blockquote>
      );

    case "image":
      return (
        <figure key={`img-${idx}`} className="my-8">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#121214]/10 bg-[#FAF8F5]">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 680px"
              unoptimized={true}
              className="object-cover object-center"
            />
          </div>
          {block.caption && (
            <figcaption className="text-center text-xs text-[#6F6A5D] mt-2.5 font-sans">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "table":
      return (
        <div key={`table-${idx}`} className="my-8">
          <div className="w-full overflow-x-auto rounded-[16px] border border-[#121214]/12 bg-[#FAF8F5]">
            <table className="w-full min-w-[600px] border-collapse text-left font-sans text-[14.5px] leading-[1.55]">
              {block.caption && (
                <caption className="sr-only">{block.caption}</caption>
              )}
              <thead>
                <tr className="bg-[#121214] text-[#F5F2EB]">
                  {block.headers.map((header, hIdx) => (
                    <th
                      key={`th-${idx}-${hIdx}`}
                      className="px-5 py-3.5 font-semibold tracking-[0.02em] border-b border-[#121214]/12 whitespace-nowrap"
                    >
                      {renderFormattedText(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rIdx) => (
                  <tr
                    key={`tr-${idx}-${rIdx}`}
                    className="even:bg-[#F3EFE6]/60 border-b border-[#121214]/10 last:border-b-0"
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={`td-${idx}-${rIdx}-${cIdx}`}
                        className={`px-5 py-4 align-top ${
                          cIdx === 0
                            ? "font-semibold text-[#121214] whitespace-nowrap"
                            : "text-[#121214]/85"
                        }`}
                      >
                        {renderFormattedText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.footnote && (
            <p className="mt-3 text-[13px] italic text-[#121214]/70">
              {renderFormattedText(block.footnote)}
            </p>
          )}
        </div>
      );

    case "callout":
      return (
        <div
          key={`callout-${idx}`}
          className="my-10 p-7 sm:p-9 rounded-2xl bg-[#FAF8F5] border border-[#121214]/15 shadow-sm"
        >
          {block.title && (
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#121214] mb-3 leading-snug">
              {renderFormattedText(block.title)}
            </h3>
          )}
          <p className="font-sans text-[16.5px] leading-[1.75] text-[#3E3D3A] mb-6">
            {renderFormattedText(block.text)}
          </p>
          {block.linkHref && (
            <Link
              href={block.linkHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EF8557] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#d97346] transition-all duration-200 shadow-sm hover:scale-[1.02]"
            >
              <span>{block.linkText || "Get In Touch"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      );

    default:
      return null;
  }
}

function renderTitleWithEmphasis(title: string, slug: string, explicitEmphasis?: string) {
  const TITLE_EMPHASIS_MAP: Record<string, string> = {
    "the-counter-positioning-playbook": "Incumbents",
    "the-expensive-illusion-of-omnichannel": "Fit",
    "how-to-get-your-brand-on-myntra": "Myntra",
    "how-to-sell-on-myntra": "Myntra",
    "myntra-vs-ajio-vs-nykaa-fashion": "Your Brand?",
    "what-is-brand-positioning": "Business Growth",
    "marketplace-vs-own-website-d2c": "D2C Brands?",
    "the-hidden-cac-tax": "Economics",
    "engineering-cultural-velocity": "Reach",
    "the-high-intent-dilemma": "Problem",
    "why-your-d2c-website-gets-traffic-but-no-sales": "No Sales",
    "d2c-website-traffic-but-no-sales": "No Sales",
  };

  const targetWord = explicitEmphasis || TITLE_EMPHASIS_MAP[slug];
  if (targetWord && title.includes(targetWord)) {
    const [before, ...afterParts] = title.split(targetWord);
    const after = afterParts.join(targetWord);
    return (
      <>
        {before}
        <span className="font-serif italic font-semibold tracking-[-0.02em] text-[#EF8557]">
          {targetWord}
        </span>
        {after}
      </>
    );
  }

  // Fallback: emphasize the last word of the headline
  const words = title.trim().split(/\s+/);
  if (words.length > 1) {
    const lastWord = words[words.length - 1];
    const remaining = words.slice(0, -1).join(" ");
    return (
      <>
        {remaining}{" "}
        <span className="font-serif italic font-semibold tracking-[-0.02em] text-[#EF8557]">
          {lastWord}
        </span>
      </>
    );
  }

  return title;
}

export default function BlogDetail({ blog, category }: BlogDetailProps) {
  const categories = getAllCategories();
  const formattedDate = formatDate(blog.publishedAt);
  const time = readingTime(blog);

  // Default open state: expand the category matching the currently viewed article
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set([category.slug])
  );
  const [copied, setCopied] = useState(false);

  const toggleCategory = (slug: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  const handleCopyUrl = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareLinkedIn = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const handleShareX = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(blog.title);
      window.open(
        `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div className="w-full max-w-[1120px] mx-auto pb-16 lg:pb-24">
      {/* 2-Column Responsive Layout: Article first on mobile (<lg), Sticky Sidebar on left on desktop (>=lg) */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,680px)] gap-10 lg:gap-[60px]">
        {/* ===================================================================
            SIDEBAR (order-2 on mobile, order-1 sticky rail on desktop)
            =================================================================== */}
        <aside className="order-2 lg:order-1 lg:sticky lg:top-28 self-start mt-12 pt-10 border-t border-[#121214]/12 lg:mt-0 lg:pt-0 lg:border-t-0">
          {/* Section Eyebrow */}
          <div className="text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#6F6A5D] mb-2.5 pt-0.5">
            Notes on Growth
          </div>

          {/* Dynamic Accordion Navigator */}
          <nav aria-label="Notes on Growth Navigator" className="border-t border-[#121214]/10">
            {categories.map((cat) => {
              const isOpen = openCategories.has(cat.slug);
              const isCurrentCategory = cat.slug === category.slug;
              const blogsInCat = getBlogsByCategory(cat.slug);

              return (
                <div key={cat.slug} className="border-b border-[#121214]/10">
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.slug)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between min-h-[44px] py-3 text-left group transition-colors select-none"
                  >
                    <span
                      className={`text-[13.5px] font-sans font-bold tracking-tight transition-colors pr-2 leading-snug ${
                        isOpen || isCurrentCategory
                          ? "text-[#EF8557]"
                          : "text-[#121214] group-hover:text-[#EF8557]"
                      }`}
                    >
                      {cat.label}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      {blogsInCat.length === 0 && (
                        <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-[#6F6A5D] bg-[#121214]/5 px-2 py-0.5 rounded-full">
                          SOON
                        </span>
                      )}
                      <span
                        className={`transition-colors ${
                          isOpen || isCurrentCategory
                            ? "text-[#EF8557]"
                            : "text-[#6F6A5D] group-hover:text-[#EF8557]"
                        }`}
                      >
                        <PlusIcon open={isOpen} />
                      </span>
                    </div>
                  </button>

                  {/* Expandable Article Links */}
                  {isOpen && (
                    <div className="pb-3.5 pt-0.5">
                      {blogsInCat.length > 0 ? (
                        <ul className="space-y-1">
                          {blogsInCat.map((p) => {
                            const isActive =
                              p.slug === blog.slug && cat.slug === category.slug;
                            return (
                              <li key={p.slug}>
                                <Link
                                  href={`/blogs/${cat.slug}/${p.slug}`}
                                  className={`block text-[13px] leading-snug py-2 min-h-[38px] pl-3.5 border-l-2 transition-all ${
                                    isActive
                                      ? "border-[#EF8557] font-bold text-[#121214] bg-[#EF8557]/[0.04]"
                                      : "border-[#121214]/10 text-[#6F6A5D] hover:text-[#121214] hover:border-[#6F6A5D]"
                                  }`}
                                >
                                  {p.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <p className="text-[12.5px] font-sans text-[#6F6A5D] italic pl-3.5 py-1">
                          Coming soon
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Share Section (44x44 tap targets) */}
          <div className="text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#6F6A5D] mb-3 mt-7">
            Share
          </div>
          <div className="flex items-center gap-2.5 relative">
            <button
              type="button"
              onClick={handleShareLinkedIn}
              aria-label="Share on LinkedIn"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-[#121214]/15 bg-white/70 hover:border-[#EF8557] hover:text-[#EF8557] text-[#6F6A5D] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <LinkedInIcon />
            </button>

            <button
              type="button"
              onClick={handleShareX}
              aria-label="Share on X"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-[#121214]/15 bg-white/70 hover:border-[#EF8557] hover:text-[#EF8557] text-[#6F6A5D] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <XIcon />
            </button>

            <button
              type="button"
              onClick={handleCopyUrl}
              aria-label="Copy Article Link"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-[#121214]/15 bg-white/70 hover:border-[#EF8557] hover:text-[#EF8557] text-[#6F6A5D] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-sm relative"
            >
              <LinkCopyIcon />
              {copied && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold bg-[#121214] text-white whitespace-nowrap shadow-md pointer-events-none">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </aside>

        {/* ===================================================================
            MAIN ARTICLE (order-1 on mobile, order-2 on desktop)
            =================================================================== */}
        <article className="min-w-0 order-1 lg:order-2">
          {/* Breadcrumb */}
          <BlogBreadcrumb
            items={[
              { label: category.label, href: `/blogs/${category.slug}` },
              { label: blog.title },
            ]}
          />

          {/* Category Eyebrow */}
          <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#EF8557] mb-2.5 block">
            {category.label}
          </span>

          {/* Headline with Butler Italic Accent */}
          <h1 className="font-sans font-normal text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-[#121214] mb-4">
            {renderTitleWithEmphasis(blog.title, blog.slug, blog.titleEmphasis)}
          </h1>

          {/* Meta: Published Date & Reading Time */}
          <div className="flex items-center gap-2.5 text-sm font-medium text-[#6F6A5D] mb-7">
            <time dateTime={blog.publishedAt}>{formattedDate}</time>
            <span className="text-[#121214]/30">•</span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="w-3.5 h-3.5 text-[#EF8557]" />
              {time}
            </span>
          </div>

          {/* Featured Image Banner */}
          <div className="relative w-full aspect-[16/10] max-h-[520px] overflow-hidden rounded-2xl bg-[#F5EFE6] border border-[#121214]/10 my-7 shadow-sm">
            <Image
              src={blog.featuredImage}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 680px"
              unoptimized={true}
              className="w-full h-full object-cover object-center select-none pointer-events-none"
            />
          </div>

          {/* Lead Intro Paragraph */}
          {blog.intro && (
            <p className="font-sans font-normal text-[20px] leading-[1.6] text-[#121214] mb-8">
              {blog.intro}
            </p>
          )}

          {/* Structured Content Blocks */}
          <div>
            {blog.content.map((block, idx) => (
              <RenderContentBlock key={`block-${idx}`} block={block} idx={idx} />
            ))}
          </div>

          {/* Divider & Topic Tag Pills */}
          <hr className="border-t border-[#121214]/12 my-10" />
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {[category.label, "Growth Strategy", "Positioning Architecture", "Execution"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[11.5px] font-sans font-semibold uppercase tracking-[0.06em] text-[#6F6A5D] border border-[#121214]/15 bg-white/50 px-3.5 py-1.5 rounded-full select-none"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
