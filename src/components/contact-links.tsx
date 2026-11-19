import { BookOpenText, BriefcaseBusiness, Mail, Play } from "lucide-react";
import { emailHref, socialLinks } from "@/content/site";

const socialPlatforms = [
  { key: "linkedin", name: "LinkedIn", icon: BriefcaseBusiness },
  { key: "medium", name: "Medium", icon: BookOpenText },
  { key: "youtube", name: "YouTube", icon: Play },
] as const;

export function ContactLinks({ variant }: { variant: "contact" | "footer" }) {
  const links = socialPlatforms.map(({ key, name, icon }) => ({ name, Icon: icon, href: socialLinks[key] }));

  if (variant === "footer") {
    const verified = links.flatMap(({ name, Icon, href }) => href ? [{ name, Icon, href }] : []);
    if (!emailHref && verified.length === 0) return null;

    return (
      <div className="footer-icons" aria-label="Online contact links" role="group">
        {emailHref && <a className="footer-icon" href={emailHref} aria-label="Email"><Mail size={17} aria-hidden="true" /></a>}
        {verified.map(({ name, Icon, href }) => (
          <a
            key={name}
            className="footer-icon"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} (opens in a new tab)`}
          >
            <Icon size={17} aria-hidden="true" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <ul className="contact-social-list" role="list">
      {links.map(({ name, Icon, href }) => (
        <li key={name}>
          {href ? (
            <a className="contact-social-item" href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={20} aria-hidden="true" />
              <span>{name}<span className="sr-only"> (opens in a new tab)</span></span>
            </a>
          ) : (
            <div className="contact-social-item" data-unavailable>
              <Icon size={20} aria-hidden="true" />
              <span>{name}<small>Unverified</small></span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
