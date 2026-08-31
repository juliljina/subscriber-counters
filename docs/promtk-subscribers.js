window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-31T00:12:24.393Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1724,
      "formatted": "1 724 подписчика",
      "updatedAt": "2026-08-31T00:12:24.393Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
