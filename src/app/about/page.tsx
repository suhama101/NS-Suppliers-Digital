import { Building2, CircleCheck, FileText, MapPin } from "lucide-react";
import Link from "next/link";
import { AmbientHeroVideo } from "@/components/ambient-hero-video";
import { EditorialPhoto } from "@/components/editorial-photo";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ContactCallout, ProcurementApproach } from "@/components/supply-sections";
import { capabilities, company } from "@/content/company";
import { procurementPlanningImage } from "@/content/editorial-images";
import { productCategories } from "@/content/products";
import { makePageMetadata } from "@/lib/site-metadata";

export const metadata = makePageMetadata({
  path: "/about",
  title: "About Our Supply & Procurement Business",
  description: `Learn how ${company.displayName}, a government contractor and general order supplier in Wah Cantt, sources goods against client specifications and purchase orders.`,
});

export default function AboutPage() {
  return (
    <>
      <InnerPageHero
        id="about-page-title"
        title="About Us"
        description="Supply support for institutional, industrial and project procurement."
        media={<AmbientHeroVideo clip="/videos/industrial/handling.mp4" poster="/images/video-posters/handling.webp" />}
      />
      <div className="about-facts-band">
        <div className="site-container">
          <dl className="about-facts">
            <div>
              <dt><Building2 size={22} aria-hidden="true" />Business nature</dt>
              <dd>{company.businessType}</dd>
            </div>
            <div>
              <dt><MapPin size={22} aria-hidden="true" />Office location</dt>
              <dd>{company.location}</dd>
            </div>
            <div>
              <dt><FileText size={22} aria-hidden="true" />National Tax Number (NTN)</dt>
              <dd>{company.taxNumber}</dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="section-space" aria-labelledby="overview-title">
        <div className="site-container">
          <div className="section-split overview-with-photo">
            <EditorialPhoto image={procurementPlanningImage} className="intro-photo" />
            <div>
              <h2 id="overview-title">Company Overview</h2>
              <p className="section-description">{company.overview}</p>
            </div>
          </div>
          <h3 className="capabilities-title">Supply capabilities</h3>
          <ul className="product-grid capabilities-grid" role="list">
            {capabilities.map(({ title, description }) => (
              <li className="product-card" key={title}>
                <h4>{title}</h4>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space about-portfolio" aria-labelledby="portfolio-title">
        <div className="site-container section-split">
          <h2 id="portfolio-title">Product &amp; Supply Portfolio</h2>
          <div className="about-copy">
            <p>{company.portfolioSummary}</p>
            <p>{company.tyreSupply}</p>
            <Link href="/#product-portfolio" className="text-link">
              Explore all {productCategories.length} product categories
            </Link>
          </div>
        </div>
      </section>

      <ProcurementApproach />

      <section className="section-space commitment-section" aria-labelledby="commitment-title">
        <div className="site-container">
          <div className="commitment-panel">
            <span className="icon-tile"><CircleCheck size={25} aria-hidden="true" /></span>
            <div>
              <h2 id="commitment-title">Our Commitment</h2>
              <p className="section-description">{company.commitment}</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCallout />
    </>
  );
}
