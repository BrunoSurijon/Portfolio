// sw.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("bruno-portfolio-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/estilos.css",
        "/img/icon-192.png",
        "/img/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
