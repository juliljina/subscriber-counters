# Messenger subscriber counters for Tilda

Инструкция для универсального счетчика подписчиков Telegram- и MAX-каналов на
Tilda. Решение работает через GitHub Actions и GitHub Pages: GitHub раз в сутки
получает актуальное число подписчиков из публичной страницы мессенджера,
сохраняет его в JS-файл, а Tilda подключает этот JS-файл и подставляет число на
посадочной.

## Что лежит в папке

```text
subscriber-counter-github/
  .github/workflows/update-telegram-subscribers.yml
  config/max-channels.json
  config/telegram-channels.json
  docs/max-subscribers.js
  docs/max-subscribers.json
  docs/telegram-subscribers.js
  docs/telegram-subscribers.json
  scripts/update-max-subscribers.mjs
  scripts/update-telegram-subscribers.mjs
  tilda-snippets/max-subscriber-counter.html
  tilda-snippets/telegram-subscriber-counter.html
  README.md
```

- `.github/workflows/update-telegram-subscribers.yml` - расписание GitHub
  Actions. Запуск каждый день в 01:00 по Москве.
- `config/telegram-channels.json` - список Telegram-каналов.
- `config/max-channels.json` - список MAX-каналов.
- `scripts/update-telegram-subscribers.mjs` - скрипт для Telegram.
- `scripts/update-max-subscribers.mjs` - скрипт для MAX.
- `docs/telegram-subscribers.js` - файл Telegram-счетчиков для Tilda.
- `docs/max-subscribers.js` - файл MAX-счетчиков для Tilda.
- `docs/*.json` - те же данные в JSON, удобно для проверки.
- `tilda-snippets/telegram-subscriber-counter.html` - HTML-блок для Telegram.
- `tilda-snippets/max-subscriber-counter.html` - HTML-блок для MAX.

## Как это работает

1. GitHub Actions запускает скрипты из папки `scripts`.
2. Скрипты читают списки каналов из папки `config`.
3. Для каждого Telegram-канала скрипт открывает `https://t.me/<username>`.
4. Для каждого MAX-канала скрипт открывает `https://max.ru/<id>`.
5. Результат сохраняется в JS- и JSON-файлы в папке `docs`.
6. GitHub Pages публикует папку `docs`.
7. Tilda-страница подключает нужный опубликованный JS-файл и меняет статичный
   текст на актуальное число подписчиков.

Tilda подключает именно JS, а не JSON, потому что внешний `<script src="...">`
работает надежнее и не зависит от CORS.

## Как добавить Telegram-канал

Откройте файл `config/telegram-channels.json` и добавьте новый объект в массив
`channels`.

Пример:

```json
{
  "channels": [
    {
      "username": "rustartupgrants",
      "title": "Гранты стартапам",
      "fallbackText": "4 823 подписчика"
    },
    {
      "username": "new_channel_username",
      "title": "Название нового канала",
      "fallbackText": "1 000 подписчиков"
    }
  ]
}
```

Правила:

- `username` указывается без `@` и без `https://t.me/`.
- Для канала `https://t.me/mybestchannel` нужно указать
  `"username": "mybestchannel"`.
- `title` нужен для понятности, на Tilda он не выводится.
- `fallbackText` должен совпадать со статичным текстом на странице Tilda.
- Канал должен быть публичным, иначе GitHub не сможет прочитать число
  подписчиков со страницы Telegram.

После изменения конфига дождитесь автоматического запуска в 01:00 по Москве или
запустите обновление вручную:

`Actions -> Update messenger subscriber counters -> Run workflow`

## Как добавить MAX-канал

Откройте файл `config/max-channels.json` и добавьте новый объект в массив
`channels`.

Пример:

```json
{
  "channels": [
    {
      "id": "id782615006635_biz",
      "title": "Гранты стартапам",
      "fallbackText": "150 подписчиков"
    },
    {
      "id": "another_max_channel",
      "title": "Другой канал в MAX",
      "fallbackText": "1 000 подписчиков"
    }
  ]
}
```

Правила:

- `id` указывается без `https://max.ru/`.
- Для канала `https://max.ru/id782615006635_biz` нужно указать
  `"id": "id782615006635_biz"`.
- Можно вставить полный URL в поле `url` вместо `id`, скрипт сам возьмет первую
  часть пути.
- `title` нужен для понятности, на Tilda он не выводится.
- `fallbackText` должен совпадать со статичным текстом на странице Tilda.
- Канал должен быть публичным.

Для текущей страницы `https://mtkconsulting.ru/max-rustartupgrants` уже добавлен
канал:

```json
{
  "id": "id782615006635_biz",
  "title": "Гранты стартапам",
  "fallbackText": "150 подписчиков"
}
```

После изменения конфига дождитесь автоматического запуска в 01:00 по Москве или
запустите обновление вручную:

`Actions -> Update messenger subscriber counters -> Run workflow`

## Как подключить Telegram на страницу Tilda

1. Откройте страницу в Tilda.
2. Добавьте HTML-блок, например `T123`.
3. Вставьте код из `tilda-snippets/telegram-subscriber-counter.html`.
4. Поменяйте в коде значения под конкретную страницу.
5. Опубликуйте страницу заново.

Для каждой посадочной обычно нужно поменять только эти строки:

```js
var DATA_SCRIPT_URL = "https://juliljina.github.io/subscriber-counters/telegram-subscribers.js";
var CHANNEL_USERNAME = "new_channel_username";
var FALLBACK_TEXT = "1 000 подписчиков";
var TARGET_SELECTOR = "";
```

Что менять:

- `DATA_SCRIPT_URL` оставьте как есть, если используется текущий репозиторий
  `juliljina/subscriber-counters`.
- `CHANNEL_USERNAME` должен совпадать с `username` из
  `config/telegram-channels.json`.
- `FALLBACK_TEXT` должен совпадать со статичным текстом на этой странице Tilda.
- `TARGET_SELECTOR` можно оставить пустым. Тогда скрипт найдет элемент по
  `FALLBACK_TEXT`.

Если на странице несколько одинаковых текстов с количеством подписчиков, лучше
указать точный селектор Zero Block:

```js
var TARGET_SELECTOR = '#rec2108982241 [data-elem-id="1689278709535"] .tn-atom';
```

Для нескольких страниц одного и того же канала GitHub-конфиг менять не нужно.
Достаточно вставить Tilda-скрипт на каждую страницу с тем же
`CHANNEL_USERNAME`.

## Как подключить MAX на страницу Tilda

1. Откройте страницу в Tilda.
2. Добавьте HTML-блок, например `T123`.
3. Вставьте код из `tilda-snippets/max-subscriber-counter.html`.
4. Поменяйте в коде значения под конкретную страницу.
5. Опубликуйте страницу заново.

Для страницы `https://mtkconsulting.ru/max-rustartupgrants` значения уже готовы:

```js
var DATA_SCRIPT_URL = "https://juliljina.github.io/subscriber-counters/max-subscribers.js";
var MAX_CHANNEL_ID = "id782615006635_biz";
var FALLBACK_TEXT = "150 подписчиков";
var TARGET_SELECTOR = "";
```

Что менять для других MAX-страниц:

- `DATA_SCRIPT_URL` оставьте как есть, если используется текущий репозиторий
  `juliljina/subscriber-counters`.
- `MAX_CHANNEL_ID` должен совпадать с `id` из `config/max-channels.json`.
- `FALLBACK_TEXT` должен совпадать со статичным текстом на этой странице Tilda.
- `TARGET_SELECTOR` можно оставить пустым. Тогда скрипт найдет элемент по
  `FALLBACK_TEXT`.

Если на странице несколько одинаковых текстов с количеством подписчиков, лучше
указать точный селектор Zero Block. Для текущей MAX-страницы это:

```js
var TARGET_SELECTOR = '#rec2124834041 [data-elem-id="1689278709535"] .tn-atom';
```

## GitHub Pages

GitHub Pages должен быть включен так:

1. `Settings -> Pages`.
2. Source: `Deploy from a branch`.
3. Branch: `main`.
4. Folder: `/docs`.

Рабочие JS-файлы для Tilda:

```text
https://juliljina.github.io/subscriber-counters/telegram-subscribers.js
https://juliljina.github.io/subscriber-counters/max-subscribers.js
```

## Расписание

Workflow `.github/workflows/update-telegram-subscribers.yml` запускается по cron:

```text
0 22 * * *
```

GitHub Actions использует UTC. `22:00 UTC` - это `01:00` по Москве.

## Поведение при сбоях

- Если Telegram недоступен во время GitHub Actions, скрипт оставит последнее
  успешное значение из `docs/telegram-subscribers.json`.
- Если MAX недоступен во время GitHub Actions, скрипт оставит последнее
  успешное значение из `docs/max-subscribers.json`.
- Если успешного значения еще нет, будет опубликован `fallbackText` из
  соответствующего файла в `config`.
- Если GitHub Pages не загрузился у посетителя, Tilda покажет статичный текст,
  который уже стоит в Zero Block.

## Проверка

Локально из папки `subscriber-counter-github`:

```bash
node scripts/update-telegram-subscribers.mjs
node scripts/update-max-subscribers.mjs
```

После запуска проверьте файлы:

```text
docs/telegram-subscribers.js
docs/telegram-subscribers.json
docs/max-subscribers.js
docs/max-subscribers.json
```

На сайте проверьте опубликованный JS:

```text
https://juliljina.github.io/subscriber-counters/telegram-subscribers.js
https://juliljina.github.io/subscriber-counters/max-subscribers.js
```

## Если на Tilda не обновилось число

Проверьте по порядку:

1. Страница Tilda опубликована после вставки HTML-блока.
2. `CHANNEL_USERNAME` совпадает с каналом в `config/telegram-channels.json`.
3. Для MAX: `MAX_CHANNEL_ID` совпадает с каналом в `config/max-channels.json`.
4. `FALLBACK_TEXT` в скрипте совпадает со статичным текстом на странице.
5. `DATA_SCRIPT_URL` открывается в браузере.
6. Если `TARGET_SELECTOR` заполнен, он относится именно к этой странице Tilda.
   Для похожих страниц `rec...` обычно разный, поэтому проще оставить
   `TARGET_SELECTOR = "";`.
