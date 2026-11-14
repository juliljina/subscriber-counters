window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-14T01:58:07.839Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23008,
      "formatted": "23 008 подписчиков",
      "updatedAt": "2026-11-14T01:58:07.839Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16128,
      "formatted": "16 128 подписчиков",
      "updatedAt": "2026-11-14T01:58:07.839Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
