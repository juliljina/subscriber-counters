window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-09T23:16:37.533Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5319,
      "formatted": "5 319 подписчиков",
      "updatedAt": "2026-06-09T23:16:37.533Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
