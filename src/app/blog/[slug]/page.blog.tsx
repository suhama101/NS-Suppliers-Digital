import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArticleBody } from "@/components/blog/article-body";
import { ArticleCard } from "@/components/blog/article-card";
import styles from "@/components/blog/blog.module.css";
import { blogArticles, blogCategories, type BlogArticle } from "@/content/blog";
import { blogHref, formatPublicationDate, getPublishedArticles, getReadingTime } from "@/lib/blog";
import { makePageMetadata } from "@/lib/site-metadata";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedArticles().map(({ slug }) => ({ slug }));
}

async function getArticle(params: ArticlePageProps["params"]): Promise<BlogArticle> {
  const { slug } = await params;
  const article = blogArticles.find((entry) => entry.slug === slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug, title, seoDescription, byline, publishedOn, category } = await getArticle(params);
  return makePageMetadata({
    path: blogHref(slug),
    title,
    description: seoDescription,
    article: {
      byline,
      publishedTime: `${publishedOn}T00:00:00Z`,
      section: blogCategories[category],
    },
  });
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params);
  const related = getPublishedArticles()
    .filter(({ category, slug }) => category === article.category && slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <article className={styles.entry} aria-labelledby="article-title">
        <header className="home-hero">
          <div className={`site-container hero-copy ${styles.articleHeader}`}>
            <Link href="/blog" className="section-label service-back-link">Back to blog</Link>
            <p className={styles.articleCategory}>{blogCategories[article.category]}</p>
            <h1 id="article-title">{article.title}</h1>
            <p className="hero-business">{article.summary}</p>
            <ul className={styles.articleMeta} role="list">
              <li>By {article.byline}</li>
              <li><time dateTime={article.publishedOn}>{formatPublicationDate(article.publishedOn)}</time></li>
              <li>{getReadingTime(article.body)} min read</li>
            </ul>
          </div>
        </header>

        <div className={`site-container ${styles.entryContent}`}>
          {article.cover && (
            <Image {...article.cover} alt={article.cover.alt} className={styles.entryCover} loading="eager" />
          )}
          <ArticleBody blocks={article.body} />
        </div>
      </article>

      {related.length > 0 && (
        <section className={`section-space ${styles.related}`} aria-labelledby="related-title">
          <div className="site-container">
            <h2 id="related-title">Related articles</h2>
            <ul className={styles.cardGrid} role="list">
              {related.map((entry) => <li key={entry.slug}><ArticleCard article={entry} /></li>)}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
