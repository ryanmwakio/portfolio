'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CanvasTransition({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Small delay so the canvas is visible before it starts opening
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsOpen(true));
    });
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <>
      {/* Canvas overlay: two panels that slide apart */}
      <div className="fixed inset-0 z-[100] pointer-events-none flex">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-black"
          initial={{ x: 0 }}
          animate={{ x: isOpen ? '-100%' : 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 bg-black"
          initial={{ x: 0 }}
          animate={{ x: isOpen ? '100%' : 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        {/* Center seam line that expands */}
        <motion.div
          className="absolute inset-y-0 left-1/2 w-px bg-white/20 -translate-x-px"
          initial={{ scaleY: 1, opacity: 0.8 }}
          animate={{
            scaleY: isOpen ? 0 : 1,
            opacity: isOpen ? 0 : 0.8,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
      {children}
    </>
  );
}
