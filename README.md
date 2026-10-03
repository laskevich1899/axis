# Axis BIM Solutions

Marketing site for **Axis BIM Solutions** — BIM model management, construction documents and process adoption. Based in Warsaw.

Live: [https://axisbimsolutions.com](https://axisbimsolutions.com)

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- React 19

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Admin

Edit contact details at [http://127.0.0.1:4321/admin](http://127.0.0.1:4321/admin) (default password `axis-admin`).

On GitHub Pages the public site is a static export — edit `data/site-content.json`, commit and push to update the live site.

## Deploy

Push to `main` runs `.github/workflows/deploy-pages.yml`, which builds a static export and publishes the `gh-pages` branch. Keep GitHub Pages source set to `gh-pages` / `/(root)`.
