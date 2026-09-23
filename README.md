# Axis BIM Solutions

Marketing site for **Axis BIM Solutions**—BIM model management, construction documents and process adoption. Based in Warsaw.

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

## Admin (local / Node host)

Edit contact details, services and hero slides at [http://127.0.0.1:4321/admin](http://127.0.0.1:4321/admin).

Default password: `axis-admin`

| Variable | Purpose |
|----------|---------|
| `ADMIN_PASSWORD` | Admin sign-in password (default `axis-admin`) |
| `ADMIN_SESSION_SECRET` | Cookie signing secret |

Saved content: `data/site-content.json`. Uploads: `public/uploads/slides/`.

> On **GitHub Pages** the public site is a static export. The admin API is not available there—edit content locally, commit, and push to update the live site.

## GitHub Pages + custom domain

Workflow `.github/workflows/deploy-pages.yml` builds a static export and deploys on every push to `main`.

### GoDaddy DNS (required)

GitHub Pages will stay broken while a **WebsiteBuilder** A-record is present.

1. GoDaddy → DNS for `axisbimsolutions.com`
2. **Delete** the A record `@` → `WebsiteBuilder Site` (IPs like `76.223…` / `13.248…`)
3. Keep only these A records for `@`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Keep CNAME `www` → `laskevich1899.github.io`
5. In GitHub → Settings → Pages → Custom domain `axisbimsolutions.com` → **Check again**
6. After DNS is green, enable **Enforce HTTPS**

Propagation can take from a few minutes up to a couple of hours.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 4321 |
| `npm run build` | Production build |
| `npm run start` | Run production build (Node; not used on GitHub Pages) |
| `npm run lint` | ESLint |
