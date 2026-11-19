import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ContactLinks } from "@/components/contact-links";
import { SiteBrand } from "@/components/site-brand";
import { company } from "@/content/company";
import { serviceHref, services } from "@/content/services";
import { businessContact, navigation } from "@/content/site";

export function SiteFooter() {
  const { officeAddress, officeAddressConfirmed, phones } = businessContact;
  const year = new Intl.DateTimeFormat("en", { year: "numeric", timeZone: "Asia/Karachi" }).format();

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-intro">
            <SiteBrand />
            <p>{company.description}</p>
          </div>
          <div>
            <h2>Contact</h2>
            <address className="footer-contact">
              <p className="footer-detail">
                <MapPin size={17} aria-hidden="true" />
                <span>
                  {officeAddress.join(" ")}
                  {!officeAddressConfirmed && <small className="footer-address-status">Address pending verification</small>}
                </span>
              </p>
              <ul role="list">
                {phones.map(({ number, href }) => (
                  <li className="footer-detail" key={href}>
                    <Phone size={16} aria-hidden="true" />
                    <a className="footer-link" href={href}>{number}</a>
                  </li>
                ))}
              </ul>
            </address>
            <Link className="footer-link footer-contact-link" href="/contact">Contact Us</Link>
            <ContactLinks variant="footer" />
          </div>
          <nav aria-labelledby="footer-navigation">
            <h2 id="footer-navigation">Quick links</h2>
            <ul>
              {navigation.filter(({ href }) => href !== "/contact").map(({ href, label }) => (
                <li key={href}><Link className="footer-link" href={href}>{label}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services">Services</h2>
            <ul>
              {services.map(({ slug, title }) => (
                <li key={slug}><Link className="footer-link" href={serviceHref(slug)}>{title}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="footer-copyright">© {year} {company.name}</p>
      </div>
    </footer>
  );
}
