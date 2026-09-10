window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-10T23:43:55.217Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1841,
      "formatted": "1 841 подписчик",
      "updatedAt": "2026-09-10T23:43:55.217Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
