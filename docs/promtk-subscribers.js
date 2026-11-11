window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-11T01:42:29.370Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1895,
      "formatted": "1 895 подписчиков",
      "updatedAt": "2026-11-11T01:42:29.370Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
