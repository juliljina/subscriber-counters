window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-18T23:55:06.941Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1889,
      "formatted": "1 889 подписчиков",
      "updatedAt": "2026-10-18T23:55:06.941Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
