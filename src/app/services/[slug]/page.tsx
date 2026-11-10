import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, serviceSlugs } from "@/lib/services";
import ServicePage from "@/components/ServicePage";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: `${service.label} — Arhaan Shaikh`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.label} — Arhaan Shaikh`,
      description: service.metaDescription,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();
  return <ServicePage service={service} />;
}
