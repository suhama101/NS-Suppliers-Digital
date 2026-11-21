# Client approval checklist

Use this checklist to record the client’s launch decisions for M/S Noshirwan & Sons. Record the approver, decision date and approved asset or URL with each item.

## Required before public launch

- [ ] **Business contact.** The Contact page and footer use the supplied letterhead transcription. Test that both listed numbers reach the intended business contact.
- [ ] **Maps.** Confirm the exact office pin and provide its public Google Maps link and matching embed URL from Google Maps before final sign-off. The current Contact page shows a labelled address search.
- [x] **Email spelling.** The client confirmed `noshirwan900@gmail.com` in Step 22. The site uses it for the email links.
- [x] **IT Services.** Publish the approved Networking, Network Switches, CCTV Systems, Network Cables and Firewalls categories.
- [ ] **Digital Marketing scope.** Review SEO, social media marketing, content marketing, digital branding, and website visibility and performance as possible sub-services. The public page introduces the approved category and invites enquiries.
- [ ] **Contact form.** Connect a client-owned or explicitly authorized Formspree form and verify email delivery.
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

## Connect Formspree

1. In a client-owned or explicitly authorized [Formspree](https://formspree.io/) account, create a form for the website. In its settings or email workflow, set the notification recipient to `noshirwan900@gmail.com`. Complete the mailbox verification from that inbox and ensure notifications are enabled.
2. Copy the public form ID from the form endpoint. Set `NEXT_PUBLIC_FORMSPREE_FORM_ID` to that ID in the existing Vercel project Production environment, then rebuild and redeploy the static site. For authorized local testing, set it in `.env.local`. Keep account credentials and private tokens out of the repository and public build environment.
3. With authorization, submit a distinct test enquiry from the deployed Contact page. Check for the success message, find the matching submission in the Formspree dashboard, and verify that the email arrives at the confirmed inbox. Check the spam folder and email workflow settings if the dashboard records it without a notification.

Until the form ID is configured, the form is visibly disabled and the direct email link remains available. The form uses the Formspree `_gotcha` field for spam filtering.
