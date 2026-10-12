window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-12T01:00:05.700Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22295,
      "formatted": "22 295 подписчиков",
      "updatedAt": "2026-10-12T01:00:05.700Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16299,
      "formatted": "16 299 подписчиков",
      "updatedAt": "2026-10-12T01:00:05.700Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
