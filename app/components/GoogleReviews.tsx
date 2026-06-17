import { Star } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { getGoogleReviews } from '../lib/googleReviews';

function StarRow({ rating, className = '' }: { rating: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < Math.round(rating)
              ? 'fill-[#FBBC04] text-[#FBBC04]'
              : 'fill-gray-200 text-gray-200'
          }
        />
      ))}
    </div>
  );
}

/**
 * Live Google reviews, pulled server-side from the Places API.
 * Renders nothing if reviews are unavailable (e.g. env vars not yet set) so
 * the existing named testimonials remain the trust signal in that case.
 */
export default async function GoogleReviews() {
  const data = await getGoogleReviews();

  if (!data || data.reviews.length === 0) {
    return null;
  }

  // Lead with the strongest reviews: 4★+ with real substance.
  const featured = data.reviews
    .filter((r) => r.rating >= 4 && r.text.length > 40)
    .slice(0, 6);

  if (featured.length === 0) return null;

  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Rojas+Photography+Modesto+CA';

  return (
    <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-4">
              What Central Valley Clients Say on Google
            </h2>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-4xl font-bold text-[var(--color-text-dark)]">
                {data.rating.toFixed(1)}
              </span>
              <StarRow rating={data.rating} />
              <span className="text-[var(--color-text-muted)]">
                {data.total}+ Google reviews
              </span>
            </div>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((review) => (
            <SectionReveal key={`${review.author}-${review.time}`}>
              <figure className="h-full bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <StarRow rating={review.rating} />
                  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-label="Google" role="img">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
                  </svg>
                </div>
                <blockquote className="text-[var(--color-text-body)] leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 text-sm">
                  <span className="font-semibold text-[var(--color-text-dark)]">
                    {review.author}
                  </span>
                  <span className="text-[var(--color-text-muted)]">
                    &middot; {review.relativeTime}
                  </span>
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="text-center mt-12">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] font-semibold hover:underline"
            >
              Read all our reviews on Google &rarr;
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
