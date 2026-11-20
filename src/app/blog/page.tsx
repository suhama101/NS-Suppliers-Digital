import Link from "next/link";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ArticleCard } from "@/components/blog/article-card";
import { ArticleEmptyState } from "@/components/blog/article-empty-state";
import { ArticleListing } from "@/components/blog/article-listing";
import styles from "@/components/blog/blog.module.css";
import { serviceImages } from "@/content/editorial-images";
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
      <InnerPageHero
        id="blog-title"
        title={title}
        description="Editorial topics include industrial supplies, procurement, construction equipment and technology."
        image={serviceImages["procurement-project-support"]}
        label={<p className="section-label">Blog</p>}
      />

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
