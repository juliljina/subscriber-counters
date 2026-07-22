window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-22T23:01:34.775Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5362,
      "formatted": "5 362 подписчика",
      "updatedAt": "2026-07-22T23:01:34.775Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
