window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-15T00:18:11.405Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1859,
      "formatted": "1 859 подписчиков",
      "updatedAt": "2026-09-15T00:18:11.405Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
