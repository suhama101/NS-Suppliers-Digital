import { ArrowRight, ChevronDown, ClipboardCheck, FileText, Truck } from "lucide-react";
import Link from "next/link";
import { EditorialPhoto } from "@/components/editorial-photo";
import { company, heavyVehicleTyres, procurementSteps } from "@/content/company";
import { productImages, tyreImage } from "@/content/editorial-images";
import { productDetails } from "@/content/product-details";
import type { ProductCategory, ProductCategorySlug } from "@/content/products";
import { serviceHref } from "@/content/services";

const procurementIcons = {
  requirements: ClipboardCheck,
  quotation: FileText,
  delivery: Truck,
};

export function ProductCards({ categories, showLinks = false }: {
  categories: readonly (ProductCategory & { slug: ProductCategorySlug })[];
  showLinks?: boolean;
}) {
  return (
    <ul className={`product-grid supply-product-grid editorial-products ${showLinks ? "product-previews" : "product-catalogue"}`} role="list">
      {categories.map(({ slug, name, description }) => (
        <li key={slug} id={slug} className="product-card supply-product-card">
          <EditorialPhoto image={productImages[slug]} className="product-photo" square />
          <div className="product-card-copy">
            <h3>{name}</h3>
            <p>{description}</p>
            {showLinks ? (
              <Link className="text-link product-spec-link" href={`${serviceHref(slug === "packaging-dispatch-material" ? "general-order-supply" : "industrial-construction-supplies")}#${slug}`}>
                View range<span className="sr-only"> for {name}</span> <ArrowRight size={15} aria-hidden="true" />
              </Link>
            ) : (
              <details className="product-specs">
                <summary>Subcategories and examples <ChevronDown size={17} aria-hidden="true" /></summary>
                <dl>
                  {productDetails[slug].map(([label, examples]) => (
                    <div key={label}><dt>{label}</dt><dd>{examples}</dd></div>
                  ))}
                </dl>
                {(slug === "industrial-raw-materials" || slug === "industrial-spare-parts") && (
                  <p>Examples are indicative and subject to RFQ. They do not confirm stock or brand commitments.</p>
                )}
              </details>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function TyreSupply({ preview = false }: { preview?: boolean }) {
  return (
    <section className="section-space tyre-section" id="heavy-vehicle-tyres" aria-labelledby="tyre-title">
      <div className="site-container section-split">
        <EditorialPhoto image={tyreImage} className="tyre-photo" square />
        <div>
          <h2 id="tyre-title">Heavy-Vehicle Tyre Supply</h2>
          <p className="section-description">{company.tyreSupply}</p>
          {preview ? (
            <Link className="text-link portfolio-detail-link" href={`${serviceHref("general-order-supply")}#heavy-vehicle-tyres`}>View tyre supply options</Link>
          ) : (
            <ul className="tyre-options" role="list">
              {heavyVehicleTyres.options.map(({ name, note }) => (
                <li key={name}><strong>{name}</strong><span>{note}</span><span>{heavyVehicleTyres.size}</span></li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export function ProcurementApproach({ introduction }: { introduction?: string }) {
  return (
    <section className="section-space procurement-section" aria-labelledby="procurement-title">
      <div className="site-container">
        <h2 id="procurement-title">Our Procurement Approach</h2>
        {introduction && <p className="section-description">{introduction}</p>}
        <ol className="procurement-grid" role="list">
          {procurementSteps.map(({ id, title, description }, index) => {
            const Icon = procurementIcons[id];
            return (
              <li key={id}>
                <div className="step-heading">
                  <span className="step-number" aria-hidden="true">0{index + 1}</span>
                  <Icon size={23} aria-hidden="true" />
                </div>
                <div className="step-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function ContactCallout({ title = "Discuss your supply requirements" }: { title?: string }) {
  return (
    <section className="section-space" aria-labelledby="contact-title">
      <div className="site-container">
        <div className="contact-callout">
          <h2 id="contact-title">{title}</h2>
          <Link href="/contact" className="site-button button-gold">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
