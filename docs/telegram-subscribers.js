window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-12T22:46:08.670Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5352,
      "formatted": "5 352 подписчика",
      "updatedAt": "2026-07-12T22:46:08.670Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
