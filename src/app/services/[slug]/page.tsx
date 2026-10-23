import React from "react";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/services-data";
import { Navbar } from "@/components/Navbar";
import { ServiceDetailClient } from "@/components/services/ServiceDetailClient";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Practice Area Not Found" };

  return {
    title: `${service.title} | Arhaan Shaikh`,
    description: service.executiveSummary.slice(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ServiceDetailClient service={service} />
    </>
  );
}
