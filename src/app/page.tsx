import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";

export default function Home() {
  return (
    <main className="bg-[#F8F8F5]" style={{ backgroundColor: "#F8F8F5" }}>
      <Hero />
      <AboutSection />
    </main>
  );
}

