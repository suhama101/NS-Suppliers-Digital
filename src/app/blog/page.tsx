import { BookOpenText } from "lucide-react";
import Link from "next/link";
import { ArticleCard } from "@/components/blog/article-card";
import { ArticleEmptyState } from "@/components/blog/article-empty-state";
import { ArticleListing } from "@/components/blog/article-listing";
import styles from "@/components/blog/blog.module.css";
import { getPublishedArticles } from "@/lib/blog";
import { makePageMetadata } from "@/lib/site-metadata";

const title = "Insights & Updates";
const description = "The M/S Noshirwan & Sons blog focuses on industrial supplies, procurement, construction equipment and technology.";

export const metadata = makePageMetadata({ path: "/blog", title, description });

export default function BlogPage() {
  const cards = getPublishedArticles().map((article) => ({
    slug: article.slug,
    category: article.category,
    card: <ArticleCard article={article} />,
  }));

  return (
    <>
      <section className="home-hero" aria-labelledby="blog-title">
        <div className={`site-container ${styles.hero}`}>
          <div className="hero-copy">
            <p className="section-label">Blog</p>
            <h1 id="blog-title">{title}</h1>
            <p className="hero-business">Editorial topics include industrial supplies, procurement, construction equipment and technology.</p>
          </div>
          <div className={styles.heroIllustration} aria-hidden="true">
            <span className={styles.heroIcon}><BookOpenText size={68} strokeWidth={1.25} /></span>
          </div>
        </div>
      </section>

      <section className={`section-space ${cards.length ? "" : styles.emptyListing}`} aria-labelledby="blog-articles-title">
        <div className="site-container">
          <h2 id="blog-articles-title">Articles</h2>
          {cards.length > 0 ? <ArticleListing cards={cards} /> : (
            <ArticleEmptyState
              title="No articles published yet"
              description="Explore our supply and procurement services for help with sourcing, quotations and delivery."
            >
              <Link className={`text-link ${styles.emptyAction}`} href="/services">Explore Services</Link>
            </ArticleEmptyState>
          )}
        </div>
      </section>
    </>
  );
}
