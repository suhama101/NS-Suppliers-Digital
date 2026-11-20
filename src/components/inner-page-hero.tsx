import type { ReactNode } from "react";
import { EditorialPhoto } from "@/components/editorial-photo";
import { company } from "@/content/company";
import { warehouseImage, type EditorialImage } from "@/content/editorial-images";

export function InnerPageHero({ id, title, description, image, label, children }: {
  id: string;
  title: string;
  description: string;
  image: EditorialImage;
  label?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="home-hero inner-page-hero" aria-labelledby={id}>
      <div className="inner-page-hero-media">
        <EditorialPhoto image={image} hero={image.file === warehouseImage.file} priority />
      </div>
      <div className="site-container inner-page-hero-inner">
        <div className="hero-copy">
          {label ?? <p className="section-label">{company.name}</p>}
          <h1 id={id}>{title}</h1>
          <p className="hero-business">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
