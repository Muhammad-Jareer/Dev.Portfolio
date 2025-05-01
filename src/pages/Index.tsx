import MainNavbar from "@/components/MainNavbar";
import Home from "@/components/Sections/HomeSection";
import ProjectSection from "@/components/Sections/ProjectsSection";
import SkillSection from "@/components/Sections/SkillSection";
import ExperienceSection from "@/components/Sections/ExperienceSection";
import { useTheme } from "@/hooks/use-theme";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import ContactSections from "@/components/Sections/ContactSections";
import NavigationSection from "@/components/Sections/NavigationSection";
import FooterSection from "@/components/Sections/FooterSection";

const Index = () => {
  const { theme } = useTheme()
    return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground">
      <MainNavbar />

      <main>
        {/* Hero Section */}
        <section id="profile" className="py-24 md:py-32 px-6 relative overflow-hidden">
          <Home />
        </section>
        
        {/* Quick Navigation Section */}
        <section className="py-24 px-6">
          <NavigationSection />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-muted/20 relative overflow-hidden">
          <ProjectSection />
        </section>
        
        {/* Skills Section */}
        <section id="skills"
        className={`py-24 px-6 relative overflow-hidden ${
          theme === 'dark' ? 'bg-foreground' : 'bg-background'
        }`}>
          <SkillSection />
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-muted/20 relative overflow-hidden">
          <ExperienceSection />
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className={`py-24 px-6 relative overflow-hidden ${theme === 'dark' ? 'bg-foreground' : 'bg-background'}`}>
          <TestimonialsSection />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-muted/20 relative overflow-hidden">
          <ContactSections />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <FooterSection />
      </footer>
    </div>
  );
};

export default Index;
