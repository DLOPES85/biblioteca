const C = "livros-v1", CAPAS = "capas";
const SHELL = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.origin === location.origin) {
    e.respondWith(fetch(r).then(x => { const k = x.clone(); caches.open(C).then(c => c.put(r, k)); return x; }).catch(() => caches.match(r)));
  } else if (r.destination === "image") {
    e.respondWith(caches.open(CAPAS).then(async c => {
      const m = await c.match(r);
      const n = fetch(r).then(x => { c.put(r, x.clone()); return x; }).catch(() => m);
      return m || n;
    }));
  }
});
