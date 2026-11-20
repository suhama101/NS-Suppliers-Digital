# Company profile coverage and imagery register

## Company profile coverage

The source is the supplied 12-page `Noshirwan_Sons_Company_Profile_Corrected.pdf`. Page numbers below refer to the physical PDF order. Homepage previews are concise. The service detail pages carry the complete textual product lists. See the [item-by-item product profile audit](product-profile-audit.md).

| PDF pages | Contents | Website coverage |
| --- | --- | --- |
| 1 | Company identity, overview, business nature and cover mark | Home and About introduce the company and customer sectors. Header and footer use the extracted NS mark. The favicon and sharing card adapt the same artwork. The named organisation on the cover is reserved for separate client sign-off before publication. |
| 2 | Eleven portfolio categories and specification-led sourcing | The Home portfolio presents all 11 categories in profile order and links to their detailed examples. The Services and About pages explain the sourcing approach. |
| 3 | Drilling and breaking, cutting and grinding, woodworking, and heavy worksite equipment | Industrial & Construction Supplies, under Power Tools & Construction Machinery. |
| 4 | Workshop hand tools and measuring equipment, plus jacks, hoists, trolleys and rigging | Industrial & Construction Supplies, under Hand Tools & Workshop Equipment and Material Handling & Lifting Gear. |
| 5 | Metal, floor, wall and wood finishes, fillers, sprays, solvents, tools and abrasives | Industrial & Construction Supplies, under Paints, Coatings & Surface Finishing. |
| 6 | Packaging tapes, films, cushioning, boxes, sealing, sacks and labels | General Order Supply, under Packaging & Dispatch Material. |
| 7 | Lubricants, oils, greases, maintenance fluids, adhesives, fasteners, cutting and cleaning supplies | Industrial & Construction Supplies. General Order Supply also includes the hardware and fasteners range. |
| 8 | Electrical, plumbing, sanitary and personal protective equipment | Industrial & Construction Supplies and General Order Supply. |
| 9 | Indicative raw-material and spare-part families and RFQ requirements | Industrial & Construction Supplies. Examples remain subject to RFQ, including purchaser specifications and the relevant compatibility checks. |
| 10 | Heavy-vehicle tyres and three procurement steps | Home links to the three source-named options on General Order Supply, each in size 1000/20 and subject to quotation, client acceptance and availability. Home, About, Services, General Order Supply and Procurement & Installation explain the procurement steps. |
| 11 | Registered business information, NTN, office address, phones, email and commitment | About shows NTN 7927069-4 and the company commitment. Contact and the footer follow the letterhead transcription with the Step 22 client-confirmed email correction. Maps awaits verification of the exact pin. |
| 12 | Corporate signatory block | Retained in the source PDF. Website content omits the signature block and makes no signatory claim. |

The profile provides no concrete IT offerings. The IT Services page continues to indicate that its scope is awaiting approval. The Blog publishes approved articles only.

## Artwork and asset provenance

- `public/images/ns-profile-mark.png` is an isolated crop of the client-supplied PDF cover mark. The favicon and sharing card incorporate that source artwork. Request an original vector or higher-resolution master for future use and confirm final brand sign-off.
- All assets in `public/images/industrial/` are original AI-generated editorial illustrations created using the built-in OpenAI ImageGen tool. They depict generic equipment and settings. The footer and image alternative text disclose their illustrative use. [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/)
- Each generated file is served locally as WebP. The warehouse uses separate desktop and mobile crops. The service and product sheets were cropped into individual files. No reference-site photos or external stock assets were used.

| Asset files under `public/images/industrial/` | Subject |
| --- | --- |
| `warehouse.webp`, `warehouse-mobile.webp` | Industrial warehouse aisle |
| `supply.webp`, `workshop.webp`, `planning.webp`, `workstation.webp` | General order supply, industrial workshop, procurement planning and a neutral workstation |
| `power-tools.webp`, `hand-tools.webp`, `lifting.webp`, `paints.webp` | Power tools, hand tools, lifting gear and finishing materials |
| `packaging.webp`, `lubricants.webp`, `fasteners.webp`, `electrical-plumbing.webp` | Packaging, lubricants, fasteners and electrical/plumbing supplies |
| `safety.webp`, `raw-materials.webp`, `spares.webp`, `tyres.webp` | PPE, steel stock, mechanical spares and heavy-vehicle tyres |

## Industrial Supply Portfolio video register

These three Mixkit clips illustrate industrial equipment and logistics. The footer discloses use of stock footage. Each item page confirms commercial use under the [Mixkit Stock Video Free License](https://mixkit.co/license/modal/videoFree/), which permits modifications and does not require attribution. The source credits are recorded here.

| Local clip | Source | Export length | MP4 bytes | Poster bytes |
| --- | --- | ---: | ---: | ---: |
| `public/videos/industrial/workshop.mp4` | [Worker operating an industrial lathe](https://mixkit.co/free-stock-video/worker-operating-an-industrial-lathe-2244/) | 9 s | 841,806 | 30,006 |
| `public/videos/industrial/construction.mp4` | [Excavation crane lifts a rock into a truck](https://mixkit.co/free-stock-video/excavation-crane-lifts-a-rock-into-a-truck-4069/) | 9 s | 631,328 | 85,108 |
| `public/videos/industrial/handling.mp4` | [Cranes working on unloading dock](https://mixkit.co/free-stock-video/cranes-working-on-unloading-dock-4012/) | 10 s | 1,069,136 | 35,560 |

The exported clips are silent, 960 × 540 H.264 MP4s at 25 fps with the metadata moved to the front for progressive playback. The construction clip was reframed to exclude readable equipment branding. The corresponding WebP stills are in `public/images/video-posters/`. The carousel starts muted playback when its frame comes into view and prepares only the next clip near the end of the current one. It defaults to a still poster when reduced motion is requested.

The About Us hero reuses `handling.mp4` and its WebP poster. That cargo-crane clip runs as a muted decorative loop when the banner is visible and motion is permitted. No new footage or duplicative asset was added.

The homepage Heavy-Vehicle Tyre Supply section uses [Chris Flaten’s close-up of truck tyres](https://www.pexels.com/video/a-close-up-shot-of-truck-tires-4157778/) as illustrative stock footage under the [Pexels License](https://www.pexels.com/license/). The local `public/videos/industrial/truck-tyres.mp4` is a silent 832 × 468 H.264 export with progressive playback. The section reuses `public/images/industrial/tyres.webp` as its still fallback.

The Instagram, Facebook, LinkedIn and YouTube glyphs are from [Font Awesome Free 6](https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs/brands), © Fonticons, Inc., under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The published paths and viewboxes are unchanged and are embedded in [social-icon.tsx](../src/components/social-icon.tsx).

## Image generation prompts

**Warehouse hero**

Photorealistic editorial industrial stock-style image for a corporate website hero, wide landscape composition. Immense clean contemporary industrial supply distribution warehouse, tall slate-blue steel storage racks, neatly organised plain cartons and pallets, subtle warm amber rack beams, long horizontal and diagonal perspective, a stationary small forklift far to the right, cool navy shadow contrasted with warm natural overhead daylight. Architectural photography, controlled contrast, quiet, premium, realistic equipment. Visual focus extends from center to right, darker navy shadows on left for overlayed website copy, framed to also crop on mobile. No visible logos, signs, letters, people, watermark or identifiable real premises.

**Service image sheet**

Create one wide photographic CONTACT SHEET made of exactly 2 columns by 2 rows, equal rectangular quadrants with hard straight seams precisely at 50% width and 50% height, NO margins, NO dividers, NO text. Each quadrant is a separate premium corporate editorial photograph. Top left: neat industrial storage shelving with stacked plain boxes bins and workshop supplies. Top right: modern industrial workshop with tabletop power tools, vise and construction hardware. Bottom left: industrial procurement planning, overhead desk with unmarked technical schematic, caliper and sealed shipping carton, no legible writing. Bottom right: modest neutral computer workstation with a closed unbranded laptop, a dark monitor and no server racks, generic editorial technology subject. Photorealistic, subtle slate and warm ambient accents, consistent treatment. No logos, no lettering, no brands, no watermark, no implied real firm.

**Product image sheet**

Photographic product contact sheet, exact FOUR columns and THREE rows, exactly 12 equally sized rectangular tiles, edge to edge, each tile independent with hard seams exactly at quarter widths and third heights, no borders or labels. Photorealistic premium industrial editorial closeups with accent colors, slate-neutral background, light from upper left. Order left to right, top to bottom. Row 1: (1) power drill, circular saw and grinding machine; (2) workshop hand spanners, pliers and screwdrivers; (3) yellow chain hoist and steel lifting hooks; (4) paint roller and open can of blue paint. Row 2: (5) corrugated boxes with packing tape and wrapping film; (6) generic unlabelled black lubricant container and drops of amber oil in a tray; (7) close-up of silver hex nuts, screws and bolts; (8) electrical breaker and copper plumbing fittings. Row 3: (9) yellow hard hat, goggles and protective work gloves; (10) stock steel rectangular tube sections and round pipes; (11) machined gears, bearings and seals; (12) large heavy-duty truck tyres with visible tread. Keep all subjects centered within their tile and generous breathing room. No people, no logo, no typography, no watermark. A wide landscape sheet.
