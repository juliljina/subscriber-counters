window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-26T22:57:41.219Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5365,
      "formatted": "5 365 подписчиков",
      "updatedAt": "2026-07-26T22:57:41.219Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
