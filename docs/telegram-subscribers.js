window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-26T03:56:59.432Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23223,
      "formatted": "23 223 подписчика",
      "updatedAt": "2026-11-26T03:56:59.432Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16081,
      "formatted": "16 081 подписчик",
      "updatedAt": "2026-11-26T03:56:59.432Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
