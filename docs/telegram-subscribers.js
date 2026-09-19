window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-19T23:54:06.440Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22040,
      "formatted": "22 040 подписчиков",
      "updatedAt": "2026-09-19T23:54:06.440Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16313,
      "formatted": "16 313 подписчиков",
      "updatedAt": "2026-09-19T23:54:06.440Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
