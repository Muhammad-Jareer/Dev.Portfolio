
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HoverAnimatedAvatarProps {
  children: React.ReactNode;
}

export const HoverAnimatedAvatar: React.FC<HoverAnimatedAvatarProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ 
        scale: 1,
        opacity: 1,
        x: isHovered ? 20 : 0,
        rotateZ: isHovered ? 5 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
};
