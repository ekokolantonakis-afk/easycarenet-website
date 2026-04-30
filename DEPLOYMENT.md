# Deployment

> Self-contained ops reference for the public repo. The full operational dossier (with credentials hints, VPS layout, and upgrade backlog) lives in the parent project's knowledge base.

## Stack

- **Next.js 14** (App Router, static export — `output: 'export'` in [next.config.js](next.config.js))
- **TypeScript**, **Tailwind CSS**, **framer-motion**, **lucide-react**
- **Inter** + **Sora** via `next/font/google`
- Output: a fully static `out/` directory (no Node server, no API routes at runtime)

## Build

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # → ./out/ (static export, ~5 MB)
```

## Production deploy (current)

Hosted at **https://easycarenet.com** behind Cloudflare. Origin is a Contabo VPS running nginx that serves the static `out/` files directly.

```bash
npm run build
rsync -avz --delete -e "ssh -i ~/.ssh/easycare_vps" \
  out/ root@<origin-vps>:/var/www/easycarenet.com/
ssh -i ~/.ssh/easycare_vps root@<origin-vps> \
  "chown -R www-data:www-data /var/www/easycarenet.com"
```

Then purge the Cloudflare cache (the `_next/static/*.{js,css}` chunk hashes change on every build).

## Versions & rollback

| Tag | What | When |
|---|---|---|
| `v1-original` | Initial release | 2026-04-22 |
| `v2-design` | Full Claude Design redesign — 5-pillar hero, OwnedVsRented section, SystemNetwork canvas (labeled nodes + flowing data packets), tighter typography. Rolled back due to logo issues only. Recoverable. | 2026-04-25 |
| `main` HEAD | v1 + pure inline-SVG logo (current production) | 2026-04-25 |

```bash
# inspect v2 design
git checkout v2-design

# pull a single component over from v2 without taking the whole redesign
git checkout v2-design -- app/components/SystemNetwork.tsx
```

## Brand tokens

Defined in [tailwind.config.ts](tailwind.config.ts) and [app/globals.css](app/globals.css):

| Role | Hex |
|---|---|
| Background | `#061A2B` (`navy-deep`) |
| Surface | `#0A2439` (`navy-mid`) / `#0F2E47` (`navy-soft`) |
| Primary | `#0A84FF` (`brand-core`) |
| Accent | `#2FD3FF` (`brand-electric`) |
| Highlight | `#7FE7FF` (`brand-cyan`) |
| Body text | `#A7B3C2` (`steel`) |

## Tagline policy

The tagline **"Engineered for Control. Built to Evolve."** is fixed and must not be altered or paraphrased — period after each sentence, no comma.

## Logo

The hero/nav logo is rendered as **inline SVG + CSS-rendered wordmark** in [app/components/Logo.tsx](app/components/Logo.tsx). Do not swap to a raster PNG unless you have a vector source — AI-generated raster variants tend to introduce spelling errors ("CROUP" instead of "GROUP", "Evalve" instead of "Evolve") and look soft when upscaled past ~1.5×.

The PNGs in [public/](public/) are kept for the OG share image (`og-pillars.png`, 1536×1024) and for any future light-theme sub-pages (`logo-light.png`).

## Sections

`app/page.tsx` composes the homepage in this order:

1. Nav (sticky, blurs on scroll)
2. Hero — particle canvas + logo + gradient H1 + CTAs + badges + scroll indicator
3. Pillars (`#pillars`) — five principles
4. Stages (`#stages`) — Start / Grow / Scale tiers (Grow is featured)
5. Services (`#services`) — six disciplines
6. Use Cases (`#use-cases`) — five industries with concrete outcomes
7. Ecosystem (`#ecosystem`) — scanorderpay.ai, cashproof.app, bonuscard.ai
8. CTA (`#contact`) — primary conversion block
9. Footer — solutions / ecosystem / company columns + legal meta
