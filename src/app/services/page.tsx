import { ServiceCards, ServiceHero } from "@/components/service-presentation";
import { ContactCallout, ProcurementApproach } from "@/components/supply-sections";
import { company } from "@/content/company";
import { warehouseImage } from "@/content/editorial-images";
import { makePageMetadata } from "@/lib/site-metadata";

const description = "General order supply, industrial and construction supplies, and procurement support for institutional and project requirements.";

export const metadata = makePageMetadata({ path: "/services", title: "Services", description });

export default function ServicesPage() {
  return (
    <>
      <ServiceHero title="Services" description={description} image={warehouseImage} />
      <section className="section-space" aria-labelledby="services-overview-title">
        <div className="site-container">
          <h2 id="services-overview-title">Our Services</h2>
          <p className="section-description">{company.overview}</p>
          <ServiceCards />
        </div>
      </section>
      <ProcurementApproach />
      <ContactCallout />
    </>
  );
}
