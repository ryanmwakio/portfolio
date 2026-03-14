'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

// Figma icon component since lucide-react doesn't have it
const FigmaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zM12.264 7.51h3.588c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.588V7.51zm0 1.471H8.26c-2.476 0-4.49-2.014-4.49-4.49S5.784 0 8.26 0h3.588v8.981zm-4.588-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.02 3.019 3.02h3.588V1.471H7.676zm4.588 15.019H8.26c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h3.588v8.98zM8.26 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.588V8.981H8.26zM15.852 8.981c-1.666 0-3.02 1.355-3.02 3.019s1.355 3.019 3.019 3.019h4.588V8.981H15.852zm-4.588 7.51h4.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49h-4.588v8.98z"/>
  </svg>
);

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:ryanmwakio6@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryanmwakio/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/ryanmwakio/' },
  { icon: FigmaIcon, label: 'Figma', href: 'https://www.figma.com/@ryanmwakio' }
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--sci-fi-text)] mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-[var(--sci-fi-text-muted)] max-w-2xl mx-auto">
            Open to collaborations, opportunities, and interesting projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border border-[var(--sci-fi-border)]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-[var(--sci-fi-surface)] border border-[var(--sci-fi-border)] hover:border-[var(--sci-fi-border-bright)] hover:bg-[var(--sci-fi-bg-elevated)] transition-all group"
                >
                  <Icon className="w-6 h-6 text-[var(--sci-fi-text-muted)] group-hover:text-[var(--sci-fi-accent)] transition-colors" />
                  <span className="text-sm text-[var(--sci-fi-text-muted)] group-hover:text-[var(--sci-fi-text)] transition-colors">
                    {social.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[var(--sci-fi-border)]">
            <motion.a
              href="mailto:ryanmwakio6@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--sci-fi-surface)] border border-[var(--sci-fi-border-bright)] text-[var(--sci-fi-text)] hover:border-[var(--sci-fi-accent)] transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="font-medium">Send Message</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 text-[var(--sci-fi-text-muted)]/70 text-sm"
        >
          <p>© {new Date().getFullYear()} Ryan Mwakio. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}

