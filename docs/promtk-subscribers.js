window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-05T23:34:02.158Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1836,
      "formatted": "1 836 подписчиков",
      "updatedAt": "2026-09-05T23:34:02.158Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
