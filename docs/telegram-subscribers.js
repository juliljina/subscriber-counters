window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-09T01:26:01.334Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22910,
      "formatted": "22 910 подписчиков",
      "updatedAt": "2026-11-09T01:26:01.334Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16156,
      "formatted": "16 156 подписчиков",
      "updatedAt": "2026-11-09T01:26:01.334Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
