/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  eslint: {
    dirs: ["src"],
  },
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
