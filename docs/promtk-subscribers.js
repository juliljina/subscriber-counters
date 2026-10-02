window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-02T01:17:17.569Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1915,
      "formatted": "1 915 подписчиков",
      "updatedAt": "2026-10-02T01:17:17.569Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
