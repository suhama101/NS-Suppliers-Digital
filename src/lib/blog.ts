import { blogArticles, type BlogArticle, type BlogInline } from "@/content/blog";

const dateFormat = new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" });

export function getPublishedArticles() {
  const slugs = new Set<string>();
  for (const { slug, publishedOn } of blogArticles) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slugs.has(slug)) {
      throw new Error(`Blog article slug must be unique and kebab-case: ${slug}`);
    }

    const date = new Date(`${publishedOn}T00:00:00Z`);
    if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== publishedOn) {
      throw new Error(`Blog article ${slug} needs a valid YYYY-MM-DD publication date.`);
    }
    slugs.add(slug);
  }

  return [...blogArticles].sort((a, b) => b.publishedOn.localeCompare(a.publishedOn));
}

export function blogHref(slug: string): `/blog/${string}` {
  return `/blog/${slug}`;
}

export function formatPublicationDate(date: string) {
  return dateFormat.format(new Date(`${date}T00:00:00Z`));
}

function inlineText(content: readonly BlogInline[]) {
  return content.map((part) => typeof part === "string" ? part : part.text).join("");
}

export function getReadingTime(body: BlogArticle["body"]) {
  const text = body.flatMap((block) => {
    switch (block.type) {
      case "heading": return block.text;
      case "paragraph": return inlineText(block.content);
      case "list": return block.items.map(inlineText);
      case "image": return block.caption ?? "";
    }
  }).join(" ");

  const words = text.match(/\S+/g)?.length ?? 0;
  return Math.max(1, Math.ceil(words / 220));
}
