import QuantumNavbar from "@/components/QuantumNavbar";
import QuantumHero from "@/components/QuantumHero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full text-[#090d16] bg-[#f8fafc]">
      <QuantumNavbar />
      <QuantumHero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      
      {/* Contact & Footer section with concentric fade background image */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image: Distinct concentric dome/circle fade radiating from bottom center */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 95% 85% at 50% 90%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 95% 85% at 50% 90%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 95%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-section-bg.webp"
            alt="Footer Background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "50% 85%",
              opacity: 0.75,
              filter: "blur(2px)",
              transform: "scale(1.05)",
            }}
          />
        </div>

        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
