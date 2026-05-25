# Sofret Mariane

Certified Egyptian catering by Mariane Anis in Cleopatra, Alexandria — website, installable PWA, and Capacitor-ready iOS/Android wrapper. Built end-to-end as a single static site so it deploys to GitHub Pages, Netlify, Cloudflare Pages, or any host.

## What's inside

- `index.html` — landing page with hero, packages (small + big events), menu, gallery, reviews, location map, FAQ, contact, cart drawer, checkout modal, and order-confirmation modal. Fully bilingual (EN/AR with RTL).
- `styles.css` — design system, animations, RTL support, modal + cart styles.
- `script.js` — i18n, language toggle, cart state, checkout, Egyptian payment dispatch (InstaPay, Vodafone Cash, bank, card, COD), PWA install prompt, scroll/parallax/counter animations.
- `sw.js` — service worker (network-first HTML, cache-first static, stale-while-revalidate for cross-origin).
- `site.webmanifest` — installable PWA with app shortcuts (`Order`, `Estimate`, `WhatsApp`).
- `capacitor.config.json` + `package.json` — wrap the PWA as native iOS / Android apps via Capacitor.
- `assets/` — logo, portrait, favicon, social-share imagery.
- `docs/social-launch-kit.md` — Facebook, Instagram, TikTok, WhatsApp Business, Google Business Profile setup.
- `docs/platform-release-kit.md` — production checklist: business config, payment gateways, custom domain, App Store + Play Store submission.

## Run locally

```sh
# Python
python3 -m http.server 5173

# or npm (no install needed)
npx serve -l 5173 .
```

Open http://localhost:5173.

## Build the native app (optional)

```sh
npm install
npx cap add ios
npx cap add android
npx cap sync
npx cap open ios       # opens Xcode
npx cap open android   # opens Android Studio
```

See `docs/platform-release-kit.md` Section 4 for full App Store / Play Store steps.

## Deploy

Push to `main` — GitHub Pages serves the live site at:

https://abanobsalib.github.io/sofret-mariane-catering/

For a custom domain see `docs/platform-release-kit.md` Section 6.
