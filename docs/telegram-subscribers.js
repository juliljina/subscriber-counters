window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-21T22:55:16.106Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5353,
      "formatted": "5 353 подписчика",
      "updatedAt": "2026-07-21T22:55:16.106Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
