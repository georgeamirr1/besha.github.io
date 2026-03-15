import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.EXPORT ? "export" : "standalone",
  basePath: process.env.EXPORT ? "/besha.github.io" : "",
  images: {
    unoptimized: process.env.EXPORT ? true : undefined,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
