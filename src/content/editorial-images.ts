import type { ProductCategorySlug } from "./products";
import type { Service } from "./services";

export type EditorialImage = { file: string; alt: string };

export const warehouseImage = { file: "warehouse", alt: "Illustrative view down an industrial warehouse aisle with storage racks and stacked cartons" };
export const tyreImage = { file: "tyres", alt: "Illustrative close-up of heavy-vehicle tyre treads" };

export const serviceImages = {
  "general-order-supply": { file: "supply", alt: "Illustrative industrial storage shelves with boxes and workshop supplies" },
  "industrial-construction-supplies": { file: "workshop", alt: "Illustrative workshop with power tools and construction hardware" },
  "procurement-project-support": { file: "planning", alt: "Illustrative planning desk with a technical drawing and shipping supplies" },
  "it-services": { file: "workstation", alt: "Illustrative workstation with a monitor and laptop" },
} satisfies Record<Service["slug"], EditorialImage>;

export const productImages = {
  "power-tools-construction-machinery": { file: "power-tools", alt: "Illustrative power tools, including a drill and saw" },
  "hand-tools-workshop-equipment": { file: "hand-tools", alt: "Illustrative hand tools, including spanners and screwdrivers" },
  "material-handling-lifting-gear": { file: "lifting", alt: "Illustrative lifting chain and industrial hooks" },
  "paints-coatings-surface-finishing": { file: "paints", alt: "Illustrative paint can and roller" },
  "packaging-dispatch-material": { file: "packaging", alt: "Illustrative cartons, packing tape and wrapping film" },
  "industrial-lubricants-oils-chemicals": { file: "lubricants", alt: "Illustrative unlabelled lubricant container and amber oil" },
  "general-hardware-fasteners-consumables": { file: "fasteners", alt: "Illustrative assortment of metal nuts, bolts and screws" },
  "electrical-plumbing-maintenance-supplies": { file: "electrical-plumbing", alt: "Illustrative electrical breaker and copper plumbing fittings" },
  "industrial-safety-ppe": { file: "safety", alt: "Illustrative hard hat, goggles and protective gloves" },
  "industrial-raw-materials": { file: "raw-materials", alt: "Illustrative stack of steel tube sections and pipes" },
  "industrial-spare-parts": { file: "spares", alt: "Illustrative machined gears and bearings" },
} satisfies Record<ProductCategorySlug, EditorialImage>;
