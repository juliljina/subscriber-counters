window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-06T23:29:29.447Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21869,
      "formatted": "21 869 подписчиков",
      "updatedAt": "2026-09-06T23:29:29.447Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16269,
      "formatted": "16 269 подписчиков",
      "updatedAt": "2026-09-06T23:29:29.447Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
