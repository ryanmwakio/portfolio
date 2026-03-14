'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="#home"
      className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glass morphism container */}
      <motion.div
        className="absolute inset-0 glass-card rounded-2xl backdrop-blur-xl border border-[var(--sci-fi-border-bright)]"
        animate={{
          rotate: isHovered ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--sci-fi-accent)] rounded-tl-2xl opacity-70"
        animate={{
          opacity: isHovered ? [0.4, 1, 0.4] : 0.4,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--sci-fi-accent)] rounded-br-2xl opacity-70"
        animate={{
          opacity: isHovered ? [0.4, 1, 0.4] : 0.4,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.75,
        }}
      />
      
      {/* Letters with premium styling */}
      <div className="relative z-10 flex items-center justify-center gap-0.5">
        <motion.span
          className="text-[var(--sci-fi-text)] font-bold text-xl sm:text-2xl tracking-tight"
          animate={{
            y: isHovered ? [0, -3, 0] : 0,
            rotate: isHovered ? [0, -5, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          R
        </motion.span>
        <motion.span
          className="text-[var(--sci-fi-text)] font-bold text-xl sm:text-2xl tracking-tight"
          animate={{
            y: isHovered ? [0, 3, 0] : 0,
            rotate: isHovered ? [0, 5, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          M
        </motion.span>
      </div>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-white/10 blur-md"
        animate={{
          opacity: isHovered ? [0.3, 0.6, 0.3] : 0.2,
          scale: isHovered ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.a>
  );
}

