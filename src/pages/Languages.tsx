
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import SkillBar from '@/components/SkillBar';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const Languages = () => {
  const languages = [
    {
      id: 1,
      name: "English",
      level: "Native",
      proficiency: 100,
      color: "#3498db",
      flag: "🇺🇸"
    },
    {
      id: 2,
      name: "Spanish",
      level: "Fluent",
      proficiency: 85,
      color: "#e74c3c",
      flag: "🇪🇸"
    },
    {
      id: 3,
      name: "French",
      level: "Intermediate",
      proficiency: 65,
      color: "#f1c40f",
      flag: "🇫🇷"
    },
    {
      id: 4,
      name: "German",
      level: "Basic",
      proficiency: 40,
      color: "#2ecc71",
      flag: "🇩🇪"
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (value: number) => ({
      width: `${value}%`,
      transition: { 
        duration: 1, 
        ease: "easeOut",
        delay: 0.5
      }
    })
  };
  
  return (
    <PageLayout 
      title="Language Proficiency" 
      description="Overview of my communication capabilities across different languages."
      showBackButton
    >
      <AnimatedPage>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {languages.map((language, index) => (
            <motion.div key={language.id} variants={item}>
              <AnimatedSection delay={0.1 * index}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-card/60 backdrop-blur-lg border-border/40 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.span 
                            className="text-2xl"
                            initial={{ rotate: -10 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 * index }}
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          >
                            {language.flag}
                          </motion.span>
                          <div>
                            <h3 className="font-bold text-lg">{language.name}</h3>
                            <div className="text-sm text-muted-foreground">{language.level}</div>
                          </div>
                        </div>
                        <motion.div 
                          className="text-right"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <div className="text-lg font-bold">{language.proficiency}%</div>
                        </motion.div>
                      </div>
                      
                      <motion.div
                        custom={language.proficiency}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <SkillBar value={language.proficiency} color={language.color} />
                      </motion.div>
                      
                      <motion.div 
                        className="mt-4 grid grid-cols-4 gap-2 text-center text-xs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className={`p-2 rounded ${language.proficiency >= 25 ? 'bg-primary/20' : 'bg-muted'}`}>
                          Basic
                        </div>
                        <div className={`p-2 rounded ${language.proficiency >= 50 ? 'bg-primary/20' : 'bg-muted'}`}>
                          Intermediate
                        </div>
                        <div className={`p-2 rounded ${language.proficiency >= 75 ? 'bg-primary/20' : 'bg-muted'}`}>
                          Advanced
                        </div>
                        <div className={`p-2 rounded ${language.proficiency >= 95 ? 'bg-primary/20' : 'bg-muted'}`}>
                          Native
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            </motion.div>
          ))}
        </motion.div>
        
        <AnimatedSection delay={0.5}>
          <Card className="mt-12 bg-card/40 backdrop-blur-lg border-border/40">
            <CardContent className="p-6">
              <motion.h3 
                className="font-bold text-lg mb-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Language Learning Journey
              </motion.h3>
              <motion.p 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                My passion for languages began during my travels across Europe, where I discovered the power of connecting
                with people in their native tongue. I've been actively studying languages for over 10 years, using a
                combination of immersive learning, structured courses, and regular practice with native speakers.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Currently focusing on improving my German to reach business proficiency and beginning to explore Japanese
                as my next language challenge.
              </motion.p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Languages;
