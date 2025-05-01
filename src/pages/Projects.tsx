
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import ProjectCard from '@/components/ProjectCard';
import TabFilter from '@/components/TabFilter';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const tabs = [
    { id: "all", label: "All" },
    { id: "webApps", label: "Web Apps" },
    { id: "mobileApps", label: "Mobile Apps" },
    { id: "openSource", label: "Open Source" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageLayout 
      title="My Projects" 
      description="A showcase of my latest work across various technologies and platforms."
      showBackButton
    >

      <AnimatedPage>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />
        
        <AnimatedSection>
          <TabFilter
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </AnimatedSection>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} custom={0}>
            <AnimatedSection delay={0.1}>
              <ProjectCard
                title="Analytics Dashboard"
                image="public/lovable-uploads/54bcc2be-3dc8-4212-b89b-8bc08041d5fb.png"
                description="Real-time data visualization platform with customizable widgets and interactive charts."
                tags={["React", "Node.js", "GraphQL"]}
                links={{
                  demo: "#",
                  code: "#"
                }}
              />
            </AnimatedSection>
          </motion.div>
                
          <motion.div variants={item} custom={1}>
            <AnimatedSection delay={0.2}>
              <ProjectCard
                title="Fitness Tracker"
                image="public/lovable-uploads/9dcf1020-4c0d-4241-ad7d-8e46e950f62d.png"
                description="Mobile app for tracking workouts, nutrition, and personal fitness goals with AI recommendations."
                tags={["Flutter", "Firebase", "TensorFlow"]}
                links={{
                  demo: "#",
                  code: "#"
                }}
              />
            </AnimatedSection>
          </motion.div>
                
          <motion.div variants={item} custom={2}>
            <AnimatedSection delay={0.3}>
              <ProjectCard
                title="E-Commerce Platform"
                image="public/lovable-uploads/3cfd058f-fc86-4e6d-b5e0-8bad63698bac.png"
                description="Modern e-commerce solution with real-time inventory, AI-powered recommendations, and seamless checkout."
                tags={["Next.js", "Stripe", "AWS"]}
                links={{
                  demo: "#",
                  code: "#"
                }}
              />
            </AnimatedSection>
          </motion.div>
        </motion.div>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Projects;
