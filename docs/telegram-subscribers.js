window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-04-17T16:02:33.234Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 4918,
      "formatted": "4 918 подписчиков",
      "updatedAt": "2026-04-17T16:02:33.234Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
