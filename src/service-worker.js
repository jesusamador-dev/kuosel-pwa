self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('kuosel-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/offline', // Página de fallback
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((response) => {
        return response || caches.match('/offline');
      });
    })
  );
});
