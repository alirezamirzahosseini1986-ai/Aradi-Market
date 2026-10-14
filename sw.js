// ARÁDI Market — minimal service worker: makes the shop installable as an app.
// It does not cache anything, so customers always see the latest prices and products.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
