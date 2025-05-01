
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import TabFilter from '@/components/TabFilter';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const Platforms = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const tabs = [
    { id: "all", label: "All Platforms" },
    { id: "freelance", label: "Freelance" },
    { id: "professional", label: "Professional" },
    { id: "social", label: "Social" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const statItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <PageLayout 
      title="Working Platforms" 
      description="Explore my presence across various professional platforms."
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
          className="grid md:grid-cols-3 gap-8 mt-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <PlatformCard 
              name="Upwork"
              icon="upwork"
              tagline="Top Rated Plus"
              metrics={[
                { label: "Projects Completed", value: "120+" },
                { label: "Success Rate", value: "98%" }
              ]}
              buttonText="View Profile"
              buttonIcon="external-link"
              color="green"
              category="freelance"
              active={activeTab}
            />
          </motion.div>
          
          <motion.div variants={item}>
            <PlatformCard 
              name="Fiverr"
              icon="fiverr"
              tagline="Level 2 Seller"
              metrics={[
                { label: "Orders Completed", value: "85+" },
                { label: "Rating", value: "4.9/5.0" }
              ]}
              buttonText="View Gigs"
              buttonIcon="external-link"
              color="teal"
              category="freelance"
              active={activeTab}
            />
          </motion.div>
          
          <motion.div variants={item}>
            <PlatformCard 
              name="LinkedIn"
              icon="linkedin"
              tagline="500+ Connections"
              metrics={[
                { label: "Profile Views", value: "1,200+" },
                { label: "Endorsements", value: "50+" }
              ]}
              buttonText="Connect"
              buttonIcon="external-link"
              color="blue"
              category="social"
              active={activeTab}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={statItem} custom={0}>
            <StatCard value="200+" label="Total Projects" color="blue" />
          </motion.div>
          <motion.div variants={statItem} custom={1}>
            <StatCard value="98%" label="Success Rate" color="pink" />
          </motion.div>
          <motion.div variants={statItem} custom={2}>
            <StatCard value="4.9" label="Average Rating" color="amber" />
          </motion.div>
          <motion.div variants={statItem} custom={3}>
            <StatCard value="5k+" label="Working Hours" color="green" />
          </motion.div>
        </motion.div>
      </AnimatedPage>
    </PageLayout>
  );
};

interface PlatformCardProps {
  name: string;
  icon: string;
  tagline: string;
  metrics: { label: string; value: string }[];
  buttonText: string;
  buttonIcon: string;
  color: string;
  category: string;
  active: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ 
  name, 
  icon, 
  tagline, 
  metrics, 
  buttonText, 
  buttonIcon, 
  color,
  category,
  active
}) => {
  if (active !== "all" && active !== category) return null;
  
  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  return (
    <Card className="bg-card/60 backdrop-blur-lg border-border/40 overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            {icon === "upwork" && (
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
              </div>
            )}
            {icon === "fiverr" && (
              <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.558 0-1.236.83-2.527 2.47-2.527 1.602 0 2.432 1.202 2.432 2.434v.516zm-3.368-.78h1.855c-.088-.517-.43-.78-.918-.78-.489 0-.83.263-.937.78zm-2.08-2.594v4.874h-1.611v-3.558h-.38V10.01h1.991zm-2.402 2.594h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.352.848-1.22 1.364-2.256 1.364-1.748 0-2.548-1.355-2.548-2.558 0-1.236.83-2.527 2.47-2.527 1.602 0 2.432 1.202 2.432 2.434v.516zm-3.368-.78h1.855c-.088-.517-.43-.78-.918-.78-.488 0-.83.263-.937.78zm-2.119-1.13h-.528v2.798h-.547c-.547 0-.84.41-.84 1.093v.195h-1.738c-.313 0-.626.264-.626.887 0 .624.313.888.626.888h.225v.176c0 .243-.04.409-.225.409h-.44V15.48h1.435c.9 0 1.444-.4 1.444-1.56V11.01h1.533v3.558h1.61V10.01H1.885v2.384z" />
                </svg>
              </div>
            )}
            {icon === "linkedin" && (
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg">{name}</h3>
            <div className="text-sm text-muted-foreground">{tagline}</div>
          </motion.div>
        </div>
        
        {metrics.map((metric, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span>{metric.label}</span>
              <motion.span 
                className="font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {metric.value}
              </motion.span>
            </div>
            <motion.div 
              className={`h-2 rounded-full ${getColorClass(color)}`}
              variants={barVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
          </div>
        ))}
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Button 
            className={`w-full mt-4 ${getButtonColorClass(color)}`}
          >
            {buttonText}
            <svg 
              className="w-4 h-4 ml-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 3H21V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, color }) => {
  return (
    <motion.div 
      className="text-center"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        className={`text-3xl font-bold mb-2 ${getStatColorClass(color)}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {value}
      </motion.div>
      <motion.div 
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

// Helper functions for dynamic color classes
const getColorClass = (color: string) => {
  switch (color) {
    case 'green': return 'bg-green-500';
    case 'teal': return 'bg-teal-500';
    case 'blue': return 'bg-blue-500';
    case 'pink': return 'bg-pink-500';
    case 'amber': return 'bg-amber-500';
    default: return 'bg-primary';
  }
};

const getButtonColorClass = (color: string) => {
  switch (color) {
    case 'green': return 'bg-green-500 hover:bg-green-600';
    case 'teal': return 'bg-teal-500 hover:bg-teal-600';
    case 'blue': return 'bg-blue-500 hover:bg-blue-600';
    default: return '';
  }
};

const getStatColorClass = (color: string) => {
  switch (color) {
    case 'blue': return 'text-blue-500';
    case 'pink': return 'text-pink-500';
    case 'amber': return 'text-amber-500';
    case 'green': return 'text-green-500';
    default: return '';
  }
};

export default Platforms;
