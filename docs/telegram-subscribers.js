window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-06T02:03:44.500Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22179,
      "formatted": "22 179 подписчиков",
      "updatedAt": "2026-10-06T02:03:44.500Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16319,
      "formatted": "16 319 подписчиков",
      "updatedAt": "2026-10-06T02:03:44.500Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
