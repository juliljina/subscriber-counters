window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-28T03:43:02.515Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23255,
      "formatted": "23 255 подписчиков",
      "updatedAt": "2026-11-28T03:43:02.515Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16062,
      "formatted": "16 062 подписчика",
      "updatedAt": "2026-11-28T03:43:02.515Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
