'use client';

import { motion } from 'framer-motion';
import ProjectGallery from './ProjectGallery';

const projects = [
  {
    title: 'Ecommerce B2B Platform',
    description: 'Scalable B2B ecommerce platform built with Laravel, Vue, Nuxt, and Docker.',
    tech: ['Laravel', 'Vue', 'Nuxt', 'Docker'],
    category: 'Full Stack',
    githubUrl: '',
    demoUrl: 'https://vietnamfactoryb2b.com/',
    image: '/images/project1.png'
  },
  {
    title: 'Modern Web Application',
    description: 'Modern web application built with Next.js, Nest.js, and GraphQL.',
    tech: ['Next.js','Typescript', 'Nest.js', 'Flutter', 'GraphQL', 'Docker'],
    category: 'Full Stack',
    githubUrl: '',
    image: '/images/project2.png'
    // No demoUrl - Live Demo won't show
  },
  {
    title: 'Ticketing System',
    description: 'Ticketing system built with Laravel, Vue, and Javascript.',
    tech: ['Laravel', 'Vue', 'Javascript', 'Payment Gateway'],
    category: 'Full Stack',
    githubUrl: '',
    demoUrl: 'https://ticketsasa.com/',
    image: '/images/project3.png'
  },
  {
    title: 'Real estate API',
    description: 'Real estate API built with Node.js, Express, MySQL, and REST APIs.',
    tech: ['Node.js', 'Express', 'MySQL', 'REST APIs'],
    category: 'Full Stack',
    demoUrl: 'https://urbancribs.onrender.com/',
    image: '/images/project4.png'
    // No demoUrl - Live Demo won't show
  }
];

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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence
          </p>
        </motion.div>

        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
}

