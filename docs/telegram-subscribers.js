window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-03T23:42:28.281Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5310,
      "formatted": "5 310 подписчиков",
      "updatedAt": "2026-06-03T23:42:28.281Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
