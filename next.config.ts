import type { NextConfig } from "next";
import { blogArticles } from "./src/content/blog";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  agentRules: false,
  // Static export requires at least one param for a registered dynamic page.
  pageExtensions: ["tsx", "ts", "jsx", "js", ...(blogArticles.length ? ["blog.tsx"] : [])],
};

export default nextConfig;
