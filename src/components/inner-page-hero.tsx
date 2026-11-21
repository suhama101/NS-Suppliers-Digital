import type { ReactNode } from "react";
import { EditorialPhoto } from "@/components/editorial-photo";
import { company } from "@/content/company";
import { warehouseImage, type EditorialImage } from "@/content/editorial-images";

export function InnerPageHero({ id, title, description, image, media, label, children }: {
  id: string;
  title: string;
  description: string;
  label?: ReactNode;
  children?: ReactNode;
} & ({ image: EditorialImage; media?: never } | { image?: never; media: ReactNode })) {
  return (
    <section className="home-hero inner-page-hero" aria-labelledby={id}>
      <div className="inner-page-hero-media">
        {image ? <EditorialPhoto image={image} hero={image.file === warehouseImage.file} priority /> : media}
      </div>
      <div className="site-container inner-page-hero-inner">
        <div className="hero-copy">
          {label ?? <p className="section-label">{company.displayName}</p>}
          <h1 id={id}>{title}</h1>
          <p className="hero-business">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
