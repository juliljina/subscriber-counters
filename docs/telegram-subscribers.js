window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-28T23:01:03.405Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5327,
      "formatted": "5 327 подписчиков",
      "updatedAt": "2026-06-28T23:01:03.405Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
