import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ContactLinks } from "@/components/contact-links";
import { SiteBrand } from "@/components/site-brand";
import { company } from "@/content/company";
import { serviceHref, services } from "@/content/services";
import { businessContact, emailHref, navigation } from "@/content/site";

export function SiteFooter() {
  const { officeAddress, phones, email } = businessContact;
  const year = new Intl.DateTimeFormat("en", { year: "numeric", timeZone: "Asia/Karachi" }).format();

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-lead">
          <div className="footer-intro">
            <SiteBrand />
            <p>{company.businessType}</p>
            <p className="footer-registration">NTN {company.taxNumber}</p>
          </div>
          <Link className="site-button footer-contact-link" href="/contact">
            Contact Us <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="footer-grid">
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
          <section className="footer-contact-group" aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title">Contact</h2>
            <address className="footer-contact">
              <p className="footer-detail">
                <MapPin size={17} aria-hidden="true" />
                <span>{officeAddress.join(" ")}</span>
              </p>
              <ul className="footer-contact-links" role="list">
                {phones.map(({ number, href }) => (
                  <li className="footer-detail" key={href}>
                    <a className="footer-link" href={href}><Phone size={16} aria-hidden="true" /> {number}</a>
                  </li>
                ))}
              </ul>
              <p className="footer-detail footer-email">
                <Mail size={16} aria-hidden="true" />
                {emailHref ? <a href={emailHref}>{email.address}</a> : (
                  <span>{email.address}<small>Email confirmation pending</small></span>
                )}
              </p>
            </address>
          </section>
        </div>
        <div className="footer-bottom">
          <div>
            <p className="footer-copyright">© {year} {company.name}</p>
            <small className="footer-brand-status">Industrial images and videos are illustrative stock or generated media.</small>
          </div>
          <ContactLinks variant="footer" />
        </div>
      </div>
    </footer>
  );
}
