import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Amravati-Partners",
  assetPrefix: "/Amravati-Partners",
};

export default nextConfig;
