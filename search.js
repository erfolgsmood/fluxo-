export default async function handler(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'q required' });

  // Proxy to backend server or use a simple mock in dev
  const url = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000';
  try {
    const r = await fetch(`${url}/search?q=${encodeURIComponent(q)}`);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(200).json({ query: q, items: demoResults(q) });
  }
}

function demoResults(q) {
  return [
    { title: `Beste Option für ${q}`, price: 99, currency: '€', vendor: 'DemoShop', url: 'https://example.com', delivery_eta: '2–3 Tage' },
    { title: `${q} Alternative`, price: 89, currency: '€', vendor: 'DemoShop2', url: 'https://example.com' }
  ];
}
