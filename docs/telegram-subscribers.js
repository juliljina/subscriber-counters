window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-09T01:44:46.022Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 22235,
      "formatted": "22 235 подписчиков",
      "updatedAt": "2026-10-09T01:44:46.022Z",
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
      "updatedAt": "2026-10-09T01:44:46.022Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
