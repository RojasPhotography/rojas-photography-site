import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter Admin',
  robots: 'noindex, nofollow',
};

export default function NewsletterAdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
