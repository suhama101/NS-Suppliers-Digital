import type { Metadata } from "next";
import { company } from "@/content/company";

export const homeTitle = `${company.name} | Industrial Supply & Procurement`;

const configuredUrl = process.env.SITE_URL?.trim();
export const siteOrigin = configuredUrl ? new URL(configuredUrl) : undefined;

if (siteOrigin && (siteOrigin.protocol !== "https:" || siteOrigin.href !== `${siteOrigin.origin}/`)) {
  throw new Error("SITE_URL must be an HTTPS site origin with no path, credentials, query or fragment.");
}

type PageMetadata = {
  path: `/${string}`;
  title: string;
  description: string;
  article?: { byline: string; publishedTime: string; section: string };
};

export function makePageMetadata({ path, title, description, article }: PageMetadata): Metadata {
  const socialTitle = path === "/" ? title : `${title} | ${company.name}`;
  const url = siteOrigin ? new URL(path, siteOrigin) : undefined;
  const social = { title: socialTitle, description };
  const share = { ...social, siteName: company.name, locale: "en_PK", url };

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: url ? { canonical: url } : undefined,
    authors: article ? [{ name: article.byline }] : undefined,
    openGraph: article
      ? { ...share, type: "article", publishedTime: article.publishedTime, section: article.section }
      : { ...share, type: "website" },
    twitter: { ...social, card: "summary" },
  };
}
