window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-22T23:18:31.993Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5339,
      "formatted": "5 339 подписчиков",
      "updatedAt": "2026-06-22T23:18:31.993Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
