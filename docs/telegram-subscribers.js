window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-24T00:15:51.144Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22567,
      "formatted": "22 567 подписчиков",
      "updatedAt": "2026-10-24T00:15:51.144Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16259,
      "formatted": "16 259 подписчиков",
      "updatedAt": "2026-10-24T00:15:51.144Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
