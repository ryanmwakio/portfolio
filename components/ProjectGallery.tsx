'use client';

import { motion } from 'framer-motion';
import { useState, useMemo, useCallback } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToProject = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Memoize background pattern to avoid recalculation
  const backgroundPatterns = useMemo(() => {
    return projects.map((_, index) => ({
      backgroundImage: `radial-gradient(circle at ${20 + index * 15}% ${30 + index * 20}%, white 1px, transparent 1px)`,
      backgroundSize: '50px 50px',
    }));
  }, [projects.length]);

  return (
    <div className="relative py-8">
      {/* Main Gallery Container */}
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          const position = index - activeIndex;
          
          return (
            <motion.div
              key={project.title}
              className="absolute inset-0"
              initial={false}
              animate={{
                x: `${position * 100}%`,
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.95,
                zIndex: isActive ? 10 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40,
                mass: 0.8,
              }}
            >
              <div className="glass-card h-full rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden relative group">
                {/* Project Image */}
                {project.image && (
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
                  </div>
                )}

                {/* Simplified Background Pattern - only for active and if no image */}
                {isActive && !project.image && (
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute inset-0" style={backgroundPatterns[index]} />
                  </div>
                )}

                <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 lg:p-10">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/70 mb-6 max-w-2xl leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/10 border border-white/20 text-white/90 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card px-5 py-2.5 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white font-medium inline-flex items-center gap-2 hover:bg-white/20 transition-all group text-sm sm:text-base"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card px-5 py-2.5 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white font-medium inline-flex items-center gap-2 hover:bg-white/20 transition-all group text-sm sm:text-base"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6 sm:mt-8">
        {/* Previous Button */}
        <button
          onClick={prevProject}
          className="glass-card p-3 sm:p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className="relative p-1"
            >
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-white w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextProject}
          className="glass-card p-3 sm:p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Project Counter */}
      <div className="text-center mt-4">
        <span className="text-xs sm:text-sm text-white/60">
          {activeIndex + 1} / {projects.length}
        </span>
      </div>
    </div>
  );
}

