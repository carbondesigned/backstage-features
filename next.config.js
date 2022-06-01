/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['backstage-features-images.nyc3.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;
