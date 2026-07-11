window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-11T22:46:26.992Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5353,
      "formatted": "5 353 подписчика",
      "updatedAt": "2026-07-11T22:46:26.992Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
