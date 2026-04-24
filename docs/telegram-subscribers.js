window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-04-24T23:58:22.437Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5021,
      "formatted": "5 021 подписчик",
      "updatedAt": "2026-04-24T23:58:22.437Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
