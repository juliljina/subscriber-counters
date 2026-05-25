window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-05-25T23:01:02.599Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5309,
      "formatted": "5 309 подписчиков",
      "updatedAt": "2026-05-25T23:01:02.599Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
