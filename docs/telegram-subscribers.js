window.TelegramSubscriberCounts = {
  "version": 1,
  "generatedAt": "2026-08-07T01:29:05.680Z",
  "channels": {
    "rustartupgrants": {
      "ok": true,
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "url": "https://t.me/rustartupgrants",
      "count": 5365,
      "formatted": "5 365 подписчиков",
      "updatedAt": "2026-08-07T01:29:05.680Z",
      "source": "telegram",
      "stale": false
    },
    "methodyzer": {
      "ok": true,
      "username": "methodyzer",
      "title": "Методайзер",
      "url": "https://t.me/methodyzer",
      "count": 21175,
      "formatted": "21 175 подписчиков",
      "updatedAt": "2026-08-07T01:29:05.680Z",
      "source": "telegram",
      "stale": false
    }
  }
};
window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));
