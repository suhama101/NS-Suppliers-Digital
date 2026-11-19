"use client";

import { useId, useState, type ReactNode } from "react";
import { blogCategories, type BlogCategory } from "@/content/blog";
import { ArticleEmptyState } from "./article-empty-state";
import styles from "./blog.module.css";

type CategoryFilter = "all" | BlogCategory;
type ArticleCardSlot = { slug: string; category: BlogCategory; card: ReactNode };

const filters = [
  { value: "all", label: "All articles" },
  ...(Object.keys(blogCategories) as BlogCategory[]).map((value) => ({
    value,
    label: blogCategories[value],
  })),
] satisfies readonly { value: CategoryFilter; label: string }[];

export function ArticleListing({ cards }: { cards: readonly ArticleCardSlot[] }) {
  const [selected, setSelected] = useState<CategoryFilter>("all");
  const filterName = useId();
  const results = selected === "all" ? cards : cards.filter(({ category }) => category === selected);
  const count = results.length;
  const emptyTitle = selected === "all" ? "No articles published yet" : `No articles in ${blogCategories[selected]}`;

  return (
    <div>
      <fieldset className={styles.filters}>
        <legend>Filter by category</legend>
        <div className={styles.filterOptions}>
          {filters.map(({ value, label }) => (
            <label className={styles.filter} key={value}>
              <input
                className="sr-only"
                type="radio"
                name={filterName}
                value={value}
                checked={selected === value}
                onChange={() => setSelected(value)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <p className="sr-only" role="status">
        {count === 0 ? emptyTitle : `${count} ${count === 1 ? "article" : "articles"} shown`}
      </p>

      {count > 0 ? (
        <ul className={styles.cardGrid} role="list">
          {results.map(({ slug, card }) => <li key={slug}>{card}</li>)}
        </ul>
      ) : (
        <ArticleEmptyState title={emptyTitle} description="Choose another category or view all articles." />
      )}
    </div>
  );
}
