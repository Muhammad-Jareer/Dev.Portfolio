import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Container will stagger its children
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Each card fades up
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ProfileStats: React.FC = () => {
  // Controls for animation
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false, // allow re-animation every time
  });

  // Start 'show' when in view, reset to 'hidden' when out
  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="container mx-auto mt-12"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="7+" label="Years Experience" />
        <StatCard value="50+" label="Projects Completed" />
        <StatCard value="20+" label="Happy Clients" />
        <StatCard value="15+" label="Open Source Contributions" />
      </div>
    </motion.div>
  );
};

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <motion.div variants={cardVariants}>
    <Card className="p-4 mt-12 text-center backdrop-blur-lg bg-card/60 border-muted hover:shadow-lg transition-shadow group">
      <p className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
        {value}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </Card>
  </motion.div>
);

export default ProfileStats;
