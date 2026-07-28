/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGitHubPages ? "/Physics-12" : "",
  assetPrefix: isGitHubPages ? "/Physics-12/" : ""
};

export default nextConfig;
