# Sofret Mariane — Production Release Kit

End-to-end checklist to ship the website, accept real orders, and submit the mobile app to the App Store and Play Store.

Anything tagged **[YOU]** requires you to do it (signups, payments, verification). Anything tagged **[CODE]** is already wired in the repo and just needs the right value plugged in.

---

## 0. Repo & deployment shape

- The site is **plain static HTML/CSS/JS** — deploys anywhere (GitHub Pages, Netlify, Cloudflare Pages, Vercel, your own server).
- The same files power the **PWA** (installable web app) and the **Capacitor wrapper** that becomes the iOS / Android native app.
- The repo lives at `github.com/AbanobSalib/sofret-mariane-catering` and pushes to GitHub Pages at:

  https://abanobsalib.github.io/sofret-mariane-catering/

> **Important:** every URL in `index.html`, `script.js`, `site.webmanifest`, and `sitemap.xml` uses that GitHub Pages URL. If you move to a custom domain (Section 6), do a search-replace across the repo before deploying.

---

## 1. Plug in real business values  [CODE]

Open **`script.js`** at the top — replace the `CONFIG` block:

```js
const CONFIG = {
  whatsapp: "201223226196",         // chef's WhatsApp Business (no +)
  instapayHandle: "name@bank",      // chef's InstaPay address
  vodafoneCash: "01XXXXXXXXX",      // Vodafone Cash wallet number
  bank: {
    name: "CIB Egypt",              // your bank
    accountName: "Mariane Anis",
    accountNumber: "0000-0000-0000-0000",
    iban: "EG00 0000 0000 0000 0000 0000 000",
    swift: "CIBEEGCX",
  },
  paymobCheckoutUrl: "",            // leave empty until Paymob is live (Section 3)
};
```

Then confirm these live values across `index.html`:

| Find | Replace with |
|------|--------------|
| `+20 122 322 6196` | Mariane's formatted number |
| `wa.me/201223226196` | Mariane's WhatsApp link |
| `hello@sofretmariane.com` | your real email |
| `facebook.com/sofretmariane` | real Facebook URL if handle differs |
| `instagram.com/sofretmariane` | real Instagram URL |
| `tiktok.com/@sofretmariane` | real TikTok URL |

---

## 2. Pre-launch content checklist  [YOU]

- [ ] **Chef portrait** — confirm `assets/mariane-anis-enhanced.jpg` is the version she wants public.
- [ ] **Real food photos** — replace the Unsplash URLs in `index.html` (search `images.unsplash.com`). Aim for 8–12 in-house shots. Place them in `assets/photos/` and point each `<img src>` at the local path.
- [ ] **Final menu prices** — confirm every `EGP X,XXX–X,XXX` range with the chef. Ingredient prices move; lock them before paid orders open.
- [ ] **Certification wording** — the site says "Certified chef" and "Licensed kitchen". Replace with the exact certificate name so the wording is accurate.
- [ ] **Real client reviews** — replace the three placeholder reviews in `index.html` once you have permission. Keep the same `<figure class="review-card">` structure.

---

## 3. Online payments (Egypt)  [YOU + CODE]

The site already shows the customer five payment methods and generates the right payment instructions in the order-confirmation modal:

| Method | Status | What you do |
|---|---|---|
| **InstaPay** | Working today via deep link `ipn.eg/S/{handle}/instapay` | Open InstaPay app, create a payment address like `mariane@cib`. Drop it in `CONFIG.instapayHandle`. |
| **Vodafone Cash** | Working today | Open VFCash, share the wallet number. Drop it in `CONFIG.vodafoneCash`. |
| **Bank transfer** | Working today | Drop the real account/IBAN/SWIFT in `CONFIG.bank`. |
| **Card (Visa/Mastercard/Meeza)** | Needs a merchant account | Sign up with a gateway (see below), drop the hosted-checkout URL into `CONFIG.paymobCheckoutUrl`. |
| **Cash on delivery** | Working today | No setup. |

### Card-payment gateway options

| Gateway | Setup cost | Fees | Notes |
|---|---|---|---|
| **Paymob** (paymob.com) | Free signup, needs commercial registration | ~2.7% per card txn | Most popular for SMBs in Egypt. Supports Visa/Mastercard/Meeza/Apple Pay/Google Pay/InstaPay/Vodafone Cash from one dashboard. |
| **Kashier** (kashier.io) | Free signup | ~2.5% per txn | Lighter alternative, simple integration. |
| **Fawry** (fawry.com) | Free signup | varies | Best for **Fawry Pay** at branches — useful for customers without cards. |

**Steps for Paymob (recommended):**
1. Sign up at paymob.com → upload commercial registration + tax card + bank IBAN.
2. Verification takes 3–7 working days.
3. In the merchant dashboard, create an **Integration ID**.
4. Build a **hosted checkout link** for "open price" (the customer enters the amount). Paste it into `CONFIG.paymobCheckoutUrl`.
5. For full automation (server creates each charge with the exact amount), you'll need a tiny backend that calls Paymob's `/intention` API. The site is static today — when ready, deploy a Cloudflare Worker or Vercel Edge Function and I can wire it up.

### Until card-payment is approved

Leave `paymobCheckoutUrl` empty — the confirmation modal will tell the customer "We'll WhatsApp you a secure payment link within minutes" so you can send a one-off Paymob link manually.

---

## 4. Mobile app — release to App Store + Play Store

### Two options, from cheapest to most polished

#### Option A: PWA only — FREE, works today
- Users open the site on iPhone Safari or Android Chrome → tap **Share → Add to Home Screen**.
- Installs like a real app: own icon, splash screen, offline support (via `sw.js`), push notifications on Android.
- **No App Store / Play Store fees. No review queue. No code submission.**
- Trade-off: no listing in the stores, no native push on iOS, can't be searched as "Sofret Mariane app".

#### Option B: Capacitor native app — paid, real store listing

The repo is already configured for Capacitor (see `capacitor.config.json` + `package.json`):

```sh
# one-time
npm install
npx cap add ios
npx cap add android

# every time you change the website
npx cap sync

# open the native projects
npx cap open ios       # opens Xcode
npx cap open android   # opens Android Studio
```

**Store fees:**

| Store | Fee | Verification |
|---|---|---|
| Google Play | **$25 one-time** | 1–3 day review per submission |
| Apple App Store | **$99/year** (Apple Developer Program) | 1–7 day review per submission; requires Mac + Xcode |

**Submission steps (Android):**
1. Sign up at play.google.com/console ($25).
2. `npx cap open android` → Build → **Generate Signed Bundle (.aab)**.
3. In Play Console → Create app → upload the `.aab`.
4. Fill content rating, privacy policy URL, screenshots (1080×1920), store icon (512×512, derive from `assets/logo.svg`).
5. Submit. Approved in ~24h for new accounts.

**Submission steps (iOS):**
1. Sign up at developer.apple.com ($99/year). Requires a **D-U-N-S number** for a business account (free, takes ~1–14 days).
2. `npx cap open ios` → set Team in signing → Product → **Archive** → upload to App Store Connect.
3. In appstoreconnect.apple.com → fill metadata + screenshots (1290×2796 for 6.7" iPhone) + privacy nutrition labels.
4. Submit. Apple reviews in 1–7 days; first submission gets extra scrutiny.

**Both stores reject thin webview wrappers.** The Sofret Mariane app passes review because it bundles:
- Offline shell (service worker)
- App shortcuts (`Order`, `Estimate`, `WhatsApp`)
- Native installable manifest
- Real interactive UI (cart, checkout, multi-step booking)

If a reviewer pushes back, point them to the cart + checkout flow as evidence of native-grade functionality.

---

## 5. SEO + analytics  [CODE]

- [x] `LocalBusiness` + `FoodEstablishment` schema in `index.html` (Cleopatra, Alexandria, hours, area, languages).
- [x] Open Graph + Twitter cards for link previews.
- [x] Sitemap + robots.txt.
- [ ] **Google Analytics 4** — create a property → drop the gtag snippet into `index.html` just before `</head>`. Free.
- [ ] **Meta Pixel** — if you'll run Facebook/Instagram ads, install the pixel snippet too.
- [ ] **Google Search Console** — add the property, submit `sitemap.xml`.

---

## 6. Custom domain (when ready)  [YOU + CODE]

1. Buy `sofretmariane.com` (or `.shop`, `.cafe`) at Namecheap / GoDaddy (~$10–15/yr).
2. In the domain's DNS panel, create:
   - 4 × A records → `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` (GitHub Pages IPs)
   - 1 × CNAME `www` → `abanobsalib.github.io`
3. In the repo, create a file named `CNAME` (no extension) containing only:
   ```
   sofretmariane.com
   ```
4. In GitHub repo → Settings → Pages → "Custom domain" → enter `sofretmariane.com` → check "Enforce HTTPS" (~10 min for the cert).
5. **Search-replace** the old URL across the repo:
   - `abanobsalib.github.io/sofret-mariane` → `sofretmariane.com`
   - Files: `index.html` (canonical, og:url, schema URLs), `site.webmanifest` (`start_url`, `scope`, `id`), `sitemap.xml`, `robots.txt`, `capacitor.config.json`.
6. Commit + push.

---

## 7. Pre-launch sanity check

Open the site on a real phone and tap through:

- [ ] Hero loads, Arabic toggle flips to RTL cleanly.
- [ ] Tap a menu item's `+` → cart FAB shows count → drawer opens.
- [ ] Checkout → pick each payment method → place order → WhatsApp opens with the full order text → confirm modal shows correct payment instructions.
- [ ] Contact form → opens WhatsApp with the full booking message.
- [ ] Map shows Cleopatra. "Open in Google Maps" goes to the right place.
- [ ] On Android Chrome → menu → **Install app** appears. PWA opens in standalone mode.
- [ ] On iOS Safari → Share → **Add to Home Screen** works.
- [ ] Lighthouse score (Chrome DevTools → Lighthouse): PWA installable, Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.

---

## 8. Day-of-launch order

1. Confirm `CONFIG.whatsapp` is the real WhatsApp Business number and the chef has the app open.
2. Push to `main` → GitHub Pages rebuild (~30 sec).
3. Post the launch announcement on Facebook + Instagram + TikTok (templates in `social-launch-kit.md`).
4. WhatsApp the link to the chef's personal network + a few catering brokers.
5. Monitor incoming orders — every order is logged to the customer's browser (`localStorage.sm.orders`) **and** sent over WhatsApp, so nothing gets lost.

---

## 9. Things only you can do (recap)

- Buy a custom domain (if you want one).
- Create the Facebook, Instagram, TikTok, Google Business profiles (see `social-launch-kit.md`).
- Sign up with Paymob (or Kashier / Fawry) for card payments.
- Pay the Google Play + Apple Developer fees to ship to stores.
- Provide the real WhatsApp number, InstaPay handle, Vodafone Cash wallet, and bank details for `CONFIG`.
- Replace placeholder food photos with real shots.

Everything else is already wired in the repo.
