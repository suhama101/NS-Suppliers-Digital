import type { Metadata } from "next";
import type { ReactNode } from "react";
import { QuickContact } from "@/components/quick-contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/content/company";
import { allowSearchIndexing, homeTitle, siteOrigin } from "@/lib/site-metadata";
import "./globals.css";
import "./editorial.css";
import "./page-chrome.css";

export const metadata: Metadata = {
  title: {
    default: homeTitle,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  metadataBase: siteOrigin,
  robots: { index: allowSearchIndexing, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-PK">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
        <QuickContact />
      </body>
    </html>
  );
}
