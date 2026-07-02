window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-07-02T23:05:11.542Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5332,
      "formatted": "5 332 подписчика",
      "updatedAt": "2026-07-02T23:05:11.542Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
