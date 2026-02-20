import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule Discovery Call - Rojas Photography | Modesto, CA',
  description:
    'Schedule a free discovery call to discuss your professional photography needs. Expert headshots, corporate photography & video in Modesto and Central Valley.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/discovery-call',
  },
  openGraph: {
    title: 'Schedule Discovery Call - Rojas Photography | Modesto, CA',
    description:
      'Schedule a free discovery call to discuss your professional photography needs. Expert headshots, corporate photography & video in Modesto and Central Valley.',
    url: 'https://rojasphotography.net/discovery-call',
    siteName: 'Rojas Photography',
    images: [
      {
        url: 'https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg',
        width: 1200,
        height: 630,
        alt: 'Rojas Photography - Professional Corporate Photography',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Discovery Call - Rojas Photography | Modesto, CA',
    description:
      'Schedule a free discovery call to discuss your professional photography needs. Expert headshots, corporate photography & video in Modesto and Central Valley.',
    images: ['https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg'],
  },
};

export default function DiscoveryCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
