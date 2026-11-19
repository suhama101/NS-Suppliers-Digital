import { MapPin } from "lucide-react";
import Link from "next/link";
import { ServiceCards } from "@/components/service-presentation";
import { ProductCards } from "@/components/supply-sections";
import { company } from "@/content/company";
import { productCategories } from "@/content/products";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="section-label">{company.name}</p>
          <h1 id="hero-title">Industrial supply.<br /> Procurement support.</h1>
          <p className="hero-business">{company.businessType}</p>
          <div className="hero-actions">
            <Link href="/services" className="site-button button-gold">Explore Services</Link>
            <Link href="/contact" className="site-button button-outline">Contact Us</Link>
          </div>
          <div className="hero-utilities">
            <p className="hero-location"><MapPin size={16} aria-hidden="true" /> Based in {company.location}</p>
            <a className="hero-portfolio-link" href="#product-portfolio">View Product Portfolio</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-frame" />
          <div className="art-circle" />
          <div className="art-crates">
            <div className="art-crate art-crate-left"><i /><i /><i /></div>
            <div className="art-crate art-crate-right"><i /><i /><i /></div>
            <div className="art-crate art-crate-top"><i /><i /><i /></div>
          </div>
          <div className="art-ruler" />
        </div>
      </div>
    </section>
  );
}

export function CoreServices() {
  return (
    <section className="section-space services-section" aria-labelledby="services-title">
      <div className="site-container">
        <h2 id="services-title">Our Services</h2>
        <ServiceCards />
      </div>
    </section>
  );
}

export function ProductHighlights() {
  return (
    <section className="section-space" id="product-portfolio" aria-labelledby="products-title">
      <div className="site-container">
        <div className="section-split portfolio-intro">
          <h2 id="products-title">Product Portfolio Highlights</h2>
          <p className="section-description">{company.portfolioSummary}</p>
        </div>
        <ProductCards categories={productCategories} />
      </div>
    </section>
  );
}
