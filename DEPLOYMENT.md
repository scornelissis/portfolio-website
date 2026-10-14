# Deployment

The portfolio is a static Vite application. Its production build is written to
`dist`, so the same source can be hosted on GitHub Pages or Cloudflare Pages.

## GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`.

1. Create an empty GitHub repository.
2. Push this project to the repository's `main` branch.
3. In the GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish.

Every later push to `main` automatically rebuilds and redeploys the portfolio.
The workflow supplies the repository path to Vite, so scripts, styles, the
favicon, and the resume continue to work on project Pages URLs.

## Cloudflare Pages

No application changes are required when moving to Cloudflare later.

1. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
2. Select the GitHub repository.
3. Use these build settings:
   - Framework preset: **Vite**
   - Build command: `pnpm build`
   - Build output directory: `dist`
   - Root directory: `/`
4. Set the production branch to `main` and deploy.

Cloudflare builds at the domain root, so `FIGMA_PUBLIC_URL` should not be set
there. A custom domain can then be attached from the Pages project settings.

## Local production check

```sh
pnpm install
pnpm build
```
