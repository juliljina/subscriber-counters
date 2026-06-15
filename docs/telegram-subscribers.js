window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-15T23:44:25.202Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5322,
      "formatted": "5 322 подписчика",
      "updatedAt": "2026-06-15T23:44:25.202Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
