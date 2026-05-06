window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-05-06T22:52:48.316Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5254,
      "formatted": "5 254 подписчика",
      "updatedAt": "2026-05-06T22:52:48.316Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
