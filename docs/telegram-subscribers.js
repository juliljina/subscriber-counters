window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-31T00:12:23.524Z",
  "channels": {
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21725,
      "formatted": "21 725 подписчиков",
      "updatedAt": "2026-08-31T00:12:23.524Z",
      "source": "telegram",
      "stale": false
    },
    "bogatyiillustartor": {
      "ok": true,
      "username": "bogatyiillustartor",
      "title": "Богатый иллюстратор (ArtCosmos School)",
      "url": "https://t.me/bogatyiillustartor",
      "count": 16260,
      "formatted": "16 260 подписчиков",
      "updatedAt": "2026-08-31T00:12:23.524Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
