import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import ProjectCard from '@/components/ProjectCard';
import TabFilter from '@/components/TabFilter';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "webApps", label: "Web Apps" },
    { id: "mobileApps", label: "Mobile Apps" },
    { id: "openSource", label: "Open Source" },
  ];

  const projectsData = [
    {
      title: "Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Real-time data visualization platform with customizable widgets and interactive charts.",
      tags: ["React", "Node.js", "GraphQL"],
      category: "webApps",
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Fitness Tracker",
      image: "https://i.pinimg.com/736x/84/5a/03/845a038b386aac291435d4de36afe018.jpg",
      description: "Mobile app for tracking workouts, nutrition, and personal fitness goals with AI recommendations.",
      tags: ["Flutter", "Firebase", "TensorFlow"],
      category: "mobileApps",
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "E-Commerce Platform",
      image: "https://i.pinimg.com/736x/54/e3/c0/54e3c0564bd1b64c82c5a482d6895d4c.jpg",
      description: "Modern e-commerce solution with real-time inventory, AI-powered recommendations, and seamless checkout.",
      tags: ["Next.js", "Stripe", "AWS"],
      category: "webApps",
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Open Source CMS",
      image: "https://i.pinimg.com/736x/3a/21/ac/3a21ac51ca16ee1aa4f222b20e692cd5.jpg",
      description: "A community-driven CMS designed for customization and plugin development.",
      tags: ["Vue", "Express", "MongoDB"],
      category: "openSource",
      links: {
        demo: "#",
        code: "#"
      }
    }
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

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

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
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <AnimatedSection delay={0.1 * (index + 1)}>
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  tags={project.tags}
                  links={project.links}
                />
              </AnimatedSection>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Projects;
