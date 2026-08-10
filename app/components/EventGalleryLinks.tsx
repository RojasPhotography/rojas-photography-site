import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export interface EventGallery {
  /** Public SpotMyPhotos highlight-gallery URL. */
  href: string;
  title: string;
  location: string;
  /** Cover image path (a strong frame from the event). */
  cover: string;
  alt: string;
}

/**
 * A grid of "full event gallery" cards that link out to hosted highlight
 * galleries (e.g. SpotMyPhotos). Text sits ON the image inside one card, so
 * the label can never drift out of alignment. Whole card is the link; opens
 * in a new tab so visitors don't fully leave the site.
 */
export default function EventGalleryLinks({ galleries }: { galleries: EventGallery[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleries.map((g) => (
        <a
          key={g.href}
          href={g.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View the full photo gallery from ${g.title} in ${g.location} (opens in a new tab)`}
          className="group relative block rounded-2xl overflow-hidden aspect-[4/3] shadow-lg ring-1 ring-black/5 hover:shadow-2xl transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-primary)]"
        >
          <Image
            src={g.cover}
            alt={g.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)] via-[var(--color-primary-dark)]/45 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <p className="text-[var(--color-primary-light)] text-xs tracking-[0.15em] uppercase mb-1">{g.location}</p>
            <h3 className="text-xl leading-tight mb-2">{g.title}</h3>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/90 group-hover:gap-2 transition-all">
              View full gallery
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
