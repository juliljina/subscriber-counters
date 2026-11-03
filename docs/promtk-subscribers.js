window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-03T03:17:43.583Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1884,
      "formatted": "1 884 подписчика",
      "updatedAt": "2026-11-03T03:17:43.583Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
