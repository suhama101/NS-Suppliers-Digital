type BusinessPhone = { number: string; href: `tel:+${string}` };

type BusinessContact = {
  officeAddress: readonly string[];
  officeMapsUrl: `https://${string}`;
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
  officeMapsUrl: "https://www.google.com/maps/place/Al+Behbood+Plaza/@33.7624232,72.7707618,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfa6f0c3955555:0x6b47cada3d3d8161!8m2!3d33.7624232!4d72.7707618!16s%2Fg%2F11txv1v42g",
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
