window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-10-25T23:49:23.878Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1886,
      "formatted": "1 886 подписчиков",
      "updatedAt": "2026-10-25T23:49:23.878Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
