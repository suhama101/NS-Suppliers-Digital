type BusinessPhone = { number: string; href: `tel:+${string}` };

type BusinessContact = {
  officeAddress: readonly string[];
  officeMapsUrl: `https://${string}` | null;
  phones: readonly [BusinessPhone, ...BusinessPhone[]];
  email: { address: string; confirmed: boolean };
};

export const businessContact: BusinessContact = {
  officeAddress: [
    "Office No. 28, Al-Behbood Plaza,",
    "Aslam Market,",
    "Near NADRA Office,",
    "Wah Cantt, Pakistan.",
  ],
  officeMapsUrl: null,
  phones: [
    { number: "0346-2039874", href: "tel:+923462039874" },
    { number: "0348-1144409", href: "tel:+923481144409" },
  ],
  email: { address: "noshirwan900@gamil.com", confirmed: false },
};

type SocialPlatform = "linkedin" | "medium" | "youtube";

export const socialLinks: Record<SocialPlatform, `https://${string}` | null> = {
  linkedin: null,
  medium: null,
  youtube: null,
};

export const emailHref = businessContact.email.confirmed
  ? `mailto:${businessContact.email.address}`
  : null;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
] as const;
