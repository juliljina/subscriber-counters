window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-27T03:55:52.087Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1886,
      "formatted": "1 886 подписчиков",
      "updatedAt": "2026-11-27T03:55:52.087Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
