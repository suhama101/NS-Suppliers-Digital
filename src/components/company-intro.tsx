import Link from "next/link";
import { EditorialPhoto } from "@/components/editorial-photo";
import { company } from "@/content/company";
import { serviceImages } from "@/content/editorial-images";

export function CompanyIntro() {
  return (
    <section className="section-space about-preview" aria-labelledby="about-title">
      <div className="site-container section-split">
        <EditorialPhoto image={serviceImages["general-order-supply"]} className="intro-photo" />
        <div>
          <p className="section-label">About us</p>
          <h2 id="about-title">Supply support for institutions and industry</h2>
          <p className="section-description">{company.overview}</p>
          <Link href="/about" className="text-link">
            About {company.name}
          </Link>
        </div>
      </div>
    </section>
  );
}
