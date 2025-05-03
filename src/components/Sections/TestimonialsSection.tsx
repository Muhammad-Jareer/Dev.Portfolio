// src/components/TestimonialsSection.tsx

import React, { useEffect } from 'react';
import FloatingDecorativeCircle from '../FloatingDecorativeCircle';
import TestimonialCard from '../TestimonialCard';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useTheme } from '@/hooks/use-theme';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CTO at TechCorp',
    image: 'public/lovable-uploads/adb7561a-8e53-4eea-af78-320f8ca083b0.png',
    stars: 5,
    text: 'An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.',
    category: 'Enterprise Project',
  },
  {
    name: 'Sarah Smith',
    role: 'Product Manager',
    image: 'public/lovable-uploads/d2ac0d4f-4a10-4ee9-8f3e-920c3592c2be.png',
    stars: 5,
    text: 'Incredible work ethic and technical expertise. They went above and beyond to ensure our project\'s success.',
    category: 'Freelance Project',
  },
  {
    name: 'Mike Johnson',
    role: 'Open Source Maintainer',
    image: 'public/lovable-uploads/cca4454b-c13b-4007-a1a1-ba6315312083.png',
    stars: 4,
    text: 'Their contributions to our open source project have been invaluable. Great team player with excellent communication skills.',
    category: 'Open Source Contribution',
  },
];

// Container to stagger child animations
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Common item variants for header, cards, and button
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const TestimonialsSection: React.FC = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  return (
    <>
      <FloatingDecorativeCircle className="absolute bottom-24 right-10 w-64 h-64" />

      <motion.div
        ref={ref}
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-background' : 'text-foreground'
            }`}
          >
            Client Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What people say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <TestimonialCard
                name={t.name}
                role={t.role}
                image={t.image}
                stars={t.stars}
                text={t.text}
                category={t.category}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <Link to="/testimonials">
            <Button variant="outline" className="hover:scale-105 transition-all">
              View All Testimonials
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TestimonialsSection;
