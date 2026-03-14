'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageGalleryProps {
  images: { src: string; caption: string }[];
  title: string;
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

  const [first, ...rest] = images;
  const isSingleImage = images.length === 1;

  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-6">
        Project visuals
      </h2>

      <div
        className={
          isSingleImage
            ? 'relative'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[minmax(140px,auto)]'
        }
      >
        {/* Hero image - full width when single, else large cell in bento */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className={`relative aspect-16/10 rounded-2xl overflow-hidden glass-card border border-white/10 cursor-pointer group ${!isSingleImage ? 'sm:row-span-2 sm:col-span-2 sm:aspect-auto' : ''}`}
          onClick={() => setLightboxIndex(0)}
        >
          <Image
            src={first.src}
            alt={`${title} — main`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          <div className="absolute left-0 right-0 bottom-0 p-3 sm:p-4">
            <div className="inline-flex max-w-full">
              <span className="text-xs sm:text-sm text-white/85 bg-black/40 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-1.5">
                {first.caption}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Rest of images - splash in grid */}
        {rest.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
            className={`relative rounded-2xl overflow-hidden glass-card border border-white/10 cursor-pointer group ${
              // Coherent non-uniform layout pattern
              i % 6 === 0
                ? 'aspect-4/3 sm:col-span-2 sm:aspect-2/1'
                : i % 6 === 3
                  ? 'aspect-4/3 sm:row-span-2 sm:aspect-auto'
                  : 'aspect-4/3 sm:aspect-square'
            }`}
            onClick={() => setLightboxIndex(i + 1)}
          >
            <Image
              src={img.src}
              alt={`${title} — ${i + 2}`}
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            <div className="absolute left-0 right-0 bottom-0 p-3">
              <span className="text-xs text-white/85 bg-black/40 backdrop-blur-sm border border-white/15 rounded-lg px-2.5 py-1 line-clamp-2">
                {img.caption}
              </span>
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
            className="fixed inset-0 z-200 bg-black/95 flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
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
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous image (Left arrow)"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Next image (Right arrow)"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={`${title} — ${lightboxIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <div className="absolute left-0 right-0 bottom-0 p-4 sm:p-6">
                <div className="inline-flex max-w-full">
                  <span className="text-sm text-white/90 bg-black/50 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2">
                    {images[lightboxIndex].caption}
                  </span>
                </div>
              </div>
            </motion.div>

            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-xs text-white/60">
                ← Previous · Next →
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
