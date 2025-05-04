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

const SkillSection: React.FC = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  const themeRevert = theme === "dark" ? "light" : "dark"

  const skills = [
    { name: "Next.js", iconImg: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Express", iconImg: "https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Supabase", icon: "devicon-supabase-plain colored" },
    { name: "Appwrite", icon: "devicon-appwrite-plain colored" },
    { name: "Firebase", icon: "devicon-firebase-plain colored" },
    { name: "React Native", icon: "devicon-react-original colored" },
    { name: "Redux Toolkit", icon: "devicon-redux-original colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  ];
  // Variants
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
      <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64 border-b" />

      <motion.div
        ref={ref}
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>My Skill Set</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive overview of technical expertise and soft skills developed through years of professional experience.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-16">
          {/* Soft Skills Column */}
          <motion.div variants={containerVariants} className="space-y-10">
            <motion.h3 variants={itemVariants} className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Soft Skills</motion.h3>

            <motion.div variants={containerVariants} className="space-y-8">
              {/* Leadership */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* Icon omitted for brevity */}
                  <h4 className={`text-lg font-medium ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Leadership</h4>
                </div>
                <p className="text-sm text-muted-foreground">Team management & project coordination</p>
                <SkillBar value={85} color="#3498db" />
              </motion.div>

              {/* Communication */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* Icon omitted for brevity */}
                  <h4 className={`text-lg font-medium ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Communication</h4>
                </div>
                <p className="text-sm text-muted-foreground">Clear & effective communication</p>
                <SkillBar value={90} color="#e74c3c" />
              </motion.div>

              {/* Problem Solving */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* Icon omitted for brevity */}
                  <h4 className={`text-lg font-medium ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Problem Solving</h4>
                </div>
                <p className="text-sm text-muted-foreground">Analytical & creative solutions</p>
                <SkillBar value={80} color="#f1c40f" />
              </motion.div>
            </motion.div>

            {/* Soft Skills Button */}
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
            <motion.h3 variants={itemVariants} className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Technical Skills</motion.h3>

            <motion.div variants={containerVariants} className="space-y-8">
              {/* Frontend Development */}
              <motion.div variants={itemVariants}>
                <h4 className={`text-lg font-medium mb-4 ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Frontend Development</h4>
                <div className="space-y-4">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>React</span>
                      <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>95%</span>
                    </div>
                    <SkillBar value={95} color="#61dafb" />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Vue.js</span>
                      <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>85%</span>
                    </div>
                    <SkillBar value={85} color="#42b883" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Backend Development */}
              <motion.div variants={itemVariants}>
                <h4 className={`text-lg font-medium mb-4 ${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Backend Development</h4>
                <div className="space-y-4">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Node.js</span>
                      <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>90%</span>
                    </div>
                    <SkillBar value={90} color="#68a063" />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>Python</span>
                      <span className={`${theme === 'dark' ? 'text-background' : 'text-foreground'}`}>80%</span>
                    </div>
                    <SkillBar value={80} color="#3572A5" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-medium mb-4">Tools & Technologies</h4>
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-[#333] text-white px-3 py-1">Git</Badge>
                  <Badge variant="secondary" className="bg-[#2496ED] text-white px-3 py-1">Docker</Badge>
                  <Badge variant="secondary" className="bg-[#FF9900] text-white px-3 py-1">AWS</Badge>
                  <Badge variant="secondary" className="bg-[#326CE5] text-white px-3 py-1">Kubernetes</Badge>
                  <Badge variant="secondary" className="bg-[#D24939] text-white px-3 py-1">Jenkins</Badge>
                </motion.div>
              </motion.div>
              
            </motion.div>
          </motion.div>
        </div>
        <SkillsMarquee items={skills} theme={themeRevert} direction='left' />
      </motion.div>
    </>
  );
};

export default SkillSection;