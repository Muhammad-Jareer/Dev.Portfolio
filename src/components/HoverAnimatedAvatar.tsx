import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface HoverAnimatedAvatarProps {
  children: React.ReactNode;
  hoverImageSrc?: string;
  hoverImageAlt?: string;
}

export const HoverAnimatedAvatar: React.FC<HoverAnimatedAvatarProps> = ({
  children,
  hoverImageSrc,
  hoverImageAlt,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);

    if (avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect();

      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
      });
    }
  };

  return (
    <div
      ref={avatarRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0.9 : 1,
          rotateZ: isHovered ? 5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isHovered && hoverImageSrc && (
          <motion.img
            key="hover-img"
            src={hoverImageSrc}
            alt={hoverImageAlt || ''}
            className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          />
        )}

        {isHovered && !hoverImageSrc && (
          <motion.span
            key="white-circle"
            className="absolute inset-0 rounded-full bg-white z-10"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          />
        )}

        {/* Heart Animation */}
          {isHovered && (
            <motion.div
              key="heart"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{ y: -60, opacity: 1, scale: 1.5 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 150,
                damping: 12,
              }}
            >
              <span className="text-[2rem] text-pink-500 drop-shadow-[0_0_10px_rgba(255,105,180,0.7)]">
                💖
              </span>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};
