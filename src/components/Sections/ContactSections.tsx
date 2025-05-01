import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const ContactSections = () => {
  const inputVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (custom: number) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };
  
  const contactInfoVariants = {
    initial: { opacity: 0, x: 20 },
    animate: (custom: number) => ({
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.3 + custom * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };
  
  const socialIcons = [
    { name: "github", icon: "github" },
    { name: "linkedin", icon: "linkedin" },
    { name: "twitter", icon: "twitter" },
    { name: "instagram", icon: "instagram" }
  ];
  
  return (
    <div className='container mx-auto'>
      <AnimatedPage>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center`}>Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <Card className="p-8 backdrop-blur-lg bg-card/60 border-muted hover:shadow-xl transition-shadow">
              <form className="space-y-6">
                <motion.div 
                  className="space-y-2"
                  variants={inputVariants}
                  initial="initial"
                  animate="animate"
                  custom={1}
                >
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  variants={inputVariants}
                  initial="initial"
                  animate="animate"
                  custom={2}
                >
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  variants={inputVariants}
                  initial="initial"
                  animate="animate"
                  custom={3}
                >
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="Write your message here..."
                  ></textarea>
                </motion.div>
                
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  animate="animate"
                  custom={4}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Button className="w-full hover:scale-105 transition-all">
                      Send Message
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <Card className="p-8 backdrop-blur-lg bg-card/60 border-muted hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <motion.h3 
                  className="text-xl font-bold mb-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Contact Information
                </motion.h3>
                
                <motion.div 
                  className="flex items-start gap-4"
                  variants={contactInfoVariants}
                  initial="initial"
                  animate="animate"
                  custom={1}
                >
                  <motion.span 
                    className="text-primary mt-1"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </motion.span>
                  <div>
                    <h4 className="text-sm font-medium">Phone</h4>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  variants={contactInfoVariants}
                  initial="initial"
                  animate="animate"
                  custom={2}
                >
                  <motion.span 
                    className="text-primary mt-1"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </motion.span>
                  <div>
                    <h4 className="text-sm font-medium">Email</h4>
                    <p className="text-muted-foreground">contact@example.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  variants={contactInfoVariants}
                  initial="initial"
                  animate="animate"
                  custom={3}
                >
                  <motion.span 
                    className="text-primary mt-1"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </motion.span>
                  <div>
                    <h4 className="text-sm font-medium">Location</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="pt-6"
                  variants={contactInfoVariants}
                  initial="initial"
                  animate="animate"
                  custom={4}
                >
                  <h4 className="text-sm font-medium mb-4">Connect on Social Media</h4>
                  <div className="flex gap-4">
                    {socialIcons.map((social, index) => (
                      <motion.a 
                        key={social.name}
                        href="#" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ y: -5, scale: 1.2 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {social.icon === "github" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        )}
                        {social.icon === "linkedin" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        )}
                        {social.icon === "twitter" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        )}
                        {social.icon === "instagram" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        )}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
        
      </AnimatedPage>
    </div>
  );
};

export default ContactSections;
