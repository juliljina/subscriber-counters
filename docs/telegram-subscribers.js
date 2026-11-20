window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-20T02:50:23.834Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23098,
      "formatted": "23 098 подписчиков",
      "updatedAt": "2026-11-20T02:50:23.834Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16106,
      "formatted": "16 106 подписчиков",
      "updatedAt": "2026-11-20T02:50:23.834Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
