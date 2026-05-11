window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-05-11T22:53:04.314Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5304,
      "formatted": "5 304 подписчика",
      "updatedAt": "2026-05-11T22:53:04.314Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
