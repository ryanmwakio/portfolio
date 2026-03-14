import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import Navigation from '@/components/Navigation';
import CanvasTransition from '@/components/CanvasTransition';
import ProjectImageGallery from '@/components/ProjectImageGallery';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | Ryan Mwakio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <CanvasTransition>
      <main className="min-h-screen overflow-x-hidden hud-bg">
        <Navigation />
        <article className="relative pt-20 pb-16 sm:pt-24 sm:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[var(--sci-fi-text-muted)] hover:text-[var(--sci-fi-accent)] text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>

            {/* Hero */}
            <header className="mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-[var(--sci-fi-surface)] border border-[var(--sci-fi-border-bright)] text-[var(--sci-fi-text-muted)] mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--sci-fi-text)] tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-[var(--sci-fi-text-muted)] max-w-2xl">
                {project.description}
              </p>
            </header>

            {/* Image gallery - splash layout */}
            <ProjectImageGallery images={project.images} title={project.title} />

          {/* Long description */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-sm font-medium text-[var(--sci-fi-text-muted)] uppercase tracking-wider mb-4">
              About
            </h2>
            <p className="text-[var(--sci-fi-text-muted)] leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </section>

          {/* Problem */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-sm font-medium text-[var(--sci-fi-text-muted)] uppercase tracking-wider mb-4">
              Problem it solved
            </h2>
            <p className="text-[var(--sci-fi-text-muted)] leading-relaxed text-lg">
              {project.problem}
            </p>
          </section>

          {/* Inspirations */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-sm font-medium text-[var(--sci-fi-text-muted)] uppercase tracking-wider mb-4">
              Inspirations
            </h2>
            <ul className="space-y-3">
              {project.inspirations.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[var(--sci-fi-text-muted)] leading-relaxed"
                >
                  <span className="text-[var(--sci-fi-accent)] mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tech stack & why */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-sm font-medium text-[var(--sci-fi-text-muted)] uppercase tracking-wider mb-4">
              Technology stack & rationale
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-sm rounded-lg bg-[var(--sci-fi-surface)] border border-[var(--sci-fi-border-bright)] text-[var(--sci-fi-text-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-4">
              {project.whyTechStack.map(({ name, reason }) => (
                <li
                  key={name}
                  className="pl-4 border-l-2 border-[var(--sci-fi-border-bright)]"
                >
                  <span className="font-medium text-[var(--sci-fi-text)]">{name}</span>
                  <p className="text-[var(--sci-fi-text-muted)] mt-1 leading-relaxed">{reason}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Links */}
          <section className="pt-8 border-t border-[var(--sci-fi-border)] flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--sci-fi-surface)] border border-[var(--sci-fi-border-bright)] text-[var(--sci-fi-text)] font-medium hover:border-[var(--sci-fi-accent)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--sci-fi-surface)] border border-[var(--sci-fi-border-bright)] text-[var(--sci-fi-text)] font-medium hover:border-[var(--sci-fi-accent)] transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </section>
        </div>
      </article>
    </main>
    </CanvasTransition>
  );
}
