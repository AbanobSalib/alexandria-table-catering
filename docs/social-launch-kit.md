# Sofret Mariane — Social Launch Kit

Step-by-step setup for every channel linked from the website. The site already points to these handles:

- `facebook.com/sofretmariane`
- `instagram.com/sofretmariane`
- `tiktok.com/@sofretmariane`
- WhatsApp `+20 122 322 6196`
- Google Maps → Cleopatra, Alexandria

When you create each profile, **keep the same handle (`sofretmariane`)** so every link on the site works without code changes. If a handle is taken, choose ONE backup handle and tell me — I'll update every link.

---

## 1. Brand basics (use everywhere)

- **Display name:** Sofret Mariane
- **Arabic name:** سفرة مريان
- **Tagline (EN):** Certified Egyptian catering · Alexandria
- **Tagline (AR):** تموين مصري معتمد · الإسكندرية
- **Category:** Caterer / Food & Beverage
- **Logo:** `assets/logo.svg` (export to PNG 1024×1024 for upload)
- **Cover image:** `assets/social-cover.jpg` (1640×856)
- **Website:** https://abanobsalib.github.io/sofret-mariane-catering/
- **WhatsApp:** https://wa.me/201223226196
- **Service area:** Alexandria, North Coast, Cairo on request
- **Hours:** Sat–Thu, 9:00–21:00

> **Export tip:** open `assets/logo.svg` in any browser → right-click → Save As PNG, or run `npx svgexport assets/logo.svg assets/logo-1024.png 1024:1024`.

---

## 2. Facebook Page

**Create:** facebook.com/pages/create → "Business or Brand" → Name: **Sofret Mariane** → Category: **Caterer**.

**Fill in:**

- Username: `@sofretmariane` (matches site link)
- Cover photo: `assets/social-cover.jpg`
- Profile photo: logo PNG
- About → Short description (EN/AR — see below)
- Contact: WhatsApp number, hello@sofretmariane.com
- Location: Cleopatra, Alexandria (don't post exact street — only neighborhood)
- Hours: Sat–Thu 9–21
- Buttons: enable "Send Message" + "Call now" + "Visit website"

**English description:**

> Sofret Mariane is a certified home-based catering kitchen by Mariane Anis in Alexandria, Egypt. We cater Egyptian and Mediterranean menus for family gatherings, birthdays, office lunches, engagement nights, weddings, and corporate events. Menus are confirmed personally by guest count, budget, delivery area, and dietary needs.

**Arabic description:**

> سفرة مريان مطبخ تموين منزلي معتمد من إعداد الشيف مريان أنيس في الإسكندرية. بنقدم منيوهات مصرية ومتوسطية لتجمعات العائلة، أعياد الميلاد، غداء المكتب، ليالي الحنة والخطوبة، الأفراح، ومناسبات الشركات. كل منيو بيتأكد شخصياً حسب عدد الضيوف، الميزانية، منطقة التوصيل، والاحتياجات الغذائية.

**Pin the launch post** (template below).

---

## 3. Instagram Business

**Create:** instagram.com/accounts/emailsignup → Username `sofretmariane` → Settings → **Switch to Professional → Business → Caterer**. Connect the Facebook page so DMs and ads route together.

**Bio (EN, 150 chars):**
```
Certified Egyptian catering · Alexandria 🇪🇬
Family · Office · Weddings (50–500+)
Order on WhatsApp 👇
```

**Bio (AR):**
```
تموين مصري معتمد · الإسكندرية 🇪🇬
عائلي · مكتب · أفراح (٥٠–٥٠٠+)
اطلب على واتساب 👇
```

**Link in bio:** https://abanobsalib.github.io/sofret-mariane-catering/ (or your Linktree / Lnk.bio pointing back to the site sections).

**Story highlights to create:**
- Menu · Packages · Weddings · Office · Reviews · Contact

---

## 4. TikTok

**Create:** tiktok.com/signup → username `sofretmariane` → Switch to **Business account** → Category **Food & Beverage**.

- Same bio as Instagram
- Link the website in profile (TikTok allows 1 link for business accounts)
- Post 1–2 short cooking videos per week (kitchen prep, tray reveal, plating, behind-the-scenes)

---

## 5. WhatsApp Business

1. Download **WhatsApp Business** app on the chef's phone (separate from personal WhatsApp).
2. Verify with the same number used everywhere on the site.
3. Profile → set name **Sofret Mariane**, category **Catering**, address Cleopatra, hours Sat–Thu 9–21, business description (use the Facebook one).
4. Set up **Catalog**: add 3–6 best packages with photos + prices.
5. Set up **Quick Replies**: `/quote`, `/menu`, `/wedding`, `/office`.
6. Set up **Greeting message** (auto-sent on first inbound):

```
Hello! Welcome to Sofret Mariane. Please share:
1. Event date
2. Number of guests
3. Area in Alexandria
4. Dishes or package you like
Mariane will reply within 1–2 hours (9am–9pm).
```

Arabic version:

```
أهلاً بيك في سفرة مريان. ابعتلنا:
١- تاريخ المناسبة
٢- عدد الضيوف
٣- المنطقة في الإسكندرية
٤- الأكل أو الباقة اللي بتحبها
مريان هترد خلال ١–٢ ساعة (٩ صباحاً – ٩ مساءً)
```

> Once verified, update `script.js` → `CONFIG.whatsapp` to the real international number (no `+`, e.g. `2010xxxxxxxx`). Every WhatsApp button on the site re-routes automatically.

---

## 6. Google Business Profile (Cleopatra listing)

**This puts Sofret Mariane on Google Maps + Search in Alexandria.**

1. Go to **business.google.com/create**.
2. Business name: **Sofret Mariane**.
3. Category: **Caterer** (primary), **Wedding Caterer** (secondary).
4. Location:
   - Choose **"I deliver goods and services to my customers"** (since this is a home kitchen — keeps the exact street private).
   - Service area: **Alexandria**, **Cleopatra**, **North Coast**.
5. Add phone + website.
6. Verify the listing (Google sends a postcard to your address with a 5-digit code; takes 5–14 days). Some accounts can verify by phone or video — try that first.
7. Once verified:
   - Hours: Sat–Thu 9–21
   - Upload 6–12 photos (logo, chef portrait, food, event setup)
   - Add the description from the Facebook block above
   - Enable Messaging
   - Add **Services** (one per package) with starting prices
8. **Ask the first 10 clients for Google reviews** — direct review link is in your Google Business dashboard.

> Note: I added structured data (`LocalBusiness` schema) to `index.html` with Cleopatra coordinates so the site is discoverable even before the Google listing is verified.

---

## 7. First posts (copy-paste, EN + AR)

### Launch announcement

**EN:**
> Sofret Mariane is now taking catering orders across Alexandria. From a 10-person family lunch to a 500-person wedding — certified, warm, on time. Send the date, guest count, area, and favorite dishes on WhatsApp for a personal quote within 2 hours. Link in bio.

**AR:**
> سفرة مريان فتحت الحجوزات في كل الإسكندرية. من غداء عائلي لـ ١٠ أشخاص لفرح لـ ٥٠٠ — أكل بيتي معتمد، دافي، في الوقت. ابعتلنا التاريخ، عدد الضيوف، المنطقة، والأكل المفضل على واتساب وهتوصلك الأسعار خلال ساعتين. اللينك في البايو.

### Menu drop

**EN:**
> This week's menu: grilled kofta trays, chicken pane, molokhia, mahshi mix, rice khalta, fresh salads, dips, and homemade desserts. Trays are prepared to order and priced by guest count + market ingredients. WhatsApp to book.

**AR:**
> منيو الأسبوع: كفتة مشوية، بانيه فراخ، ملوخية، محشي مشكل، أرز خلطة، سلطة طازة، صلصات، وحلويات بيتي. الصواني بتتعمل عند الطلب وسعرها حسب عدد الضيوف والمكونات. للحجز ابعت واتساب.

### Trust / standards

**EN:**
> Every Sofret Mariane order is confirmed personally — date, area, allergies, spice level, packaging, reheating notes, serving time. Private home address is shared only after confirmed orders. Deposit refundable up to 7 days before event.

**AR:**
> كل طلب من سفرة مريان بيتأكد شخصياً — التاريخ، المنطقة، الحساسية، درجة الحرارة، التغليف، التسخين، وميعاد التقديم. عنوان البيت بيتقال بس بعد تأكيد الطلب. العربون قابل للاسترداد حتى ٧ أيام قبل المناسبة.

---

## 8. Weekly posting plan (first month)

| Day | Channel | What |
|-----|---------|------|
| Sat | IG + FB | Weekly menu drop with photo |
| Mon | IG Reel + TikTok | Short cooking clip (30–60s) |
| Wed | IG Story | Behind-the-kitchen, prep |
| Thu | FB post | Client testimonial (with photo permission) |
| Fri | IG carousel | Friday family-table package highlight |

Pin one wedding post + one office-catering post to keep both audiences served on the grid.

---

## 9. After launch — what to verify on the website

Open `script.js` and set:

```js
const CONFIG = {
  whatsapp: "201223226196",      // Mariane WhatsApp Business number
  instapayHandle: "name@bank",   // your InstaPay payment address
  vodafoneCash: "01XXXXXXXXX",   // wallet number
  bank: { name, accountName, accountNumber, iban, swift },
  paymobCheckoutUrl: "",         // leave blank until Paymob is live
};
```

Then confirm these href values in `index.html`:

- `wa.me/201223226196`
- `+20 122 322 6196`
- `hello@sofretmariane.com` → real inbox
- `facebook.com/sofretmariane`, `instagram.com/sofretmariane`, `tiktok.com/@sofretmariane` if the handle differs

Push the change → GitHub Pages rebuilds automatically.
