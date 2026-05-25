# Sofret Mariane — Launch Readiness Status

Last checked: 2026-05-24

## Live website

- Status: ready for deploy
- URL: https://abanobsalib.github.io/sofret-mariane-catering/
- WhatsApp / phone: +20 122 322 6196
- WhatsApp link format: https://wa.me/201223226196
- Location: Cleopatra, Alexandria

## Platform links wired in the website

| Platform | Website link | Status |
|---|---|---|
| WhatsApp | `https://wa.me/201223226196` | Ready |
| Phone | `tel:+201223226196` | Ready |
| Google Maps | Cleopatra, Alexandria search/deep link | Ready |
| Facebook | `https://www.facebook.com/sofretmariane` | Link wired; account/page must be created or verified |
| Instagram | `https://www.instagram.com/sofretmariane` | Link wired; account must be created or verified |
| TikTok | `https://www.tiktok.com/@sofretmariane` | Link wired; account must be created or verified |
| Google Business Profile | Cleopatra service-area business | Requires Google owner verification |
| Google Play Store | Android App Bundle generated locally | Requires Play Console account/payment/identity verification |

## Payments

The checkout UI and app support five payment choices:

- InstaPay
- Vodafone Cash
- Bank transfer
- Card via Paymob hosted checkout
- Cash on delivery

Cash on delivery is ready immediately. The other four methods are intentionally marked in checkout as "Verified details by WhatsApp" until real merchant details are configured:

- `CONFIG.instapayHandle`
- `CONFIG.vodafoneCash`
- `CONFIG.bank`
- `CONFIG.paymobCheckoutUrl`

This avoids showing fake payment details to customers. Once real values are available, update `script.js`, rebuild, and redeploy.

## Android app

- Package ID: `com.sofretmariane.app`
- Release artifact: `android/app/build/outputs/bundle/release/app-release.aab`
- Upload keystore: `android/keystores/sofret-mariane-upload.jks`
- Upload certificate: `android/keystores/sofret-mariane-upload-certificate.pem`

Keep the keystore and `android/keystore.properties` private. Losing them can block future Play Store updates.
