window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-10T23:43:54.469Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21979,
      "formatted": "21 979 подписчиков",
      "updatedAt": "2026-09-10T23:43:54.469Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16291,
      "formatted": "16 291 подписчик",
      "updatedAt": "2026-09-10T23:43:54.469Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
