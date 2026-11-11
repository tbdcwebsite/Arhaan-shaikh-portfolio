import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full bg-[#EAE6DE] min-h-screen overflow-x-clip flex flex-col justify-between"
    >
      <Navbar />
      <div className="w-full flex-1 pt-16 sm:pt-20 lg:pt-24">
        {children}
      </div>
      <Footer />
    </div>
  );
}

