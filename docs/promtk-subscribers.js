window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-21T02:58:33.476Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1894,
      "formatted": "1 894 подписчика",
      "updatedAt": "2026-11-21T02:58:33.476Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
