import { ClipboardCheck, FileText, Truck } from "lucide-react";
import Link from "next/link";
import { procurementSteps } from "@/content/company";
import type { ProductCategory } from "@/content/products";

const procurementIcons = {
  requirements: ClipboardCheck,
  quotation: FileText,
  delivery: Truck,
};

export function ProductCards({ categories }: { categories: readonly ProductCategory[] }) {
  return (
    <ul className="product-grid supply-product-grid" role="list">
      {categories.map(({ slug, name, description, icon: Icon }) => (
        <li key={slug} className="product-card supply-product-card">
          <span className="icon-tile"><Icon size={24} aria-hidden="true" /></span>
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </li>
      ))}
    </ul>
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
                <h3>{title}</h3>
                <p>{description}</p>
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
