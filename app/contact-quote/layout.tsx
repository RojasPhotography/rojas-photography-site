import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Quote - Rojas Photography | Modesto, CA',
  description:
    'Request a personalized quote for professional headshots, corporate photography, or video production. Serving Modesto and Central Valley businesses.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/contact-quote',
  },
  openGraph: {
    title: 'Get a Quote - Rojas Photography | Modesto, CA',
    description:
      'Request a personalized quote for professional headshots, corporate photography, or video production. Serving Modesto and Central Valley businesses.',
    url: 'https://rojasphotography.net/contact-quote',
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
    title: 'Get a Quote - Rojas Photography | Modesto, CA',
    description:
      'Request a personalized quote for professional headshots, corporate photography, or video production. Serving Modesto and Central Valley businesses.',
    images: ['https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg'],
  },
};

export default function ContactQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
