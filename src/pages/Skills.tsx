
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SkillBar from '@/components/SkillBar';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillBarVariant = {
    hidden: { width: 0 },
    visible: (value: number) => ({
      width: `${value}%`,
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    })
  };

  const badgeVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    })
  };

  const badges = ["Git", "Docker", "AWS", "Kubernetes", "Jenkins"];

  return (
    <PageLayout 
      title="My Skill Set" 
      description="Comprehensive overview of technical expertise and soft skills developed through years of professional experience."
      showBackButton
    >
      <AnimatedPage>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />
        
        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection>
            <motion.div className="space-y-10">
              <motion.h3 
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Soft Skills
              </motion.h3>
              
              <div className="space-y-8">
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.span 
                      className="text-yellow-400"
                      animate={{ rotate: [0, 10, -10, 10, 0] }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l1.8 5.8h5.9l-4.7 3.5 1.8 5.8-4.8-3.5-4.7 3.5 1.8-5.8L4 7.8h5.9L12 2z" />
                      </svg>
                    </motion.span>
                    <h4 className="text-lg font-medium">Leadership</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Team management & project coordination</p>
                  <motion.div 
                    custom={85}
                    variants={skillBarVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <SkillBar value={85} color="#3498db" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.span 
                      className="text-pink-500"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                      </svg>
                    </motion.span>
                    <h4 className="text-lg font-medium">Communication</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Clear & effective communication</p>
                  <motion.div 
                    custom={90}
                    variants={skillBarVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <SkillBar value={90} color="#e74c3c" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.span 
                      className="text-yellow-500"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
                        <path d="M12 3v2" />
                        <path d="M12 19v2" />
                        <path d="M3 12h2" />
                        <path d="M19 12h2" />
                        <path d="m18.364 5.636-1.414 1.414" />
                        <path d="m5.636 18.364 1.414-1.414" />
                        <path d="m18.364 18.364-1.414-1.414" />
                        <path d="m5.636 5.636 1.414 1.414" />
                      </svg>
                    </motion.span>
                    <h4 className="text-lg font-medium">Problem Solving</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Analytical & creative solutions</p>
                  <motion.div 
                    custom={80}
                    variants={skillBarVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <SkillBar value={80} color="#f1c40f" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <motion.div className="space-y-10">
              <motion.h3 
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Technical Skills
              </motion.h3>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-lg font-medium mb-4">Frontend Development</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>React</span>
                        <span>95%</span>
                      </div>
                      <motion.div 
                        custom={95}
                        variants={skillBarVariant}
                        initial="hidden"
                        animate="visible"
                      >
                        <SkillBar value={95} color="#61dafb" />
                      </motion.div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Vue.js</span>
                        <span>85%</span>
                      </div>
                      <motion.div 
                        custom={85}
                        variants={skillBarVariant}
                        initial="hidden"
                        animate="visible"
                      >
                        <SkillBar value={85} color="#42b883" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-lg font-medium mb-4">Backend Development</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Node.js</span>
                        <span>90%</span>
                      </div>
                      <motion.div 
                        custom={90}
                        variants={skillBarVariant}
                        initial="hidden"
                        animate="visible"
                      >
                        <SkillBar value={90} color="#68a063" />
                      </motion.div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Python</span>
                        <span>80%</span>
                      </div>
                      <motion.div 
                        custom={80}
                        variants={skillBarVariant}
                        initial="hidden"
                        animate="visible"
                      >
                        <SkillBar value={80} color="#3572A5" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-lg font-medium mb-4">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                      <motion.div
                        key={badge}
                        custom={index}
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Badge 
                          variant="secondary" 
                          className={`
                            ${badge === 'Git' ? 'bg-[#333]' : ''}
                            ${badge === 'Docker' ? 'bg-[#2496ED]' : ''}
                            ${badge === 'AWS' ? 'bg-[#FF9900]' : ''}
                            ${badge === 'Kubernetes' ? 'bg-[#326CE5]' : ''}
                            ${badge === 'Jenkins' ? 'bg-[#D24939]' : ''}
                            text-white px-3 py-1`
                          }
                        >
                          {badge}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Skills;
