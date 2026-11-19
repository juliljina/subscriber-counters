window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-19T02:56:04.310Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23078,
      "formatted": "23 078 подписчиков",
      "updatedAt": "2026-11-19T02:56:04.310Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16108,
      "formatted": "16 108 подписчиков",
      "updatedAt": "2026-11-19T02:56:04.310Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
