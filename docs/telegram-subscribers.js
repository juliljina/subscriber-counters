window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-04T23:07:52.407Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5312,
      "formatted": "5 312 подписчиков",
      "updatedAt": "2026-06-04T23:07:52.407Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
