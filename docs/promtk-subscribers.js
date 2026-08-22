window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-22T22:19:18.643Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1687,
      "formatted": "1 687 подписчиков",
      "updatedAt": "2026-08-22T22:19:18.643Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
