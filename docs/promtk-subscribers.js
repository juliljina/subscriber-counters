window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-02T23:52:05.774Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1835,
      "formatted": "1 835 подписчиков",
      "updatedAt": "2026-09-02T23:52:05.774Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
