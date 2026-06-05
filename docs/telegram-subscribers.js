window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-05T23:07:57.552Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5311,
      "formatted": "5 311 подписчиков",
      "updatedAt": "2026-06-05T23:07:57.552Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
