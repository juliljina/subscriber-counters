window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-04-17T23:58:46.949Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 4920,
      "formatted": "4 920 подписчиков",
      "updatedAt": "2026-04-17T23:58:46.949Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
