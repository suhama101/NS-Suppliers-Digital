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
| `/services/it-services` | `services/[slug]/page.tsx` | Five client-approved categories |
| `/services/digital-marketing` | `services/[slug]/page.tsx` | Client-approved category overview |
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

- The office address follows the letterhead transcription. The Contact page embeds a temporary Google Maps address search. See the [client approval checklist](docs/client-approval-checklist.md) for exact pin sign-off and contact form configuration.
- The client confirmed `noshirwan900@gmail.com` in Step 22. The Contact page, footer and quick-contact widget all read the address from `businessContact.email`.
- Enter each verified HTTPS profile in the corresponding `officialUrl` field of `socialPlatforms`. A `null` entry links to its internal `/social/<platform>` placeholder from every surface. Those pages stay out of the sitemap and always use `noindex, follow`.

Maintain service summaries in `src/content/services.ts`. Maintain the approved IT service categories in `src/content/it-services.ts`.

## Future Vercel deployment

1. After approval, push the source files and `package-lock.json` to the GitHub repository.
2. Import the repository into Vercel and use the repository root and the Next.js framework preset.
3. Use Node.js 24.x and the preset’s default build and output settings. The build runs `npm run build` and generates the static export in `out/`.

The site can build locally without environment variables or runtime services.

[Vercel Git deployment guide](https://vercel.com/docs/git) · [Next.js static export guide](https://nextjs.org/docs/app/guides/static-exports)

## Search and sharing configuration

The default canonical origin is `https://ns-suppliers-digital.vercel.app`. The build-time `SITE_URL` overrides it for canonical URLs, Open Graph URLs, social image URLs and the sitemap. Use the approved HTTPS origin without credentials, a path, a query or a fragment.

The public review build defaults to `noindex, follow`. Its `robots.txt` allows crawling so search engines can read the HTML directive. `/sitemap.xml` is generated for every build and lists the published pages and approved articles. Digital Marketing is included when indexing is enabled. The review `robots.txt` omits the sitemap announcement.

After the client approves indexing:

1. Set `SITE_INDEXABLE=true` for the production build. Keep it unset for review or preview builds. Set `SITE_URL` if the client has approved a new canonical domain.
2. Build and deploy the approved release. Verify the public HTML has `index, follow`, check for any conflicting `X-Robots-Tag` headers, and confirm that canonical tags and the `robots.txt` sitemap URL use the intended origin.
3. Verify the live `/sitemap.xml` and submit it through the client's search console if configured.

The header, footer, favicon and sharing card use the NS artwork extracted from the supplied company profile cover. The favicon and card are website adaptations. Confirm final brand approval and request the original logo artwork for future use. See the [content and imagery register](docs/content-and-imagery.md) for source coverage and visual asset provenance.
