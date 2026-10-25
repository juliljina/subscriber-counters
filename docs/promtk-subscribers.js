window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-25T00:00:02.522Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1888,
      "formatted": "1 888 подписчиков",
      "updatedAt": "2026-10-25T00:00:02.522Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
