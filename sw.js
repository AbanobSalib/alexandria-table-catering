/* Sofret Mariane service worker
   - precache the shell so the PWA opens offline
   - network-first for HTML so menu/price updates land quickly
   - network-first for JS/CSS/manifest so button fixes land immediately
   - cache-first for images so the app feels snappy
*/

const VERSION = "sm-v6-platform-pages-photos";
const SHELL = [
  "./",
  "index.html",
  "platforms.html",
  "privacy.html",
  "terms.html",
  "support.html",
  "styles.css?v=sm-v6-platform-pages-photos",
  "script.js?v=sm-v6-platform-pages-photos",
  "site.webmanifest",
  "assets/logo.svg",
  "assets/favicon.svg",
  "assets/mariane-anis-enhanced.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;

  /* Network-first for navigations / HTML so menu changes propagate fast */
  if (req.mode === "navigate" || req.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match("index.html"))),
    );
    return;
  }

  /* Network-first for code/config assets so returning users do not get stale broken buttons */
  if (
    sameOrigin &&
    (url.pathname.endsWith(".js") ||
      url.pathname.endsWith(".css") ||
      url.pathname.endsWith(".webmanifest") ||
      url.pathname.endsWith("/sw.js"))
  ) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(req)),
    );
    return;
  }

  /* Cache-first for same-origin images/static media */
  if (sameOrigin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        });
      }),
    );
    return;
  }

  /* Stale-while-revalidate for cross-origin (Unsplash, fonts) */
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    }),
  );
});
