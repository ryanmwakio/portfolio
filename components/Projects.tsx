'use client';

import { motion } from 'framer-motion';
import ProjectGallery from './ProjectGallery';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--sci-fi-text)] mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-[var(--sci-fi-text-muted)] max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence
          </p>
        </motion.div>

        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
}

