window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-12T02:41:33.500Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22986,
      "formatted": "22 986 подписчиков",
      "updatedAt": "2026-11-12T02:41:33.500Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16133,
      "formatted": "16 133 подписчика",
      "updatedAt": "2026-11-12T02:41:33.500Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
