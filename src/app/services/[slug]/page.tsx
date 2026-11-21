import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import {
  DigitalMarketingDetails, GeneralOrderSupplyDetails, IndustrialSuppliesDetails, ITServicesDetails, ProcurementSupportDetails,
} from "@/components/service-details";
import { ServiceDetailLayout } from "@/components/service-presentation";
import { serviceHref, services, type Service } from "@/content/services";
import { makePageMetadata } from "@/lib/site-metadata";

type ServicePageProps = { params: Promise<{ slug: string }> };

const detailsByService: Record<Service["slug"], { Details: () => ReactElement; pageTitle?: string; contactTitle?: string }> = {
  "general-order-supply": { Details: GeneralOrderSupplyDetails },
  "industrial-construction-supplies": { Details: IndustrialSuppliesDetails },
  "procurement-project-support": {
    Details: ProcurementSupportDetails,
    contactTitle: "Discuss a procurement inquiry",
  },
  "it-services": {
    Details: ITServicesDetails,
    pageTitle: "IT Infrastructure & Networking Solutions",
    contactTitle: "Get in touch about IT Services",
  },
  "digital-marketing": {
    Details: DigitalMarketingDetails,
    pageTitle: "Digital Marketing Services",
    contactTitle: "Discuss a digital marketing enquiry",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

async function getService(params: ServicePageProps["params"]) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) notFound();
  return service;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug, title, description } = await getService(params);
  return makePageMetadata({ path: serviceHref(slug), title: detailsByService[slug].pageTitle ?? title, description });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getService(params);
  const { Details, pageTitle, contactTitle } = detailsByService[service.slug];

  return (
    <ServiceDetailLayout service={service} pageTitle={pageTitle} contactTitle={contactTitle}>
      <Details />
    </ServiceDetailLayout>
  );
}
