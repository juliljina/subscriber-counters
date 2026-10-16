window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-16T00:05:00.933Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1892,
      "formatted": "1 892 подписчика",
      "updatedAt": "2026-10-16T00:05:00.933Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
