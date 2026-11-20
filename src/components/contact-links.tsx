import { SocialLink } from "@/components/social-link";
import { socialPlatforms } from "@/content/site";

export function ContactLinks({ variant }: { variant: "contact" | "footer" }) {
  if (variant === "footer") {
    return (
      <div className="footer-social">
        <h2 id="footer-social-title">Social media</h2>
        <ul className="footer-icons" aria-labelledby="footer-social-title" role="list">
          {socialPlatforms.map(platform => (
            <li key={platform.id}><SocialLink platform={platform} className="footer-icon" /></li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <ul className="contact-social-list" role="list">
      {socialPlatforms.map(platform => (
        <li key={platform.id}><SocialLink platform={platform} className="contact-social-item" showName /></li>
      ))}
    </ul>
  );
}
