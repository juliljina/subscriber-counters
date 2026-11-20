window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-11-20T02:50:24.651Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1898,
      "formatted": "1 898 подписчиков",
      "updatedAt": "2026-11-20T02:50:24.651Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
