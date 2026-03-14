/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-content.ccbp.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
