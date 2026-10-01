window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-01T01:03:59.672Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22144,
      "formatted": "22 144 подписчика",
      "updatedAt": "2026-10-01T01:03:59.672Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16326,
      "formatted": "16 326 подписчиков",
      "updatedAt": "2026-10-01T01:03:59.672Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
