window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-05-13T23:04:34.723Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5306,
      "formatted": "5 306 подписчиков",
      "updatedAt": "2026-05-13T23:04:34.723Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
