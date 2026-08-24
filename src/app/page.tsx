import StarsWrapper from "@/components/canvas/StarsWrapper";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/ui/TechMarquee";
import AboutBento from "@/components/sections/AboutBento";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import TerminalSection from "@/components/sections/TerminalSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-100 overflow-hidden">
      {/* 3D Cosmic Space & Shooting Stars Canvas Background */}
      <StarsWrapper />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Semantic Landmark */}
      <main id="main-content" role="main" className="relative z-10 space-y-12 md:space-y-20">
        <Hero />
        
        {/* Infinite Tech Skills Marquee Banner */}
        <TechMarquee />

        <div className="section-lazy">
          <AboutBento />
        </div>
        <div className="section-lazy">
          <Skills />
        </div>
        <div className="section-lazy">
          <Projects />
        </div>
        <div className="section-lazy">
          <Experience />
        </div>
        <div className="section-lazy">
          <TerminalSection />
        </div>
        <div className="section-lazy">
          <Contact />
        </div>
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
}
