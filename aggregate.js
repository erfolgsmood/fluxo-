// Example aggregator that merges multiple connectors
import { searchGoogleShopping } from './connectors/googleShoppingSerpapi.js';
import { searchAmazonPlaceholder } from './connectors/amazonPaapi.js';

export async function aggregate(q) {
  const [g, a] = await Promise.all([
    searchGoogleShopping(q, 10).catch(()=>[]),
    searchAmazonPlaceholder(q, 1).catch(()=>[])
  ]);
  return [...g, ...a];
}
