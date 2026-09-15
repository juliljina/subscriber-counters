window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-15T23:58:22.156Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22064,
      "formatted": "22 064 подписчика",
      "updatedAt": "2026-09-15T23:58:22.156Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16302,
      "formatted": "16 302 подписчика",
      "updatedAt": "2026-09-15T23:58:22.156Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
