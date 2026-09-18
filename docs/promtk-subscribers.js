window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-18T23:52:51.465Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1910,
      "formatted": "1 910 подписчиков",
      "updatedAt": "2026-09-18T23:52:51.465Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
