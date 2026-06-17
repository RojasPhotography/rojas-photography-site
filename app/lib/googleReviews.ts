/**
 * Server-only helper to fetch live Google reviews via the Google Places API.
 *
 * Requires two environment variables (server-side only — NEVER expose with a
 * NEXT_PUBLIC_ prefix, or the API key leaks to the browser):
 *   - GOOGLE_PLACES_API_KEY  — a Google Cloud key with "Places API" enabled
 *   - GOOGLE_PLACE_ID        — the Place ID for Rojas Photography
 *
 * Returns `null` if the env vars are missing or the request fails, so the UI
 * degrades gracefully (renders nothing) instead of breaking the build.
 *
 * Only ever import this from a Server Component. The API key is read from a
 * non-public env var, so Next.js keeps it out of the client bundle.
 */

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto?: string;
  time: number;
}

export interface GoogleReviewsData {
  rating: number;
  total: number;
  reviews: GoogleReview[];
}

interface PlacesApiReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
  time: number;
}

interface PlacesApiResponse {
  status: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: PlacesApiReview[];
  };
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.set('place_id', placeId);
  url.searchParams.set('fields', 'rating,user_ratings_total,reviews');
  // Surface the most useful reviews first.
  url.searchParams.set('reviews_sort', 'newest');
  url.searchParams.set('key', apiKey);

  try {
    const res = await fetch(url, {
      // Revalidate once a day — keeps us well within Places API quota.
      next: { revalidate: 86400 },
    });

    if (!res.ok) return null;

    const data = (await res.json()) as PlacesApiResponse;
    if (data.status !== 'OK' || !data.result) return null;

    const reviews = (data.result.reviews ?? [])
      .filter((r) => r.text && r.text.trim().length > 0)
      .map((r) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        relativeTime: r.relative_time_description,
        profilePhoto: r.profile_photo_url,
        time: r.time,
      }));

    return {
      rating: data.result.rating ?? 0,
      total: data.result.user_ratings_total ?? 0,
      reviews,
    };
  } catch {
    return null;
  }
}
