window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-05-09T22:42:22.371Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5301,
      "formatted": "5 301 подписчик",
      "updatedAt": "2026-05-09T22:42:22.371Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
