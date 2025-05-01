
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import TestimonialCard from '@/components/TestimonialCard';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import TabFilter from '@/components/TabFilter';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const tabs = [
    { id: "all", label: "All" },
    { id: "corporate", label: "Corporate" },
    { id: "freelance", label: "Freelance" },
    { id: "opensource", label: "Open Source" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <PageLayout 
      title="Client Testimonials" 
      description="What people say about working with me."
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <AnimatedSection delay={0.1}>
              <TestimonialCard 
                name="John Doe"
                role="CTO at TechCorp"
                image="public/lovable-uploads/adb7561a-8e53-4eea-af78-320f8ca083b0.png"
                stars={5}
                text="An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding."
                category="Enterprise Project"
              />
            </AnimatedSection>
          </motion.div>
                
          <motion.div variants={item}>
            <AnimatedSection delay={0.2}>
              <TestimonialCard 
                name="Sarah Smith"
                role="Product Manager"
                image="public/lovable-uploads/d2ac0d4f-4a10-4ee9-8f3e-920c3592c2be.png"
                stars={5}
                text="Incredible work ethic and technical expertise. They went above and beyond to ensure our project's success."
                category="Freelance Project"
              />
            </AnimatedSection>
          </motion.div>
                
          <motion.div variants={item}>
            <AnimatedSection delay={0.3}>
              <TestimonialCard 
                name="Mike Johnson"
                role="Open Source Maintainer"
                image="public/lovable-uploads/cca4454b-c13b-4007-a1a1-ba6315312083.png"
                stars={4}
                text="Their contributions to our open source project have been invaluable. Great team player with excellent communication skills."
                category="Open Source Contribution"
              />
            </AnimatedSection>
          </motion.div>
        </motion.div>
        
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="outline" className="transition-all">
              Add Your Testimonial
            </Button>
          </motion.div>
        </AnimatedSection>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Testimonials;
