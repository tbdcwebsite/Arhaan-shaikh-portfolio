import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mont = localFont({
  src: [
    {
      path: "./fonts/Mont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Mont-Bold.woff2",
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
      path: "./fonts/Butler-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Butler-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-butler",
  display: "swap",
});

export const metadata: Metadata = {
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
        {children}
      </body>
    </html>
  );
}
