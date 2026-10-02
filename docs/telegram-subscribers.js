window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-02T01:17:17.001Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22155,
      "formatted": "22 155 подписчиков",
      "updatedAt": "2026-10-02T01:17:17.001Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16330,
      "formatted": "16 330 подписчиков",
      "updatedAt": "2026-10-02T01:17:17.001Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
