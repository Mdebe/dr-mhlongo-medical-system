import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow HMR from your local network (phone / other PC)
  allowedDevOrigins: [
    "192.168.8.244",
    "192.168.8.*",
    "*.local",
  ],

  // Fix for your doctor images - allows optimization
  images: {
    remotePatterns: [
      // add if you ever use external images
      // { protocol: 'https', hostname: '**.supabase.co' },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // Optional but recommended
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;