const CACHE_NAME = 'bueroass-offline-v2';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './terminuebersicht.html',
  './bueroass.html',
  './laden.html',
  './lehrer.html',
  './style.css',
  './Gemini_Generated_Image_js4lnvjs4lnvjs4l.jpeg',
  './Sterne.jpeg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
