'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionDividerProps {
  variant?: 'default' | 'minimal' | 'elegant';
}

export default function SectionDivider({ variant = 'default' }: SectionDividerProps) {
  if (variant === 'minimal') {
    return (
      <div className="relative py-10 sm:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Animated gradient line */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/10 light:via-black/10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            
            {/* Subtle glow effect */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-white/5 dark:bg-white/5 light:bg-black/5 blur-sm"
              animate={{
                width: ['128px', '200px', '128px'],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'elegant') {
    return (
      <div className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Main gradient line with glow */}
            <motion.div
              className="h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/30 light:via-black/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[2px] bg-white/20 dark:bg-white/20 light:bg-black/20 blur-md"
              animate={{
                width: ['256px', '400px', '256px'],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Center decorative element */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
              <motion.div
                className="w-1 h-8 rounded-full bg-white/30 dark:bg-white/30 light:bg-black/30"
                animate={{
                  height: ['32px', '40px', '32px'],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-white/40 dark:text-white/40 light:text-black/40" />
              </motion.div>
              <motion.div
                className="w-1 h-8 rounded-full bg-white/30 dark:bg-white/30 light:bg-black/30"
                animate={{
                  height: ['32px', '40px', '32px'],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>

            {/* Side geometric shapes */}
            <motion.div
              className="absolute left-8 sm:left-16 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 dark:border-white/10 light:border-black/10 rotate-45"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div
              className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 dark:border-white/10 light:border-black/10 rotate-45"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Side accent lines */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 sm:w-32 h-px bg-gradient-to-r from-white/15 to-transparent dark:from-white/15 light:from-black/15" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 sm:w-32 h-px bg-gradient-to-l from-white/15 to-transparent dark:from-white/15 light:from-black/15" />
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main gradient line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent dark:via-white/25 light:via-black/25"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          
          {/* Animated glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-px bg-white/10 dark:bg-white/10 light:bg-black/10 blur-lg"
            animate={{
              width: ['192px', '320px', '192px'],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Decorative dots with enhanced animation */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
            <motion.div
              className="w-2 h-2 rounded-full bg-white/50 dark:bg-white/50 light:bg-black/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-white/60 dark:bg-white/60 light:bg-black/60"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-white/50 dark:bg-white/50 light:bg-black/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
          </div>

          {/* Enhanced side accent lines */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-20 sm:w-32 h-px bg-gradient-to-r from-white/20 to-transparent dark:from-white/20 light:from-black/20"
            initial={{ width: 0 }}
            whileInView={{ width: '128px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-20 sm:w-32 h-px bg-gradient-to-l from-white/20 to-transparent dark:from-white/20 light:from-black/20"
            initial={{ width: 0 }}
            whileInView={{ width: '128px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Corner decorative elements */}
          <motion.div
            className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1 h-6 bg-white/20 dark:bg-white/20 light:bg-black/20 rounded-full"
            animate={{
              height: ['24px', '32px', '24px'],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/4 top-1/2 -translate-y-1/2 w-1 h-6 bg-white/20 dark:bg-white/20 light:bg-black/20 rounded-full"
            animate={{
              height: ['24px', '32px', '24px'],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />
        </div>
      </div>
    </div>
  );
}

