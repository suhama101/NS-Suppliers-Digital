const displayName = "NOSHIRWAN & SONS";

export const company = {
  name: `M/S ${displayName}`,
  displayName,
  businessType: "Govt. Contractor & General Order Supplier",
  taxNumber: "7927069-4",
  description: "Government contractor and general order supplier based in Wah Cantt., supporting institutional, industrial and project procurement.",
  location: "Wah Cantt.",
  overview: `${displayName} supports government departments, defence and industrial organisations, and infrastructure projects. The firm sources and supplies goods against client specifications, approved quotations, purchase orders and agreed contract terms.`,
  portfolioSummary: "The portfolio covers equipment and materials for construction, workshop operations, routine maintenance, worksite safety and dispatch. Industrial raw materials and spare parts are sourced against specified grades, dimensions and equipment requirements.",
  tyreSupply: "The firm can also source heavy-vehicle tyres, subject to quotation, client acceptance and availability.",
  commitment: `${displayName} aims to provide clear quotations, responsive coordination and supply services that follow each client’s agreed specifications and delivery conditions.`,
};

export const heavyVehicleTyres = {
  size: "1000/20",
  options: [
    { name: "Bridgestone Tyre", note: "Premium branded option" },
    { name: "China Best Quality Tyre", note: "China-origin quality option" },
    { name: "Pakistani Best Quality Tyre", note: "Locally available quality option" },
  ],
} as const;

export const capabilities = [
  {
    title: "Government Procurement",
    description: "Respond to tender and purchase order requirements with sourcing, quotations and coordinated dispatch.",
  },
  {
    title: "General Order Supply",
    description: "Source hardware, industrial stores and maintenance supplies against approved client requirements.",
  },
  {
    title: "Industrial & Project Supply",
    description: "Support construction, workshop and plant maintenance requirements with equipment and materials matched to the requested specifications.",
  },
] as const;

export const procurementSteps = [
  {
    id: "requirements",
    title: "Understand Requirements",
    description: "Review stated specifications, technical models, quantities and operational requirements.",
  },
  {
    id: "quotation",
    title: "Prepare Clear Quotations",
    description: "Provide item descriptions, sizes, quantities, unit rates and GST breakdowns as applicable.",
  },
  {
    id: "delivery",
    title: "Coordinate Delivery",
    description: "Arrange sourcing, supply and dispatch in line with agreed contract terms and timelines.",
  },
] as const;
