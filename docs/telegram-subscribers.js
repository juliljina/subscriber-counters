window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-11T00:40:45.566Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22261,
      "formatted": "22 261 подписчик",
      "updatedAt": "2026-10-11T00:40:45.566Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16300,
      "formatted": "16 300 подписчиков",
      "updatedAt": "2026-10-11T00:40:45.566Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
