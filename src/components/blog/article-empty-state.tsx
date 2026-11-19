import { FileText } from "lucide-react";
import type { ReactNode } from "react";
import styles from "./blog.module.css";

export function ArticleEmptyState({ title, description, children }: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className={styles.emptyState}>
      <span className="icon-tile"><FileText size={24} aria-hidden="true" /></span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
}
