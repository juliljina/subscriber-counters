window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-25T00:00:01.724Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22581,
      "formatted": "22 581 подписчик",
      "updatedAt": "2026-10-25T00:00:01.724Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16254,
      "formatted": "16 254 подписчика",
      "updatedAt": "2026-10-25T00:00:01.724Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
