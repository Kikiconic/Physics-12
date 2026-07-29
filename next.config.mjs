/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  distDir: process.env.NODE_ENV === "development" ? ".next" : ".next-build",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGitHubPages ? "/Physics-12" : "",
  assetPrefix: isGitHubPages ? "/Physics-12/" : ""
};

export default nextConfig;
