window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-22T22:19:17.926Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21515,
      "formatted": "21 515 подписчиков",
      "updatedAt": "2026-08-22T22:19:17.926Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16305,
      "formatted": "16 305 подписчиков",
      "updatedAt": "2026-08-22T22:19:17.926Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
