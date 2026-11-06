window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-06T01:59:05.523Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1882,
      "formatted": "1 882 подписчика",
      "updatedAt": "2026-11-06T01:59:05.523Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
