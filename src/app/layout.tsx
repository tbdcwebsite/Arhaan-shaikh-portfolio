import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Next.js App with Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased bg-[#F8F8F5]`}
      style={{ backgroundColor: "#F8F8F5" }}
    >
      <body
        className="min-h-full flex flex-col bg-[#F8F8F5] text-[#28282B]"
        style={{ backgroundColor: "#F8F8F5" }}
      >
        {children}
      </body>
    </html>
  );
}
