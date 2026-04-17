import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

const configPath = resolve(
  rootDir,
  process.env.MAX_CHANNELS_CONFIG || "config/max-channels.json",
);
const jsonOutputPath = resolve(
  rootDir,
  process.env.MAX_SUBSCRIBERS_JSON || "docs/max-subscribers.json",
);
const jsOutputPath = resolve(
  rootDir,
  process.env.MAX_SUBSCRIBERS_JS || "docs/max-subscribers.js",
);

const generatedAt = new Date().toISOString();
const config = await readJson(configPath);
const previousData = await readOptionalJson(jsonOutputPath);
const channels = {};

for (const channel of config.channels || []) {
  const id = normalizeMaxChannelId(channel.id || channel.url);

  if (!id) {
    console.warn("Skipped a MAX channel without id or url.");
    continue;
  }

  const previousChannel = previousData?.channels?.[id];
  channels[id] = await buildChannelEntry(channel, id, previousChannel);
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

console.log(`Updated ${Object.keys(channels).length} MAX channel counter(s).`);

async function buildChannelEntry(channel, id, previousChannel) {
  const url = `https://max.ru/${id}`;
  const fallback = parseFallback(channel);

  try {
    const count = await fetchMaxSubscribers(id);
    return {
      ok: true,
      id,
      title: channel.title || previousChannel?.title || id,
      url,
      count,
      formatted: formatSubscribersRu(count),
      updatedAt: generatedAt,
      source: "max",
      stale: false,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    if (Number.isInteger(previousChannel?.count) && previousChannel?.formatted) {
      return {
        ...previousChannel,
        ok: true,
        title: channel.title || previousChannel.title || id,
        url,
        source: "previous",
        stale: true,
        lastAttemptAt: generatedAt,
        lastError: errorMessage,
      };
    }

    return {
      ok: false,
      id,
      title: channel.title || id,
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

async function fetchMaxSubscribers(id) {
  const response = await fetch(`https://max.ru/${id}`, {
    headers: {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      "user-agent":
        "Mozilla/5.0 (compatible; MTKMaxSubscriberCounter/1.0; +https://mtkconsulting.ru/)",
    },
  });

  if (!response.ok) {
    throw new Error(`MAX returned HTTP ${response.status}`);
  }

  const html = await response.text();
  const count = extractParticipantsCount(html);

  if (!Number.isInteger(count) || count < 0) {
    throw new Error("MAX participant count was not found");
  }

  return count;
}

function extractParticipantsCount(html) {
  const patterns = [
    /["']participantsCount["']\s*:\s*(\d+)/,
    /\bparticipantsCount\s*:\s*(\d+)/,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) {
      return Number(match[1]);
    }
  }

  return null;
}

function buildBrowserScript(data) {
  return [
    "window.MaxSubscriberCounts = ",
    JSON.stringify(data, null, 2),
    ";\n",
    "window.dispatchEvent(new CustomEvent('max-subscribers:loaded', { detail: window.MaxSubscriberCounts }));\n",
  ].join("");
}

function parseFallback(channel) {
  if (Number.isInteger(channel.fallbackCount) && channel.fallbackCount >= 0) {
    return {
      count: channel.fallbackCount,
      formatted: channel.fallbackText || formatSubscribersRu(channel.fallbackCount),
    };
  }

  if (channel.fallbackText) {
    const count = Number(String(channel.fallbackText).replace(/[^\d]/g, ""));
    return {
      count: Number.isInteger(count) && count >= 0 ? count : null,
      formatted: channel.fallbackText,
    };
  }

  return {
    count: null,
    formatted: "0 подписчиков",
  };
}

function normalizeMaxChannelId(value) {
  const withoutOrigin = String(value || "")
    .trim()
    .replace(/^max:\/\/max\.ru\//i, "")
    .replace(/^https?:\/\/(?:web\.)?max\.ru\//i, "")
    .replace(/^@/, "")
    .replace(/^\/+/, "")
    .split(/[?#]/)[0]
    .replace(/\/+$/, "");

  return withoutOrigin.split("/")[0];
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
