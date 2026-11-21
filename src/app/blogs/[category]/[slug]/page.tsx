import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllBlogs,
  getBlogBySlug,
  getCategoryBySlug,
} from "@/lib/blog";
import BlogDetail from "@/components/blogs/BlogDetail";

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b) => ({
    category: b.category,
    slug: b.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { category: catSlug, slug } = await params;
  const blog = getBlogBySlug(catSlug, slug);

  if (!blog) {
    return {
      title: "Article Not Found | Arhaan Shaikh",
    };
  }

  return {
    title: `${blog.title} | Arhaan Shaikh`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: ["Arhaan Shaikh"],
      images: [
        {
          url: blog.featuredImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.featuredImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category: catSlug, slug } = await params;
  const blog = getBlogBySlug(catSlug, slug);
  const category = getCategoryBySlug(catSlug);

  if (!blog || !category) {
    notFound();
  }

  // Schema.org BlogPosting Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: `https://arhaanshaikh.com${blog.featuredImage}`,
    datePublished: blog.publishedAt,
    author: {
      "@type": "Person",
      name: "Arhaan Shaikh",
      jobTitle: "Growth Strategist & Marketing Architect",
      url: "https://arhaanshaikh.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Arhaan Shaikh",
      logo: {
        "@type": "ImageObject",
        url: "https://arhaanshaikh.com/images/signature.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://arhaanshaikh.com/blogs/${category.slug}/${blog.slug}`,
    },
  };

  return (
    <div className="w-full">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Sticky-Sidebar Article Layout */}
      <BlogDetail blog={blog} category={category} />
    </div>
  );
}

