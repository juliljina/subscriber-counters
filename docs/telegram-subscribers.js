window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-09T23:10:02.563Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5350,
      "formatted": "5 350 подписчиков",
      "updatedAt": "2026-07-09T23:10:02.563Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
