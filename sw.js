self.addEventListener('install', e => {
    console.log('Service Worker instalado');
    e.waitUntil(
        caches.open('xno-cache').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json',
                './icon-192.png',
                './icon-512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});