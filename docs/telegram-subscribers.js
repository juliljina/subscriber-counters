window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-13T02:23:18.640Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22993,
      "formatted": "22 993 подписчика",
      "updatedAt": "2026-11-13T02:23:18.640Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16130,
      "formatted": "16 130 подписчиков",
      "updatedAt": "2026-11-13T02:23:18.640Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
