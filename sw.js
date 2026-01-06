const CACHE_NAME = 'sl5-cache-v1';
const ASSETS = [
  '/SL5/',
  '/SL5/index.html',
  '/SL5/manifest.json',
  '/SL5/icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
