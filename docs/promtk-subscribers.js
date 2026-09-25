window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-25T00:16:51.951Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1924,
      "formatted": "1 924 подписчика",
      "updatedAt": "2026-09-25T00:16:51.951Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
