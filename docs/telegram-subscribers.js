window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-01T22:53:58.264Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5363,
      "formatted": "5 363 подписчика",
      "updatedAt": "2026-08-01T22:53:58.264Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
