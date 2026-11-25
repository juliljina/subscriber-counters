window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-25T04:46:13.150Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 23203,
      "formatted": "23 203 подписчика",
      "updatedAt": "2026-11-25T04:46:13.150Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16088,
      "formatted": "16 088 подписчиков",
      "updatedAt": "2026-11-25T04:46:13.150Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
