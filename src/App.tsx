import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { FloatingDock } from "./components/FloatingDock";
import { ProjectsShowcase } from "./components/ProjectsShowcase";
import { InteractiveSkills } from "./components/InteractiveSkills";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      <FloatingDock activeSection={activeSection} />
      <Hero />
      <BentoGrid />
      <ProjectsShowcase />
      <InteractiveSkills />
      <ContactSection />
    </div>
  );
}
