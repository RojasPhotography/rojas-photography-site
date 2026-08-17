import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      // http → https (for non-www)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rojasphotography.net',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://rojasphotography.net/:path*',
        permanent: true,
      },
      // www → non-www (covers both http and https)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.rojasphotography.net',
          },
        ],
        destination: 'https://rojasphotography.net/:path*',
        permanent: true,
      },
      // Old URL → current URL redirects
      {
        source: '/about',
        destination: '/about-rojas-photography',
        permanent: true,
      },
      {
        source: '/on-site-corporate-team-headshots',
        destination: '/on-site-photography',
        permanent: true,
      },
      // Old Squarespace URL redirects
      {
        source: '/contact',
        destination: '/contact-quote',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/schedule-discovery-call',
        destination: '/discovery-call',
        permanent: true,
      },
      {
        source: '/discover-rojas',
        destination: '/about-rojas-photography',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/premium-headshots#portfolio',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/premium-headshots',
        permanent: true,
      },
      {
        source: '/individual-headshot-session',
        destination: '/premium-headshots',
        permanent: true,
      },
      {
        source: '/central-valley-event-photographer-modesto',
        destination: '/event-photography',
        permanent: true,
      },
      {
        source: '/interactive-conference-photos',
        destination: '/event-photography',
        permanent: true,
      },
      {
        source: '/blog/prepare-headshot',
        destination: '/how-to-prepare-for-headshots',
        permanent: true,
      },
      {
        source: '/blog/how-much-do-professional-headshots',
        destination: '/professional-headshot-cost',
        permanent: true,
      },
      {
        source: '/blog/importance-headshot-lighting',
        destination: '/how-to-prepare-for-headshots',
        permanent: true,
      },
      {
        source: '/blog/d1x7zcz1wa76p87677zy9gqhgv8qar',
        destination: '/',
        permanent: true,
      },
      // Cover alternate slug variation seen in GSC
      {
        source: '/blog/d1x7zcz1wa76p876772y9gghqv8par',
        destination: '/',
        permanent: true,
      },
      {
        source: '/group-headshot-questionnaire',
        destination: '/contact-quote',
        permanent: true,
      },
      {
        source: '/blog/how-much-does-corporate-event-photography-cost-a-complete-pricing-guide-for-2025',
        destination: '/corporate-event-photography-cost',
        permanent: true,
      },
      {
        source: '/blog/the-power-of-first-impressions-how-your-eras-headshot-can-make-or-break-your-residency-application',
        destination: '/eras-headshots',
        permanent: true,
      },
      {
        source: '/blog/why-your-corporate-event-needs-storytelling-photography-not-just-documentation',
        destination: '/event-photography',
        permanent: true,
      },
      {
        source: '/blog/the-art-of-invisible-enhancement-why-ai-headshots-cant-compete-with-professional-post-production',
        destination: '/ai-headshots-vs-professional-headshots',
        permanent: true,
      },
      // Remaining old Squarespace 404s reported in Search Console (Jul 2026)
      {
        source: '/event-headshot-booth',
        destination: '/headshot-booth',
        permanent: true,
      },
      {
        source: '/get-started',
        destination: '/discovery-call',
        permanent: true,
      },
      {
        source: '/blog/what-to-expect-from-your-professional-headshot-experience',
        destination: '/how-to-prepare-for-headshots',
        permanent: true,
      },
      {
        source: '/blog/beyond-the-shoot-the-complete-professional-headshot-experience-that-transforms-your-business-presence',
        destination: '/premium-headshots',
        permanent: true,
      },
      {
        source: '/blog/what-makes-a-professional-headshot-worth-every-dollar-secrets-from-the-industrys-best',
        destination: '/professional-headshot-cost',
        permanent: true,
      },
      {
        source: '/blog/invhra226dbxr9vq4yxli6uow651dv',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
