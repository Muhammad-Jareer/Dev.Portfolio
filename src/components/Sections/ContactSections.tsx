// src/components/ContactSections.tsx

import React, { useEffect } from 'react';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

// Wrap Button to use motion props like whileHover, whileTap
const MotionButton = motion(Button);

// Animation container variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animation for each item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ContactSections: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [inView, controls]);

  return (
    <div className="relative py-16">
      <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
      <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />

      <motion.div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 sm:p-8 backdrop-blur-lg bg-card/60 border-muted hover:shadow-xl transition-shadow">
              <form className="space-y-4 sm:space-y-6">
                {['name', 'email'].map((field) => (
                  <motion.div key={field} variants={itemVariants}>
                    <label htmlFor={field} className="block text-sm font-medium mb-1">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      placeholder={field === 'email' ? 'you@example.com' : 'Your name'}
                      className="w-full px-4 py-2 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    />
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="pt-2">
                  <MotionButton
                    className="w-full py-3"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    Send Message
                  </MotionButton>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 sm:p-8 backdrop-blur-lg bg-card/60 border-muted hover:shadow-xl transition-shadow">
              {[
                { type: 'Phone', value: '(123) 456-7890', icon: <Github className="text-primary" size={20} /> },
                { type: 'Email', value: 'contact@example.com', icon: <Twitter className="text-primary" size={20} /> },
                { type: 'Location', value: 'San Francisco, CA', icon: <Instagram className="text-primary" size={20} /> },
              ].map(({ type, value, icon }) => (
                <motion.div
                  key={type}
                  variants={itemVariants}
                  className="flex items-start gap-4 mb-6"
                >
                  <span className="mt-1">{icon}</span>
                  <div>
                    <h4 className="text-sm font-medium">{type}</h4>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                </motion.div>
              ))}

              <motion.h3 variants={itemVariants} className="text-sm font-medium mb-4">
                Connect on Social Media
              </motion.h3>

              <div className="flex gap-4">
                {[
                  { name: 'github', icon: <Github size={24} /> },
                  { name: 'linkedin', icon: <Linkedin size={24} /> },
                  { name: 'twitter', icon: <Twitter size={24} /> },
                  { name: 'instagram', icon: <Instagram size={24} /> },
                ].map(({ name, icon }) => (
                  <motion.a
                    key={name}
                    href="#"
                    variants={itemVariants}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSections;
