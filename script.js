/* ============================================================
   Sofret Mariane — front-end app
   - i18n (EN/AR with RTL toggle)
   - cart + checkout + Egyptian payment dispatch
   - PWA install prompt
   - scroll progress, reveal animations, magnetic CTAs
   ============================================================ */

/* ---------- CONFIG: set these to go live --------------------- */
const CONFIG = {
  /* Phone in international format WITHOUT the leading +. Example for +20 100 000 0000 → "201223226196" */
  whatsapp: "201223226196",
  /* InstaPay handle / IPA address (Egypt). Example: "mariane@instapay" */
  instapayHandle: "mariane@instapay",
  /* Vodafone Cash merchant number / wallet number */
  vodafoneCash: "01000000000",
  /* Bank transfer details — replace with the real ones */
  bank: {
    name: "CIB Egypt",
    accountName: "Mariane Anis",
    accountNumber: "0000-0000-0000-0000",
    iban: "EG0000000000000000000000000",
    swift: "CIBEEGCX",
  },
  /* Paymob hosted-checkout URL. Set when you have a merchant account. Leave empty for now. */
  paymobCheckoutUrl: "",
};

/* ---------- I18N --------------------------------------------- */
const I18N = {
  en: {
    "meta.title": "Sofret Mariane | Best Catering in Alexandria, Egypt",
    "meta.description": "Sofret Mariane delivers certified Egyptian catering across Alexandria and beyond — intimate home gatherings of 10 guests to weddings and corporate events of 500+. Quote in minutes by WhatsApp.",
    "a11y.skip": "Skip to content",
    "topbar.area": "Alexandria · North Coast · Cairo on request",
    "topbar.whatsapp": "WhatsApp",
    "topbar.lang": "العربية",
    "brand.tag": "Certified Egyptian Catering",
    "nav.chef": "Chef", "nav.packages": "Packages", "nav.menu": "Menu", "nav.gallery": "Gallery",
    "nav.estimate": "Quote", "nav.reviews": "Reviews", "nav.location": "Location", "nav.book": "Book",
    "nav.faq": "FAQ", "nav.orderNow": "Order Now",
    "hero.eyebrow": "Alexandria · Since 2018",
    "hero.title.line1": "Egyptian catering",
    "hero.title.line2": "for every table.",
    "hero.sub": "From a family lunch for 10 to a wedding for 500. Certified, warm, on time — and quoted in minutes by WhatsApp.",
    "hero.cta.estimate": "Get a free quote",
    "hero.cta.menu": "See the menu",
    "hero.trust.events": "events catered",
    "hero.trust.rating": "average client rating",
    "hero.trust.lead": "typical lead time",
    "tracks.small.title": "Small & Home",
    "tracks.small.body": "10–40 guests. Family lunches, birthdays, office trays, baptisms.",
    "tracks.small.cta": "See small packages →",
    "tracks.big.title": "Big Events",
    "tracks.big.body": "50–500+ guests. Weddings, engagements, corporate, conferences.",
    "tracks.big.cta": "See big-event packages →",
    "chef.tag": "Chef Mariane Anis",
    "chef.kicker": "The chef",
    "chef.heading": "Certified chef. Warm Egyptian cooking. Professional event rhythm.",
    "chef.body1": "Mariane Anis runs a certified catering kitchen in Cleopatra, Alexandria. Every menu is planned around guest count, timing, freshness, allergies, spice preference, and how the food will be served at your event.",
    "chef.body2": "For seven years she has cooked for everything from intimate home dinners to weddings of 400+. The same care goes into both: clean kitchen, real ingredients, honest pricing, on-time delivery.",
    "chef.cred1.title": "Certified chef",
    "chef.cred1.body": "Trained in classical Egyptian, Mediterranean, and event catering technique.",
    "chef.cred2.title": "Licensed kitchen",
    "chef.cred2.body": "Food-safe prep, confirmed portions, allergy-aware planning, clear reheating notes.",
    "chef.cred3.title": "Event-ready service",
    "chef.cred3.body": "Tray labels, delivery planning, serving extras, and deposit confirmation.",
    "why.kicker": "Why guests remember it",
    "why.heading": "Not just trays. A complete table experience.",
    "why.1.title": "Menu planning", "why.1.body": "Mariane matches dishes to the occasion, budget, guest count, and serving time.",
    "why.2.title": "Balanced portions", "why.2.body": "Trays are planned so the table looks generous without waste or last-minute confusion.",
    "why.3.title": "Elegant details", "why.3.body": "Labels, reheating notes, serving extras, and dessert add-ons keep hosting simple.",
    "why.4.title": "Alexandria rhythm", "why.4.body": "Seafood, grills, family classics, and office menus quoted around local delivery realities.",
    "occasions.kicker": "Occasions we cover",
    "occasions.heading": "Built for the way people actually gather.",
    "occasions.family.title": "Family celebrations", "occasions.family.body": "Birthdays, baptisms, Friday lunches, visits, and holiday tables.",
    "occasions.office.title": "Office catering", "occasions.office.body": "Team lunches, workshops, training days, and clean drop-off trays.",
    "occasions.weddings.title": "Weddings & engagements", "occasions.weddings.body": "Henna nights, engagements, weddings — full menu, buffet, dessert table.",
    "occasions.corporate.title": "Corporate events", "occasions.corporate.body": "Conferences, product launches, training days for 50–500 attendees.",
    "packages.kicker": "Catering packages",
    "packages.heading": "Pick a package, or message us for a custom menu.",
    "packages.intro": "Prices depend on ingredients, guest count, delivery distance, and serving style. These are starting ranges so you can plan — final pricing is confirmed before deposit.",
    "packages.tab.small": "Small & Home (10–40)",
    "packages.tab.big": "Big Events (50–500+)",
    "packages.perGuest": "/ guest",
    "packages.bookCta": "Reserve this package",
    "packages.small.feast.tag": "Most popular",
    "packages.small.feast.title": "Beit Mariane Feast",
    "packages.small.feast.body": "For birthdays, Friday lunches, baptisms, and family visits.",
    "packages.small.feast.1": "Chicken, kofta, or molokhia main",
    "packages.small.feast.2": "Rice, mahshi, pasta, or potatoes",
    "packages.small.feast.3": "Salad, bread, dips, and dessert bites",
    "packages.small.feast.4": "Min 10 guests · 48–72h notice",
    "packages.small.sea.tag": "Alexandria special",
    "packages.small.sea.title": "Sea Breeze Table",
    "packages.small.sea.body": "Seafood, sayadeya rice, mezze, and coastal-style presentation.",
    "packages.small.sea.1": "Fish, seafood tray, or mixed grill",
    "packages.small.sea.2": "Mezze, salad, pickles, and sauces",
    "packages.small.sea.3": "Optional dessert table",
    "packages.small.sea.4": "Min 12 guests · 72h notice",
    "packages.small.office.tag": "Corporate",
    "packages.small.office.title": "Office Lunch Drop-off",
    "packages.small.office.body": "Neat, labeled trays or boxes for teams, meetings, and workshops.",
    "packages.small.office.1": "Easy-serve mains and sides",
    "packages.small.office.2": "Vegetarian options available",
    "packages.small.office.3": "Labeled, sealed packaging",
    "packages.small.office.4": "Min 15 guests · 48–72h notice",
    "packages.big.wedding.tag": "Signature",
    "packages.big.wedding.title": "Wedding & Engagement",
    "packages.big.wedding.body": "Full ceremony catering: cold mezze, hot buffet, carving station, dessert table.",
    "packages.big.wedding.1": "3 mains · 5 sides · live carving",
    "packages.big.wedding.2": "Cold mezze and salad station",
    "packages.big.wedding.3": "Dessert table + tea/coffee service",
    "packages.big.wedding.4": "Servers, chafing dishes, linens included",
    "packages.big.wedding.5": "Min 80 guests · 3–6 week notice",
    "packages.big.conf.tag": "Corporate",
    "packages.big.conf.title": "Conference & Launch",
    "packages.big.conf.body": "Breakfast, lunch buffet, coffee breaks, and clean branded packaging.",
    "packages.big.conf.1": "Continental breakfast + 2 coffee breaks",
    "packages.big.conf.2": "Hot buffet lunch with vegetarian option",
    "packages.big.conf.3": "Branded napkins & sealed boxes available",
    "packages.big.conf.4": "Min 60 attendees · 2 week notice",
    "packages.big.henna.tag": "Celebration",
    "packages.big.henna.title": "Henna & Engagement Night",
    "packages.big.henna.body": "Festive Egyptian and Levantine menu for 50–200 guests, with sweets station.",
    "packages.big.henna.1": "2 mains · mezze · live grill option",
    "packages.big.henna.2": "Sweets & juice station included",
    "packages.big.henna.3": "Decorated buffet setup",
    "packages.big.henna.4": "Min 50 guests · 2–4 week notice",
    "proof.kicker": "Production standards",
    "proof.heading": "Ready for real orders, not just a pretty menu.",
    "proof.lead": "recommended lead time",
    "proof.events": "events served since 2018",
    "proof.rating": "average client review",
    "proof.deposit": "deposits refundable up to 7 days",
    "menu.kicker": "Menu builder",
    "menu.heading": "Egyptian favorites, priced by tray.",
    "menu.intro": "Mix trays to match the event. Most trays serve 8–12 people unless noted. Final pricing is confirmed before deposit.",
    "menu.cta": "Estimate my menu →",
    "menu.mains": "Mains",
    "menu.mains.1": "Chicken pane, creamy pasta, or roasted potatoes",
    "menu.mains.2": "Grilled kofta tray with tehina and baladi bread",
    "menu.mains.3": "Molokhia with chicken, rice, and garlic dressing",
    "menu.mains.4": "Sayadeya fish tray with brown rice",
    "menu.mains.5": "Mixed grill: kofta, chicken, kebab",
    "menu.mains.6": "Stuffed turkey or duck (event only)",
    "menu.sides": "Sides & Mezze",
    "menu.sides.1": "Mahshi mix: cabbage, vine leaves, zucchini",
    "menu.sides.2": "Rice khalta or vermicelli rice",
    "menu.sides.3": "Hummus, baba ghanoug, or tehina bowl",
    "menu.sides.4": "Baladi salad, pickles, fresh bread set",
    "menu.sides.5": "Roasted vegetables medley",
    "menu.sides.6": "Fatta with rice and yogurt sauce",
    "menu.desserts": "Desserts & Extras",
    "menu.desserts.1": "Basbousa, konafa, or bite-size dessert platter",
    "menu.desserts.2": "Rice pudding cups with nuts",
    "menu.desserts.3": "Om Ali tray (serves 10)",
    "menu.desserts.4": "Disposable serving set / guest",
    "menu.desserts.5": "Delivery in Alexandria",
    "menu.desserts.5p": "Quoted by area",
    "menu.desserts.6": "Servers / hour",
    "estimate.kicker": "Smart quote helper",
    "estimate.heading": "Build a quick planning estimate before you book.",
    "estimate.body": "Pick a package, your guest count, and any extras. The estimate updates live. When you're ready, hit the button to send it to Mariane on WhatsApp.",
    "estimate.point1": "Honest pricing — no hidden fees",
    "estimate.point2": "Deposit refundable up to 7 days before",
    "estimate.point3": "Quote within 2 hours during business hours",
    "estimate.field.package": "Package",
    "estimate.field.guests": "Guests",
    "estimate.field.extras": "Extras",
    "estimate.group.small": "Small & Home",
    "estimate.group.big": "Big Events",
    "estimate.opt.family": "Beit Mariane Feast",
    "estimate.opt.sea": "Sea Breeze Table",
    "estimate.opt.office": "Office Lunch Drop-off",
    "estimate.opt.wedding": "Wedding / Engagement",
    "estimate.opt.conf": "Conference / Launch",
    "estimate.opt.henna": "Henna / Engagement Night",
    "estimate.extras.none": "Food only",
    "estimate.extras.dessert": "+ Dessert table",
    "estimate.extras.serving": "+ Dessert & serving sets",
    "estimate.extras.staff": "+ Servers & full setup",
    "estimate.send": "Send this estimate on WhatsApp",
    "gallery.kicker": "Gallery", "gallery.heading": "Tables we've cooked.",
    "process.kicker": "How it works",
    "process.heading": "From message to table in four steps.",
    "process.1.title": "Send event details", "process.1.body": "Date, guest count, area, food preferences, and budget.",
    "process.2.title": "Confirm the menu", "process.2.body": "Pick a package or tray mix; adjust spice, portions, allergies, and extras.",
    "process.3.title": "Reserve the order", "process.3.body": "A deposit confirms ingredients and Mariane's production slot.",
    "process.4.title": "Receive and serve", "process.4.body": "Food arrives labeled, packed, and ready for your serving plan.",
    "reviews.kicker": "What clients say",
    "reviews.heading": "Loved by families and event planners in Alexandria.",
    "reviews.1.body": "\"We hosted 32 guests at home — the food was the talk of the night. Trays arrived hot, labeled, and exactly on time. We'll book again.\"",
    "reviews.2.body": "\"We catered a 220-person wedding with Mariane. Professional team, beautiful buffet, and the dessert table was unbelievable.\"",
    "reviews.3.body": "\"Our team lunch went so well we now book weekly. Boxes are sealed, labeled, and the menu changes keep it interesting.\"",
    "location.kicker": "Where we are",
    "location.heading": "Cleopatra, Alexandria.",
    "location.body": "The kitchen is based in Cleopatra. We deliver across Alexandria — Smouha, Stanley, San Stefano, Miami, Montazah, Agami — and to the North Coast on request. Exact address is shared once your order is confirmed.",
    "location.area": "Service area", "location.area.body": "All Alexandria · North Coast · Cairo on request",
    "location.hours": "Hours", "location.hours.body": "Saturday – Thursday · 9:00 – 21:00",
    "location.kitchen": "Kitchen", "location.kitchen.body": "Private licensed kitchen, Cleopatra",
    "location.open": "Open in Google Maps",
    "social.kicker": "Follow Sofret Mariane",
    "social.heading": "New menus, new tables, every week.",
    "social.body": "Daily food photography, behind-the-kitchen reels, weekly menu drops, and event highlights — all on Facebook and Instagram.",
    "faq.kicker": "FAQ", "faq.heading": "Answers before guests message.",
    "faq.1.q": "Can I order without knowing the exact menu?", "faq.1.a": "Yes. Send the date, guest count, area, and budget — Mariane will suggest a balanced menu.",
    "faq.2.q": "Do you cater big weddings and corporate events?", "faq.2.a": "Yes — we regularly cater events for 50–500+ guests including buffet setup, servers, chafing dishes, and dessert tables.",
    "faq.3.q": "How much notice do you need?", "faq.3.a": "48–72 hours for small orders, 2–4 weeks for big events. Last-minute is sometimes possible — message us to check.",
    "faq.4.q": "Where is the kitchen located?", "faq.4.a": "Cleopatra, Alexandria. The exact address is shared after confirmed pickup orders.",
    "faq.5.q": "Can the menu handle allergies or vegetarian guests?", "faq.5.a": "Yes — share dietary notes before the quote so the menu is planned responsibly.",
    "faq.6.q": "How does payment work?", "faq.6.a": "A deposit confirms the order (50% for big events). Balance is due on delivery. InstaPay, Vodafone Cash, bank transfer, card, or cash.",
    "faq.7.q": "Do you deliver outside Alexandria?", "faq.7.a": "Yes — North Coast in summer is regular, Cairo by request with delivery quoted separately.",
    "contact.kicker": "Book Sofret Mariane",
    "contact.heading": "Tell Mariane the date, guest count, and dishes you love.",
    "contact.body": "Delivery and pickup are arranged across Alexandria. The exact kitchen address stays private until the order is confirmed.",
    "contact.ch.whatsapp": "WhatsApp", "contact.ch.phone": "Phone", "contact.ch.email": "Email",
    "contact.field.name": "Name", "contact.field.phone": "Phone or WhatsApp",
    "contact.field.date": "Event date", "contact.field.guests": "Guests",
    "contact.field.event": "Event type", "contact.field.area": "Area in Alexandria",
    "contact.field.message": "What should Mariane cook?",
    "contact.event.family": "Family gathering", "contact.event.office": "Office / corporate",
    "contact.event.birthday": "Birthday", "contact.event.engagement": "Engagement / Henna",
    "contact.event.wedding": "Wedding", "contact.event.conference": "Conference / Launch",
    "contact.event.other": "Other",
    "contact.submit": "Send my booking on WhatsApp",
    "contact.note": "Mariane usually replies within 1–2 hours, 9am–9pm Egypt time.",
    "cart.title": "Your order",
    "cart.empty": "Your cart is empty. Browse the menu and tap + to add trays.",
    "cart.estimated": "Estimated total",
    "cart.note": "Final pricing is confirmed by Mariane before deposit.",
    "cart.checkout": "Continue to checkout",
    "checkout.title": "Place your catering order",
    "checkout.sub": "Mariane confirms every order personally. Your details are sent securely over WhatsApp + your chosen payment method.",
    "checkout.notes": "Notes & preferences (allergies, spice, timing)",
    "checkout.payment": "Payment method",
    "checkout.totalLabel": "Estimated total",
    "checkout.place": "Place order",
    "checkout.policy": "By placing this order you agree to Sofret Mariane's deposit and cancellation policy (refundable up to 7 days before event).",
    "pay.instapay": "Instant bank-to-bank transfer (any Egyptian bank)",
    "pay.vodafone": "Send to chef's mobile wallet",
    "pay.bank.title": "Bank transfer", "pay.bank": "Direct deposit / online banking",
    "pay.card.title": "Card (Visa / Mastercard / Meeza)", "pay.card": "Via secure Paymob hosted checkout",
    "pay.cod.title": "Cash on delivery", "pay.cod": "Pay when the food arrives (deposit may still apply for large events)",
    "confirm.title": "Order received!",
    "confirm.ref": "Reference:",
    "confirm.body": "Mariane has your details. She will confirm the menu and final price within 2 hours. Use the buttons below to finish paying and chat with the kitchen.",
    "confirm.whatsapp": "Open WhatsApp",
    "confirm.close": "Close",
    "pwa.install": "Install Sofret Mariane app",
    "footer.tag": "Certified Egyptian Catering",
    "footer.intro": "Catering across Alexandria, Egypt — from a 10-person family lunch to a 500-person wedding. Built by Mariane Anis.",
    "footer.explore": "Explore", "footer.contact": "Contact", "footer.area": "Cleopatra, Alexandria",
    "footer.social": "Social",
    "footer.built": "Crafted with care for great Egyptian tables.",
    "add.btn": "Add",
  },
  ar: {
    "meta.title": "سفرة مريان | أفضل تموين في الإسكندرية، مصر",
    "meta.description": "سفرة مريان لتموين الأكل المصري المعتمد في الإسكندرية — من غداء عائلي لـ 10 أشخاص حتى فرح أو مؤتمر لـ 500+. تسعير سريع عبر واتساب.",
    "a11y.skip": "تخطي إلى المحتوى",
    "topbar.area": "الإسكندرية · الساحل الشمالي · القاهرة عند الطلب",
    "topbar.whatsapp": "واتساب",
    "topbar.lang": "English",
    "brand.tag": "تموين مصري معتمد",
    "nav.chef": "الشيف", "nav.packages": "الباقات", "nav.menu": "المنيو", "nav.gallery": "الصور",
    "nav.estimate": "تسعير", "nav.reviews": "التقييمات", "nav.location": "العنوان", "nav.book": "احجز",
    "nav.faq": "أسئلة", "nav.orderNow": "اطلب الآن",
    "hero.eyebrow": "الإسكندرية · منذ 2018",
    "hero.title.line1": "تموين مصري",
    "hero.title.line2": "لكل سفرة.",
    "hero.sub": "من غداء عائلي لـ 10 أشخاص حتى فرح لـ 500. أكل بيتي معتمد، دافي، في الوقت — والسعر يوصلك في دقائق على واتساب.",
    "hero.cta.estimate": "احصل على عرض سعر",
    "hero.cta.menu": "شاهد المنيو",
    "hero.trust.events": "حفلة تم تموينها",
    "hero.trust.rating": "متوسط تقييم العملاء",
    "hero.trust.lead": "مدة التحضير المعتادة",
    "tracks.small.title": "بيت وعزومات صغيرة",
    "tracks.small.body": "من 10 إلى 40 ضيف. غداء العيلة، أعياد ميلاد، بوفيه مكتب، عمادة.",
    "tracks.small.cta": "شاهد الباقات الصغيرة ←",
    "tracks.big.title": "مناسبات كبيرة",
    "tracks.big.body": "من 50 إلى 500+ ضيف. أفراح، خطوبة، شركات، مؤتمرات.",
    "tracks.big.cta": "شاهد باقات الحفلات الكبيرة ←",
    "chef.tag": "الشيف مريان أنيس",
    "chef.kicker": "الشيف",
    "chef.heading": "شيف معتمدة. طبخ مصري دافي. تنظيم احترافي للمناسبات.",
    "chef.body1": "مريان أنيس بتدير مطبخ تموين معتمد في كليوباترا، الإسكندرية. كل منيو بيتخطط حسب عدد الضيوف، التوقيت، الطزاجة، الحساسية، درجة الحرارة، وطريقة التقديم في المناسبة.",
    "chef.body2": "من سبع سنين بتطبخ من عشاء عائلي صغير لحد أفراح 400+ ضيف. نفس الاهتمام في الاتنين: مطبخ نضيف، مكونات حقيقية، أسعار شفافة، توصيل في الموعد.",
    "chef.cred1.title": "شيف معتمدة",
    "chef.cred1.body": "متدربة على المطبخ المصري التقليدي والمتوسطي وتقنيات التموين.",
    "chef.cred2.title": "مطبخ مرخص",
    "chef.cred2.body": "تحضير آمن، حصص محسوبة، خطة للحساسية، وملاحظات تسخين واضحة.",
    "chef.cred3.title": "خدمة جاهزة للمناسبات",
    "chef.cred3.body": "ليبل على الصواني، خطة توصيل، أدوات تقديم، وتأكيد عربون.",
    "why.kicker": "ليه الضيوف بيفتكروها",
    "why.heading": "مش بس صواني. سفرة كاملة.",
    "why.1.title": "تخطيط المنيو", "why.1.body": "مريان بتظبط الأكل على المناسبة والميزانية وعدد الضيوف والميعاد.",
    "why.2.title": "كميات محسوبة", "why.2.body": "الصواني متجهزة عشان السفرة تبان عامرة من غير هدر أو لخبطة.",
    "why.3.title": "تفاصيل أنيقة", "why.3.body": "ليبل، ملاحظات تسخين، أدوات تقديم، وإضافات حلويات.",
    "why.4.title": "إيقاع إسكندري", "why.4.body": "سي فود، مشويات، أكلات بيتي، ومنيو مكتب بسعر يناسب التوصيل الداخلي.",
    "occasions.kicker": "المناسبات اللي بنغطيها",
    "occasions.heading": "متعمل عشان الطريقة اللي الناس بتتجمع بيها.",
    "occasions.family.title": "احتفالات عائلية", "occasions.family.body": "أعياد ميلاد، عمادة، غداء جمعة، زيارات، وسفرة الأعياد.",
    "occasions.office.title": "تموين الشركات", "occasions.office.body": "غداء فريق، ورش عمل، أيام تدريب، صواني نظيفة.",
    "occasions.weddings.title": "أفراح وخطوبة", "occasions.weddings.body": "ليلة حنة، خطوبة، فرح — منيو كامل، بوفيه، طاولة حلويات.",
    "occasions.corporate.title": "مناسبات شركات", "occasions.corporate.body": "مؤتمرات، إطلاق منتجات، أيام تدريب لـ 50 إلى 500 شخص.",
    "packages.kicker": "باقات التموين",
    "packages.heading": "اختار باقة، أو كلمنا لمنيو مخصص.",
    "packages.intro": "الأسعار حسب المكونات، عدد الضيوف، مسافة التوصيل، وطريقة التقديم. دي نطاقات إرشادية — السعر النهائي يتأكد قبل العربون.",
    "packages.tab.small": "صغير وبيتي (10–40)",
    "packages.tab.big": "مناسبات كبيرة (50–500+)",
    "packages.perGuest": "/ ضيف",
    "packages.bookCta": "احجز الباقة دي",
    "packages.small.feast.tag": "الأكثر طلباً",
    "packages.small.feast.title": "وليمة بيت مريان",
    "packages.small.feast.body": "لأعياد الميلاد، غداء الجمعة، عمادة، وزيارات العيلة.",
    "packages.small.feast.1": "فرخة، كفتة، أو ملوخية كطبق رئيسي",
    "packages.small.feast.2": "أرز، محشي، مكرونة، أو بطاطس",
    "packages.small.feast.3": "سلطة، عيش، صلصات، وحلويات صغيرة",
    "packages.small.feast.4": "حد أدنى 10 ضيوف · 48–72 ساعة",
    "packages.small.sea.tag": "سبيشال إسكندرية",
    "packages.small.sea.title": "سفرة نسمة البحر",
    "packages.small.sea.body": "سمك، أرز صيادية، مزة، وتقديم على الطريقة الساحلية.",
    "packages.small.sea.1": "سمك، صينية مأكولات بحرية، أو مشاوي مشكلة",
    "packages.small.sea.2": "مزة، سلطة، مخللات، وصوصات",
    "packages.small.sea.3": "طاولة حلويات اختيارية",
    "packages.small.sea.4": "حد أدنى 12 ضيف · 72 ساعة",
    "packages.small.office.tag": "شركات",
    "packages.small.office.title": "غداء مكتب",
    "packages.small.office.body": "صواني أو علب نضيفة وليبل لفرق العمل والاجتماعات والورش.",
    "packages.small.office.1": "أطباق رئيسية وأطباق جانبية سهلة التقديم",
    "packages.small.office.2": "خيارات نباتية متاحة",
    "packages.small.office.3": "تغليف محكم وعليه ليبل",
    "packages.small.office.4": "حد أدنى 15 ضيف · 48–72 ساعة",
    "packages.big.wedding.tag": "سيجنتشر",
    "packages.big.wedding.title": "فرح وخطوبة",
    "packages.big.wedding.body": "تموين كامل: مزة باردة، بوفيه ساخن، محطة تقطيع، طاولة حلويات.",
    "packages.big.wedding.1": "3 أطباق رئيسية · 5 أطباق جانبية · محطة تقطيع",
    "packages.big.wedding.2": "محطة مزة وسلطة باردة",
    "packages.big.wedding.3": "طاولة حلويات + خدمة شاي وقهوة",
    "packages.big.wedding.4": "ويترز، أطباق تسخين، ومفارش",
    "packages.big.wedding.5": "حد أدنى 80 ضيف · 3–6 أسابيع",
    "packages.big.conf.tag": "شركات",
    "packages.big.conf.title": "مؤتمر وإطلاق",
    "packages.big.conf.body": "فطار، بوفيه غداء، استراحات قهوة، وتغليف نضيف يحمل اللوجو.",
    "packages.big.conf.1": "فطار كونتيننتال + استراحتين قهوة",
    "packages.big.conf.2": "غداء بوفيه ساخن بخيار نباتي",
    "packages.big.conf.3": "مناديل وعلب عليها اللوجو",
    "packages.big.conf.4": "حد أدنى 60 شخص · أسبوعين",
    "packages.big.henna.tag": "احتفال",
    "packages.big.henna.title": "ليلة حنة وخطوبة",
    "packages.big.henna.body": "منيو احتفالي مصري وشامي لـ 50–200 ضيف، مع محطة حلويات.",
    "packages.big.henna.1": "طبقين رئيسيين · مزة · مشاوي مباشرة اختيارية",
    "packages.big.henna.2": "محطة حلويات وعصاير ضمن الباقة",
    "packages.big.henna.3": "بوفيه متجهز ومزين",
    "packages.big.henna.4": "حد أدنى 50 ضيف · 2–4 أسابيع",
    "proof.kicker": "معايير الإنتاج",
    "proof.heading": "جاهزين لطلبات حقيقية، مش بس منيو شيك.",
    "proof.lead": "مدة التحضير الموصى بها",
    "proof.events": "حفلة منذ 2018",
    "proof.rating": "متوسط تقييم العملاء",
    "proof.deposit": "العربون قابل للاسترداد حتى 7 أيام",
    "menu.kicker": "بناء المنيو",
    "menu.heading": "أكلات مصرية مفضلة، بالصينية.",
    "menu.intro": "اخلط الصواني حسب المناسبة. الصينية بتكفي 8–12 شخص غالباً. السعر النهائي بيتأكد قبل العربون.",
    "menu.cta": "احسب سعر منيو ←",
    "menu.mains": "أطباق رئيسية",
    "menu.mains.1": "بانيه فراخ، مكرونة بالكريمة، أو بطاطس مشوية",
    "menu.mains.2": "كفتة مشوية بالطحينة والعيش البلدي",
    "menu.mains.3": "ملوخية بالفراخ والأرز وثوم محمر",
    "menu.mains.4": "صينية سمك صيادية بالأرز البني",
    "menu.mains.5": "مشاوي مشكلة: كفتة، فراخ، كباب",
    "menu.mains.6": "ديك رومي أو بط محشي (للمناسبات فقط)",
    "menu.sides": "أطباق جانبية ومزة",
    "menu.sides.1": "محشي مشكل: كرنب، ورق عنب، كوسة",
    "menu.sides.2": "أرز خلطة أو شعرية",
    "menu.sides.3": "حمص، بابا غنوج، أو طحينة",
    "menu.sides.4": "سلطة بلدي، مخللات، وعيش طازج",
    "menu.sides.5": "خضار مشوية مشكلة",
    "menu.sides.6": "فتة بالأرز والزبادي",
    "menu.desserts": "حلويات وإضافات",
    "menu.desserts.1": "بسبوسة، كنافة، أو طبق حلويات صغيرة",
    "menu.desserts.2": "كوب أرز باللبن بالمكسرات",
    "menu.desserts.3": "أم علي (يكفي 10)",
    "menu.desserts.4": "أدوات تقديم / ضيف",
    "menu.desserts.5": "توصيل داخل الإسكندرية",
    "menu.desserts.5p": "السعر حسب المنطقة",
    "menu.desserts.6": "ويتر / ساعة",
    "estimate.kicker": "حاسبة الأسعار",
    "estimate.heading": "احسب تقدير سريع قبل الحجز.",
    "estimate.body": "اختار الباقة وعدد الضيوف والإضافات. التقدير بيتحدث مباشرة. لما تكون جاهز، ابعتها لمريان على واتساب.",
    "estimate.point1": "أسعار شفافة — من غير رسوم خفية",
    "estimate.point2": "العربون قابل للاسترداد حتى 7 أيام قبل المناسبة",
    "estimate.point3": "تسعير خلال ساعتين في ساعات العمل",
    "estimate.field.package": "الباقة",
    "estimate.field.guests": "عدد الضيوف",
    "estimate.field.extras": "إضافات",
    "estimate.group.small": "صغير وبيتي",
    "estimate.group.big": "مناسبات كبيرة",
    "estimate.opt.family": "وليمة بيت مريان",
    "estimate.opt.sea": "سفرة نسمة البحر",
    "estimate.opt.office": "غداء مكتب",
    "estimate.opt.wedding": "فرح / خطوبة",
    "estimate.opt.conf": "مؤتمر / إطلاق",
    "estimate.opt.henna": "ليلة حنة / خطوبة",
    "estimate.extras.none": "أكل فقط",
    "estimate.extras.dessert": "+ طاولة حلويات",
    "estimate.extras.serving": "+ حلويات وأدوات تقديم",
    "estimate.extras.staff": "+ ويترز وتجهيز كامل",
    "estimate.send": "ابعت التقدير ده على واتساب",
    "gallery.kicker": "صور", "gallery.heading": "سفرات طبخناها.",
    "process.kicker": "طريقة الحجز",
    "process.heading": "من رسالة لسفرة في 4 خطوات.",
    "process.1.title": "ابعت تفاصيل المناسبة", "process.1.body": "التاريخ، عدد الضيوف، المنطقة، الأكل المفضل، والميزانية.",
    "process.2.title": "أكد المنيو", "process.2.body": "اختار باقة أو خلطة صواني، وظبط الشطة والكميات والحساسية والإضافات.",
    "process.3.title": "احجز الطلب", "process.3.body": "العربون بيأكد المكونات وميعاد إنتاج الطلب.",
    "process.4.title": "استلم وقدّم", "process.4.body": "الأكل بيوصل عليه ليبل ومتجهز للتقديم.",
    "reviews.kicker": "آراء العملاء",
    "reviews.heading": "محبوبين من العائلات ومنظمي المناسبات في الإسكندرية.",
    "reviews.1.body": "«استضفنا 32 ضيف في البيت — الأكل كان حديث الليلة. الصواني وصلت سخنة، عليها ليبل، وفي الميعاد بالظبط. هنحجز تاني.»",
    "reviews.2.body": "«عملنا فرح 220 شخص مع مريان. فريق محترف، بوفيه جميل، وطاولة الحلويات كانت لا تصدق.»",
    "reviews.3.body": "«غداء الفريق بقى أسبوعي. العلب محكمة وعليها ليبل، والمنيو بيتغير عشان يفضل ممتع.»",
    "location.kicker": "العنوان",
    "location.heading": "كليوباترا، الإسكندرية.",
    "location.body": "المطبخ في كليوباترا. بنوصل لكل الإسكندرية — سموحة، ستانلي، سان ستيفانو، ميامي، المنتزه، العجمي — وللساحل الشمالي عند الطلب. العنوان بالظبط بيتبعت بعد تأكيد الحجز.",
    "location.area": "منطقة الخدمة", "location.area.body": "كل الإسكندرية · الساحل الشمالي · القاهرة عند الطلب",
    "location.hours": "المواعيد", "location.hours.body": "السبت – الخميس · 9 صباحاً – 9 مساءً",
    "location.kitchen": "المطبخ", "location.kitchen.body": "مطبخ خاص مرخص، كليوباترا",
    "location.open": "افتح على خرائط جوجل",
    "social.kicker": "تابع سفرة مريان",
    "social.heading": "منيو جديد وسفرة جديدة كل أسبوع.",
    "social.body": "صور أكل يومية، ريلز من المطبخ، منيو أسبوعي، ولقطات من المناسبات — على فيسبوك وانستجرام.",
    "faq.kicker": "أسئلة شائعة", "faq.heading": "إجابات قبل ما تسأل.",
    "faq.1.q": "أقدر أطلب من غير ما أعرف المنيو بالظبط؟", "faq.1.a": "أيوه. ابعت التاريخ وعدد الضيوف والمنطقة والميزانية — مريان هتقترح منيو متوازن.",
    "faq.2.q": "هل تعملوا تموين أفراح ومناسبات شركات؟", "faq.2.a": "أيوه — بنعمل مناسبات من 50 إلى 500+ ضيف بما فيها تجهيز البوفيه، الويترز، أطباق التسخين، وطاولات الحلويات.",
    "faq.3.q": "محتاج أحجز قبلها بكام؟", "faq.3.a": "48–72 ساعة للطلبات الصغيرة، 2–4 أسابيع للمناسبات الكبيرة. أحياناً ممكن في آخر لحظة — كلمنا للتأكد.",
    "faq.4.q": "فين المطبخ؟", "faq.4.a": "كليوباترا، الإسكندرية. العنوان بالظبط بيتبعت بعد تأكيد طلبات الاستلام.",
    "faq.5.q": "هل المنيو يقدر يستوعب حساسية أو ضيوف نباتيين؟", "faq.5.a": "أيوه — اكتب الملاحظات الغذائية قبل التسعير عشان المنيو يتخطط صح.",
    "faq.6.q": "إزاي الدفع؟", "faq.6.a": "عربون بيأكد الطلب (50% للمناسبات الكبيرة). الباقي عند التوصيل. إنستاباي، فودافون كاش، تحويل بنكي، فيزا، أو كاش.",
    "faq.7.q": "بتوصلوا بره الإسكندرية؟", "faq.7.a": "أيوه — الساحل الشمالي في الصيف بشكل منتظم، والقاهرة عند الطلب مع تسعير توصيل منفصل.",
    "contact.kicker": "احجز سفرة مريان",
    "contact.heading": "قول لمريان التاريخ وعدد الضيوف والأكل اللي بتحبه.",
    "contact.body": "التوصيل والاستلام في كل الإسكندرية. عنوان المطبخ بالظبط بيفضل خاص لحد ما الطلب يتأكد.",
    "contact.ch.whatsapp": "واتساب", "contact.ch.phone": "تليفون", "contact.ch.email": "إيميل",
    "contact.field.name": "الاسم", "contact.field.phone": "تليفون أو واتساب",
    "contact.field.date": "تاريخ المناسبة", "contact.field.guests": "عدد الضيوف",
    "contact.field.event": "نوع المناسبة", "contact.field.area": "المنطقة في الإسكندرية",
    "contact.field.message": "إيه اللي مريان تطبخه؟",
    "contact.event.family": "تجمع عائلي", "contact.event.office": "مكتب / شركة",
    "contact.event.birthday": "عيد ميلاد", "contact.event.engagement": "خطوبة / حنة",
    "contact.event.wedding": "فرح", "contact.event.conference": "مؤتمر / إطلاق",
    "contact.event.other": "أخرى",
    "contact.submit": "ابعت الحجز على واتساب",
    "contact.note": "مريان بترد عادة خلال 1–2 ساعة، من 9 صباحاً لـ 9 مساءً بتوقيت مصر.",
    "cart.title": "طلبك",
    "cart.empty": "السلة فاضية. تصفح المنيو واضغط + لإضافة صواني.",
    "cart.estimated": "السعر التقديري",
    "cart.note": "السعر النهائي بيتأكد من مريان قبل العربون.",
    "cart.checkout": "كمل للحجز",
    "checkout.title": "اعمل طلب التموين",
    "checkout.sub": "مريان بتأكد كل طلب شخصياً. تفاصيلك بتتبعت بأمان عبر واتساب وطريقة الدفع اللي تختارها.",
    "checkout.notes": "ملاحظات وتفضيلات (حساسية، شطة، توقيت)",
    "checkout.payment": "طريقة الدفع",
    "checkout.totalLabel": "السعر التقديري",
    "checkout.place": "تأكيد الطلب",
    "checkout.policy": "بإتمام الطلب أنت توافق على سياسة العربون والإلغاء (قابل للاسترداد حتى 7 أيام قبل المناسبة).",
    "pay.instapay": "تحويل فوري بين البنوك (أي بنك مصري)",
    "pay.vodafone": "تحويل لمحفظة الشيف",
    "pay.bank.title": "تحويل بنكي", "pay.bank": "إيداع مباشر / بنك أونلاين",
    "pay.card.title": "فيزا / ماستركارد / ميزة", "pay.card": "عبر صفحة دفع آمنة من Paymob",
    "pay.cod.title": "الدفع عند الاستلام", "pay.cod": "ادفع لما الأكل يوصل (عربون ممكن يتطلب للمناسبات الكبيرة)",
    "confirm.title": "تم استلام الطلب!",
    "confirm.ref": "رقم الطلب:",
    "confirm.body": "مريان عندها تفاصيلك. هتأكد المنيو والسعر النهائي خلال ساعتين. استخدم الأزرار تحت لإتمام الدفع والكلام مع المطبخ.",
    "confirm.whatsapp": "افتح واتساب",
    "confirm.close": "إغلاق",
    "pwa.install": "نزل تطبيق سفرة مريان",
    "footer.tag": "تموين مصري معتمد",
    "footer.intro": "تموين في كل أنحاء الإسكندرية، مصر — من غداء عائلي لـ 10 أشخاص لفرح لـ 500. من إعداد مريان أنيس.",
    "footer.explore": "تصفح", "footer.contact": "تواصل", "footer.area": "كليوباترا، الإسكندرية",
    "footer.social": "تواصل اجتماعي",
    "footer.built": "متعمل باهتمام لأحلى سفرة مصرية.",
    "add.btn": "أضف",
  },
};

/* ---------- LANGUAGE ---------------------------------------- */
const LANG_KEY = "sm.lang";
const getLang = () => {
  const url = new URLSearchParams(window.location.search).get("lang");
  if (url && I18N[url]) return url;
  const stored = localStorage.getItem(LANG_KEY);
  if (stored && I18N[stored]) return stored;
  return (navigator.language || "en").toLowerCase().startsWith("ar") ? "ar" : "en";
};

const applyLang = (lang) => {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const attr = el.getAttribute("data-i18n-attr");
    if (!dict[key]) return;
    if (attr) el.setAttribute(attr, dict[key]);
    else el.textContent = dict[key];
  });
  localStorage.setItem(LANG_KEY, lang);
  /* refresh dynamic UI */
  refreshCartUI();
  updateEstimate();
};

const switchLang = () => {
  const next = document.documentElement.lang === "ar" ? "en" : "ar";
  applyLang(next);
};

/* ---------- helpers ----------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const formatEgp = (amount) =>
  new Intl.NumberFormat(document.documentElement.lang === "ar" ? "ar-EG" : "en-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(amount);

const t = (key) => (I18N[document.documentElement.lang] || I18N.en)[key] || key;

const generateOrderId = () => {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SM-${ymd}-${rand}`;
};

/* ---------- header + scroll progress ------------------------ */
const header = $("#siteHeader");
const scrollProgress = $(".scroll-progress");
const navLinks = $$("nav a[href^='#']");

const onScroll = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (scrollProgress) scrollProgress.style.width = `${progress}%`;
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);

  let active = null;
  for (const link of navLinks) {
    const target = document.querySelector(link.getAttribute("href"));
    if (target && target.getBoundingClientRect().top <= 140) active = target;
  }
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", active && link.getAttribute("href") === `#${active.id}`);
  });
};
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);

/* ---------- reveal animations ------------------------------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

const armReveals = () => {
  $$("section, .package, .menu-category, .review-card, .signature-grid article, .event-grid article, .credential-grid article, .trust-grid article, .steps li").forEach((el) => {
    if (!el.hasAttribute("data-reveal")) {
      el.setAttribute("data-reveal", "");
      revealObserver.observe(el);
    }
  });
  $$(".package-grid, .signature-grid, .event-grid, .menu-list, .review-grid, .credential-grid, .gallery-grid").forEach((el) => {
    if (!el.hasAttribute("data-reveal-stagger")) {
      el.setAttribute("data-reveal-stagger", "");
      revealObserver.observe(el);
    }
  });
};

/* ---------- header + mobile menu ---------------------------- */
const menuToggle = $("#menuToggle");
const nav = $("#primaryNav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav?.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    nav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

/* ---------- language toggle --------------------------------- */
$("#langToggle")?.addEventListener("click", switchLang);

/* ---------- footer year ------------------------------------- */
const footerYear = $("#footerYear");
if (footerYear) footerYear.textContent = String(new Date().getFullYear());

/* ---------- track strip ------------------------------------- */
$$(".track-card").forEach((card) => {
  card.addEventListener("click", () => {
    const scope = card.dataset.scope;
    activatePackageTab(scope);
    document.querySelector("#packages")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* ---------- package tabs ------------------------------------ */
const activatePackageTab = (tab) => {
  $$(".tab").forEach((b) => {
    const match = b.dataset.tab === tab;
    b.classList.toggle("is-active", match);
    b.setAttribute("aria-selected", String(match));
  });
  $$("[data-tab-panel]").forEach((p) => {
    p.hidden = p.dataset.tabPanel !== tab;
  });
};
$$(".tab").forEach((b) => b.addEventListener("click", () => activatePackageTab(b.dataset.tab)));

/* ---------- estimate ---------------------------------------- */
const PRICE_RANGES = {
  family: [185, 245],
  sea: [285, 420],
  office: [160, 230],
  wedding: [520, 950],
  conf: [340, 560],
  henna: [380, 620],
};
const EXTRA_RANGES = {
  none: [0, 0],
  dessert: [35, 65],
  serving: [55, 100],
  staff: [85, 150],
};
const estimateForm = $("#estimateForm");
const estimateOutput = $("#estimateOutput");
const estimateWa = $("#estimateWhatsapp");

function updateEstimate() {
  if (!estimateForm || !estimateOutput) return;
  const fd = new FormData(estimateForm);
  const pkg = fd.get("package") || "family";
  const extras = fd.get("extras") || "none";
  const guests = Math.max(Number(fd.get("estimateGuests")) || 0, 6);
  const [pl, ph] = PRICE_RANGES[pkg] || PRICE_RANGES.family;
  const [el, eh] = EXTRA_RANGES[extras] || EXTRA_RANGES.none;
  const low = guests * (pl + el);
  const high = guests * (ph + eh);
  estimateOutput.value = `${formatEgp(low)} – ${formatEgp(high)}`;

  if (estimateWa) {
    const lang = document.documentElement.lang;
    const lines = lang === "ar"
      ? [
          "السلام عليكم سفرة مريان، عايز عرض سعر تموين.",
          `الباقة: ${t(`estimate.opt.${pkg}`)}`,
          `عدد الضيوف: ${guests}`,
          `إضافات: ${t(`estimate.extras.${extras}`)}`,
          `السعر التقديري: ${formatEgp(low)} – ${formatEgp(high)}`,
        ]
      : [
          "Hello Sofret Mariane, I'd like a catering quote.",
          `Package: ${t(`estimate.opt.${pkg}`)}`,
          `Guests: ${guests}`,
          `Extras: ${t(`estimate.extras.${extras}`)}`,
          `Estimated range: ${formatEgp(low)} – ${formatEgp(high)}`,
        ];
    estimateWa.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  }
}
estimateForm?.addEventListener("input", updateEstimate);

/* ---------- CART -------------------------------------------- */
const CART_KEY = "sm.cart";
let cart = [];
try {
  cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
} catch { cart = []; }

const persistCart = () => localStorage.setItem(CART_KEY, JSON.stringify(cart));

const addToCart = (item) => {
  const existing = cart.find((c) => c.id === item.id);
  if (existing) existing.qty += item.qty || 1;
  else cart.push({ ...item, qty: item.qty || 1 });
  persistCart();
  refreshCartUI();
  openCart();
};

const removeFromCart = (id) => {
  cart = cart.filter((c) => c.id !== id);
  persistCart();
  refreshCartUI();
};
const updateQty = (id, qty) => {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, qty);
  persistCart();
  refreshCartUI();
};

const cartTotals = () => {
  const low = cart.reduce((s, i) => s + i.priceLow * i.qty, 0);
  const high = cart.reduce((s, i) => s + (i.priceHigh || i.priceLow) * i.qty, 0);
  return { low, high };
};

const cartFab = $("#cartFab");
const cartCount = $("#cartCount");
const cartBody = $("#cartBody");
const cartTotal = $("#cartTotal");
const cartDrawer = $("#cartDrawer");
const overlay = $("#overlay");

function refreshCartUI() {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  if (cartFab) {
    cartFab.hidden = totalItems === 0;
    if (cartCount) cartCount.textContent = String(totalItems);
  }
  if (cartBody) {
    if (cart.length === 0) {
      cartBody.innerHTML = `<p class="cart-empty">${t("cart.empty")}</p>`;
    } else {
      cartBody.innerHTML = cart
        .map(
          (i) => `
        <div class="cart-line" data-id="${i.id}">
          <div class="cart-line-info">
            <strong>${i.name}</strong>
            <span>${formatEgp(i.priceLow)}${i.priceHigh && i.priceHigh !== i.priceLow ? ` – ${formatEgp(i.priceHigh)}` : ""}${i.unit ? ` / ${i.unit}` : ""}</span>
          </div>
          <div class="cart-line-qty">
            <button type="button" data-qty-dec aria-label="decrease">−</button>
            <span>${i.qty}</span>
            <button type="button" data-qty-inc aria-label="increase">+</button>
          </div>
          <button type="button" class="cart-line-remove" data-remove aria-label="remove">×</button>
        </div>`
        )
        .join("");
    }
  }
  if (cartTotal) {
    const { low, high } = cartTotals();
    cartTotal.textContent = low === high ? formatEgp(low) : `${formatEgp(low)} – ${formatEgp(high)}`;
  }
  const checkoutTotal = $("#checkoutTotal");
  if (checkoutTotal) {
    const { low, high } = cartTotals();
    checkoutTotal.textContent = low === high ? formatEgp(low) : `${formatEgp(low)} – ${formatEgp(high)}`;
  }
}

cartBody?.addEventListener("click", (e) => {
  const line = e.target.closest(".cart-line");
  if (!line) return;
  const id = line.dataset.id;
  if (e.target.matches("[data-remove]")) removeFromCart(id);
  else if (e.target.matches("[data-qty-inc]")) updateQty(id, (cart.find((c) => c.id === id)?.qty || 1) + 1);
  else if (e.target.matches("[data-qty-dec]")) updateQty(id, (cart.find((c) => c.id === id)?.qty || 1) - 1);
});

const openCart = () => {
  cartDrawer?.classList.add("is-open");
  cartDrawer?.setAttribute("aria-hidden", "false");
  overlay && (overlay.hidden = false);
  document.body.style.overflow = "hidden";
};
const closeCart = () => {
  cartDrawer?.classList.remove("is-open");
  cartDrawer?.setAttribute("aria-hidden", "true");
  overlay && (overlay.hidden = true);
  document.body.style.overflow = "";
};
cartFab?.addEventListener("click", openCart);
$("#cartClose")?.addEventListener("click", closeCart);
overlay?.addEventListener("click", () => { closeCart(); closeAllModals(); });

/* ---------- wire menu items: inject "+" buttons ------------- */
const parseMoneyRange = (text) => {
  const cleaned = text.replace(/[^\d\-,–\.]/g, "").replace(/,/g, "");
  const parts = cleaned.split(/[–\-]/).map((p) => Number(p)).filter((n) => !Number.isNaN(n));
  if (parts.length === 0) return [0, 0];
  if (parts.length === 1) return [parts[0], parts[0]];
  return [Math.min(...parts), Math.max(...parts)];
};

let menuItemIdSeq = 0;
$$(".menu-item").forEach((el) => {
  const span = el.querySelector("span");
  const strong = el.querySelector("strong");
  if (!span || !strong) return;
  const [low, high] = parseMoneyRange(strong.textContent);
  if (low === 0 && high === 0) return; // skip "Quoted by area" rows
  const id = `menu-${++menuItemIdSeq}`;
  el.dataset.id = id;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "add-btn";
  btn.setAttribute("aria-label", "Add to order");
  btn.dataset.add = id;
  btn.dataset.name = span.textContent.trim();
  btn.dataset.low = String(low);
  btn.dataset.high = String(high);
  btn.dataset.unit = strong.textContent.trim().includes("each") || strong.textContent.includes("guest") || strong.textContent.includes("hour") ? "" : "tray";
  btn.innerHTML = "+";
  el.appendChild(btn);
});

document.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".add-btn");
  if (!addBtn) return;
  addToCart({
    id: addBtn.dataset.add,
    name: addBtn.dataset.name,
    priceLow: Number(addBtn.dataset.low),
    priceHigh: Number(addBtn.dataset.high),
    unit: addBtn.dataset.unit || "tray",
    qty: 1,
  });
  addBtn.classList.add("just-added");
  setTimeout(() => addBtn.classList.remove("just-added"), 600);
});

/* ---------- package "Reserve" buttons ----------------------- */
const PACKAGE_PRICING = {
  family:  { name: "Beit Mariane Feast",       low: 185, high: 245, unit: "guest" },
  sea:     { name: "Sea Breeze Table",         low: 285, high: 420, unit: "guest" },
  office:  { name: "Office Lunch Drop-off",    low: 160, high: 230, unit: "guest" },
  wedding: { name: "Wedding & Engagement",     low: 520, high: 950, unit: "guest" },
  conf:    { name: "Conference & Launch",      low: 340, high: 560, unit: "guest" },
  henna:   { name: "Henna & Engagement Night", low: 380, high: 620, unit: "guest" },
};

$$(".package-cta").forEach((cta) => {
  cta.addEventListener("click", (e) => {
    e.preventDefault();
    const key = cta.dataset.package;
    const pkg = PACKAGE_PRICING[key];
    if (!pkg) return;
    const guests = Math.max(Number(prompt(document.documentElement.lang === "ar" ? "كام ضيف؟" : "How many guests?", "20")) || 20, 6);
    addToCart({
      id: `pkg-${key}`,
      name: `${pkg.name} × ${guests} ${document.documentElement.lang === "ar" ? "ضيف" : "guests"}`,
      priceLow: pkg.low * guests,
      priceHigh: pkg.high * guests,
      unit: "",
      qty: 1,
    });
  });
});

/* ---------- modals ------------------------------------------ */
const openModal = (id) => {
  const m = document.getElementById(id);
  if (!m) return;
  m.hidden = false;
  requestAnimationFrame(() => m.classList.add("is-open"));
  overlay && (overlay.hidden = false);
  document.body.style.overflow = "hidden";
};
const closeAllModals = () => {
  $$(".modal").forEach((m) => {
    m.classList.remove("is-open");
    setTimeout(() => (m.hidden = true), 240);
  });
  overlay && (overlay.hidden = true);
  document.body.style.overflow = "";
};
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-close-modal]") || e.target.closest("[data-close-modal]")) closeAllModals();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeAllModals(); closeCart(); }
});

$("#cartCheckout")?.addEventListener("click", () => {
  if (cart.length === 0) return;
  closeCart();
  refreshCartUI();
  openModal("checkoutModal");
});

/* ---------- CHECKOUT + PAYMENT ------------------------------ */
const buildOrderMessage = (order) => {
  const lang = document.documentElement.lang;
  const lines = lang === "ar"
    ? [
        "السلام عليكم سفرة مريان، أنا عايز أأكد طلب تموين.",
        `رقم الطلب: ${order.id}`,
        `الاسم: ${order.name}`,
        `التليفون: ${order.phone}`,
        `تاريخ المناسبة: ${order.date}`,
        `عدد الضيوف: ${order.guests}`,
        `المنطقة: ${order.area}`,
        order.notes ? `ملاحظات: ${order.notes}` : null,
        "",
        "الطلب:",
        ...order.items.map((i) => `• ${i.name} × ${i.qty}`),
        "",
        `السعر التقديري: ${order.totalText}`,
        `طريقة الدفع: ${order.paymentLabel}`,
      ]
    : [
        "Hello Sofret Mariane, I'd like to confirm a catering order.",
        `Order ID: ${order.id}`,
        `Name: ${order.name}`,
        `Phone: ${order.phone}`,
        `Event date: ${order.date}`,
        `Guests: ${order.guests}`,
        `Area: ${order.area}`,
        order.notes ? `Notes: ${order.notes}` : null,
        "",
        "Items:",
        ...order.items.map((i) => `• ${i.name} × ${i.qty}`),
        "",
        `Estimated total: ${order.totalText}`,
        `Payment method: ${order.paymentLabel}`,
      ];
  return lines.filter(Boolean).join("\n");
};

const buildPaymentDetailsHTML = (method, totalText) => {
  const lang = document.documentElement.lang;
  const ar = lang === "ar";
  switch (method) {
    case "instapay": {
      const ipLink = `https://ipn.eg/S/${encodeURIComponent(CONFIG.instapayHandle.split("@")[0])}/instapay`;
      return `
        <div class="pay-block">
          <strong>${ar ? "تحويل عبر إنستاباي" : "Pay via InstaPay"}</strong>
          <p>${ar ? "افتح تطبيق البنك بتاعك واختار إنستاباي، وحوّل إلى:" : "Open your bank app, choose InstaPay, and send to:"}</p>
          <code>${CONFIG.instapayHandle}</code>
          <p>${ar ? "المبلغ" : "Amount"}: <strong>${totalText}</strong></p>
          <a class="button primary" href="${ipLink}" target="_blank" rel="noopener">${ar ? "افتح InstaPay" : "Open InstaPay"}</a>
        </div>`;
    }
    case "vodafone":
      return `
        <div class="pay-block">
          <strong>${ar ? "فودافون كاش" : "Vodafone Cash"}</strong>
          <p>${ar ? "حوّل لرقم المحفظة" : "Transfer to the wallet number"}:</p>
          <code>${CONFIG.vodafoneCash}</code>
          <p>${ar ? "المبلغ" : "Amount"}: <strong>${totalText}</strong></p>
        </div>`;
    case "bank":
      return `
        <div class="pay-block">
          <strong>${ar ? "تحويل بنكي" : "Bank transfer"}</strong>
          <p>${CONFIG.bank.name} · ${CONFIG.bank.accountName}</p>
          <p>${ar ? "رقم الحساب" : "Account"}: <code>${CONFIG.bank.accountNumber}</code></p>
          <p>IBAN: <code>${CONFIG.bank.iban}</code></p>
          <p>SWIFT: <code>${CONFIG.bank.swift}</code></p>
          <p>${ar ? "المبلغ" : "Amount"}: <strong>${totalText}</strong></p>
        </div>`;
    case "card":
      if (CONFIG.paymobCheckoutUrl) {
        return `
          <div class="pay-block">
            <strong>${ar ? "دفع بالكارت (Paymob)" : "Pay by card (Paymob)"}</strong>
            <p>${ar ? "هتفتح صفحة دفع آمنة." : "You'll be redirected to a secure checkout page."}</p>
            <a class="button primary" href="${CONFIG.paymobCheckoutUrl}" target="_blank" rel="noopener">${ar ? "افتح صفحة الدفع" : "Open secure checkout"}</a>
          </div>`;
      }
      return `
        <div class="pay-block">
          <strong>${ar ? "دفع بالكارت" : "Card payment"}</strong>
          <p>${ar ? "هنبعتلك لينك دفع آمن على واتساب خلال دقائق." : "We'll WhatsApp you a secure payment link within minutes."}</p>
        </div>`;
    case "cod":
    default:
      return `
        <div class="pay-block">
          <strong>${ar ? "الدفع عند الاستلام" : "Cash on delivery"}</strong>
          <p>${ar ? "جهز المبلغ يوم التوصيل." : "Have the amount ready on delivery day."}</p>
          <p>${ar ? "المبلغ" : "Amount"}: <strong>${totalText}</strong></p>
        </div>`;
  }
};

const checkoutForm = $("#checkoutForm");
checkoutForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cart.length === 0) return;
  const fd = new FormData(checkoutForm);
  const method = fd.get("payment") || "instapay";
  const { low, high } = cartTotals();
  const totalText = low === high ? formatEgp(low) : `${formatEgp(low)} – ${formatEgp(high)}`;

  const order = {
    id: generateOrderId(),
    name: fd.get("name"),
    phone: fd.get("phone"),
    date: fd.get("date"),
    guests: fd.get("guests"),
    area: fd.get("area"),
    notes: fd.get("notes") || "",
    items: cart.map((c) => ({ name: c.name, qty: c.qty })),
    totalText,
    payment: method,
    paymentLabel: t(`pay.${method === "bank" ? "bank.title" : method === "card" ? "card.title" : method === "cod" ? "cod.title" : method}`),
    createdAt: new Date().toISOString(),
  };
  /* store order locally */
  try {
    const history = JSON.parse(localStorage.getItem("sm.orders") || "[]");
    history.unshift(order);
    localStorage.setItem("sm.orders", JSON.stringify(history.slice(0, 20)));
  } catch {}

  const msg = buildOrderMessage(order);
  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

  /* fire WhatsApp in new tab */
  window.open(waUrl, "_blank", "noopener,noreferrer");

  /* confirmation modal */
  $("#confirmOrderId").textContent = order.id;
  $("#confirmPayment").innerHTML = buildPaymentDetailsHTML(method, totalText);
  $("#confirmWhatsapp").href = waUrl;
  closeAllModals();
  setTimeout(() => openModal("confirmModal"), 260);

  /* clear cart */
  cart = [];
  persistCart();
  refreshCartUI();
  checkoutForm.reset();
});

/* ---------- contact form (top-level booking) ---------------- */
$("#quoteForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const lang = document.documentElement.lang;
  const lines = lang === "ar"
    ? [
        "السلام عليكم سفرة مريان، عايز عرض سعر تموين.",
        `الاسم: ${fd.get("name")}`,
        `التليفون: ${fd.get("phone")}`,
        `تاريخ المناسبة: ${fd.get("date")}`,
        `عدد الضيوف: ${fd.get("guests")}`,
        `نوع المناسبة: ${fd.get("event")}`,
        `المنطقة: ${fd.get("area") || "-"}`,
        `الطلب: ${fd.get("message")}`,
      ]
    : [
        "Hello Sofret Mariane, I'd like a catering quote.",
        `Name: ${fd.get("name")}`,
        `Phone: ${fd.get("phone")}`,
        `Event date: ${fd.get("date")}`,
        `Guests: ${fd.get("guests")}`,
        `Event type: ${fd.get("event")}`,
        `Area: ${fd.get("area") || "-"}`,
        `Menu notes: ${fd.get("message")}`,
      ];
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

/* ---------- PWA install ------------------------------------- */
let deferredInstall = null;
const installPrompt = $("#installPrompt");
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstall = e;
  if (installPrompt && !localStorage.getItem("sm.installDismissed")) installPrompt.hidden = false;
});
installPrompt?.addEventListener("click", async (e) => {
  if (e.target.closest(".install-x")) {
    installPrompt.hidden = true;
    localStorage.setItem("sm.installDismissed", "1");
    return;
  }
  if (deferredInstall) {
    deferredInstall.prompt();
    await deferredInstall.userChoice;
    deferredInstall = null;
    installPrompt.hidden = true;
  }
});

/* ---------- URL action handling ----------------------------- */
const urlAction = new URLSearchParams(window.location.search).get("action");
if (urlAction === "order") setTimeout(() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" }), 400);
if (urlAction === "estimate") setTimeout(() => document.querySelector("#estimate")?.scrollIntoView({ behavior: "smooth" }), 400);
if (urlAction === "whatsapp") setTimeout(() => window.location.href = `https://wa.me/${CONFIG.whatsapp}`, 200);

/* ---------- magnetic primary buttons (subtle) --------------- */
$$(".button.primary, .header-cta").forEach((btn) => {
  btn.addEventListener("pointermove", (e) => {
    const r = btn.getBoundingClientRect();
    const dx = ((e.clientX - r.left) / r.width - 0.5) * 8;
    const dy = ((e.clientY - r.top) / r.height - 0.5) * 8;
    btn.style.transform = `translate(${dx}px, ${dy - 2}px)`;
  });
  btn.addEventListener("pointerleave", () => (btn.style.transform = ""));
});

/* ---------- hero parallax ----------------------------------- */
const heroMedia = document.querySelector(".hero-media img");
if (heroMedia) {
  window.addEventListener("scroll", () => {
    const y = Math.min(window.scrollY, 600);
    heroMedia.style.transform = `scale(1.08) translate3d(0, ${y * 0.18}px, 0)`;
  }, { passive: true });
}

/* ---------- counter animation for hero trust ---------------- */
const animateCount = (el, target) => {
  const startTime = performance.now();
  const startVal = 0;
  const dur = 1400;
  const tick = (now) => {
    const p = Math.min(1, (now - startTime) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(startVal + (target - startVal) * eased);
    el.textContent = String(val) + (el.dataset.suffix || "");
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const trustNums = document.querySelectorAll(".hero-trust strong");
const trustObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    if (el.dataset.animated) return;
    el.dataset.animated = "1";
    const raw = el.textContent.trim();
    const num = parseInt(raw, 10);
    if (!Number.isNaN(num) && raw.match(/^\d/)) {
      el.dataset.suffix = raw.replace(/^\d+/, "");
      animateCount(el, num);
    }
    trustObserver.unobserve(el);
  });
});
trustNums.forEach((el) => trustObserver.observe(el));

/* ---------- hero word rotator ------------------------------- */
const HERO_ROTATE_WORDS = {
  en: ["table.", "wedding.", "office.", "celebration.", "henna night."],
  ar: ["سفرة.", "فرح.", "مكتب.", "احتفال.", "ليلة حنة."],
};
const heroRotator = $("#heroRotator");
let heroRotateIdx = 0;
const rotateHeroWord = () => {
  if (!heroRotator) return;
  const lang = document.documentElement.lang === "ar" ? "ar" : "en";
  const words = HERO_ROTATE_WORDS[lang];
  heroRotateIdx = (heroRotateIdx + 1) % words.length;
  const next = words[heroRotateIdx];
  const word = document.createElement("span");
  word.className = "hero-rotator-word";
  word.textContent = next;
  heroRotator.replaceChildren(word);
};
if (heroRotator) {
  /* respect user motion preferences */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(rotateHeroWord, 2600);
  }
}

/* ---------- 3D tilt on package + signature cards ------------ */
const tiltTargets = $$(".package, .signature-grid article, .review-card");
tiltTargets.forEach((card) => {
  card.classList.add("tilt-card");
  /* wrap content so it floats forward */
  const wrapper = document.createElement("div");
  wrapper.className = "tilt-inner";
  while (card.firstChild) wrapper.appendChild(card.firstChild);
  card.appendChild(wrapper);

  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty("--tx", `${cx * 8}deg`);
    card.style.setProperty("--ty", `${-cy * 8}deg`);
  });
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--tx", "0deg");
    card.style.setProperty("--ty", "0deg");
  });
});

/* ---------- subtle cursor spotlight in hero ----------------- */
const hero = document.querySelector(".hero");
if (hero && window.matchMedia("(hover: hover)").matches) {
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    hero.style.setProperty("--mx", `${x}%`);
    hero.style.setProperty("--my", `${y}%`);
  });
}

/* ---------- init -------------------------------------------- */
applyLang(getLang());
armReveals();
refreshCartUI();
onScroll();
