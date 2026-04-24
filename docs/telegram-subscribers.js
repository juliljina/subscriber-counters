window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-04-24T00:10:37.858Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 4991,
      "formatted": "4 991 подписчик",
      "updatedAt": "2026-04-24T00:10:37.858Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
