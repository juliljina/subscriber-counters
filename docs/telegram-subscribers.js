window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-05-19T23:01:18.728Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5308,
      "formatted": "5 308 подписчиков",
      "updatedAt": "2026-05-19T23:01:18.728Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
