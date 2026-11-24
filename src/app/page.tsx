import { CompanyIntro } from "@/components/company-intro";
import { CoreServices, HomeHero, ProductHighlights } from "@/components/home-sections";
import { IndustrialVideoSlider } from "@/components/industrial-video-slider";
import { ContactCallout, ProcurementApproach, TyreSupply } from "@/components/supply-sections";
import { company } from "@/content/company";
import { businessContact } from "@/content/site";
import { homeTitle, makePageMetadata, pageUrl, siteOrigin } from "@/lib/site-metadata";

export const metadata = makePageMetadata({
  path: "/",
  title: homeTitle,
  description: "NOSHIRWAN & SONS is a government contractor and general order supplier in Wah Cantt, Pakistan, serving industrial and construction procurement needs.",
});

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": new URL("/#organization", siteOrigin).href,
  name: company.displayName,
  url: pageUrl("/").href,
  description: company.description,
  email: businessContact.email,
  telephone: businessContact.phones.map(({ href }) => href.slice(4)),
  address: {
    "@type": "PostalAddress",
    streetAddress: businessContact.officeAddress.slice(0, -1).join(" ").replace(/,$/, ""),
    addressLocality: "Wah Cantt",
    addressCountry: "PK",
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      <HomeHero />
      <CompanyIntro />
      <CoreServices />
      <IndustrialVideoSlider />
      <ProductHighlights />
      <ProcurementApproach />
      <TyreSupply preview />
      <ContactCallout />
    </>
  );
}
