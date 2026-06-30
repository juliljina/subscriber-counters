window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-30T23:11:16.576Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5329,
      "formatted": "5 329 подписчиков",
      "updatedAt": "2026-06-30T23:11:16.576Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
