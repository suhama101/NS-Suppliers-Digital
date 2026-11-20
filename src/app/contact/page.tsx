import { ClipboardList, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ContactLinks } from "@/components/contact-links";
import { InnerPageHero } from "@/components/inner-page-hero";
import { company } from "@/content/company";
import { serviceImages } from "@/content/editorial-images";
import { businessContact, emailHref, officeMapsHref } from "@/content/site";
import { makePageMetadata } from "@/lib/site-metadata";
import styles from "./contact.module.css";

export const metadata = makePageMetadata({
  path: "/contact",
  title: "Contact Us",
  description: `Contact ${company.name} for general order supply, industrial equipment and procurement inquiries. Find phone numbers and the office address.`,
});

const inquiryDetails = [
  "Describe the items, quantities, specifications and applicable standards.",
  "Mention any request for quotation, tender or purchase order reference.",
  "Share the delivery destination and requested timeline.",
];

export default function ContactPage() {
  const { officeAddress, officeAddressConfirmed, phones, email } = businessContact;
  const primaryPhone = phones[0];

  return (
    <>
      <InnerPageHero
        id="contact-page-title"
        title="Contact Us"
        description="Get in touch to discuss industrial supply requirements, procurement inquiries or a request for quotation."
        image={serviceImages["procurement-project-support"]}
      >
        <div className="hero-actions">
          <a className="site-button button-gold" href={primaryPhone.href}>Call {primaryPhone.number}</a>
          <a className="site-button button-outline" href="#office-location">Office location</a>
        </div>
      </InnerPageHero>

      <section className="section-space" id="office-location" aria-labelledby="contact-details-title">
        <div className="site-container">
          <h2 id="contact-details-title">Contact Details</h2>
          <div className={styles.contactGrid}>
            <section className={`${styles.card} ${styles.officeCard}`} aria-labelledby="office-title">
              <span className="icon-tile"><MapPin size={24} aria-hidden="true" /></span>
              <h3 id="office-title">Office Location</h3>
              <address className={styles.address}>{officeAddress.join(" ")}</address>
              {!officeAddressConfirmed && <p className={styles.verification}>Address pending final verification. Please call before visiting.</p>}
              {officeMapsHref ? (
                <a className="site-button button-gold" href={officeMapsHref} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <a className="site-button button-gold" href={primaryPhone.href}>Call to confirm location</a>
              )}
            </section>

            <div className={styles.channelGrid}>
              {phones.map(({ number, href }, index) => (
                <section className={`${styles.card} ${styles.phoneCard}`} key={href} aria-labelledby={`phone-title-${index}`}>
                  <span className="icon-tile"><Phone size={22} aria-hidden="true" /></span>
                  <h3 id={`phone-title-${index}`}>{index === 0 ? "Phone" : "Alternate phone"}</h3>
                  <a className={`text-link ${styles.contactAction}`} href={href}>{number}</a>
                </section>
              ))}
              <section className={`${styles.card} ${styles.emailCard}`} aria-labelledby="email-title">
                <span className="icon-tile"><Mail size={22} aria-hidden="true" /></span>
                <div>
                  <h3 id="email-title">Email</h3>
                  {emailHref ? (
                    <a className={`text-link ${styles.contactAction}`} href={emailHref}>{email.address}</a>
                  ) : (
                    <p className={styles.verification}>Email pending verification. Please call for business inquiries.</p>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className={`section-space ${styles.inquiry}`} aria-labelledby="inquiry-title">
        <div className="site-container section-split">
          <div>
            <h2 id="inquiry-title">Business Inquiries</h2>
            <p className="section-description">Call to discuss your requirements. Review our services if you need help identifying the right supply or procurement category.</p>
            <div className={styles.inquiryActions}>
              <a className="site-button button-gold" href={primaryPhone.href}>Call for an Inquiry</a>
              <Link className="text-link" href="/services">Explore Services</Link>
            </div>
          </div>
          <div className={`${styles.card} ${styles.inquiryCard}`}>
            <span className="icon-tile"><ClipboardList size={23} aria-hidden="true" /></span>
            <h3>What to have ready</h3>
            <ul>
              {inquiryDetails.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-space" aria-labelledby="social-title">
        <div className="site-container">
          <h2 id="social-title">Social Media</h2>
          <ContactLinks variant="contact" />
        </div>
      </section>
    </>
  );
}
