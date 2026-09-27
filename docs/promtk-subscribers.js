window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-27T00:14:59.812Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1922,
      "formatted": "1 922 подписчика",
      "updatedAt": "2026-09-27T00:14:59.812Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
