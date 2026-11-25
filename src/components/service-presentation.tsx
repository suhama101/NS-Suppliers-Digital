import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { EditorialPhoto } from "@/components/editorial-photo";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ContactCallout } from "@/components/supply-sections";
import { procurementPlanningImage, serviceCardImages, serviceImages, type EditorialImage } from "@/content/editorial-images";
import { serviceHref, services, type Service } from "@/content/services";

export function ServiceHero({ title, description, image, showBackLink = false }: {
  title: string;
  description: string;
  image: EditorialImage;
  showBackLink?: boolean;
}) {
  return (
    <InnerPageHero
      id="service-page-title"
      title={title}
      description={description}
      image={image}
      label={showBackLink ? (
        <Link href="/services" className="inner-hero-back">
          <ArrowLeft size={16} aria-hidden="true" /> All Services
        </Link>
      ) : undefined}
    />
  );
}

export function ServiceCards() {
  return (
    <ul className="service-grid" role="list">
      {services.map(({ slug, title, description }) => (
        <li key={slug}>
          <article className="service-card">
            <EditorialPhoto image={serviceCardImages[slug]} className="service-card-photo" />
            <div className="editorial-service-copy">
              <h3>{title}</h3>
              <p>{description}</p>
              <Link href={serviceHref(slug)} className="site-button button-gold service-card-action">
                See More<span className="sr-only"> about {title}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export function ServiceDetailLayout({ service, pageTitle, contactTitle, children }: {
  service: Service;
  pageTitle?: string;
  contactTitle?: string;
  children: ReactNode;
}) {
  return (
    <>
      <ServiceHero
        title={pageTitle ?? service.title}
        description={service.description}
        image={service.slug === "procurement-project-support" ? procurementPlanningImage : serviceImages[service.slug]}
        showBackLink
      />
      {children}
      <ContactCallout title={contactTitle} />
    </>
  );
}
