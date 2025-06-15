import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useData } from '@/hooks/useData';

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
  // Adjusted endpoint to fetch stats data
  const { data, loading, error } = useData('counters/counters/');
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  if (loading) return <p>Loading stats...</p>;
  if (error || !data?.results) return <p>Error loading stats.</p>;

  return (
    <motion.div
      ref={ref}
      className="container mx-auto mt-12"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.results.map((stat: { id: number; title: string; value: number }) => {
          // Decide suffix based on title
          const lower = stat.title.toLowerCase();
          const suffix = lower.includes('retention') ? '%' : '+';
          return (
            <motion.div key={stat.id} variants={cardVariants}>
              <Card className="p-4 mt-12 text-center backdrop-blur-lg bg-card/60 border-muted hover:shadow-lg transition-shadow group">
                <p className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                  {stat.value}{suffix}
                </p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProfileStats;
