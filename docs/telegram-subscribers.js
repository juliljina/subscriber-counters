window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-04-26T23:59:57.325Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5052,
      "formatted": "5 052 подписчика",
      "updatedAt": "2026-04-26T23:59:57.325Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
