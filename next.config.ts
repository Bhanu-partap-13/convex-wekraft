import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  // Fix WebSocket HMR connection issues when using ngrok or proxies
  webpackDevMiddleware: undefined,
  allowedDevOrigins: ["localhost", "127.0.0.1"],
};

export default nextConfig;
