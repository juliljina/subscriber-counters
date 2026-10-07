window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-07T01:12:44.834Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1914,
      "formatted": "1 914 подписчиков",
      "updatedAt": "2026-10-07T01:12:44.834Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
