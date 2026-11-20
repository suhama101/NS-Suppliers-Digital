# Client approval checklist

Use this checklist to record the client’s launch decisions for M/S Noshirwan & Sons. Record the approver, decision date and approved asset or URL with each item.

## Required before public launch

- [ ] **Business contact.** The Contact page and footer use the supplied letterhead transcription. Test that both listed numbers reach the intended business contact.
- [ ] **Maps.** Verify the exact office pin before enabling Maps.
- [x] **Email spelling.** The client confirmed `noshirwan900@gmail.com` in Step 22. The site uses it for the email links.
- [ ] **IT Services.** Approve what may be published, or explicitly approve keeping the current pending-scope notice at launch. Supply the approved service names and descriptions, who the services are for, what information an enquiry should include, and the preferred contact or engagement process.
- [ ] **Launch origin and indexing.** Approve the Vercel URL or provide the final custom domain. Make a separate decision about search indexing. Set `SITE_URL` at build time for an approved custom domain and set `SITE_INDEXABLE=true` only for an approved indexable production build. Verify the live canonical tags, robots metadata, response headers and sitemap before announcing launch. Review builds default to `noindex, follow`.
- [ ] **Branding sign-off.** Confirm the company profile mark and its favicon and sharing card adaptations for website use.

## Recommended improvements

- [ ] **Logo package.** Supply the approved logo as an SVG, a high-resolution PNG and light/dark variants where available. Confirm whether the mark on the profile cover is the approved artwork. Supply or approve the favicon and 1200 × 630 sharing artwork.
- [ ] **Product and industrial imagery.** Supply rights-cleared images and identify what each depicts. Confirm whether any images from the PDF may be reused and whether any show company premises or operations. The current site uses illustrative graphics and icons.

## Optional future additions

- [ ] **Social profiles.** Once the official accounts exist, verify the full HTTPS URLs for Instagram, Facebook, LinkedIn and YouTube. Set each platform's `officialUrl` in [`src/content/site.ts`](../src/content/site.ts). Leave unverified entries as `null` to keep their internal placeholders. Check the updates in Contact, the footer and the quick-contact widget.
- [ ] **Blog.** Add client-approved articles through `src/content/blog.ts` when copy, publication dates, bylines and any image permissions are confirmed.

## Updating approved content

Contact data lives in [`src/content/site.ts`](../src/content/site.ts). Populate `officeMapsUrl` with the exact HTTPS pin link only after client verification. The `businessContact.email` field feeds the displayed business email and its mail link.

Add approved service scope and engagement details to [`src/content/it-services.ts`](../src/content/it-services.ts). Update the IT summary in [`src/content/services.ts`](../src/content/services.ts) and clear `pendingApproval` once the client has approved the published scope.
