window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-09-06T23:29:30.307Z",
  "channels": {
    "promtk": {
      "ok": true,
      "username": "promtk",
      "title": "ПРО МТК",
      "url": "https://t.me/promtk",
      "count": 1839,
      "formatted": "1 839 подписчиков",
      "updatedAt": "2026-09-06T23:29:30.307Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
