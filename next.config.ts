import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If you are not using a custom domain, and your repository name is "Amravati-Partners",
  // you might need to uncomment and set the basePath and assetPrefix:
  // basePath: "/Amravati-Partners",
  // assetPrefix: "/Amravati-Partners",
};

export default nextConfig;
