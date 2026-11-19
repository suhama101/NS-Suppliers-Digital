export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
};

export const productCategories = [
  {
    slug: "power-tools-construction-machinery",
    name: "Power Tools & Construction Machinery",
    description: "Drills, breakers, saws and grinders, plus worksite equipment such as generators, welding plants and compactors.",
  },
  {
    slug: "hand-tools-workshop-equipment",
    name: "Hand Tools & Workshop Equipment",
    description: "Spanners, sockets, screwdrivers and striking tools, along with measuring and layout equipment.",
  },
  {
    slug: "material-handling-lifting-gear",
    name: "Material Handling & Lifting Gear",
    description: "Jacks, hoists, pallet trucks, trolleys and rigging supplies for moving and securing loads.",
  },
  {
    slug: "paints-coatings-surface-finishing",
    name: "Paints, Coatings & Surface Finishing",
    description: "Metal, floor, wall and wood finishes, plus primers, fillers, solvents, painting tools and abrasives.",
  },
  {
    slug: "packaging-dispatch-material",
    name: "Packaging & Dispatch Material",
    description: "Packing tapes, wraps, cushioning, cartons, strapping and labels for packing and dispatch.",
  },
  {
    slug: "industrial-lubricants-oils-chemicals",
    name: "Industrial Lubricants, Oils & Chemicals",
    description: "Engine and industrial oils, greases, coolants, adhesives and sealants for vehicle and equipment maintenance.",
  },
  {
    slug: "general-hardware-fasteners-consumables",
    name: "General Hardware, Fasteners & Consumables",
    description: "Nuts, bolts, screws and anchors, alongside drill bits, cutting discs and workshop cleaning supplies.",
  },
  {
    slug: "electrical-plumbing-maintenance-supplies",
    name: "Electrical & Plumbing Maintenance Supplies",
    description: "Cables, plugs, breakers and floodlights, along with pipes, valves, pumps and sanitary fittings.",
  },
  {
    slug: "industrial-safety-ppe",
    name: "Industrial Safety & PPE",
    description: "Head, eye, hand, hearing and respiratory protection, plus safety footwear, high-visibility vests and harnesses.",
  },
  {
    slug: "industrial-raw-materials",
    name: "Industrial Raw Materials",
    description: "Materials for manufacturing, maintenance and civil works, sourced to the purchaser’s grade, dimensions and standards.",
  },
  {
    slug: "industrial-spare-parts",
    name: "Industrial Spare Parts",
    description: "Replacement components sourced for mechanical equipment and plant maintenance using model, part number and operating requirements.",
  },
] as const satisfies readonly ProductCategory[];

export type ProductCategorySlug = (typeof productCategories)[number]["slug"];
