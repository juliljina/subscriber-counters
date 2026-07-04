window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-04T22:56:43.495Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5344,
      "formatted": "5 344 подписчика",
      "updatedAt": "2026-07-04T22:56:43.495Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
