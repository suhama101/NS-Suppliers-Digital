import { ClipboardCheck, Files, ListChecks, Truck } from "lucide-react";
import Link from "next/link";
import { ProcurementApproach, ProductCards, TyreSupply } from "@/components/supply-sections";
import { itServiceAreas } from "@/content/it-services";
import { productCategories, type ProductCategorySlug } from "@/content/products";
import { serviceHref } from "@/content/services";

const generalOrderCategories = new Set<ProductCategorySlug>([
  "packaging-dispatch-material",
  "general-hardware-fasteners-consumables",
  "electrical-plumbing-maintenance-supplies",
  "industrial-safety-ppe",
]);

const inquiryRequirements = [
  {
    title: "Specifications and quantities",
    description: "List the items, required quantities, sizes or grades, and applicable standards. Include make, model or part numbers where equipment compatibility matters.",
    icon: ListChecks,
  },
  {
    title: "Procurement documents",
    description: "Share the relevant RFQ, tender or purchase order requirements so the quotation can address item descriptions, unit rates and applicable GST.",
    icon: Files,
  },
  {
    title: "Delivery requirements",
    description: "Provide the delivery destination, requested timeline and any dispatch conditions so these can be reviewed against the agreed terms.",
    icon: Truck,
  },
];

export function GeneralOrderSupplyDetails() {
  const categories = productCategories.filter(({ slug }) => generalOrderCategories.has(slug));

  return (
    <>
      <section className="section-space" aria-labelledby="general-scope-title">
        <div className="site-container">
          <h2 id="general-scope-title">General Order Supply Scope</h2>
          <p className="section-description">
            The firm sources hardware, industrial stores and commercial goods for institutional and project orders. The categories below cover general maintenance, packing and day-to-day operations.
          </p>
          <ProductCards categories={categories} />
        </div>
      </section>

      <TyreSupply />

      <section className="section-space service-specifications" aria-labelledby="general-sourcing-title">
        <div className="site-container section-split">
          <h2 id="general-sourcing-title">Sourcing to Client Specifications</h2>
          <p className="about-copy">
            Sourcing starts with the item specification, quantity and applicable standards in the enquiry or tender. The quotation sets out the proposed items and rates. Approved quotations, purchase orders and contract terms guide supply and dispatch.
          </p>
        </div>
      </section>

      <ProcurementApproach />
    </>
  );
}

export function IndustrialSuppliesDetails() {
  const categories = productCategories.filter(({ slug }) => slug !== "packaging-dispatch-material");

  return (
    <>
      <section className="section-space" aria-labelledby="industrial-categories-title">
        <div className="site-container">
          <h2 id="industrial-categories-title">Industrial Supply Categories</h2>
          <p className="section-description">
            Explore tooling, lifting equipment, finishing materials, maintenance consumables and worksite protection, alongside raw materials and replacement components.
          </p>
          <p className="section-description">Specific brands, standards, ratings, sizes and quantities can be defined in the client RFQ, tender or purchase order.</p>
          <ProductCards categories={categories} />
        </div>
      </section>

      <section className="section-space service-specifications" aria-labelledby="industrial-specs-title">
        <div className="site-container section-split">
          <h2 id="industrial-specs-title">What to Specify</h2>
          <div className="about-copy">
            <p>
              Include the required grades, sizes, quantities and standards for materials. For spares, include the equipment make, model and part number so compatibility can be checked before supply.
            </p>
            <Link href={serviceHref("procurement-project-support")} className="text-link">
              See how quotations and delivery are coordinated
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function ProcurementSupportDetails() {
  return (
    <>
      <ProcurementApproach introduction="The process carries the client’s specifications through to the quotation and uses the agreed purchase terms to guide sourcing, supply and dispatch." />

      <section className="section-space" aria-labelledby="inquiry-title">
        <div className="site-container">
          <h2 id="inquiry-title">What to Include in a Procurement Inquiry</h2>
          <ul className="product-grid" role="list">
            {inquiryRequirements.map(({ title, description, icon: Icon }) => (
              <li key={title} className="product-card">
                <span className="icon-tile"><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export function ITServicesDetails() {
  return (
    <section className="section-space" aria-labelledby="it-details-title">
      <div className="site-container">
        <h2 id="it-details-title">Service Information</h2>
        <ul className="service-detail-grid" role="list">
          {itServiceAreas.map(({ title, pending, details }) => (
            <li className="product-card" key={title}>
              <span className="icon-tile"><ClipboardCheck size={24} aria-hidden="true" /></span>
              <h3>{title}</h3>
              {details.length > 0 ? (
                <ul className="it-service-list">
                  {details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              ) : (
                <p>{pending}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
