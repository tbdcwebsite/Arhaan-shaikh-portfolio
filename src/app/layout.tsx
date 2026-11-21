import type { Metadata } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const mont = localFont({
  src: [
    {
      path: "../../public/font/fonnts.com-Mont_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/fonnts.com-Mont_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mont",
  display: "swap",
});

const butler = localFont({
  src: [
    {
      path: "../../public/font/Butler_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Butler_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Butler-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/Butler-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Butler_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Butler_Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
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
