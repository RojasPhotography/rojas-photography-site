import { MetadataRoute } from 'next';

// lastModified = date of the last real content change to each page.
// When you edit a page, update its date here in the same commit.
type Freq = 'weekly' | 'monthly';

const pages: Array<[path: string, lastModified: string, changeFrequency: Freq, priority: number]> = [
  ['', '2026-11-14', 'weekly', 1],
  ['/premium-headshots', '2026-10-31', 'weekly', 0.9],
  ['/annual-headshot-programs', '2026-10-31', 'monthly', 0.9],
  ['/on-site-photography', '2026-10-31', 'weekly', 0.9],
  ['/headshot-booth', '2026-11-14', 'weekly', 0.9],
  ['/commercial', '2026-10-31', 'weekly', 0.9],
  ['/video', '2026-11-17', 'weekly', 0.9],
  ['/event-photography', '2026-11-14', 'weekly', 0.9],
  ['/conference-photography', '2026-11-14', 'weekly', 0.9],
  ['/about-rojas-photography', '2026-10-31', 'monthly', 0.7],
  ['/contact-quote', '2026-10-31', 'monthly', 0.7],
  ['/discovery-call', '2026-10-31', 'monthly', 0.7],
  ['/newsletter', '2026-07-16', 'monthly', 0.5],
  ['/modesto-headshots', '2026-10-31', 'weekly', 1.0],
  ['/stockton-headshots', '2026-11-14', 'monthly', 0.8],
  ['/turlock-headshots', '2026-11-14', 'monthly', 0.8],
  ['/merced-headshots', '2026-11-14', 'monthly', 0.8],
  ['/sacramento-headshots', '2026-11-14', 'monthly', 0.9],
  ['/fresno-headshots', '2026-11-14', 'monthly', 0.9],
  ['/bakersfield-headshots', '2026-11-14', 'monthly', 0.9],
  ['/attorney-headshots', '2026-10-31', 'monthly', 0.9],
  ['/healthcare-headshots', '2026-10-31', 'monthly', 0.9],
  ['/real-estate-headshots', '2026-10-31', 'monthly', 0.9],
  ['/finance-headshots', '2026-10-31', 'monthly', 0.9],
  ['/linkedin-headshots', '2026-10-31', 'monthly', 0.9],
  ['/student-headshots', '2026-07-16', 'monthly', 0.8],
  ['/eras-headshots', '2026-10-31', 'monthly', 0.8],
  ['/corporate-event-photography-cost', '2026-11-15', 'monthly', 0.8],
  ['/headshot-booth-cost', '2026-11-15', 'monthly', 0.8],
  ['/work', '2026-11-15', 'monthly', 0.8],
  ['/work/cla-annual-meeting-2026', '2026-11-15', 'monthly', 0.8],
  ['/professional-headshot-cost', '2026-09-28', 'monthly', 0.8],
  ['/how-to-prepare-for-headshots', '2026-07-16', 'monthly', 0.7],
  ['/what-to-wear-for-a-headshot', '2026-10-31', 'monthly', 0.8],
  ['/how-to-choose-a-headshot-photographer', '2026-10-31', 'monthly', 0.8],
  ['/ai-headshots-vs-professional-headshots', '2026-10-31', 'monthly', 0.8],
  ['/how-many-photos-from-a-headshot', '2026-07-16', 'monthly', 0.7],
  ['/how-often-to-update-headshot', '2026-10-31', 'monthly', 0.7],
  ['/headshot-vs-portrait', '2026-08-17', 'monthly', 0.7],
  ['/do-you-need-professional-headshot-linkedin', '2026-10-31', 'monthly', 0.7],
  ['/best-background-for-headshot', '2026-10-31', 'monthly', 0.7],
  ['/how-long-does-a-headshot-session-take', '2026-08-17', 'monthly', 0.7],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rojasphotography.net';

  return pages.map(([path, lastModified, changeFrequency, priority]) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}
