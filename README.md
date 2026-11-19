# NS Suppliers Digital

Static corporate portfolio for M/S Noshirwan & Sons, a government contractor and general order supplier based in Wah Cantt. The homepage, About Us, and industrial supply and procurement pages draw from `Noshirwan_Sons_Company_Profile_Corrected.pdf`.

## Local development

Use Node.js 24.x and npm. From the repository root, run:

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). On Windows PowerShell, use `npm.cmd` if script execution blocks `npm`.

## Quality checks

```sh
npm run lint
npm run typecheck
npm run build
```

Next.js exports the production site to `out/`. To preview the production output, serve `out/` with a static file server.

## Project structure

```text
public/
└── images/          Static website images
src/
├── app/             App Router pages, root layout, and global styles
├── components/      Shared and page-level components
└── content/         Version-controlled company and editorial content
```

| Route | App Router file under `src/app/` | Status |
| --- | --- | --- |
| `/` | `page.tsx` | Implemented |
| `/about` | `about/page.tsx` | Implemented |
| `/services` | `services/page.tsx` | Implemented |
| `/services/general-order-supply` | `services/[slug]/page.tsx` | Implemented |
| `/services/industrial-construction-supplies` | `services/[slug]/page.tsx` | Implemented |
| `/services/procurement-project-support` | `services/[slug]/page.tsx` | Implemented |
| `/services/it-services` | `services/[slug]/page.tsx` | Implemented, content pending approval |
| `/blog` | `blog/page.tsx` | Implemented |
| `/blog/[slug]` | `blog/[slug]/page.blog.tsx` | Generated for approved articles |
| `/contact` | `contact/page.tsx` | Implemented |

## Publishing blog articles

Add a client-approved entry to `blogArticles` in `src/content/blog.ts`. Each entry needs a unique kebab-case `slug`, `title`, `summary`, `category` key from `blogCategories`, `publishedOn` in `YYYY-MM-DD` format, `byline`, `body`, and `seoDescription`. Every entry in this collection is published on the next build.

- Use `heading`, `paragraph`, `list`, and `image` body blocks. Paragraphs and list items accept strings and internal links shaped as `{ text, href }`. Include spaces where text joins a link. Headings default to level 2 and can include an `id` for in-page links.
- Add an optional `cover` and any body images under `public/images/`. Supply a root-relative `src`, alternative text, and the actual `width` and `height` in pixels. Use compressed WebP or AVIF assets for the static export. Body images can include a caption.
- Run `npm run lint`, `npm run typecheck`, and `npm run build`. Preview `/blog` and the generated `/blog/<slug>` page. The listing orders articles newest first, filters by category, and calculates reading time from the body on the article page.

The `.blog.tsx` page extension enables the dynamic article route only when the collection contains articles. This allows the empty listing to export without generating an article URL. Restart the dev server after adding the first article or removing the last one.

## Maintaining site content

Maintain product categories in `src/content/products.ts` and contact details in `src/content/site.ts`. The Contact page and footer both read from that configuration.

- Verify the office address and its Google Maps search result with the client, update the address if required, and set `officeAddressConfirmed` to `true` to enable Maps. Until then, the office card offers a phone call to confirm the location.
- The company profile prints `noshirwan900@gamil.com`. Confirm the exact email address with the client, update `email.address` with the confirmed spelling, and set `email.confirmed` to `true` to activate the email links.
- Add only verified HTTPS profile URLs to `socialLinks`. A `null` entry displays as unavailable on Contact and is omitted from the footer.

Maintain service summaries in `src/content/services.ts`. When the client approves the IT scope and engagement details, populate `src/content/it-services.ts`, update the IT summary, and clear its `pendingApproval` flag.

## Future Vercel deployment

1. After approval, push the source files and `package-lock.json` to the GitHub repository.
2. Import the repository into Vercel and use the repository root and the Next.js framework preset.
3. Use Node.js 24.x and the preset’s default build and output settings. The build runs `npm run build` and generates the static export in `out/`.

The site can build locally without environment variables or runtime services. When the public domain is approved, set the build-time `SITE_URL` to its HTTPS origin, with no path or query. Canonical and Open Graph URLs are generated from that origin. Review the public sitemap, indexing settings and approved social preview imagery before launch.

[Vercel Git deployment guide](https://vercel.com/docs/git) · [Next.js static export guide](https://nextjs.org/docs/app/guides/static-exports)

### Private client previews

Before sharing a hosted preview with the client, complete all three checks.

1. Enable Vercel Authentication for Preview deployments and grant access to the intended reviewers.
2. Open the preview URL in a signed-out browser and verify that it requires authentication. Confirm that an authorized reviewer can load the site.
3. Inspect the authenticated preview response and verify that the `X-Robots-Tag` header includes `noindex`.

[Vercel Authentication](https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/vercel-authentication) · [Vercel response headers](https://vercel.com/docs/headers/response-headers)
