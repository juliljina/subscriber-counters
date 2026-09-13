window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-13T23:53:16.389Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22039,
      "formatted": "22 039 подписчиков",
      "updatedAt": "2026-09-13T23:53:16.389Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16290,
      "formatted": "16 290 подписчиков",
      "updatedAt": "2026-09-13T23:53:16.389Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
