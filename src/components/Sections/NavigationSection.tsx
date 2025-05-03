// src/components/NavigationSection.tsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sections = [
  { path: '/education',      title: 'Education',      description: 'Academic background'      },
  { path: '/certifications', title: 'Certifications', description: 'Professional credentials' },
  { path: '/skills',         title: 'Skills',         description: 'Technical expertise'      },
  { path: '/platforms',      title: 'Platforms',      description: 'Working profiles'         },
];

// Container will stagger its children
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  },
};

// Each card fades up
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

const NavigationSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false   // allow repeated triggering
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="container mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={controls}
        variants={{
          hidden:   { opacity: 0, y: 10 },
          visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
        }}
      >
        Explore My Portfolio
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {sections.map((section, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <Link to={section.path}>
              <div className="p-6 bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                <h3 className="font-bold">{section.title}</h3>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationSection;
