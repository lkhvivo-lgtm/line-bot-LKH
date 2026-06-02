const CACHE_TTL = 60_000;

let cachedCsv: string | null = null;
let cacheExpiresAt = 0;

export async function getFaqCsv(): Promise<string | null> {
  const now = Date.now();

  if (cachedCsv !== null && now < cacheExpiresAt) {
    return cachedCsv;
  }

  const url = process.env.SHEET_CSV_URL;
  if (!url) {
    console.error('[sheet] SHEET_CSV_URL is not set');
    return cachedCsv;
  }

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const csv = await res.text();
    cachedCsv = csv;
    cacheExpiresAt = now + CACHE_TTL;
    return csv;
  } catch (err) {
    console.error('[sheet] fetch failed:', err);
    return cachedCsv;
  }
}
