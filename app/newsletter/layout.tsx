import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter — Behind the Lens | Rojas Photography',
  description:
    'Monthly notes from Alfonso and Niomi Rojas: behind-the-scenes stories, headshot and personal-branding tips, and early access to open session dates.',
  alternates: {
    canonical: 'https://rojasphotography.net/newsletter',
  },
  openGraph: {
    title: 'Newsletter — Behind the Lens | Rojas Photography',
    description:
      'Monthly notes from Alfonso and Niomi Rojas: behind-the-scenes stories, headshot and personal-branding tips, and early access to open session dates.',
    url: 'https://rojasphotography.net/newsletter',
    images: ['/images/Hero Image1.jpg'],
  },
};

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
