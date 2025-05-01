
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import TabFilter from '@/components/TabFilter';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const Interests = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const tabs = [
    { id: "all", label: "All" },
    { id: "tech", label: "Technology" },
    { id: "creative", label: "Creative" },
    { id: "outdoor", label: "Outdoors" }
  ];
  
  const interests = [
    {
      id: 1,
      title: "Machine Learning",
      description: "Exploring neural networks and deep learning algorithms to solve complex problems.",
      icon: "brain",
      category: "tech"
    },
    {
      id: 2,
      title: "Photography",
      description: "Capturing moments and perspectives through landscape and street photography.",
      icon: "camera",
      category: "creative"
    },
    {
      id: 3,
      title: "Hiking",
      description: "Exploring nature trails and mountains for physical fitness and mental clarity.",
      icon: "mountain",
      category: "outdoor"
    },
    {
      id: 4,
      title: "Game Development",
      description: "Creating interactive experiences and learning about game design principles.",
      icon: "gamepad",
      category: "tech"
    },
    {
      id: 5,
      title: "Playing Guitar",
      description: "Self-taught guitarist with a passion for acoustic fingerstyle and blues.",
      icon: "music",
      category: "creative"
    },
    {
      id: 6,
      title: "Scuba Diving",
      description: "Exploring underwater ecosystems and marine life in their natural habitats.",
      icon: "anchor",
      category: "outdoor"
    }
  ];
  
  const filteredInterests = activeTab === "all" 
    ? interests 
    : interests.filter(interest => interest.category === activeTab);
  
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
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  
  return (
    <PageLayout 
      title="Personal Interests" 
      description="Exploring my hobbies and passions beyond professional work."
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredInterests.map(interest => (
            <motion.div 
              key={interest.id}
              variants={item}
              layout
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card 
                  className="bg-card/60 backdrop-blur-lg border-border/40 overflow-hidden transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="bg-primary/10 p-3 rounded-full"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {interest.icon === "brain" && (
                          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 2C9.5 2 9 6 7.5 8.5C6 11 3 12 2 13.5C1 15 1 19 3.5 20.5C6 22 8.5 20.5 9.5 20C10.5 19.5 11 19 12 19C13 19 13.5 19.5 14.5 20C15.5 20.5 18 22 20.5 20.5C23 19 23 15 22 13.5C21 12 18 11 16.5 8.5C15 6 14.5 2 14.5 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {interest.icon === "camera" && (
                          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="12" cy="13" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {interest.icon === "mountain" && (
                          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3L12 7L16 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1 21L4.5 13.5L9.5 17L13.5 10L23 21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {interest.icon === "gamepad" && (
                          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <line x1="6" y1="12" x2="10" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="8" y1="10" x2="8" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="15" y1="13" x2="15.01" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="18" y1="11" x2="18.01" y2="11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {interest.icon === "music" && (
                          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18V5l12-2v13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="6" cy="18" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="18" cy="16" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {interest.icon === "anchor" && (
                          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="5" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="12" y1="22" x2="12" y2="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5 12H2a10 10 0 0 0 20 0h-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </motion.div>
                      <h3 className="font-bold text-lg">{interest.title}</h3>
                    </div>
                    
                    <motion.p 
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {interest.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Interests;
