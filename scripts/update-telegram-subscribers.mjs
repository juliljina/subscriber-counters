import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

const configPath = resolve(
  rootDir,
  process.env.TELEGRAM_CHANNELS_CONFIG || "config/telegram-channels.json",
);
const jsonOutputPath = resolve(
  rootDir,
  process.env.TELEGRAM_SUBSCRIBERS_JSON || "docs/telegram-subscribers.json",
);
const jsOutputPath = resolve(
  rootDir,
  process.env.TELEGRAM_SUBSCRIBERS_JS || "docs/telegram-subscribers.js",
);

const generatedAt = new Date().toISOString();
const config = await readJson(configPath);
const previousData = await readOptionalJson(jsonOutputPath);
const channels = {};

for (const channel of config.channels || []) {
  const username = normalizeTelegramUsername(channel.username || channel.url);

  if (!username) {
    console.warn("Skipped a channel without username or url.");
    continue;
  }

  const previousChannel = previousData?.channels?.[username];
  channels[username] = await buildChannelEntry(channel, username, previousChannel);
}

const output = {
  version: 1,
  generatedAt,
  channels,
};

await mkdir(dirname(jsonOutputPath), { recursive: true });
await mkdir(dirname(jsOutputPath), { recursive: true });
await writeFile(jsonOutputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
await writeFile(jsOutputPath, buildBrowserScript(output), "utf8");

console.log(`Updated ${Object.keys(channels).length} Telegram channel counter(s).`);

async function buildChannelEntry(channel, username, previousChannel) {
  const url = `https://t.me/${username}`;
  const fallback = parseFallback(channel);

  try {
    const count = await fetchTelegramSubscribers(username);
    return {
      ok: true,
      username,
      title: channel.title || previousChannel?.title || username,
      url,
      count,
      formatted: formatSubscribersRu(count),
      updatedAt: generatedAt,
      source: "telegram",
      stale: false,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    if (previousChannel?.count && previousChannel?.formatted) {
      return {
        ...previousChannel,
        ok: true,
        title: channel.title || previousChannel.title || username,
        url,
        source: "previous",
        stale: true,
        lastAttemptAt: generatedAt,
        lastError: errorMessage,
      };
    }

    return {
      ok: false,
      username,
      title: channel.title || username,
      url,
      count: fallback.count,
      formatted: fallback.formatted,
      updatedAt: null,
      source: "fallback",
      stale: true,
      lastAttemptAt: generatedAt,
      lastError: errorMessage,
    };
  }
}

async function fetchTelegramSubscribers(username) {
  const response = await fetch(`https://t.me/${username}`, {
    headers: {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "accept-language": "en-US,en;q=0.9",
      "user-agent":
        "Mozilla/5.0 (compatible; MTKTelegramSubscriberCounter/1.0; +https://mtkconsulting.ru/)",
    },
  });

  if (!response.ok) {
    throw new Error(`Telegram returned HTTP ${response.status}`);
  }

  const html = await response.text();
  const pageExtra = html.match(
    /<div[^>]+class=(["'])[^"']*\btgme_page_extra\b[^"']*\1[^>]*>([\s\S]*?)<\/div>/i,
  );

  if (!pageExtra) {
    throw new Error("Telegram subscriber element was not found");
  }

  const text = stripHtml(pageExtra[2]).replace(/\s+/g, " ").trim();
  const countMatch = text.match(/[\d\s.,]+/);

  if (!countMatch) {
    throw new Error(`Telegram subscriber count was not found in "${text}"`);
  }

  const count = Number(countMatch[0].replace(/[^\d]/g, ""));
  if (!Number.isInteger(count) || count <= 0) {
    throw new Error(`Telegram subscriber count is invalid: "${text}"`);
  }

  return count;
}

function buildBrowserScript(data) {
  return [
    "window.TelegramSubscriberCounts = ",
    JSON.stringify(data, null, 2),
    ";\n",
    "window.dispatchEvent(new CustomEvent('telegram-subscribers:loaded', { detail: window.TelegramSubscriberCounts }));\n",
  ].join("");
}

function parseFallback(channel) {
  if (Number.isInteger(channel.fallbackCount) && channel.fallbackCount > 0) {
    return {
      count: channel.fallbackCount,
      formatted: channel.fallbackText || formatSubscribersRu(channel.fallbackCount),
    };
  }

  if (channel.fallbackText) {
    const count = Number(String(channel.fallbackText).replace(/[^\d]/g, ""));
    return {
      count: Number.isInteger(count) && count > 0 ? count : null,
      formatted: channel.fallbackText,
    };
  }

  return {
    count: null,
    formatted: "0 подписчиков",
  };
}

function normalizeTelegramUsername(value) {
  return String(value || "")
    .trim()
    .replace(/^https?:\/\/t\.me\//i, "")
    .replace(/^@/, "")
    .replace(/\/$/, "");
}

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function readOptionalJson(path) {
  try {
    return await readJson(path);
  } catch (error) {
    if (error?.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

function stripHtml(value) {
  return value.replace(/<[^>]*>/g, "");
}

function formatSubscribersRu(count) {
  const rem100 = count % 100;
  const rem10 = count % 10;
  let word = "подписчиков";

  if (rem100 < 11 || rem100 > 14) {
    if (rem10 === 1) {
      word = "подписчик";
    } else if (rem10 >= 2 && rem10 <= 4) {
      word = "подписчика";
    }
  }

  const formattedNumber = new Intl.NumberFormat("ru-RU")
    .format(count)
    .replace(/\u00a0/g, " ");

  return `${formattedNumber} ${word}`;
}
