window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-28T05:57:32.563Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1714,
      "formatted": "1 714 подписчиков",
      "updatedAt": "2026-08-28T05:57:32.563Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
