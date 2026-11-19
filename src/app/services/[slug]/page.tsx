import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import {
  GeneralOrderSupplyDetails, IndustrialSuppliesDetails, ITServicesDetails, ProcurementSupportDetails,
} from "@/components/service-details";
import { ServiceDetailLayout } from "@/components/service-presentation";
import { serviceHref, services, type Service } from "@/content/services";
import { makePageMetadata } from "@/lib/site-metadata";

type ServicePageProps = { params: Promise<{ slug: string }> };

const detailsByService: Record<Service["slug"], { Details: () => ReactElement; contactTitle?: string }> = {
  "general-order-supply": { Details: GeneralOrderSupplyDetails },
  "industrial-construction-supplies": { Details: IndustrialSuppliesDetails },
  "procurement-project-support": {
    Details: ProcurementSupportDetails,
    contactTitle: "Discuss a procurement inquiry",
  },
  "it-services": { Details: ITServicesDetails, contactTitle: "Get in touch about IT Services" },
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
  return makePageMetadata({ path: serviceHref(slug), title, description });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getService(params);
  const { Details, contactTitle } = detailsByService[service.slug];

  return (
    <ServiceDetailLayout service={service} contactTitle={contactTitle}>
      <Details />
    </ServiceDetailLayout>
  );
}
