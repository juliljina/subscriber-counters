window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-09T01:44:46.551Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1908,
      "formatted": "1 908 подписчиков",
      "updatedAt": "2026-10-09T01:44:46.551Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
