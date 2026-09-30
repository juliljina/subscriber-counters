window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-30T01:04:58.997Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22138,
      "formatted": "22 138 подписчиков",
      "updatedAt": "2026-09-30T01:04:58.997Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16325,
      "formatted": "16 325 подписчиков",
      "updatedAt": "2026-09-30T01:04:58.997Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
