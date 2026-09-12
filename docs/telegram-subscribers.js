window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-12T23:45:06.052Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22006,
      "formatted": "22 006 подписчиков",
      "updatedAt": "2026-09-12T23:45:06.052Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16294,
      "formatted": "16 294 подписчика",
      "updatedAt": "2026-09-12T23:45:06.052Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
