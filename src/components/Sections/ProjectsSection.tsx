// src/components/ProjectSection.tsx

import React, { useEffect } from 'react';
import FloatingDecorativeCircle from '../FloatingDecorativeCircle';
import ProjectCard from '../ProjectCard';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MarqueeSection from '../Marquee';
import { useTheme } from '@/hooks/use-theme';

// Container variants for staggering children
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

// Card variants for fade-up and scale
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const projects = [
  {
    title: "Analytics Dashboard",
    image: "/lovable-uploads/project1.webp",
    description:
      "Real-time data visualization platform with customizable widgets and interactive charts.",
    tags: ["React", "Node.js", "GraphQL"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Fitness Tracker",
    image: "/lovable-uploads/project2.webp",
    description:
      "Mobile app for tracking workouts, nutrition, and personal fitness goals with AI recommendations.",
    tags: ["Flutter", "Firebase", "TensorFlow"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "E-Commerce Platform",
    image: "/lovable-uploads/project3.webp",
    description:
      "Modern e-commerce solution with real-time inventory, AI-powered recommendations, and seamless checkout.",
    tags: ["Next.js", "Stripe", "AWS"],
    links: { demo: "#", code: "#" },
  },
];

const ProjectSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const { theme } = useTheme()

  const companies = [
    { name: "GitHub", icon: "devicon-github-original colored" },
    { name: "GitLab", icon: "devicon-gitlab-original colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Amazon Web Services", icon: "devicon-amazonwebservices-original colored" },
    { name: "Microsoft Azure", icon: "devicon-azure-plain colored" },
    { name: "Google Cloud", icon: "devicon-googlecloud-plain colored" },
    { name: "DigitalOcean", icon: "devicon-digitalocean-plain colored" },
    { name: "Heroku", icon: "devicon-heroku-plain colored" },
  ];
  

  useEffect(() => {
    if (inView) controls.start('show');
    else controls.start('hidden');
  }, [controls, inView]);

  return (
    <>
      <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64 border-l" />

      <motion.div
        ref={ref}
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work across various technologies and platforms.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                tags={project.tags}
                links={project.links}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link to="/projects">
            <Button variant="outline" className="hover:scale-105 transition-all">
              View All Projects
            </Button>
          </Link>
        </motion.div>
        
        <MarqueeSection items={companies} theme={theme} direction={"right"} />
      </motion.div>
    </>
  );
};

export default ProjectSection;
