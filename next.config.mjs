/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/Physics-12" : "",
  assetPrefix: isGitHubPages ? "/Physics-12/" : ""
};

export default nextConfig;
