'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Container, 
  Network,
  Layers,
  Cpu,
  Globe
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['React', 'Next.js', 'Vue', 'Nuxt', 'TypeScript'],
    color: 'text-blue-400'
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [ 'Node.js', 'Nest.js', 'Python','Laravel', 'PHP',  'API Development'],
    color: 'text-purple-400'
  },
  {
    title: 'Data & APIs',
    icon: Network,
    skills: ['GraphQL', 'REST APIs', 'System Design'],
    color: 'text-green-400'
  },
  {
    title: 'DevOps',
    icon: Container,
    skills: ['Docker', 'Kubernetes', 'GCP', 'CI/CD'],
    color: 'text-orange-400'
  },
  {
    title: 'Architecture',
    icon: Layers,
    skills: ['System Development', 'System Design', 'Microservices', 'Multi Tenancy'],
    color: 'text-pink-400'
  },
  {
    title: 'Cloud',
    icon: Cloud,
    skills: ['GCP', 'Cloud Architecture', 'Infrastructure'],
    color: 'text-cyan-400'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--sci-fi-text)] mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[var(--sci-fi-text-muted)] max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-[var(--sci-fi-border)] hover:border-[var(--sci-fi-border-bright)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className="text-xl font-semibold text-[var(--sci-fi-text)]">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--sci-fi-surface)] border border-[var(--sci-fi-border)] text-[var(--sci-fi-text-muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

