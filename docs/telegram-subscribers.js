window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-13T23:03:22.049Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5321,
      "formatted": "5 321 подписчик",
      "updatedAt": "2026-06-13T23:03:22.049Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
