'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="glass-card p-2.5 sm:p-3 rounded-xl backdrop-blur-xl dark:bg-white/10 light:bg-black/10 w-[42px] h-[42px] sm:w-[48px] sm:h-[48px]" />
    );
  }

  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="glass-card p-2.5 sm:p-3 rounded-xl backdrop-blur-xl dark:bg-white/10 light:bg-black/10 dark:border-white/20 light:border-black/20 dark:text-white light:text-black dark:hover:bg-white/20 light:hover:bg-black/20 transition-all relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="relative w-5 h-5 sm:w-6 sm:h-6"
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {theme === 'dark' ? (
          <Moon className="w-full h-full" />
        ) : (
          <Sun className="w-full h-full" />
        )}
      </motion.div>
    </motion.button>
  );
}

