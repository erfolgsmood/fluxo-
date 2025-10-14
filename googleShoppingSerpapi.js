// Google Shopping via SerpAPI (legal note: SerpAPI scrapes Google results.
// Prefer official Google Custom Search JSON API for long-term compliance)
// This module is provided for prototyping only.
import fetch from 'node-fetch';

const SERPAPI = process.env.SERPAPI_API_KEY;

export async function searchGoogleShopping(q, limit=10) {
  if (!SERPAPI) return [];
  const url = `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(q)}&hl=de&gl=de&api_key=${SERPAPI}`;
  const r = await fetch(url);
  const data = await r.json();
  const items = (data.shopping_results || []).slice(0, limit).map(x => ({
    title: x.title,
    price: parsePrice(x.extracted_price),
    currency: guessCurrency(x.price),
    url: x.link,
    vendor: x.source || x.store || 'Shop',
    delivery_eta: x.delivery || null,
    image: x.thumbnail || null
  }));
  return items;
}

function parsePrice(v) { 
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}
function guessCurrency(raw) {
  if (!raw) return 'EUR';
  if (raw.includes('€')) return 'EUR';
  return 'EUR';
}
