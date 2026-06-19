window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-19T22:56:25.129Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5336,
      "formatted": "5 336 подписчиков",
      "updatedAt": "2026-06-19T22:56:25.129Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
