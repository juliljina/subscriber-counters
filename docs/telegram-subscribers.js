window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-26T00:22:10.692Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22102,
      "formatted": "22 102 подписчика",
      "updatedAt": "2026-09-26T00:22:10.692Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16314,
      "formatted": "16 314 подписчиков",
      "updatedAt": "2026-09-26T00:22:10.692Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
