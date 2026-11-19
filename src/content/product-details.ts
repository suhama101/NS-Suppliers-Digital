import type { ProductCategorySlug } from "./products";

type ProductGroup = readonly [label: string, examples: string];

export const productDetails = {
  "power-tools-construction-machinery": [
    ["Drilling & Breaking", "Rotary and demolition hammers, heavy-duty breakers, core drilling machines, magnetic drills and cordless screwdrivers."],
    ["Cutting & Grinding", "Angle grinders, marble and tile cutters, chop saws, circular saws, jigsaws, band saws and wall chasers."],
    ["Woodworking & Finishing", "Routers, planers, belt and orbital sanders, and polishing machines."],
    ["Worksite & Heavy Equipment", "Portable generators, arc/MIG/TIG welding plants, air compressors, pressure washers, concrete vibrators and plate compactors."],
  ],
  "hand-tools-workshop-equipment": [
    ["Wrenches & Spanners", "Open-end, ring and combination spanners, adjustable and pipe wrenches, and torque wrenches."],
    ["Sockets & Drivers", "Socket sets, ratchet handles, T-handles, hex keys and insulated screwdrivers."],
    ["Striking & Gripping", "Claw and ball-peen hammers, sledgehammers, cold chisels, crowbars, pliers, wire strippers and bolt cutters."],
    ["Measuring & Layout", "Steel tapes, spirit levels, vernier calipers, micrometers, laser distance meters and try squares."],
  ],
  "material-handling-lifting-gear": [
    ["Jacks & Hoists", "Hydraulic bottle and trolley jacks, chain pulley blocks, electric hoists and hydraulic pallet trucks."],
    ["Carts & Trolleys", "Platform trolleys, heavy-duty hand trucks, drum trolleys and wheelbarrow carts."],
    ["Rigging & Securing", "Galvanised wire ropes, lifting chains, D-shackles, turnbuckles and ratchet lashing belts."],
  ],
  "paints-coatings-surface-finishing": [
    ["Industrial & Metal Coatings", "Red oxide and zinc phosphate or chromate primers, synthetic enamels, hammer finishes and aluminium silver paint."],
    ["Flooring & Heavy-Duty Coatings", "Two-component epoxy floor coatings, polyurethane coatings, road-marking paints and heat-resistant paints."],
    ["Architectural & Wall Paints", "Exterior emulsions, interior plastic emulsions, vinyl acrylic distempers, elastomeric waterproof coatings and damp-proof primers."],
    ["Wood Finishes & Treatments", "Nitrocellulose lacquer, wood sealers, polyurethane varnishes, stains and anti-termite wood preservatives."],
    ["Surface Preparation & Fillers", "Wall putty, automotive body filler, wood filler, plaster of Paris and rust converters."],
    ["Aerosol Spray Paints", "Quick-drying acrylic sprays, including metallic, fluorescent, heat-resistant and clear finishes."],
    ["Thinners & Solvents", "Nitrocellulose, epoxy and polyurethane thinners, mineral turpentine oil, methylated spirit and paint strippers."],
    ["Painting Tools & Abrasives", "Brushes, rollers, extension poles, spray guns, trays, scrapers, sandpaper and drop cloths."],
  ],
  "packaging-dispatch-material": [
    ["Adhesive Tapes", "BOPP packing tapes, masking and duct tapes, double-sided foam tapes and kraft paper tapes."],
    ["Stretch & Shrink Films", "Hand and machine stretch-wrap rolls, PVC/POF shrink-wrap and industrial polythene sheets."],
    ["Cushioning & Void Fill", "Bubble wrap, EPE foam sheets and rolls, corrugated paper rolls and air pillows."],
    ["Boxes & Cartons", "Three-, five- and seven-ply corrugated cartons, die-cut and export boxes, and partition sheets."],
    ["Strapping & Sealing Supplies", "PP, PET and galvanised steel strapping, metal clips, plastic buckles, tensioners and sealer tools."],
    ["Bags, Sacks & Pouches", "Woven and laminated sacks, heavy-duty polythene bags, zip-lock pouches, anti-static bags and jute sacks."],
    ["Labelling & Tagging", "Thermal shipping labels, barcode and handling labels, shipping tags and permanent markers."],
  ],
  "industrial-lubricants-oils-chemicals": [
    ["Automotive & Engine Oils", "Petrol and diesel engine oils, including grades such as 10W-40 and 20W-50."],
    ["Industrial Oils", "Hydraulic, gear, compressor and metal-cutting oils."],
    ["Greases & Penetrants", "Lithium and high-temperature bearing greases, rust-release sprays, silicone sprays and chain lubricants."],
    ["Maintenance Fluids & Adhesives", "Radiator coolants, distilled battery water, brake fluid, epoxy adhesives, silicone gasket sealants and thread-seal tape."],
  ],
  "general-hardware-fasteners-consumables": [
    ["Cutting & Grinding Discs", "Metal and masonry cutting discs, diamond blades, flap discs, grinding stones and wire cup brushes."],
    ["Fasteners & Anchors", "Mild and stainless steel fasteners, self-drilling and drywall screws, wall plugs and expansion anchors."],
    ["Drill Bits", "HSS twist, masonry, SDS-plus/max and wood boring bits."],
    ["Cleaning & Workshop Rags", "Cotton waste, microfibre cloths, industrial brooms and floor squeegees."],
  ],
  "electrical-plumbing-maintenance-supplies": [
    ["Electrical Items", "Industrial power cables, extension reels, plugs and sockets, circuit breakers, LED floodlights, insulation tape and cable ties."],
    ["Plumbing & Sanitary", "PPR, UPVC and galvanised iron piping, gate and ball valves, water pumps and sanitary fittings."],
  ],
  "industrial-safety-ppe": [
    ["Head & Eye Protection", "Safety helmets, goggles, face shields and auto-darkening welding helmets."],
    ["Body & Hand Protection", "Welding, cotton and chemical-resistant gloves, high-visibility vests and safety harnesses."],
    ["Footwear, Respiratory & Hearing Protection", "Steel-toe safety shoes, gumboots, N95/KN95 dust masks, chemical respirators, earplugs and earmuffs."],
  ],
  "industrial-raw-materials": [
    ["Indicative Material Families", "Steel sections and plates, pipes and tubes, rods and bars, sheet materials, and fabrication and construction consumables."],
    ["Purchaser Specifications", "Specify material grade, size, quantity, finish, testing requirements and applicable standards."],
  ],
  "industrial-spare-parts": [
    ["Indicative Component Families", "Bearings, gears, belts, seals, filters, couplings and related equipment components."],
    ["Compatibility Checks", "Provide the equipment make, model, part number, dimensions and operating requirements."],
  ],
} as const satisfies Record<ProductCategorySlug, readonly ProductGroup[]>;
