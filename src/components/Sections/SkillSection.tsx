import React, { useEffect } from 'react';
import FloatingDecorativeCircle from '../FloatingDecorativeCircle';
import SkillBar from '../SkillBar';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useTheme } from '@/hooks/use-theme';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsMarquee from '../Marquee';
import { useData } from '@/hooks/useData';
import { useMediaQuery } from 'react-responsive';

// Icons for the marquee
import { DiReact, DiNodejs, DiJavascript1, DiMongodb, DiPostgresql } from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiRedux, SiFirebase, SiExpress, SiSupabase, SiAppwrite, SiNextdotjs } from "react-icons/si";

const SkillSection = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });
  
  // Fetch skill data from API
  const { data: softData, loading: softLoading, error: softError } = useData('skills/soft-skills');
  const { data: techData, loading: techLoading, error: techError } = useData('skills/skills');

  const themeRevert = theme === "dark" ? "light" : "dark";

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  if (softLoading || techLoading) return <p>Loading skills...</p>;
  if (softError || techError || !softData?.results || !techData?.results) {
    return <p>Error loading skills.</p>;
  }

  // Filter featured skills
  const softSkills = softData.results.filter(skill => skill.is_featured);
  const featuredTechSkills = techData.results.filter(skill => skill.is_featured);
  
  // Group technical skills by their first tag
  const categories = Array.from(new Set(featuredTechSkills.map(skill => skill.tags[0]?.name)));
  

  // Marquee items (you can also fetch these from API if available)
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
              {softSkills.map((skill, idx) => (
                <motion.div 
                  key={skill.id} 
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <h4 className={`text-lg font-medium ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>
                      {skill.name}
                    </h4>
                  </div>
                  {skill.description && (
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  )}
                  <SkillBar value={skill.percentage} />
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
              {categories.map((category: any, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                >
                  <h4 className={`text-lg font-medium mb-4 ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>
                    {category}
                  </h4>
                  <div className="space-y-4">
                    {featuredTechSkills
                      .filter(skill => skill.tags[0]?.name === category)
                      .map(skill => (
                        <motion.div 
                          key={skill.id} 
                          variants={itemVariants}
                          className="space-y-2"
                        >
                          <div className="flex justify-between">
                            <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>
                              {skill.name}
                            </span>
                            <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>
                              {skill.percentage}%
                            </span>
                          </div>
                          <SkillBar value={skill.percentage} />
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <SkillsMarquee items={skills} theme={themeRevert} direction="left" />
      </motion.div>
    </>
  );
};

export default SkillSection;