window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-15T00:17:20.362Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22367,
      "formatted": "22 367 подписчиков",
      "updatedAt": "2026-10-15T00:17:20.362Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16276,
      "formatted": "16 276 подписчиков",
      "updatedAt": "2026-10-15T00:17:20.362Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
