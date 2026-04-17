# Telegram subscriber counters via GitHub Pages

Это универсальная схема для Tilda-страниц с Telegram-каналами:

1. GitHub Actions каждый день запускает `scripts/update-telegram-subscribers.mjs`.
2. Скрипт читает список каналов из `config/telegram-channels.json`.
3. Для каждого канала он получает публичную страницу `https://t.me/<username>` и
   вытаскивает число подписчиков из блока `.tgme_page_extra`.
4. Результат сохраняется в `docs/telegram-subscribers.js` и
   `docs/telegram-subscribers.json`.
5. GitHub Pages публикует папку `docs`.
6. HTML-блок в Tilda подключает `telegram-subscribers.js` и подставляет число в
   нужный Zero Block.

## Почему JS, а не JSON

Tilda может подключить внешний JS через обычный `<script src="...">`. Это
надежнее для таких страниц, чем `fetch()` к JSON, потому что не зависит от CORS.

## Настройка каналов

Добавьте все каналы в `config/telegram-channels.json`:

```json
{
  "channels": [
    {
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "fallbackText": "4 823 подписчика"
    },
    {
      "username": "another_channel",
      "title": "Другой канал",
      "fallbackText": "1 000 подписчиков"
    }
  ]
}
```

`fallbackText` должен совпадать со статичным текстом на соответствующей странице
Tilda. Если Telegram, GitHub Pages или скрипт не сработают, посетитель увидит
именно этот текст.

## Расписание

Workflow `.github/workflows/update-telegram-subscribers.yml` запускается по cron
`0 22 * * *`. GitHub Actions использует UTC, поэтому это 01:00 по Москве.

Запуск можно сделать вручную через GitHub:

`Actions -> Update Telegram subscriber counters -> Run workflow`

## GitHub Pages

В репозитории включите Pages:

1. `Settings -> Pages`.
2. Source: `Deploy from a branch`.
3. Branch: `main`.
4. Folder: `/docs`.

После этого файл будет доступен по адресу:

```text
https://juliljina.github.io/subscriber-counters/telegram-subscribers.js
```

## Скрипт для Tilda

Для каждой посадочной используйте
`tilda-snippets/telegram-subscriber-counter.html`.

Внутри нужно поменять три значения:

```js
var DATA_SCRIPT_URL = "https://juliljina.github.io/subscriber-counters/telegram-subscribers.js";
var CHANNEL_USERNAME = "rustartupgrants";
var FALLBACK_TEXT = "4 823 подписчика";
```

Внутри `loadDataScript()` не нужно добавлять проверку на `juliljina` или имя
репозитория: если такая проверка попадет в код, скрипт будет считать рабочий URL
ошибочным и не загрузит счетчик.

`TARGET_SELECTOR` можно оставить пустым. Тогда скрипт найдет текстовый элемент
Zero Block по `FALLBACK_TEXT`. Если на странице несколько одинаковых текстов,
лучше указать точный селектор Tilda-элемента:

```js
var TARGET_SELECTOR = '#rec2108982241 [data-elem-id="1689278709535"] .tn-atom';
```

## Поведение при сбоях

- Если Telegram недоступен во время GitHub Actions, скрипт оставит последнее
  успешное значение из `docs/telegram-subscribers.json`.
- Если успешного значения еще нет, будет опубликован `fallbackText` из конфига.
- Если GitHub Pages не загрузился у посетителя, Tilda покажет статичный текст,
  который уже стоит в Zero Block.

## Локальная проверка

```bash
node scripts/update-telegram-subscribers.mjs
```

После запуска проверьте:

```bash
docs/telegram-subscribers.js
docs/telegram-subscribers.json
```
