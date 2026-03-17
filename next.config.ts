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
    ];
  },
};

export default nextConfig;
