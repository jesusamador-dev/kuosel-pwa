const CACHE_NAME = "basic-cache-v1";
const ASSETS_TO_CACHE = [
  "/", // Cachea la página principal
  "/offline.html", // Página de fallback para offline
];

// Instala el Service Worker y guarda los archivos en caché
self.addEventListener("install", (event) => {
  console.log("Service Worker instalado.");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Forzar activación inmediata del SW
});

// Activa el Service Worker y elimina cachés antiguas
self.addEventListener("activate", (event) => {
  console.log("Service Worker activado.");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`Eliminando caché antigua: ${cache}`);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim(); // Reclama el control inmediato
});

// Intercepta las solicitudes para manejar el contenido offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si el recurso está en la caché, úsalo; de lo contrario, realiza una solicitud de red
      return (
        response ||
        fetch(event.request).catch(() => {
          // Si la solicitud falla y es navegación, muestra la página offline
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html");
          }
        })
      );
    })
  );
});
