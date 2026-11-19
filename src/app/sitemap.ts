import type { MetadataRoute } from "next";
import { serviceHref, services } from "@/content/services";
import { navigation } from "@/content/site";
import { blogHref, getPublishedArticles } from "@/lib/blog";
import { siteOrigin } from "@/lib/site-metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...navigation.map(({ href }) => href),
    ...services.map(({ slug }) => serviceHref(slug)),
    ...getPublishedArticles().map(({ slug }) => blogHref(slug)),
  ];

  return paths.map((path) => ({ url: new URL(path, siteOrigin).href }));
}
