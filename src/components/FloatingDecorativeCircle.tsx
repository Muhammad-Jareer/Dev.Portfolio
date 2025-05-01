
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingDecorativeCircleProps {
  className?: string;
}

const FloatingDecorativeCircle: React.FC<FloatingDecorativeCircleProps> = ({ className }) => {
  return (
    <motion.div 
      className={`rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 pointer-events-none z-0 opacity-50 ${className}`}
      animate={{ 
        scale: [1, 1.3, 1], 
        rotate: [0, 3, 0] 
      }}
      transition={{ 
        duration: 10, 
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
  );
};

export default FloatingDecorativeCircle;
