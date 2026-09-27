window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-27T00:14:59.205Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22110,
      "formatted": "22 110 подписчиков",
      "updatedAt": "2026-09-27T00:14:59.205Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16312,
      "formatted": "16 312 подписчиков",
      "updatedAt": "2026-09-27T00:14:59.205Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
