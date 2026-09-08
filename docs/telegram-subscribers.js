window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-08T23:50:32.982Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21942,
      "formatted": "21 942 подписчика",
      "updatedAt": "2026-09-08T23:50:32.982Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16277,
      "formatted": "16 277 подписчиков",
      "updatedAt": "2026-09-08T23:50:32.982Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
