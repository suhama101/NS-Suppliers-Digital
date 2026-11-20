type BusinessPhone = { number: string; href: `tel:+${string}` };

type BusinessContact = {
  officeAddress: readonly string[];
  officeMapsUrl: `https://${string}` | null;
  phones: readonly [BusinessPhone, ...BusinessPhone[]];
  email: string;
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
  email: "noshirwan900@gmail.com",
};

export type SocialPlatformId = "instagram" | "facebook" | "linkedin" | "youtube";
export type SocialPlatform = { id: SocialPlatformId; name: string; officialUrl: `https://${string}` | null };

export const socialPlatforms: readonly SocialPlatform[] = [
  { id: "instagram", name: "Instagram", officialUrl: null },
  { id: "facebook", name: "Facebook", officialUrl: null },
  { id: "linkedin", name: "LinkedIn", officialUrl: null },
  { id: "youtube", name: "YouTube", officialUrl: null },
];

export const emailHref = `mailto:${businessContact.email}`;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
] as const;
