export const blogCategories = {
  "industrial-supplies": "Industrial Supplies",
  "procurement-sourcing": "Procurement & Sourcing",
  "construction-equipment": "Construction & Equipment",
  "technology-it": "Technology & IT",
  "company-updates": "Company Updates",
} as const;

export type BlogCategory = keyof typeof blogCategories;

export type BlogInline = string | { text: string; href: `/${string}` | `#${string}` | `https://${string}` };

export type BlogImage = {
  src: `/${string}`;
  alt: string;
  width: number;
  height: number;
};

export type BlogBlock =
  | { type: "heading"; text: string; level?: 2 | 3; id?: string }
  | { type: "paragraph"; content: readonly BlogInline[] }
  | { type: "list"; items: readonly (readonly BlogInline[])[]; ordered?: boolean }
  | { type: "image"; image: BlogImage; caption?: string };

export type BlogArticle = {
  slug: string;
  title: string;
  summary: string;
  category: BlogCategory;
  publishedOn: string;
  byline: string;
  cover?: BlogImage;
  body: readonly BlogBlock[];
  seoDescription: string;
};

export const blogArticles: readonly BlogArticle[] = [
  {
    slug: "industrial-safety-equipment-procurement-guide",
    title: "How to Choose the Right Industrial Safety Equipment: A Practical Procurement Guide",
    summary: "A buyer’s guide to turning worksite hazards into clear PPE specifications, comparing supplier quotations and checking deliveries before issue.",
    category: "industrial-supplies",
    publishedOn: "2026-11-25",
    byline: "NOSHIRWAN & SONS",
    seoDescription: "Learn how to specify industrial PPE, assess fit and compatibility, compare supplier quotations and verify delivered safety equipment before issue.",
    body: [
      { type: "paragraph", content: [
        "Two boxes marked “safety gloves” can contain products intended for entirely different jobs. A glove that gives a fabricator the grip and cut protection they need may be unsuitable for handling a cleaning solvent. The same problem runs through helmets, eyewear, footwear and respirators. A useful purchase order connects each item to the job it will be used for and makes it possible to verify what the supplier delivers.",
      ] },
      { type: "heading", text: "Walk the worksite before writing the RFQ" },
      { type: "paragraph", content: [
        "Start with a walk-through alongside the site safety lead, a supervisor and people who do the work. Record tasks, equipment, materials and who could be exposed. Include maintenance, clean-up and intermittent work. A workshop may have flying particles during grinding, splash hazards during cleaning and high noise during short tasks. Check the relevant safety data sheets and available exposure measurements. Ask a qualified safety professional to assess exposures where evidence is missing.",
      ] },
      { type: "paragraph", content: [
        "Record the risks that remain after controls such as guarding, ventilation and safer work methods are in place. Then translate those risks into requirements for each job. The OSHA references below describe U.S. rules and technical practices. For work in Pakistan, confirm the applicable local requirements and contract specifications with the responsible safety or compliance lead.",
      ] },
      { type: "heading", text: "Match protection to the task" },
      { type: "list", items: [
        ["Head protection. Specify the impact direction and any electrical hazard identified in the assessment. Compare the manufacturer’s helmet type, class and marked standard. If the task requires a chin strap, visor or mounted hearing protection, check that the proposed components are approved for that helmet."],
        ["Eye and face protection. Distinguish particles, liquid splash and welding radiation. Ask for the appropriate impact, splash or filter rating and check whether a face shield needs to be worn with primary eye protection. Account for prescription eyewear, visibility and fogging during the shift."],
        ["Hand protection. Specify the exposure, such as sharp edges, heat or a particular chemical. For chemical handling, ask for manufacturer data for the actual substance, concentration and conditions of use. Consider grip and dexterity, and have the safety lead assess entanglement hazards around machinery before specifying gloves."],
        ["Hearing protection. Use measured exposure to guide the required attenuation. Compare plugs and earmuffs for fit, comfort and compatibility with helmets or glasses. Consider whether workers can hear alarms or communicate while wearing the selected protection."],
        ["Foot protection. Specify toe impact or compression protection, puncture resistance or other features as the work requires. Review outsole suitability for the actual floor and contaminants. Order a range of sizes and widths based on the workforce, including sizes that may take longer to source."],
        ["Respiratory protection. Have an appropriately qualified person assess the contaminant, concentration and work environment before selecting equipment. Include the exact approved facepiece and compatible components in the specification. Plan for medical evaluation, fit testing for tight-fitting models, training, maintenance and replacements as applicable to the chosen program."],
      ] },
      { type: "heading", text: "Write specifications a supplier can quote against" },
      { type: "paragraph", content: [
        "Give each RFQ line a task, protective requirement, standard and edition where specified, required rating, size breakdown, quantity and delivery date. Ask for the manufacturer, model or part number and supporting product data for the exact configuration offered. Where conformity documentation is required, check the issuer, scope and model against the quoted item. A brochure for a product family may leave out the rating of the specific model on offer.",
      ] },
      { type: "paragraph", content: [
        "Have representative users try samples before placing a bulk order. Check the full set together. Eyewear arms can interfere with earmuff seals, and a harness or visor can make an otherwise comfortable setup harder to use. Ask users to perform representative movements with the proposed sizes and layers. For tight-fitting respirators, an informal trial complements formal fit testing under the respiratory protection program.",
      ] },
      { type: "paragraph", content: [
        "For example, a buyer sourcing eye protection for a fabrication shop can list grinding and chemical cleaning as separate tasks. Ask the safety lead to specify the protection each task requires, then request quotes against those requirements. If a supplier offers a single model for both, ask for documentation that covers both uses and have the team check the fit with the other equipment workers wear.",
      ] },
      { type: "heading", text: "Compare quotations and verify the delivery" },
      { type: "paragraph", content: [
        "Use one comparison sheet for all suppliers. Record the offered model, document references, lead time, commercial terms and every proposed substitution. Ask the site safety lead to sign off on any change in model, rating or configuration before ordering. A low unit price can become expensive if the site has to replace poor-fitting stock or wait for an approved alternative.",
      ] },
      { type: "paragraph", content: [
        "Before approval, check that the model on the quotation also appears on the manufacturer’s product page or documentation. If markings or certificates are unclear, ask the manufacturer or the document issuer to confirm them. Compare the cost and availability of spare parts, consumables and replacements as well as the purchase price. A reusable item is only practical if the site can clean, inspect and maintain it as specified.",
      ] },
      { type: "paragraph", content: [
        "At receiving, compare the labels, packing list and product markings with the purchase order and approved sample. Check quantities, size mix, damage, and lot numbers or expiry dates where applicable. Hold mismatched or unverified items apart from stock cleared for issue. Keep the quotation, approval, purchase order and receiving record linked so the buyer can trace a defect, recall or reorder to the original delivery.",
      ] },
      { type: "heading", text: "Industrial PPE buyer’s checklist", id: "buyer-checklist" },
      { type: "list", items: [
        ["Record the task, remaining hazard, exposure and required protection."],
        ["Confirm applicable requirements, standards, editions and ratings with the site safety lead."],
        ["List quantities by size and identify components that must work together."],
        ["Request exact model numbers, markings, instructions and applicable conformity evidence."],
        ["Trial samples with representative users and agree on how substitutions will be approved."],
        ["Set receiving checks, record traceability information and plan for training and replenishment."],
      ] },
      { type: "heading", text: "Make the approved specification your reorder reference" },
      { type: "paragraph", content: [
        "Keep the accepted models and supporting evidence with the procurement file. Revisit the specification if the task, hazard, supplier or equipment changes. For help sourcing against an approved specification, see our ",
        { text: "Industrial Safety & PPE supply category", href: "/services/industrial-construction-supplies/#industrial-safety-ppe" },
        " or ",
        { text: "contact NOSHIRWAN & SONS", href: "/contact" },
        " with your required ratings, sizes and quantities.",
      ] },
      { type: "heading", text: "References", id: "references" },
      { type: "list", items: [
        [{ text: "OSHA 29 CFR 1910.132 — General PPE requirements", href: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.132" }],
        [{ text: "OSHA 29 CFR 1910 Subpart I, Appendix B — Hazard assessment and PPE selection guidance", href: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910SubpartIAppB" }],
        [{ text: "OSHA 29 CFR 1910.134 — Respiratory protection", href: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134" }],
        [{ text: "OSHA 29 CFR 1910.95 — Occupational noise exposure", href: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.95" }],
        [{ text: "Punjab Occupational Safety and Health Act, 2019 — Government-hosted text", href: "https://mcgojra.lgpunjab.org.pk/wp-content/uploads/2023/09/The-Punjab-Occupational-Safety-Health-Act-2019.pdf" }],
      ] },
    ],
  },
];
