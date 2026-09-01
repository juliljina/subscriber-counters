window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-01T23:47:54.904Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1735,
      "formatted": "1 735 подписчиков",
      "updatedAt": "2026-09-01T23:47:54.904Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
