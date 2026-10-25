window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-25T23:49:23.317Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22595,
      "formatted": "22 595 подписчиков",
      "updatedAt": "2026-10-25T23:49:23.317Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16247,
      "formatted": "16 247 подписчиков",
      "updatedAt": "2026-10-25T23:49:23.317Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
