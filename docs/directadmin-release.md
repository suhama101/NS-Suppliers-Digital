# DirectAdmin manual release

The document root for the official site is `domains/noshirwantraders.com/public_html`.

## Build and review

1. Confirm the article’s publication date in `src/content/blog.ts`. The first article uses 25 November 2026 as its planned release date. If the site update goes live later, set the actual release date and rebuild so the listing, article metadata and sitemap agree.
2. With Node.js 24, run `npm run lint` and `npm run typecheck`. In PowerShell, build the approved release with:

   ```powershell
   $env:SITE_URL = 'https://www.noshirwantraders.com'
   $env:SITE_INDEXABLE = 'true'
   npm.cmd run build
   ```

3. Package the contents of `out` and confirm `index.html` appears at the ZIP root. Serve the export from a local static server and check the homepage, nested routes, contact options, blog article, `robots.txt` and `sitemap.xml`.

## Back up and install after approval

1. Back up the complete, currently working `public_html`, including hidden files, to a location outside the public document root. Check that the backup opens and contains the homepage, assets and hosting files.
2. Extract the new ZIP into a staging directory outside the public document root. Confirm its top-level `index.html` and `_next` directory. Copy the staged generated files into `public_html`, preserving relative paths. Keep the ZIP and backup outside the document root. Preserve existing hosting files, including `.htaccess`, `.well-known` and any verification files.
3. Test the official HTTPS homepage, Digital Marketing, the Blog listing and article, the Contact page and nested service routes. Confirm that assets load, the sitemap resolves and there is no conflicting `X-Robots-Tag` header on indexable pages. If the update fails, restore the working files from the backup and remove only the newly added generated files identified by comparing the two manifests.
4. Compare the old and new generated file lists before cleanup. Previous Next.js build IDs and hashed files under `_next` can become obsolete. Keep those assets during initial verification and cache rollover. Then remove only old generated paths that are absent from the new export and unused by the current pages. If an earlier flat export was uploaded, check for legacy files such as `about.html`, `contact.html` or `services/digital-marketing.html` alongside the directory-style routes. Preserve any separately managed files and keep the rollback backup.

## Search Console

1. In the site owner’s Google Search Console account, add the URL-prefix property `https://www.noshirwantraders.com/`. Select HTML file verification and download Google’s file. During the approved deployment, place it directly in `public_html`, check its exact public HTTPS URL and select **Verify**. Keep the file accessible for later verification checks. [Google’s site ownership instructions](https://support.google.com/webmasters/answer/9008080)
2. When the update is live and the property is verified, open **Sitemaps** and submit `sitemap.xml`. Check the processing report and use URL Inspection for the homepage and new article. [Google’s Sitemaps report instructions](https://support.google.com/webmasters/answer/7451001)
