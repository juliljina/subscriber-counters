window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-23T22:19:18.022Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1692,
      "formatted": "1 692 подписчика",
      "updatedAt": "2026-08-23T22:19:18.022Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
