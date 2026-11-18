window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-18T03:19:17.906Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1905,
      "formatted": "1 905 подписчиков",
      "updatedAt": "2026-11-18T03:19:17.906Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
