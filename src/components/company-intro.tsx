import Link from "next/link";
import { company } from "@/content/company";

export function CompanyIntro() {
  return (
    <section className="section-space about-preview" aria-labelledby="about-title">
      <div className="site-container section-split">
        <div>
          <p className="section-label">About us</p>
          <h2 id="about-title">Supply support for institutions and industry</h2>
        </div>
        <div className="about-copy">
          <p>{company.overview}</p>
          <Link href="/about" className="text-link">
            Read More<span className="sr-only"> about {company.name}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
