window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-22T01:54:38.190Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23143,
      "formatted": "23 143 подписчика",
      "updatedAt": "2026-11-22T01:54:38.190Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16095,
      "formatted": "16 095 подписчиков",
      "updatedAt": "2026-11-22T01:54:38.190Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
