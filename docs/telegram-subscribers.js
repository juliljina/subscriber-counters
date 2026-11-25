window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-25T11:59:19.251Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23215,
      "formatted": "23 215 подписчиков",
      "updatedAt": "2026-11-25T11:59:19.251Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16087,
      "formatted": "16 087 подписчиков",
      "updatedAt": "2026-11-25T11:59:19.251Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
