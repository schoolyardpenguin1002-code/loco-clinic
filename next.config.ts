import type { NextConfig } from "next";

const BEAUTY_PATHS = [
  "about",
  "artmake",
  "campaign",
  "cancel-policy",
  "case",
  "column",
  "concerns",
  "contact",
  "doctor",
  "faq",
  "guide",
  "meishi",
  "menu",
  "news",
  "price",
  "thread-lift",
];

const nextConfig: NextConfig = {
  async redirects() {
    return BEAUTY_PATHS.map((p) => ({
      source: `/${p}/:path*`,
      destination: "/",
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90, 95],
  },
};

export default nextConfig;
