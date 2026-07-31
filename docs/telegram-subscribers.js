window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-31T22:58:15.814Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5365,
      "formatted": "5 365 подписчиков",
      "updatedAt": "2026-07-31T22:58:15.814Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
