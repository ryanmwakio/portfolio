'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Zap, Rocket, ChevronRight } from 'lucide-react';

const featureCards = [
  { icon: Code, label: 'Clean Code', description: 'Maintainable & scalable' },
  { icon: Zap, label: 'Performance', description: 'Optimized solutions' },
  { icon: Rocket, label: 'Scalability', description: 'Enterprise ready' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:space-y-12">
         

          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-2 w-fit"
          >
            <div className="glass-card px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10">
              <span className="text-sm sm:text-base text-white/80 font-medium">Software Developer</span>
            </div>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronRight className="w-5 h-5 text-white/40" />
            </motion.div>
          </motion.div>

           {/* Name - One liner above heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight"
          >
            Ryan Mwakio
          </motion.h1>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Building Digital
              <br />
              <span className="text-white/90">Experiences</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
          >
            Crafting elegant solutions with modern technologies. 
            Specialized in building scalable applications and robust systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              className="glass-card px-6 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white font-medium text-center hover:bg-white/15 transition-all duration-300 inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
              <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
            </motion.a>
            <motion.a
              href="#contact"
              className="glass-card px-6 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white/90 font-medium text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column - Feature Cards */}
        <div className="lg:col-span-5 space-y-4">
          {featureCards.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                whileHover={{ x: -5, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-white transition-colors">
                      {feature.label}
                    </h3>
                    <p className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

