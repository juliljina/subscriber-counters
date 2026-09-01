window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-01T00:59:21.083Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21750,
      "formatted": "21 750 подписчиков",
      "updatedAt": "2026-09-01T00:59:21.083Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16262,
      "formatted": "16 262 подписчика",
      "updatedAt": "2026-09-01T00:59:21.083Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
