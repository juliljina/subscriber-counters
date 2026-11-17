window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-17T04:19:00.564Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23058,
      "formatted": "23 058 подписчиков",
      "updatedAt": "2026-11-17T04:19:00.564Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16127,
      "formatted": "16 127 подписчиков",
      "updatedAt": "2026-11-17T04:19:00.564Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
