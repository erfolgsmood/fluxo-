import { useState } from 'react';

export default function Home() {
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  async function onSearch(e) {
    e.preventDefault();
    if (!q) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data.items || []);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 820, margin: '40px auto', padding: 16 }}>
      <h1>Finde das perfekte Produkt</h1>
      <p>KI vergleicht Shops, Preise und Lieferzeiten.</p>
      <form onSubmit={onSearch}>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="z.B. Noise-Cancelling Kopfhörer"
          style={{ width: '70%', padding: 12 }}
        />
        <button type="submit" style={{ padding: 12, marginLeft: 8 }}>Suchen</button>
      </form>
      {loading && <p>Suche läuft…</p>}
      <ul>
        {results.map((r, i) => (
          <li key={i} style={{ margin: '16px 0' }}>
            <a href={r.url} target="_blank" rel="noreferrer">
              <strong>{r.title}</strong>
            </a>
            <div>{r.price ? `${r.price} ${r.currency || '€'}` : ''} · {r.vendor}</div>
            {r.delivery_eta && <div>Lieferung: {r.delivery_eta}</div>}
          </li>
        ))}
      </ul>
    </main>
  );
}
