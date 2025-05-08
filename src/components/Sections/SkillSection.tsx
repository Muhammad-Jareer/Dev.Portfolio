// src/components/SkillSection.tsx

import React, { useEffect } from 'react';
import FloatingDecorativeCircle from '../FloatingDecorativeCircle';
import SkillBar from '../SkillBar';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useTheme } from '@/hooks/use-theme';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsMarquee from '../Marquee';
import { DiReact, DiNodejs, DiJavascript1, DiMongodb, DiPostgresql } from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiRedux, SiFirebase, SiExpress, SiSupabase, SiAppwrite, SiNextdotjs } from "react-icons/si";
import { useMediaQuery } from 'react-responsive';

// === Config Arrays ===

// Skills Marquee
const skills = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <DiReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Node.js", icon: <DiNodejs /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Appwrite", icon: <SiAppwrite /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Redux Toolkit", icon: <SiRedux /> },
  { name: "PostgreSQL", icon: <DiPostgresql /> },
];

// Soft Skills
const softSkills = [
  { name: "Leadership", description: "Team management & project coordination", value: 85, color: "#3498db" },
  { name: "Communication", description: "Clear & effective communication", value: 90, color: "#e74c3c" },
  { name: "Problem Solving", description: "Analytical & creative solutions", value: 80, color: "#f1c40f" },
];

// Technical Skills
const frontendSkills = [
  { name: "React", value: 95, color: "#61dafb" },
  { name: "Vue.js", value: 85, color: "#42b883" },
];

const backendSkills = [
  { name: "Node.js", value: 90, color: "#68a063" },
  { name: "Python", value: 80, color: "#3572A5" },
];

const toolsTechnologies = [
  { name: "Git", bgColor: "#333", textColor: "white" },
  { name: "Docker", bgColor: "#2496ED", textColor: "white" },
  { name: "AWS", bgColor: "#FF9900", textColor: "white" },
  { name: "Kubernetes", bgColor: "#326CE5", textColor: "white" },
  { name: "Jenkins", bgColor: "#D24939", textColor: "white" },
];

// === Component ===

const SkillSection: React.FC = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });

  const themeRevert = theme === "dark" ? "light" : "dark";

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  return (
    <>
    {isSmallDevice && (
      <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64 border-b" />
    )}

      <motion.div
        ref={ref}
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>
            My Skill Set
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive overview of technical expertise and soft skills developed through years of professional experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Soft Skills Column */}
          <motion.div variants={containerVariants} className="space-y-10">
            <motion.h3 variants={itemVariants} className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>
              Soft Skills
            </motion.h3>

            <motion.div variants={containerVariants} className="space-y-8">
              {softSkills.map(skill => (
                <motion.div key={skill.name} variants={itemVariants} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h4 className={`text-lg font-medium ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>{skill.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                  <SkillBar value={skill.value} color={skill.color} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center mt-8">
              <Link to="/skills">
                <Button variant="outline" className="hover:scale-105 transition-all">
                  View All Skills
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Technical Skills Column */}
          <motion.div variants={containerVariants} className="space-y-10">
            <motion.h3 variants={itemVariants} className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>
              Technical Skills
            </motion.h3>

            <motion.div variants={containerVariants} className="space-y-8">
              {/* Frontend */}
              <motion.div variants={itemVariants}>
                <h4 className={`text-lg font-medium mb-4 ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Frontend Development</h4>
                <div className="space-y-4">
                  {frontendSkills.map(skill => (
                    <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                      <div className="flex justify-between">
                        <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>{skill.name}</span>
                        <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>{skill.value}%</span>
                      </div>
                      <SkillBar value={skill.value} color={skill.color} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div variants={itemVariants}>
                <h4 className={`text-lg font-medium mb-4 ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Backend Development</h4>
                <div className="space-y-4">
                  {backendSkills.map(skill => (
                    <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                      <div className="flex justify-between">
                        <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>{skill.name}</span>
                        <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>{skill.value}%</span>
                      </div>
                      <SkillBar value={skill.value} color={skill.color} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-medium mb-4">Tools & Technologies</h4>
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                  {toolsTechnologies.map(tool => (
                    <Badge
                      key={tool.name}
                      variant="secondary"
                      className={`${themeRevert === 'dark' ? 'text-background' : 'text-foreground'}`}
                    >
                      {tool.name}
                    </Badge>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <SkillsMarquee items={skills} theme={themeRevert} direction="left" />
      </motion.div>
    </>
  );
};

export default SkillSection;
