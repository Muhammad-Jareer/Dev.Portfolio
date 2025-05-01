
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedPage from '@/components/AnimatedPage';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "IBM Innovation Award",
      year: "2024",
      description: "Recognized for developing an AI-powered solution that reduced customer service response time by 45%.",
      icon: "award"
    },
    {
      id: 2,
      title: "Speaker at React Conference",
      year: "2023",
      description: "Selected as a keynote speaker for React Global Summit, presenting on advanced state management techniques.",
      icon: "microphone"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      year: "2023",
      description: "Contributed significant features to popular React libraries with over 10,000 stars on GitHub.",
      icon: "github"
    },
    {
      id: 4,
      title: "Best Mobile App Award",
      year: "2022",
      description: "Won the industry-recognized award for an innovative health tracking application.",
      icon: "smartphone"
    }
  ];
  
  return (
    <PageLayout 
      title="Key Achievements" 
      description="Highlights of significant milestones and recognition throughout my career."
      showBackButton
    >
      <AnimatedPage>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />
        
        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={achievement.id} delay={0.15 * index}>
              <motion.div 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-full md:w-1/3"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-card/60 backdrop-blur-lg border-border/40 overflow-hidden">
                    <CardContent className="p-6 flex items-center justify-center">
                      <motion.div 
                        className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        {achievement.icon === "award" && (
                          <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {achievement.icon === "microphone" && (
                          <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="12" y1="19" x2="12.01" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="8" y1="23" x2="16" y2="23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {achievement.icon === "github" && (
                          <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {achievement.icon === "smartphone" && (
                          <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <div className="w-full md:w-2/3">
                  <motion.div 
                    className="p-6 bg-card/40 backdrop-blur-lg border border-border/40 rounded-lg"
                    initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 * index }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                      <span className="text-sm text-muted-foreground">{achievement.year}</span>
                    </div>
                    <p>{achievement.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Achievements;
