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
    <div className="blogRoot flex flex-col justify-between min-h-screen overflow-x-clip">
      <Navbar />
      <div className="w-full flex-1 pt-32 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

