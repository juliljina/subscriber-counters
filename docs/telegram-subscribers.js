window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-29T22:55:48.117Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5328,
      "formatted": "5 328 подписчиков",
      "updatedAt": "2026-06-29T22:55:48.117Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
