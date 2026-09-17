window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-17T00:06:01.680Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22068,
      "formatted": "22 068 подписчиков",
      "updatedAt": "2026-09-17T00:06:01.680Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16308,
      "formatted": "16 308 подписчиков",
      "updatedAt": "2026-09-17T00:06:01.680Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
