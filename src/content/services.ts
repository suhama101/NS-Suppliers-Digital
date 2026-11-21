export const services = [
  {
    slug: "general-order-supply",
    title: "General Order Supply",
    description: "Sourcing of general hardware, industrial stores and maintenance supplies against client specifications and agreed purchase terms.",
  },
  {
    slug: "industrial-construction-supplies",
    title: "Industrial & Construction Supplies",
    description: "Equipment, materials and consumables for construction sites, workshops and plant maintenance, sourced to the required specifications.",
  },
  {
    slug: "procurement-project-support",
    title: "Procurement & Installation",
    description: "Support for specification review, itemised quotations, sourcing and dispatch under agreed procurement terms.",
  },
  {
    slug: "it-services",
    title: "IT Services",
    description: "Networking, switches, CCTV systems, network cabling and firewalls, based on project specifications and client requirements.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Discuss your digital marketing goals and the scope of support for your business.",
  },
] as const;

export type Service = (typeof services)[number];

export function serviceHref(slug: Service["slug"]): `/services/${Service["slug"]}` {
  return `/services/${slug}`;
}
