window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-13T02:50:14.538Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22325,
      "formatted": "22 325 подписчиков",
      "updatedAt": "2026-10-13T02:50:14.538Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16296,
      "formatted": "16 296 подписчиков",
      "updatedAt": "2026-10-13T02:50:14.538Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
