// Network-only: messages, passwords and profiles are not cached here.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.mode !== 'navigate') return;
  event.respondWith(fetch(event.request).catch(() => new Response(
    '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><title>Reddy — Offline</title><body style="font-family:sans-serif;text-align:center;padding:40px"><h1>ইন্টারনেট সংযোগ নেই</h1><p>সংযোগ চালু করে আবার চেষ্টা করুন।</p><button onclick="location.reload()">আবার চেষ্টা করুন</button></body>',
    {status:503, headers:{'Content-Type':'text/html; charset=utf-8'}})));
});
