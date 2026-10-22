import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import QuestionsSection from "@/components/sections/QuestionsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ExecutionSection } from "@/components/sections/ExecutionSection";

export default function Home() {
  return (
    <main className="bg-[#F8F8F5]" style={{ backgroundColor: "#F8F8F5" }}>
      <Hero />
      <AboutSection />
      <QuestionsSection />
      <ExpertiseSection />
      <ProcessSection />
      <ExecutionSection />
    </main>
  );
}

