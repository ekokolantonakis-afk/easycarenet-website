# easycarenet — Website

Premium animated marketing site for **easycarenet** — IT Solutions & Services Group.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with subtle premium animations, a particle-field hero, and a dual-positioning narrative that speaks to both small businesses and larger organizations.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# → open http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

**Requirements:** Node.js 18.17+ (recommended 20.x LTS).

---

## Project Structure

```
easycarenet-website/
├── app/
│   ├── layout.tsx           # Root layout, fonts (Inter, Sora), metadata
│   ├── page.tsx             # Home page — composes all sections
│   ├── globals.css          # Design tokens, buttons, cards, utilities
│   └── components/
│       ├── Nav.tsx              # Sticky nav with scroll blur + mobile menu
│       ├── Logo.tsx             # Animated infinity SVG + wordmark
│       ├── ParticleBackground.tsx  # Canvas-based particle field (hero)
│       ├── Hero.tsx             # Hero section with animated headline
│       ├── SectionTitle.tsx     # Reusable section header
│       ├── Pillars.tsx          # 5 strategic pillars
│       ├── Stages.tsx           # Start / Grow / Scale tiers
│       ├── Services.tsx         # 6 service cards (AI, Web, Apps, etc.)
│       ├── UseCases.tsx         # Industry verticals with outcomes
│       ├── Ecosystem.tsx        # scanorderpay.ai, cashproof.app, bonuscard.ai
│       ├── CTA.tsx              # Final conversion block
│       └── Footer.tsx
├── public/                   # Static assets (add logo files, OG images here)
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Design System

### Colors

| Token               | Hex       | Usage                          |
|---------------------|-----------|--------------------------------|
| `navy-deep`         | `#061A2B` | Primary background             |
| `navy-mid`          | `#0A2439` | Card backgrounds               |
| `brand-core`        | `#0A84FF` | Primary CTAs, gradients        |
| `brand-electric`    | `#2FD3FF` | Accents, glows                 |
| `brand-cyan`        | `#7FE7FF` | Highlights, hover states       |
| `steel`             | `#A7B3C2` | Body text, muted UI            |

### Typography

- **Inter** — body & UI (loaded via `next/font`)
- **Sora** — display / headlines (loaded via `next/font`)

### Motion Philosophy

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for all major transitions
- Duration: 0.6–0.8s for reveals, 0.3s for hovers
- Reveals use `whileInView` with `once: true` — animations fire once and stay
- No autoplay video, no aggressive parallax — motion serves the content

---

## Sections Included

1. **Hero** — Animated particle field, full logo, tagline, dual CTAs
2. **Pillars** — 5 strategic commitments (control, partnership, reuse, impact, ownership)
3. **Stages** — Start / Grow / Scale — dual positioning from €500 to custom
4. **Services** — 6 disciplines: AI, Websites, Apps, Automation, Data, Integrations
5. **Use Cases** — Restaurants, Clinics, Retail, Agencies, Growing Companies
6. **Ecosystem** — scanorderpay.ai, cashproof.app, bonuscard.ai as flagship products
7. **CTA** — Final conversion block
8. **Footer** — Full sitemap + contact

---

## Deployment

### Vercel (recommended — zero config)

```bash
npm install -g vercel
vercel
```

Vercel auto-detects Next.js. Push to GitHub and connect the repo for automatic deploys.

### Any Node host

```bash
npm run build
npm run start
```

Serves on port 3000 by default. Behind nginx/Caddy, proxy to `localhost:3000`.

### Static export (optional)

If you want a fully static build (no Node server), add to `next.config.js`:

```js
module.exports = {
  output: "export",
};
```

Then `npm run build` outputs to `/out/`. Note: particle background and client animations still work — they're already client-side.

---

## Customization Quick Refs

**Change the headline:** `app/components/Hero.tsx` — look for `<motion.h1>`.

**Add / remove a pillar:** `app/components/Pillars.tsx` — edit the `pillars` array.

**Reprice the stages:** `app/components/Stages.tsx` — edit `range` and `features` in each stage.

**Swap an ecosystem product:** `app/components/Ecosystem.tsx` — edit the `products` array.

**Change colors globally:** `tailwind.config.ts` (tokens) and `app/globals.css` (CSS vars).

**Replace the logo:** `app/components/Logo.tsx` is pure SVG — edit the path data or swap for an `<img>`.

---

## What's Intentionally Not Included

- No CMS integration — content is in components (fastest to ship, easy to migrate later)
- No contact form backend — CTAs are `mailto:` links. Wire up to Resend / SendGrid / your stack when ready.
- No analytics — drop in your tag (Plausible / Fathom / GA4) in `app/layout.tsx`.
- No i18n — single-language English. Add `next-intl` when you need Greek / multi-lang.

---

## Next Steps

1. **Run `npm install && npm run dev`** to see it live.
2. **Edit `app/components/Hero.tsx`** if you want a different headline.
3. **Drop your real contact email** into `CTA.tsx` and `Footer.tsx`.
4. **Deploy to Vercel** (2 minutes).
5. **Point your domain** (easycarenet.com or similar) at the Vercel project.

---

*Built on the brand system: "Engineered for Control. Built to Evolve."*
