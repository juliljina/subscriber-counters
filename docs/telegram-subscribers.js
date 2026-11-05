window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-05T01:59:12.699Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22776,
      "formatted": "22 776 подписчиков",
      "updatedAt": "2026-11-05T01:59:12.699Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16179,
      "formatted": "16 179 подписчиков",
      "updatedAt": "2026-11-05T01:59:12.699Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
