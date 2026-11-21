# Client approval checklist

Use this checklist to record the client’s launch decisions for M/S Noshirwan & Sons. Record the approver, decision date and approved asset or URL with each item.

## Required before public launch

- [ ] **Business contact.** The Contact page and footer use the supplied letterhead transcription. Test that both listed numbers reach the intended business contact.
- [ ] **Maps.** Confirm the exact office pin and provide its public Google Maps link and matching embed URL from Google Maps before final sign-off. The current Contact page shows a labelled address search.
- [x] **Email spelling.** The client confirmed `noshirwan900@gmail.com` in Step 22. The site uses it for the email links.
- [x] **IT Services.** Publish the approved Networking, Network Switches, CCTV Systems, Network Cables and Firewalls categories.
- [ ] **Digital Marketing scope.** Review SEO, social media marketing, content marketing, digital branding, and website visibility and performance as possible sub-services. The public page introduces the approved category and invites enquiries.
- [ ] **Contact form.** Activate a client-owned or explicitly authorized Web3Forms integration and verify email delivery.
- [ ] **Launch origin and indexing.** Approve the Vercel URL or provide the final custom domain. Make a separate decision about search indexing. Set `SITE_URL` at build time for an approved custom domain and set `SITE_INDEXABLE=true` only for an approved indexable production build. Verify the live canonical tags, robots metadata, response headers and sitemap before announcing launch. Review builds default to `noindex, follow`.
- [ ] **Branding sign-off.** Confirm the company profile mark and its favicon and sharing card adaptations for website use.

## Recommended improvements

- [ ] **Logo package.** Supply the approved logo as an SVG, a high-resolution PNG and light/dark variants where available. Confirm whether the mark on the profile cover is the approved artwork. Supply or approve the favicon and 1200 × 630 sharing artwork.
- [ ] **Product and industrial imagery.** Supply rights-cleared images and identify what each depicts. Confirm whether any images from the PDF may be reused and whether any show company premises or operations. The current site uses illustrative graphics and icons.

## Optional future additions

- [ ] **Social profiles.** Once the official accounts exist, verify the full HTTPS URLs for Instagram, Facebook, LinkedIn and YouTube. Set each platform's `officialUrl` in [`src/content/site.ts`](../src/content/site.ts). Leave unverified entries as `null` to keep their internal placeholders. Check the updates in Contact, the footer and the quick-contact widget.
- [ ] **Blog.** Add client-approved articles through `src/content/blog.ts` when copy, publication dates, bylines and any image permissions are confirmed.

## Updating approved content

Contact data lives in [`src/content/site.ts`](../src/content/site.ts). After the client verifies the exact pin, set `officeMapsUrl` and replace the temporary iframe URL and address-search notice in [the Contact page](../src/app/contact/page.tsx) using the approved Google Maps embed. The `businessContact.email` field feeds the displayed business email and its mail link.

Add approved service scope and engagement details to [`src/content/it-services.ts`](../src/content/it-services.ts). Update the IT summary in [`src/content/services.ts`](../src/content/services.ts) when the client approves a change to the published scope.

## Activate Web3Forms

1. Open [Web3Forms](https://web3forms.com/) under client ownership or with explicit client authorization. Create an access key for the receiving address `noshirwan900@gmail.com`. Complete any verification Web3Forms requests from that mailbox.
2. Copy the browser-compatible access key associated with that mailbox. In the existing Vercel project, open **Settings → Environment Variables** and add it as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` for **Production**. For authorized local testing, use the same variable in the ignored `.env.local` file. Next.js embeds this public value at build time. Keep private tokens and account credentials out of public variables and the repository.
3. If available on the client's Web3Forms plan, restrict the key to `ns-suppliers-digital.vercel.app` in the form settings. The form already uses the provider's hidden `botcheck` field for spam filtering. A production-only domain restriction can block local submissions. [Domain restriction documentation](https://docs.web3forms.com/getting-started/pro-features/restrict-to-domain)
4. Redeploy the existing Vercel production deployment so the static build picks up the variable. Open the deployed Contact page and confirm the Send Message button is enabled.
5. Submit an authorized enquiry with a distinctive subject from the deployed page. Confirm the success message and ask the mailbox owner to verify receipt at `noshirwan900@gmail.com`. Check spam if the message is missing.

Until the key is configured, the form displays its activation notice and the direct email link stays available.
