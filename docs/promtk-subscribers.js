window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-30T01:04:59.636Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1917,
      "formatted": "1 917 подписчиков",
      "updatedAt": "2026-09-30T01:04:59.636Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
