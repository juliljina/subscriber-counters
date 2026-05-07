window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-05-07T23:00:13.810Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5277,
      "formatted": "5 277 подписчиков",
      "updatedAt": "2026-05-07T23:00:13.810Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
