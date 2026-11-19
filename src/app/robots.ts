import type { MetadataRoute } from "next";
import { allowSearchIndexing, siteOrigin } from "@/lib/site-metadata";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: allowSearchIndexing ? new URL("/sitemap.xml", siteOrigin).href : undefined,
  };
}
