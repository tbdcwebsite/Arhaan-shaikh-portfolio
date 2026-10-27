import React from "react";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/services-data";
import { Navbar } from "@/components/Navbar";
import { ServiceDetailClient } from "@/components/services/ServiceDetailClient";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SLUG_ALIASES: Record<string, string> = {
  "go-to-market": "go-to-market-strategy",
  "ecommerce": "ecommerce-quick-commerce",
};

export async function generateStaticParams() {
  const base = SERVICES.map((s) => ({
    slug: s.slug,
  }));
  return [
    ...base,
    { slug: "go-to-market" },
    { slug: "ecommerce" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = SLUG_ALIASES[slug] || slug;
  const service = SERVICES.find((s) => s.slug === resolvedSlug);
  if (!service) return { title: "Practice Area Not Found" };

  return {
    title: `${service.title} | Arhaan Shaikh`,
    description: service.executiveSummary.slice(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = SLUG_ALIASES[slug] || slug;
  const service = SERVICES.find((s) => s.slug === resolvedSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ServiceDetailClient service={service} />
      <Footer />
    </>
  );
}
