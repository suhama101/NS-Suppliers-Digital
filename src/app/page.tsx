import { CompanyIntro } from "@/components/company-intro";
import { CoreServices, HomeHero, ProductHighlights } from "@/components/home-sections";
import { ContactCallout, ProcurementApproach, TyreSupply } from "@/components/supply-sections";
import { company } from "@/content/company";
import { homeTitle, makePageMetadata } from "@/lib/site-metadata";

export const metadata = makePageMetadata({ path: "/", title: homeTitle, description: company.description });

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CompanyIntro />
      <CoreServices />
      <ProductHighlights />
      <ProcurementApproach />
      <TyreSupply preview />
      <ContactCallout />
    </>
  );
}
