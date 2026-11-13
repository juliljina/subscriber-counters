window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-13T02:23:19.368Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1905,
      "formatted": "1 905 подписчиков",
      "updatedAt": "2026-11-13T02:23:19.368Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
