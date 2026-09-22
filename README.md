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

## Admin

Edit contact details and services at [http://127.0.0.1:4321/admin](http://127.0.0.1:4321/admin).

Default password: `axis-admin`

Optional env vars:

| Variable | Purpose |
|----------|---------|
| `ADMIN_PASSWORD` | Admin sign-in password (default `axis-admin`) |
| `ADMIN_SESSION_SECRET` | Cookie signing secret (defaults from the password) |

Saved content lives in `data/site-content.json`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 4321 |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run lint` | ESLint |

## Notes

Copy is in English. The contact form is mock-only (no email backend). Change the admin password before any public deploy.
