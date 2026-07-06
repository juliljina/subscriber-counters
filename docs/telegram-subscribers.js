window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-06T23:05:55.800Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5349,
      "formatted": "5 349 подписчиков",
      "updatedAt": "2026-07-06T23:05:55.800Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
