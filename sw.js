const CACHE_NAME = "pwa-cache-v1";

const urlsToCache = [
  "/",
  "/style.css",
  "/script.js",
  "/logo-192.png",
  "/logo-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
