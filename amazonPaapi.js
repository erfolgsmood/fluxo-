// Amazon Product Advertising API (PA API) placeholder.
// For legal compliance, use the official SDK and follow the license terms:
// - Must be an approved Associate with valid tag
// - Do not cache prices longer than 24h; show timestamp with price
// - Include associate disclosure on every page
// - Use only API-returned images and links
import fetch from 'node-fetch';

const ASSOC_TAG = process.env.AFFILIATE_AMAZON_TAG;

// Placeholder: In production, use amazon-paapi SDK with signed requests.
export async function searchAmazonPlaceholder(q, limit=5) {
  if (!ASSOC_TAG) return [];
  // This just returns a link to an Amazon search with your tag appended.
  const url = `https://www.amazon.de/s?k=${encodeURIComponent(q)}&tag=${ASSOC_TAG}`;
  return [{
    title: `Bei Amazon nach "${q}" suchen`,
    price: null,
    currency: 'EUR',
    url,
    vendor: 'Amazon',
    delivery_eta: null,
    image: null
  }];
}
