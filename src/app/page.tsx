import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/about/AboutSection";
import QuestionsSection from "@/components/sections/QuestionsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ExecutionSection from "@/components/sections/ExecutionSection";
// import SuccessStories from "@/components/sections/SuccessStories";
import NotesOnGrowth from "@/components/sections/NotesOnGrowth";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{ backgroundColor: "#EAE6DE" }}
      className="relative w-full bg-[#EAE6DE] min-h-screen overflow-x-clip"
    >
      <Navbar />
      <Hero />
      <AboutSection />
      <QuestionsSection />
      <ProcessSection />
      <ExecutionSection />
      
      {/* Notes on Growth */}
      <NotesOnGrowth />
      
      <Footer />
    </main>
  );
}
