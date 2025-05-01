
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { Button } from '@/components/ui/button';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <PageLayout 
      title="Professional Experience" 
      description="A journey through my professional career highlighting key roles and achievements."
      showBackButton
    >
      <AnimatedPage>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />
        
        <AnimatedSection>
          <ExperienceTimeline />
        </AnimatedSection>
              
        <AnimatedSection delay={0.2} className="text-center mt-12">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Button className="transition-all">
              Download Resume
            </Button>
          </motion.div>
        </AnimatedSection>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Experience;
