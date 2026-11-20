import type { ProductCategorySlug } from "./products";

type ProductGroup = readonly [label: string, examples: string];

export const productDetails = {
  "power-tools-construction-machinery": [
    ["Drilling & Breaking", "Rotary hammers, demolition hammers, heavy-duty breakers, core drilling machines, magnetic drills, and cordless screwdrivers."],
    ["Cutting & Grinding", "Angle grinders, marble/tile cutters, chop saws, circular saws, jig saws, band saws, and wall chasers."],
    ["Woodworking & Finishing", "Electric routers, wood planers, belt sanders, orbital sanders, and polishing machines."],
    ["Worksite & Heavy Equipment", "Portable generators, welding plants (Arc/MIG/TIG), air compressors, pressure washers, concrete vibrators, and plate compactors."],
  ],
  "hand-tools-workshop-equipment": [
    ["Wrenches & Spanners", "Open-end spanners, ring spanners, combination spanner sets, adjustable wrenches, pipe wrenches (Stillson), and torque wrenches."],
    ["Sockets & Drivers", "Complete socket sets, ratchet handles, T-handles, hex/Allen key sets, and insulated screwdriver sets."],
    ["Striking & Gripping", "Claw hammers, ball-peen hammers, sledgehammers, cold chisels, crowbars, combination pliers, nose pliers, wire strippers, and bolt cutters."],
    ["Measuring & Layout", "Steel measuring tapes, spirit levels, vernier calipers, micrometers, laser distance meters, and try squares."],
  ],
  "material-handling-lifting-gear": [
    ["Jacks & Hoists", "Hydraulic bottle jacks, floor trolley jacks, chain pulley blocks, electric hoists, and hydraulic pallet trucks."],
    ["Carts & Trolleys", "Platform trolleys, heavy-duty hand trucks, drum trolleys, and wheelbarrow carts."],
    ["Rigging & Securing", "Galvanized steel wire ropes, lifting chains, D-shackles, turnbuckles, and heavy-duty ratchet lashing belts."],
  ],
  "paints-coatings-surface-finishing": [
    ["Industrial & Metal Coatings", "Red oxide metal primer, zinc phosphate/chromate anti-rust primer, synthetic enamel paints (gloss, semi-gloss, matt), hammer-finish paints, and aluminum silver paint."],
    ["Flooring & Heavy-Duty Coatings", "Two-component epoxy floor coatings, polyurethane (PU) coatings, road-marking paints, and heat-resistant paints."],
    ["Architectural & Wall Paints", "Exterior weather-shield emulsions, interior plastic emulsions, vinyl acrylic distempers, elastomeric waterproof coatings, and damp-proof primers."],
    ["Wood Finishes & Treatments", "NC (Nitrocellulose) lacquer, wood sealer, polyurethane wood varnish, wood stains, and anti-termite wood preservatives."],
    ["Surface Preparation & Fillers", "Acrylic wall putty, metallic/automotive body filler (poly-putty), wood filler, plaster of Paris, and rust converters."],
    ["Aerosol Spray Paints", "Quick-drying acrylic spray paints (all RAL shades, metallic, fluorescent, high-temp, and clear coat)."],
    ["Thinners & Solvents", "NC thinner, epoxy thinner, PU thinner, mineral turpentine oil (MTO), methylated spirit, and chemical paint strippers."],
    ["Painting Tools & Abrasives", "Paint brushes (synthetic & bristle), paint rollers (mohair, foam, textured) with extension poles, spray guns, paint trays, scrapers/putty knives, sandpaper sheets/rolls (emery cloth, waterproof), and drop cloths."],
  ],
  "packaging-dispatch-material": [
    ["Adhesive Tapes", "BOPP packing tapes (transparent, brown, fragile-printed, custom logo tapes), masking tapes, heavy-duty duct tapes, double-sided foam tapes, and kraft paper tapes."],
    ["Stretch & Shrink Films", "LLDPE stretch wrap film rolls (hand & machine rolls), PVC/POF heat shrink wrap rolls, and industrial polythene sheets."],
    ["Cushioning & Void Fill", "Air bubble wrap rolls (small & large bubble), EPE foam sheets and rolls, corrugated paper rolls, and air pillows."],
    ["Boxes & Cartons", "3-ply, 5-ply, and 7-ply corrugated cardboard cartons, die-cut boxes, heavy-duty export boxes, and partition sheets."],
    ["Strapping & Sealing Supplies", "PP (Polypropylene) strapping rolls, heavy-duty PET (Polyester) strapping rolls, galvanized steel strapping, metal clips/seals, plastic buckles, manual tensioners, and sealer tools."],
    ["Bags, Sacks & Pouches", "PP woven sacks (bori), laminated woven bags, heavy-duty garbage/polythene bags, zip-lock pouches, anti-static bags, and jute sacks."],
    ["Labeling & Tagging", "Thermal shipping labels, barcode stickers, fragile/handling warning labels, plastic shipping tags, and permanent industrial markers."],
  ],
  "industrial-lubricants-oils-chemicals": [
    ["Automotive & Engine Oils", "Petrol & diesel engine oils (e.g., 10W-40, 20W-50) for vehicles, machinery and generators."],
    ["Industrial Oils", "Hydraulic oils (for lifts and presses), gear oils, compressor oils, and metal-cutting oils."],
    ["Greases & Penetrants", "Multi-purpose lithium grease, high-temp bearing grease, WD-40 / rust-release sprays, silicone sprays, and chain lubricants."],
    ["Maintenance Fluids & Adhesives", "Radiator coolants, distilled battery water, brake fluid, epoxy adhesives (Elfy/Araldite), silicone gasket sealants, and Teflon tape."],
  ],
  "general-hardware-fasteners-consumables": [
    ["Cutting & Grinding Discs", "Metal cutting wheels, stone/masonry cutting discs, diamond blades, flap discs, grinding stones, and wire cup brushes."],
    ["Fasteners & Anchors", "MS/SS nuts, bolts, washers, self-drilling screws, drywall screws, rawl plugs, and concrete expansion anchor bolts."],
    ["Drill Bits", "HSS twist drill bits, masonry bits, SDS-plus/max bits, and wood boring bits."],
    ["Cleaning & Workshop Rags", "Cotton waste, microfiber cleaning cloths, industrial brooms, and floor squeegees."],
  ],
  "electrical-plumbing-maintenance-supplies": [
    ["Electrical Items", "Industrial power cables, heavy-duty extension reels, industrial plugs/sockets, circuit breakers (MCBs), LED floodlights, insulation tape, and nylon cable ties."],
    ["Plumbing & Sanitary", "PPR/UPVC pipes and fittings, GI pipes, gate valves, ball valves, water pumps, and sanitary fittings."],
  ],
  "industrial-safety-ppe": [
    ["Head & Eye Protection", "Safety helmets (hard hats), safety goggles, face shields, and auto-darkening welding helmets."],
    ["Body & Hand Protection", "Leather welding gloves, cotton dotted gloves, chemical-resistant gloves, high-visibility reflective vests, and safety harnesses."],
    ["Footwear & Respiratory", "Steel-toe safety shoes, gumboots, dust masks (N95/KN95), chemical respirators, and earplugs/earmuffs."],
  ],
  "industrial-raw-materials": [
    ["Indicative Material Families", "Steel sections and plates, pipes and tubes, metal rods and bars, sheet materials, and fabrication and construction consumables."],
    ["Purchaser Specifications", "Raw materials are included in the supply scope for manufacturing, maintenance, civil works and institutional procurement. The purchaser specifies material grade, size, quantity, finish, testing requirements and applicable standards."],
  ],
  "industrial-spare-parts": [
    ["Indicative Component Families", "Bearings, gears, belts, seals, filters, couplings, and allied equipment replacement components."],
    ["Compatibility Checks", "Parts may be sourced for mechanical equipment, workshop operations and plant maintenance. Compatibility must be validated using equipment make, model, part number, dimensions and operating requirements."],
  ],
} as const satisfies Record<ProductCategorySlug, readonly ProductGroup[]>;
