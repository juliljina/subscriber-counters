window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-19T22:50:26.784Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5347,
      "formatted": "5 347 подписчиков",
      "updatedAt": "2026-07-19T22:50:26.784Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
