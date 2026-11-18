window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-18T03:19:17.319Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23077,
      "formatted": "23 077 подписчиков",
      "updatedAt": "2026-11-18T03:19:17.319Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16115,
      "formatted": "16 115 подписчиков",
      "updatedAt": "2026-11-18T03:19:17.319Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
