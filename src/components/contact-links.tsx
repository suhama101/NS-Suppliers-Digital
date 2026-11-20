import { BookOpenText, BriefcaseBusiness, Play } from "lucide-react";
import { socialLinks } from "@/content/site";

const socialPlatforms = [
  { key: "linkedin", name: "LinkedIn", icon: BriefcaseBusiness },
  { key: "medium", name: "Medium", icon: BookOpenText },
  { key: "youtube", name: "YouTube", icon: Play },
] as const;

export function ContactLinks({ variant }: { variant: "contact" | "footer" }) {
  const links = socialPlatforms.map(({ key, name, icon }) => ({ name, Icon: icon, href: socialLinks[key] }));

  if (variant === "footer") {
    return (
      <div className="footer-social">
        <div>
          <h2 id="footer-social-title">Social media</h2>
          {links.every(({ href }) => !href) && <p>Profiles pending verification</p>}
        </div>
        <ul className="footer-icons" aria-labelledby="footer-social-title" role="list">
          {links.map(({ name, Icon, href }) => (
            <li key={name}>
              {href ? (
                <a
                  className="footer-icon"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} (opens in a new tab)`}
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ) : (
                <span className="footer-icon" data-unavailable title={name}>
                  <Icon size={17} aria-hidden="true" />
                  <span className="sr-only">{name} pending verification</span>
                </span>
              )}
            </li>
          ))}
        </ul>
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
