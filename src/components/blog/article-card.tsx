import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogCategories, type BlogArticle } from "@/content/blog";
import { blogHref, formatPublicationDate } from "@/lib/blog";
import styles from "./blog.module.css";

export function ArticleCard({ article }: { article: BlogArticle }) {
  const titleId = `article-card-${article.slug}`;

  return (
    <article className={styles.card}>
      <Link className={styles.cardLink} href={blogHref(article.slug)} aria-labelledby={titleId}>
        {article.cover ? (
          <Image {...article.cover} alt={article.cover.alt} className={styles.cardCover} />
        ) : (
          <div className={styles.cardPlaceholder} aria-hidden="true"><FileText size={36} /></div>
        )}
        <div className={styles.cardContent}>
          <p className={styles.category}>{blogCategories[article.category]}</p>
          <h3 id={titleId}>{article.title}</h3>
          <p>{article.summary}</p>
          <time dateTime={article.publishedOn}>{formatPublicationDate(article.publishedOn)}</time>
        </div>
      </Link>
    </article>
  );
}
