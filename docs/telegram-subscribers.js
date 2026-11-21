window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-21T02:58:32.902Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23121,
      "formatted": "23 121 подписчик",
      "updatedAt": "2026-11-21T02:58:32.902Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16101,
      "formatted": "16 101 подписчик",
      "updatedAt": "2026-11-21T02:58:32.902Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
