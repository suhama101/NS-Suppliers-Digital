export const services = [
  {
    slug: "general-order-supply",
    title: "General Order Supply",
    description: "Sourcing of general hardware, industrial stores and maintenance supplies against client specifications and agreed purchase terms.",
    pendingApproval: false,
  },
  {
    slug: "industrial-construction-supplies",
    title: "Industrial & Construction Supplies",
    description: "Equipment, materials and consumables for construction sites, workshops and plant maintenance, sourced to the required specifications.",
    pendingApproval: false,
  },
  {
    slug: "procurement-project-support",
    title: "Procurement & Project Support",
    description: "Support for specification review, itemised quotations, sourcing and dispatch under agreed procurement terms.",
    pendingApproval: false,
  },
  {
    slug: "it-services",
    title: "IT Services",
    description: "A contact point for IT enquiries while the scope and service descriptions await client approval.",
    pendingApproval: true,
  },
] as const;

export type Service = (typeof services)[number];

export function serviceHref(slug: Service["slug"]): `/services/${Service["slug"]}` {
  return `/services/${slug}`;
}
