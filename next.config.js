/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  eslint: {
    dirs: ["src"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
