import Link from "next/link";
import { EditorialPhoto } from "@/components/editorial-photo";
import { company } from "@/content/company";
import { aboutMachineryImage } from "@/content/editorial-images";

export function CompanyIntro() {
  return (
    <section className="section-space about-preview" aria-labelledby="about-title">
      <div className="site-container section-split">
        <EditorialPhoto image={aboutMachineryImage} className="intro-photo" />
        <div>
          <p className="section-label">About us</p>
          <h2 id="about-title">Reliable Procurement & Industrial Supply Solutions</h2>
          <p className="section-description">{company.name} is a Government Contractor and General Order Supplier supporting institutional, industrial, defence-related and infrastructure procurement. We source industrial tools and machinery, general hardware and commercial tyres in line with client specifications, approved quotations and agreed delivery terms.</p>
          <Link href="/about" className="text-link">
            About {company.name}
          </Link>
        </div>
      </div>
    </section>
  );
}
