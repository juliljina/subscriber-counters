window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-21T22:22:29.792Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21489,
      "formatted": "21 489 подписчиков",
      "updatedAt": "2026-08-21T22:22:29.792Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16320,
      "formatted": "16 320 подписчиков",
      "updatedAt": "2026-08-21T22:22:29.792Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
