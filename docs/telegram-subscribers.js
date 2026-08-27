window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-27T02:56:22.696Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21630,
      "formatted": "21 630 подписчиков",
      "updatedAt": "2026-08-27T02:56:22.696Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16286,
      "formatted": "16 286 подписчиков",
      "updatedAt": "2026-08-27T02:56:22.696Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
