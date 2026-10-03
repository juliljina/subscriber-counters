window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-03T00:56:33.464Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1913,
      "formatted": "1 913 подписчиков",
      "updatedAt": "2026-10-03T00:56:33.464Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
