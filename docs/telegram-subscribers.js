window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-06-26T23:04:45.361Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5330,
      "formatted": "5 330 подписчиков",
      "updatedAt": "2026-06-26T23:04:45.361Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
