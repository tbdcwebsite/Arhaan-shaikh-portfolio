import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const mont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mont",
  display: "swap",
});

const butler = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-butler",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arhaanshaikh.com"),
  title: "Arhaan Shaikh | Growth Strategist & Marketing Architect",
  description: "Senior Growth Strategist & Digital Architect delivering scalable brand equity and commercial ROI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mont.variable} ${butler.variable} min-h-full antialiased bg-[#EAE6DE]`}
      style={{ backgroundColor: "#EAE6DE" }}
    >
      <body
        className={`${mont.variable} ${butler.variable} font-sans min-h-full flex flex-col bg-[#EAE6DE] text-[#121214]`}
        style={{ backgroundColor: "#EAE6DE" }}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
