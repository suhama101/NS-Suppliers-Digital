import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { EditorialPhoto } from "@/components/editorial-photo";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ContactCallout } from "@/components/supply-sections";
import { serviceImages, type EditorialImage } from "@/content/editorial-images";
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

export function ServiceCards({ showDescriptions = false }: { showDescriptions?: boolean }) {
  return (
    <ul className="service-grid" role="list">
      {services.map(({ slug, title, description, pendingApproval }) => (
          <li key={slug}>
            <Link href={serviceHref(slug)} className="service-card editorial-service-card">
              <EditorialPhoto image={serviceImages[slug]} className="service-card-photo" />
              <div className="editorial-service-copy">
                <h3>{title}</h3>
                {pendingApproval && !showDescriptions && <p className="service-pending">Scope pending approval</p>}
                {showDescriptions && <p className="service-card-description">{description}</p>}
                <span className="service-card-action" aria-hidden="true">View service <ArrowUpRight size={16} /></span>
              </div>
            </Link>
          </li>
      ))}
    </ul>
  );
}

export function ServiceDetailLayout({ service, contactTitle, children }: {
  service: Service;
  contactTitle?: string;
  children: ReactNode;
}) {
  return (
    <>
      <ServiceHero
        title={service.title}
        description={service.description}
        image={serviceImages[service.slug]}
        showBackLink
      />
      {children}
      <ContactCallout title={contactTitle} />
    </>
  );
}
