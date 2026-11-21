import { ClipboardList, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { ContactLinks } from "@/components/contact-links";
import { company } from "@/content/company";
import { businessContact, emailHref } from "@/content/site";
import { makePageMetadata } from "@/lib/site-metadata";
import { ContactForm } from "./contact-form";
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

const plazaMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.9319927847564!2d72.7707618!3d33.7624232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa6f0c3955555%3A0x6b47cada3d3d8161!2sAl%20Behbood%20Plaza!5e0!3m2!1sen!2s!4v1795295646123!5m2!1sen!2s";

export default function ContactPage() {
  const { officeAddress, officeMapsUrl, phones, email } = businessContact;
  const primaryPhone = phones[0];

  return (
    <>
      <header className={styles.heading}>
        <div className="site-container">
          <h1 id="contact-page-title">Contact Us</h1>
          <p>Get in touch to discuss industrial supplies, procurement or a request for quotation.</p>
        </div>
      </header>

      <div className={styles.contactSection}>
        <div className="site-container">
          <div className={styles.contactGrid}>
            <ContactForm />
            <section className={`${styles.card} ${styles.officeCard}`} id="office-location" aria-labelledby="office-title">
              <h2 className={styles.cardTitle} id="office-title">Office Location</h2>
              <address className={styles.address}>{officeAddress.join(" ")}</address>
              <iframe
                className={styles.map}
                src={plazaMapEmbedUrl}
                title="Google Maps showing Al Behbood Plaza in Wah Cantt"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className={styles.mapActions}>
                <a className="site-button button-gold" href={officeMapsUrl} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p className={styles.mapNote}>
                  Map shows Al Behbood Plaza. Please call to confirm the Office No. 28 entrance.
                </p>
              </div>
            </section>
          </div>

          <div className={styles.channelGrid}>
            {phones.map(({ number, href }, index) => (
              <section className={`${styles.card} ${styles.channelCard}`} key={href} aria-labelledby={`phone-title-${index}`}>
                <span className="icon-tile"><Phone size={22} aria-hidden="true" /></span>
                <h3 id={`phone-title-${index}`}>{index === 0 ? "Phone" : "Alternate Phone"}</h3>
                <a className={`text-link ${styles.contactAction}`} href={href}>{number}</a>
              </section>
            ))}
            <section className={`${styles.card} ${styles.channelCard}`} aria-labelledby="email-title">
              <span className="icon-tile"><Mail size={22} aria-hidden="true" /></span>
              <h3 id="email-title">Email</h3>
              <a className={`text-link ${styles.contactAction}`} href={emailHref}>{email}</a>
            </section>
          </div>
          <p className={styles.registration}>
            <span>{company.businessType}</span>
            <span>NTN {company.taxNumber}</span>
          </p>
        </div>
      </div>

      <section className={`${styles.secondary} ${styles.inquiry}`} aria-labelledby="inquiry-title">
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

      <section className={styles.secondary} aria-labelledby="social-title">
        <div className="site-container">
          <h2 id="social-title">Social Media</h2>
          <ContactLinks variant="contact" />
        </div>
      </section>
    </>
  );
}
