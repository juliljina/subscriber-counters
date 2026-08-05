window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-05T22:56:56.281Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5366,
      "formatted": "5 366 подписчиков",
      "updatedAt": "2026-08-05T22:56:56.281Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
