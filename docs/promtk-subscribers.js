window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-14T00:52:05.457Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1899,
      "formatted": "1 899 подписчиков",
      "updatedAt": "2026-10-14T00:52:05.457Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
