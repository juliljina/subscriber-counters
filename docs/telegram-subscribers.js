window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-27T01:09:07.721Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22629,
      "formatted": "22 629 подписчиков",
      "updatedAt": "2026-10-27T01:09:07.721Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16244,
      "formatted": "16 244 подписчика",
      "updatedAt": "2026-10-27T01:09:07.721Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
