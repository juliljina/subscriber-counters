window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-18T22:20:55.636Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21436,
      "formatted": "21 436 подписчиков",
      "updatedAt": "2026-08-18T22:20:55.636Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16311,
      "formatted": "16 311 подписчиков",
      "updatedAt": "2026-08-18T22:20:55.636Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
