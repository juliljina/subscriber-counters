window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-14T00:52:04.654Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22350,
      "formatted": "22 350 подписчиков",
      "updatedAt": "2026-10-14T00:52:04.654Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16287,
      "formatted": "16 287 подписчиков",
      "updatedAt": "2026-10-14T00:52:04.654Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
