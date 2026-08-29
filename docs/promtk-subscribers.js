window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-29T03:30:38.786Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1716,
      "formatted": "1 716 подписчиков",
      "updatedAt": "2026-08-29T03:30:38.786Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
