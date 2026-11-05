window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-05T01:59:13.523Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1880,
      "formatted": "1 880 подписчиков",
      "updatedAt": "2026-11-05T01:59:13.523Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
