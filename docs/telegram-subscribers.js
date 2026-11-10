window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-10T03:57:26.104Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22934,
      "formatted": "22 934 подписчика",
      "updatedAt": "2026-11-10T03:57:26.104Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16148,
      "formatted": "16 148 подписчиков",
      "updatedAt": "2026-11-10T03:57:26.104Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
