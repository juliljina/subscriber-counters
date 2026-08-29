window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-29T23:53:20.249Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21693,
      "formatted": "21 693 подписчика",
      "updatedAt": "2026-08-29T23:53:20.249Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16267,
      "formatted": "16 267 подписчиков",
      "updatedAt": "2026-08-29T23:53:20.249Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
