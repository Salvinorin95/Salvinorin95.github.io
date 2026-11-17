// Shmirat HaBrit moved to https://shmirat-habrit.salvinorinab.workers.dev/
// This replaces the old offline worker: it deletes the app's old caches (only "shmira-*") and unregisters itself.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
  caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("shmira-")).map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
));
