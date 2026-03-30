import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
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
        destination: '/premium-headshots',
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
    ];
  },
};

export default nextConfig;
