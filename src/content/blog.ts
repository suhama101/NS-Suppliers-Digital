export const blogCategories = {
  "industrial-supplies": "Industrial Supplies",
  "procurement-sourcing": "Procurement & Sourcing",
  "construction-equipment": "Construction & Equipment",
  "technology-it": "Technology & IT",
  "company-updates": "Company Updates",
} as const;

export type BlogCategory = keyof typeof blogCategories;

export type BlogInline = string | { text: string; href: `/${string}` | `#${string}` };

export type BlogImage = {
  src: `/${string}`;
  alt: string;
  width: number;
  height: number;
};

export type BlogBlock =
  | { type: "heading"; text: string; level?: 2 | 3; id?: string }
  | { type: "paragraph"; content: readonly BlogInline[] }
  | { type: "list"; items: readonly (readonly BlogInline[])[]; ordered?: boolean }
  | { type: "image"; image: BlogImage; caption?: string };

export type BlogArticle = {
  slug: string;
  title: string;
  summary: string;
  category: BlogCategory;
  publishedOn: string;
  byline: string;
  cover?: BlogImage;
  body: readonly BlogBlock[];
  seoDescription: string;
};

export const blogArticles: readonly BlogArticle[] = [];
