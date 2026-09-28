window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-28T00:18:16.175Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1923,
      "formatted": "1 923 подписчика",
      "updatedAt": "2026-09-28T00:18:16.175Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
