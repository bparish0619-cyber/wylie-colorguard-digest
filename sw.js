// Wylie Colorguard Digest service worker.
// Its only job is to exist: Chrome asks for one before it will offer the
// Add to Home Screen prompt. It deliberately caches nothing, so every
// visit loads the live page exactly as published by the refresh jobs.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (event) { event.respondWith(fetch(event.request)); });
