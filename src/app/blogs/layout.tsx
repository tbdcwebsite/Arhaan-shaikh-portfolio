import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./blog-theme.css";

export const metadata = {
  title: "Notes on Growth — Strategic Essays & Playbooks | Arhaan Shaikh",
  description:
    "Founder-focused perspectives on market disruption, positioning architecture, organic velocity, and conversion psychology.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#EAE6DE] flex flex-col justify-between min-h-screen overflow-x-clip">
      <Navbar />
      <div className="blogRoot w-full flex-1 pt-28 sm:pt-32 lg:pt-36 pb-20 md:pb-24 lg:pb-[120px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

