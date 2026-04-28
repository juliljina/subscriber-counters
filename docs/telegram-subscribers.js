window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-04-28T22:56:26.865Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5097,
      "formatted": "5 097 подписчиков",
      "updatedAt": "2026-04-28T22:56:26.865Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
