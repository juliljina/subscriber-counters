window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-02T23:52:05.156Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21781,
      "formatted": "21 781 подписчик",
      "updatedAt": "2026-09-02T23:52:05.156Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16262,
      "formatted": "16 262 подписчика",
      "updatedAt": "2026-09-02T23:52:05.156Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
