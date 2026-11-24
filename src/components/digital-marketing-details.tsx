import {
  Bot, Camera, ChartNoAxesColumnIncreasing, Clapperboard, Globe, MapPin,
  Megaphone, MessageSquare, Music2, Palette, Search, ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { emailHref } from "@/content/site";
import styles from "./digital-marketing.module.css";

const serviceGroups = [
  {
    title: "Paid Advertising",
    services: [
      { title: "META ADS", icon: Megaphone, action: "Plan a Meta campaign", description: "Reach relevant audiences on Facebook and Instagram with campaigns built around your offer, lead criteria and budget. Define how enquiries will be tracked before launch." },
      { title: "TIKTOK ADS", icon: Music2, action: "Discuss TikTok advertising", description: "Develop short-form ad concepts and campaigns shaped by how your audience uses TikTok. Plan hooks, formats and calls to action around the brand and campaign objectives." },
      { title: "GOOGLE ADS", icon: ChartNoAxesColumnIncreasing, action: "Plan a Google Ads campaign", description: "Use Google Search and other suitable campaign formats to reach people looking for your products or services. Align keywords, landing pages and conversion tracking with your goals." },
    ],
  },
  {
    title: "Content & Creative",
    services: [
      { title: "VIDEO EDITING", icon: Clapperboard, action: "Discuss a video edit", description: "Turn supplied footage into polished edits for ads, social channels and brand communications. Scope the cut, captions, pacing and aspect ratios for each platform." },
      { title: "SOCIAL MEDIA MANAGEMENT", icon: MessageSquare, action: "Plan your social content", description: "Build a consistent publishing schedule through content planning, channel coordination and support for audience engagement. Agree on responsibilities and response guidelines upfront." },
      { title: "CREATIVE DESIGN", icon: Palette, action: "Brief us on a design", description: "Develop visuals for digital campaigns, social posts and promotional materials using your brand guidelines. Prepare agreed formats for the channels where the artwork will run." },
      { title: "PRODUCT PHOTOGRAPHY", icon: Camera, action: "Discuss a product shoot", description: "Plan clear product photography for catalogues, store listings and campaigns. Agree on the shot list, angles, backgrounds and close-ups needed to show important product details." },
    ],
  },
  {
    title: "Websites, Stores & Search",
    services: [
      { title: "WORDPRESS WEBSITE DESIGNING", icon: Globe, action: "Discuss a WordPress website", description: "Design a responsive WordPress website around your content, customer needs and business goals. Plan page structure, navigation and editing requirements before development." },
      { title: "SHOPIFY STORE DESIGNING", icon: ShoppingBag, action: "Plan a Shopify store", description: "Design a responsive Shopify storefront with clear collections, useful product pages and a straightforward path to checkout. Plan the catalogue and theme around how customers shop." },
      { title: "SEARCH ENGINE OPTIMIZATION (SEO)", icon: Search, action: "Discuss an SEO review", description: "Review crawlability, page structure, titles and internal links. Prioritize technical fixes and content improvements that help search engines and visitors understand the site." },
      { title: "GOOGLE BUSINESS PROFILE OPTIMIZATION", icon: MapPin, action: "Review your business profile", description: "Review the profile’s business details, categories and website links for accuracy. Plan updates that make it easier for nearby customers to find and contact the business." },
    ],
  },
  {
    title: "Workflow Automation",
    services: [
      { title: "CUSTOMIZED AI SOLUTIONS", icon: Bot, action: "Discuss an AI workflow", description: "Explore AI-assisted tools and automation for defined tasks such as routing enquiries or organizing documents. Assess data requirements, human review and how to measure time savings." },
    ],
  },
] as const;

export function DigitalMarketingDetails() {
  return (
    <>
      <section className="section-space" aria-labelledby="marketing-services-title">
        <div className="site-container">
          <h2 id="marketing-services-title">Find the Right Support for Your Goals</h2>
          <p className="section-description">Choose a service to discuss, whether you’re planning a campaign, building a website or improving an existing process.</p>
          {serviceGroups.map(({ title, services }) => (
            <section key={title} className={styles.group}>
              <h3>{title}</h3>
              <ul className={styles.grid} role="list">
                {services.map(({ title, icon: Icon, action, description }) => (
                  <li key={title} className={`product-card ${styles.card}`}>
                    <span className="icon-tile"><Icon size={24} aria-hidden="true" /></span>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href="#marketing-consultation" className="text-link">{action}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section id="marketing-consultation" tabIndex={-1} className={`section-space service-specifications ${styles.consultation}`} aria-labelledby="marketing-enquiry-title">
        <div className="site-container section-split">
          <h2 id="marketing-enquiry-title">Request a Digital Marketing Consultation</h2>
          <div className="about-copy">
            <p>Tell us which services you’re interested in, who you want to reach and what you’d like to achieve. If you have a website, a target launch date or a budget range, include those details so we can discuss a realistic scope.</p>
            <div className={styles.actions}>
              <a className="site-button button-gold" href={`${emailHref}?subject=Digital%20marketing%20consultation`}>Email about a consultation</a>
              <Link href="/contact" className="text-link">See contact options</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
