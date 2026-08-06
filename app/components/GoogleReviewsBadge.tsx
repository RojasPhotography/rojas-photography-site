import { Star } from 'lucide-react';

interface GoogleReviewsBadgeProps {
  rating?: string;
  count?: number;
  href: string;
}

/**
 * A Google-branded rating badge: the Google "G" mark, the star rating,
 * and the review count, linking to the live Google profile.
 */
export default function GoogleReviewsBadge({
  rating = '5.0',
  count = 64,
  href,
}: GoogleReviewsBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Rated ${rating} out of 5 from ${count} reviews on Google — read them`}
      className="inline-flex items-center gap-4 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
    >
      <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true" className="flex-shrink-0">
        <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
        <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
        <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
        <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
      </svg>
      <span className="flex flex-col items-start leading-tight text-left">
        <span className="flex items-center gap-2">
          <span className="text-xl text-[var(--color-text-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>{rating}</span>
          <span className="flex gap-0.5" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} fill="currentColor" className="text-[var(--color-accent)]" />
            ))}
          </span>
        </span>
        <span className="text-xs text-[var(--color-text-muted)]">Rated by {count} clients on Google</span>
      </span>
    </a>
  );
}
