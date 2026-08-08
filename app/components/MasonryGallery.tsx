'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
  /** Intrinsic pixel dimensions. When provided, they prevent layout shift as images load. */
  width?: number;
  height?: number;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  /** Tailwind column classes; default is a responsive 2→3 column masonry. */
  columnClasses?: string;
}

/**
 * A Pinterest-style masonry gallery (CSS columns) with an accessible lightbox.
 * - Thumbnails keep their natural aspect ratio and pack tightly.
 * - Click any image to open the full-size lightbox; arrow/keyboard to browse.
 * - No external libraries, no browser dialogs, SEO-safe (all images in the DOM).
 */
export default function MasonryGallery({
  images,
  columnClasses = 'columns-2 md:columns-3',
}: MasonryGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );

  // Keyboard controls + lock background scroll while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };

    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      {/* Masonry grid */}
      <div className={`${columnClasses} gap-4 [column-fill:_balance]`}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`View larger: ${img.alt}`}
            className="mb-4 block w-full overflow-hidden rounded-xl break-inside-avoid group relative cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-primary)]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width ?? 0}
              height={img.height ?? 0}
              sizes="(max-width: 768px) 50vw, 33vw"
              style={{ filter: 'saturate(1.08) contrast(1.04)' }}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-[var(--color-primary-dark)]/0 group-hover:bg-[var(--color-primary-dark)]/10 transition-colors duration-300" aria-hidden="true" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${openIndex + 1} of ${images.length}: ${images[openIndex].alt}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            <X size={24} aria-hidden="true" />
          </button>

          {/* Counter */}
          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-sm text-white/70 tracking-widest">
            {openIndex + 1} / {images.length}
          </span>

          {/* Prev */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-2 md:left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
            >
              <ChevronLeft size={28} aria-hidden="true" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative flex items-center justify-center w-[90vw] h-[85vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              sizes="90vw"
              style={{ filter: 'saturate(1.08) contrast(1.04)' }}
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-2 md:right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
            >
              <ChevronRight size={28} aria-hidden="true" />
            </button>
          )}

          {/* Caption */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 max-w-[80vw] text-center text-sm text-white/80 px-4">
            {images[openIndex].alt}
          </p>
        </div>
      )}
    </>
  );
}
