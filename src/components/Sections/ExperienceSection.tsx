import React, { useEffect } from 'react';
import ExperienceTimeline from '../ExperienceTimeline';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import FloatingDecorativeCircle from '../FloatingDecorativeCircle';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

// Stagger container
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

// Header animation
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Button animation
const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } }
};

const ExperienceSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });
  

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  return (
    <>
    {isSmallDevice && (
      <>
        <FloatingDecorativeCircle className="absolute bottom-24 right-10 w-32 h-32" />
        <FloatingDecorativeCircle className="absolute top-24 left-10 w-48 h-48" />
      </>
    )}

      <motion.div
        ref={ref}
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={headerVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional career highlighting key roles and achievements.
          </p>
        </motion.div>

        <ExperienceTimeline />

        <motion.div variants={buttonVariants} className="text-center mt-12">
          <Link to="/experience">
            <Button className="hover:scale-105 transition-all">View Full Experience</Button>
          </Link>
        </motion.div>
      </motion.div>

    </>
  );
};

export default ExperienceSection;