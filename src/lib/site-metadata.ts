import type { Metadata } from "next";
import { company } from "@/content/company";

export const homeTitle = `${company.name} | Industrial Supply & Procurement`;

export const siteOrigin = new URL(process.env.SITE_URL?.trim() || "https://ns-suppliers-digital.vercel.app");
export const allowSearchIndexing = process.env.SITE_INDEXABLE === "true";

if (siteOrigin.protocol !== "https:" || siteOrigin.href !== `${siteOrigin.origin}/`) {
  throw new Error("SITE_URL must be an HTTPS site origin with no path, credentials, query or fragment.");
}

const socialImage = {
  url: new URL("/images/ns-social-card.png", siteOrigin),
  width: 1200,
  height: 630,
  alt: `${company.name} with a provisional NS monogram`,
};

type PageMetadata = {
  path: `/${string}`;
  title: string;
  description: string;
  article?: { byline: string; publishedTime: string; section: string };
};

export function makePageMetadata({ path, title, description, article }: PageMetadata): Metadata {
  const socialTitle = path === "/" ? title : `${title} | ${company.name}`;
  const url = new URL(path, siteOrigin);
  const social = { title: socialTitle, description };
  const share = { ...social, siteName: company.name, locale: "en_PK", url, images: [socialImage] };

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    authors: article ? [{ name: article.byline }] : undefined,
    openGraph: article
      ? { ...share, type: "article", publishedTime: article.publishedTime, section: article.section }
      : { ...share, type: "website" },
    twitter: { ...social, card: "summary_large_image", images: [socialImage] },
  };
}
