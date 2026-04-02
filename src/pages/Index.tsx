import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Separator className="my-20" />
      <HeroSection />
      <Separator className="my-20" />
      <SkillsSection />
      <Separator className="my-20" />
      <ProjectsSection />
      <Separator className="my-20" />
      <ContactSection />
      <Separator className="my-20" />
      <Footer />
    </div>
  );
};

export default Index;
