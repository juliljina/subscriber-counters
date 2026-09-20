window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-20T23:51:10.448Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22034,
      "formatted": "22 034 подписчика",
      "updatedAt": "2026-09-20T23:51:10.448Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16309,
      "formatted": "16 309 подписчиков",
      "updatedAt": "2026-09-20T23:51:10.448Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
