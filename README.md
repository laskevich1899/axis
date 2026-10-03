# Axis BIM Solutions

Marketing site for **Axis BIM Solutions** — BIM model management, construction documents and process adoption. Based in Warsaw.

Live: [https://axisbimsolutions.com](https://axisbimsolutions.com)

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- React 19

## Privacy-first contact

Personal email and phone are **not** shown on the site. Visitors send a request through the form; [Web3Forms](https://web3forms.com) delivers it to your private inbox.

Required visitor fields: name, email, project brief. Phone and company are optional.

Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (local `.env.local` and GitHub Actions secret `WEB3FORMS_ACCESS_KEY`). The access key is safe to expose in the frontend — it is only an alias for your inbox.

## Run locally

```bash
cp .env.example .env.local
# add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Admin

Edit public location / services at [http://127.0.0.1:4321/admin](http://127.0.0.1:4321/admin) (default password `axis-admin`). Admin API works only on a Node host, not on GitHub Pages.

## Deploy

Push to `main` runs `.github/workflows/deploy-pages.yml`, which builds a static export and publishes the `gh-pages` branch. Keep GitHub Pages source set to `gh-pages` / `/(root)`.
