import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import QuestionsSection from "@/components/sections/QuestionsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ExecutionSection } from "@/components/sections/ExecutionSection";
import SuccessStories from "@/components/sections/SuccessStories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#EAE6DE]" style={{ backgroundColor: "#EAE6DE" }}>
      <Hero />
      <AboutSection />
      <QuestionsSection />
      <ExpertiseSection />
      <ProcessSection />
      <ExecutionSection />
      <SuccessStories />
      <Footer />
    </main>
  );
}
