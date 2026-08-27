window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-27T02:56:23.272Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1709,
      "formatted": "1 709 подписчиков",
      "updatedAt": "2026-08-27T02:56:23.272Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
