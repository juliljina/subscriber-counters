window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-06T02:03:45.371Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1912,
      "formatted": "1 912 подписчиков",
      "updatedAt": "2026-10-06T02:03:45.371Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
