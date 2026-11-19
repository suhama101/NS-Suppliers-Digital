import { ClipboardList, Factory, Monitor, Package, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactCallout } from "@/components/supply-sections";
import { company } from "@/content/company";
import { serviceHref, services, type Service } from "@/content/services";

const serviceIcons = {
  "general-order-supply": Package,
  "industrial-construction-supplies": Factory,
  "procurement-project-support": ClipboardList,
  "it-services": Monitor,
} satisfies Record<Service["slug"], LucideIcon>;

export function ServiceHero({ title, description, icon: Icon, showBackLink = false }: {
  title: string;
  description: string;
  icon: LucideIcon;
  showBackLink?: boolean;
}) {
  return (
    <section className="home-hero service-hero" aria-labelledby="service-page-title">
      <div className="site-container service-hero-inner">
        <div className="hero-copy">
          {showBackLink ? (
            <Link href="/services" className="section-label service-back-link">All Services</Link>
          ) : (
            <p className="section-label">{company.name}</p>
          )}
          <h1 id="service-page-title">{title}</h1>
          <p className="hero-business">{description}</p>
        </div>
        <div className="hero-art service-hero-art" aria-hidden="true">
          <div className="art-frame" />
          <div className="service-emblem"><Icon size={85} strokeWidth={1.25} /></div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCards({ showDescriptions = false }: { showDescriptions?: boolean }) {
  return (
    <ul className="service-grid" role="list">
      {services.map(({ slug, title, description, pendingApproval }) => {
        const Icon = serviceIcons[slug];
        return (
          <li key={slug}>
            <Link href={serviceHref(slug)} className="service-card">
              <span className="icon-tile"><Icon size={24} aria-hidden="true" /></span>
              <h3>{title}</h3>
              {pendingApproval && !showDescriptions && <p className="service-pending">Scope pending approval</p>}
              {showDescriptions && <p className="service-card-description">{description}</p>}
              <span className="service-card-action" aria-hidden="true">View service</span>
            </Link>
          </li>
        );
      })}
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
        icon={serviceIcons[service.slug]}
        showBackLink
      />
      {children}
      <ContactCallout title={contactTitle} />
    </>
  );
}
