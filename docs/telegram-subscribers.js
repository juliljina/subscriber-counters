window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-24T23:02:42.530Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5337,
      "formatted": "5 337 подписчиков",
      "updatedAt": "2026-06-24T23:02:42.530Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
