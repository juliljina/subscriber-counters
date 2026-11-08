window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-08T01:05:13.082Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1887,
      "formatted": "1 887 подписчиков",
      "updatedAt": "2026-11-08T01:05:13.082Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
