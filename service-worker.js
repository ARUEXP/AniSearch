const CACHE_NAME = 'anime-tracker-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css', // Replace with your CSS file path
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

// Install the service worker and cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch resources from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
