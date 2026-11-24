import Image from "next/image";
import Link from "next/link";
import type { BlogBlock, BlogInline } from "@/content/blog";
import styles from "./blog.module.css";

function ArticleText({ content }: { content: readonly BlogInline[] }) {
  return content.map((part, index) => {
    if (typeof part === "string") return part;
    if (part.href.startsWith("https://")) {
      return <a key={index} href={part.href} className="text-link">{part.text}</a>;
    }
    return <Link key={index} href={part.href} className="text-link">{part.text}</Link>;
  });
}

function renderBlock(block: BlogBlock, index: number) {
  switch (block.type) {
    case "heading": {
      const Heading = block.level === 3 ? "h3" : "h2";
      return <Heading key={index} id={block.id}>{block.text}</Heading>;
    }
    case "paragraph":
      return <p key={index}><ArticleText content={block.content} /></p>;
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List key={index}>
          {block.items.map((item, itemIndex) => <li key={itemIndex}><ArticleText content={item} /></li>)}
        </List>
      );
    }
    case "image":
      return (
        <figure key={index}>
          <Image {...block.image} alt={block.image.alt} className={styles.articleImage} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
  }
}

export function ArticleBody({ blocks }: { blocks: readonly BlogBlock[] }) {
  return <div className={styles.articleBody}>{blocks.map(renderBlock)}</div>;
}
