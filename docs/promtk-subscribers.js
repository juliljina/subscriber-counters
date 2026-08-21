window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-21T22:22:30.454Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1679,
      "formatted": "1 679 подписчиков",
      "updatedAt": "2026-08-21T22:22:30.454Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
