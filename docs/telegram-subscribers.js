window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-16T00:05:00.274Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22393,
      "formatted": "22 393 подписчика",
      "updatedAt": "2026-10-16T00:05:00.274Z",
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
      "updatedAt": "2026-10-16T00:05:00.274Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
