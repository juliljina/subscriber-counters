window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-04T01:53:59.264Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22762,
      "formatted": "22 762 подписчика",
      "updatedAt": "2026-11-04T01:53:59.264Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16192,
      "formatted": "16 192 подписчика",
      "updatedAt": "2026-11-04T01:53:59.264Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
