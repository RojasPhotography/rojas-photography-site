import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
