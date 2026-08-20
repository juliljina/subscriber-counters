window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-20T22:25:47.213Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21467,
      "formatted": "21 467 подписчиков",
      "updatedAt": "2026-08-20T22:25:47.213Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16319,
      "formatted": "16 319 подписчиков",
      "updatedAt": "2026-08-20T22:25:47.213Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
