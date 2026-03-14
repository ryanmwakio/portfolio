'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import type { ProjectData } from '@/data/projects';

interface ProjectGalleryProps {
  projects: ProjectData[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            role="link"
            tabIndex={0}
            aria-label={`Open project ${project.title}`}
            onClick={() => router.push(`/projects/${project.slug}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                router.push(`/projects/${project.slug}`);
              }
            }}
          >
            {/* Click hint */}
            <div className="absolute top-4 right-4 z-30 pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/15 text-white/80 text-xs font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                <span>Open case study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Sci-fi corner accents - top left */}
            <div className="absolute top-0 left-0 z-20 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-px bg-white/30 group-hover:bg-cyan-400/90 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all duration-300" />
              <div className="absolute top-0 left-0 h-full w-px bg-white/30 group-hover:bg-cyan-400/90 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all duration-300" />
              <div className="absolute top-1 left-1 w-8 h-8 sm:w-10 sm:h-10 border-l-2 border-t-2 border-white/20 group-hover:border-cyan-400/80 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] rounded-tl-lg transition-all duration-300" />
            </div>
            {/* Sci-fi corner accents - bottom right */}
            <div className="absolute bottom-0 right-0 z-20 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-full h-px bg-white/30 group-hover:bg-cyan-400/90 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all duration-300" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-white/30 group-hover:bg-cyan-400/90 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all duration-300" />
              <div className="absolute bottom-1 right-1 w-8 h-8 sm:w-10 sm:h-10 border-r-2 border-b-2 border-white/20 group-hover:border-cyan-400/80 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] rounded-br-lg transition-all duration-300" />
            </div>

            {/* Image container */}
            <div className="relative aspect-16/10 sm:aspect-video overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-white/5" />
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              
              {/* Category badge - top left */}
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
                {project.category}
              </span>

              {/* Content overlay - bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 line-clamp-2 mb-4 max-w-xl">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-lg bg-white/10 border border-white/20 text-white/90 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action links - stop propagation so card link does not fire */}
                <div className="flex items-center gap-3 flex-wrap">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
