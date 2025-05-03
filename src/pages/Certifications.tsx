
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import TabFilter from '@/components/TabFilter';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const tabs = [
    { id: "all", label: "All" },
    { id: "cloud", label: "Cloud" },
    { id: "development", label: "Development" },
    { id: "security", label: "Security" },
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Solutions Architect",
      provider: "Professional",
      organization: "Amazon Web Services",
      logo: "aws",
      description: "Design and deploy scalable, highly available systems on AWS Cloud Infrastructure.",
      verified: true,
      expires: "2026",
      skills: ["Cloud Architecture", "Security", "DevOps"],
      category: "cloud"
    },
    {
      id: 2,
      name: "Google Cloud Engineer",
      provider: "Professional",
      organization: "Google Cloud Platform",
      logo: "google",
      description: "Design, develop, and manage scalable applications using Google Cloud Platform.",
      verified: true,
      expires: "2026",
      skills: ["Cloud Services", "Kubernetes", "Big Data"],
      category: "cloud"
    },
    {
      id: 3,
      name: "Azure Solutions Architect",
      provider: "Expert",
      organization: "Microsoft",
      logo: "azure",
      description: "Design and implement solutions on Microsoft Azure cloud platform.",
      verified: true,
      expires: "2026",
      skills: ["Cloud Solutions", "Azure Services", "Infrastructure"],
      category: "cloud"
    }
  ];

  const filteredCertifications = activeTab === "all" 
    ? certifications 
    : certifications.filter(cert => cert.category === activeTab);

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
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageLayout 
      title="Professional Certifications" 
      description="Validated expertise and continuous learning achievements."
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
          className="grid md:grid-cols-3 gap-6 mt-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={item}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="bg-card/60 backdrop-blur-lg border-border/40 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className="p-3 rounded-lg bg-accent/50"
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {cert.logo === "aws" && (
                          <div className="w-12 h-12 bg-[#232F3E] flex items-center justify-center rounded-md">
                            <span className="text-[#FF9900] text-xl font-bold">AWS</span>
                          </div>
                        )}
                        {cert.logo === "google" && (
                          <div className="w-12 h-12 bg-[#4285F4] flex items-center justify-center rounded-md">
                            <span className="text-white text-xl font-bold">G</span>
                          </div>
                        )}
                        {cert.logo === "azure" && (
                          <div className="w-12 h-12 bg-[#0078D4] flex items-center justify-center rounded-md">
                            <span className="text-white text-xl font-bold">Az</span>
                          </div>
                        )}
                      </motion.div>
                      {cert.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                      <div className="text-primary font-medium mb-1">{cert.provider}</div>
                      <div className="text-sm text-muted-foreground mb-4">{cert.organization}</div>
                    </motion.div>
                    
                    <p className="text-sm mb-4">{cert.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>Expires {cert.expires}</span>
                    </div>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {cert.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button size="sm" variant="outline" className="w-full">
                        Verify Certificate
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Certifications;
