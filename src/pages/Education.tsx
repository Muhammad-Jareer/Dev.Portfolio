import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <PageLayout 
      title="Education" 
      description="My academic journey and qualifications that shaped my expertise."
      showBackButton
    >
      <AnimatedPage>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />
        
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <Card className="bg-card/60 backdrop-blur-lg border-border/40 mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                  <motion.div 
                    className="bg-primary/10 p-4 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg
                      className="w-10 h-10 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 14L11.2 17.8L9 16.9L12 14ZM7 12.9L5.8 13.8C5.3 14.1 5 14.7 5 15.3V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V15.3C19 14.7 18.7 14.1 18.2 13.8L17 12.9M12 4L10 6H14L12 4ZM17 8V8.8L12 12L7 8.8V8H17ZM17 7H7C5.9 7 5 7.9 5 9V10C5 10.7 5.4 11.4 6 11.7L11 14.9C11.6 15.3 12.4 15.3 13 14.9L18 11.7C18.6 11.4 19 10.7 19 10V9C19 7.9 18.1 7 17 7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-2xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Master of Computer Science
                    </motion.h3>
                    <div className="text-primary font-semibold">Stanford University</div>
                    <div className="text-muted-foreground">2023 - 2025</div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="mb-4">
                    Specialization in Artificial Intelligence and Machine Learning with focus on Neural Networks
                    and Deep Learning.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <motion.ul 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                  >
                    <motion.li 
                      className="flex items-start gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>GPA: 3.9/4.0</span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Research Assistant in AI Lab</span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Published 2 research papers</span>
                    </motion.li>
                  </motion.ul>
                </div>
                
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Badge className="bg-[#1080b0] text-white">Machine Learning</Badge>
                  <Badge className="bg-[#F472B6] text-white">Deep Learning</Badge>
                  <Badge className="bg-[#FBEB5B] text-slate-800">Neural Networks</Badge>
                </motion.div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          {/* Second education card */}
          <AnimatedSection delay={0.3}>
            <Card className="bg-card/60 backdrop-blur-lg border-border/40 mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <svg
                      className="w-10 h-10 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9H8V15H6V9ZM16 9H18V15H16V9ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science</h3>
                    <div className="text-primary font-semibold">MIT</div>
                    <div className="text-muted-foreground">2019 - 2023</div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="mb-4">
                    Comprehensive study of computer science fundamentals with emphasis on software
                    engineering and systems design.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Notable Coursework:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Advanced Algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Database Systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Software Architecture</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#1080b0] text-white">Algorithms</Badge>
                  <Badge className="bg-[#F472B6] text-white">Data Structures</Badge>
                  <Badge className="bg-[#FBEB5B] text-slate-800">Systems Design</Badge>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <div className="mt-12 mb-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Professional Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/60 backdrop-blur-lg border-border/40">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <svg
                        className="w-6 h-6 text-amber-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.12104 17.8047H7.95564V16.4726H5.12104V17.8047ZM5.12104 12.5H7.95564V11.168H5.12104V12.5ZM5.12104 7.19533H7.95564V5.86327H5.12104V7.19533ZM10.7902 17.8047H13.6249V16.4726H10.7902V17.8047ZM10.7902 12.5H13.6249V11.168H10.7902V12.5ZM10.7902 5.86327V7.19533H13.6249V5.86327H10.7902ZM16.4595 17.8047H19.2941V16.4726H16.4595V17.8047ZM16.4595 12.5H19.2941V11.168H16.4595V12.5ZM16.4595 7.19533H19.2941V5.86327H16.4595V7.19533Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">AWS Solutions Architect</h3>
                      <div className="text-sm text-muted-foreground">Amazon Web Services</div>
                      <div className="text-sm mt-1">Completed 2024</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/60 backdrop-blur-lg border-border/40">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 11.1L14.9 8.2L17.7 11.1L19.8 8.9L12 1L4.2 8.9L6.3 11.1L9.1 8.2L12 11.1ZM4.2 15.1L6.3 13L4.2 10.9L2 13L4.2 15.1ZM12 18.9L9.1 15.9L6.3 18.9L4.2 16.7L12 8.9L19.8 16.7L17.7 18.9L14.9 15.9L12 18.9ZM19.8 10.9L17.7 13L19.8 15.1L22 13L19.8 10.9ZM13.9 13.9L12 15.8L10.1 13.9L8 16L12 20L16 16L13.9 13.9Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Google Cloud Professional</h3>
                      <div className="text-sm text-muted-foreground">Google Cloud Platform</div>
                      <div className="text-sm mt-1">Completed 2023</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <AnimatedSection delay={0.5} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button>
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Transcripts
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Education;
