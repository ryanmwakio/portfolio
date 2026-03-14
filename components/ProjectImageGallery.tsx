'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';

interface ProjectImageGalleryProps {
  images: { src: string; caption: string }[];
  title: string;
}

function getGalleryPlacement(index: number, total: number): string {
  if (total === 1) return 'aspect-[21/10] min-h-[260px] sm:min-h-[320px]';
  if (total === 2) return 'aspect-[2/1] min-h-[220px]';
  if (total === 3) {
    if (index === 0) return 'aspect-[21/9] min-h-[200px] sm:col-span-2';
    return 'aspect-square min-h-[180px]';
  }
  // 4+ images: bento — hero 2x2, rest single cells that auto-flow
  if (index === 0) {
    return 'aspect-[21/9] min-h-[200px] sm:aspect-[2/1] lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-[300px]';
  }
  return 'aspect-4/3 min-h-[200px] lg:aspect-auto lg:min-h-[220px]';
}

export default function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, close, goPrev, goNext]);

  if (!images.length) return null;

  const isSingle = images.length === 1;
  const isSmall = images.length <= 3;
  const gridClass = isSingle
    ? 'grid grid-cols-1'
    : isSmall
      ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'
      : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[minmax(200px,1fr)]';

  return (
    <section className="mb-12 sm:mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--sci-fi-surface)] border border-[var(--sci-fi-border)]">
          <Grid3X3 className="w-4 h-4 text-[var(--sci-fi-accent)]" />
        </span>
        <div>
          <h2 className="text-base font-semibold text-[var(--sci-fi-text)] tracking-tight">
            Project visuals
          </h2>
          <p className="text-xs text-[var(--sci-fi-text-muted)] mt-0.5">
            {images.length} {images.length === 1 ? 'image' : 'images'} · Click to expand
          </p>
        </div>
      </div>

      <div className={gridClass}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`relative rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--sci-fi-border)] cursor-pointer group transition-all duration-300 hover:border-[var(--sci-fi-border-bright)] hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] ${getGalleryPlacement(i, images.length)}`}
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={img.src}
              alt={`${title} — ${i + 1}`}
              fill
              sizes={i === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[var(--sci-fi-bg)]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute left-0 right-0 bottom-0 p-4 sm:p-5">
              <span className="block text-xs sm:text-sm text-[var(--sci-fi-text)] font-medium line-clamp-2 drop-shadow-sm">
                {img.caption}
              </span>
              <span className="mt-1.5 inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-[var(--sci-fi-text-muted)]">
                {i + 1} / {images.length}
              </span>
            </div>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg bg-[var(--sci-fi-bg)]/90 backdrop-blur-sm border border-[var(--sci-fi-border)] px-2.5 py-1.5 text-[10px] text-[var(--sci-fi-text-muted)]">
              View full size
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox - Escape to close, ← → or arrow keys to navigate */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-[var(--sci-fi-bg)]"
            onClick={close}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-[var(--sci-fi-surface)] text-[var(--sci-fi-text)] hover:border-[var(--sci-fi-accent)] border border-[var(--sci-fi-border)] transition-colors z-10"
              onClick={close}
              aria-label="Close (Escape)"
            >
              <X className="w-6 h-6" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-[var(--sci-fi-surface)] text-[var(--sci-fi-text)] hover:border-[var(--sci-fi-accent)] border border-[var(--sci-fi-border)] transition-colors"
                  aria-label="Previous image (Left arrow)"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-[var(--sci-fi-surface)] text-[var(--sci-fi-text)] hover:border-[var(--sci-fi-accent)] border border-[var(--sci-fi-border)] transition-colors"
                  aria-label="Next image (Right arrow)"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video max-h-[70vh] rounded-xl overflow-hidden border border-[var(--sci-fi-border)] bg-[var(--sci-fi-surface)]">
                <Image
                  src={images[lightboxIndex].src}
                  alt={`${title} — ${lightboxIndex + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-sm text-[var(--sci-fi-text)] font-medium">
                  {images[lightboxIndex].caption}
                </p>
                {images.length > 1 && (
                  <span className="text-xs text-[var(--sci-fi-text-muted)]">
                    {lightboxIndex + 1} of {images.length}
                  </span>
                )}
              </div>
            </motion.div>

            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-xs text-[var(--sci-fi-text-muted)] hidden sm:block">
                ← Previous · Next →
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
