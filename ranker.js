import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function rank(query, items) {
  if (!process.env.OPENAI_API_KEY) return ruleRank(items);

  const prompt = `Du bekommst Produktoptionen als JSON.
Aufgabe: Vergib für jede Option einen Score 0..1 (höher ist besser) basierend auf:
- Preis (niedriger besser)
- Lieferzeit/ETA (schneller besser)
- Vertrauenswürdigkeit Vendor (wenn unbekannt = neutral)
- Titel-Relevanz zur Suchanfrage: ${query}

Antworte als JSON-Array der Länge N mit Scores in gleicher Reihenfolge.`;

  try {
    const text = JSON.stringify(items);
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Du bist eine strenge Ranking-Engine.' },
        { role: 'user', content: `${prompt}

${text}` }
      ],
      temperature: 0.2
    });
    const content = completion.choices[0].message.content || '[]';
    const scores = JSON.parse(content);
    return items.map((it, i) => ({ ...it, score: Number(scores[i] ?? 0) }))
                .sort((a,b) => (b.score??0) - (a.score??0));
  } catch (e) {
    return ruleRank(items);
  }
}

function ruleRank(items) {
  const normalized = items.map(x => ({
    ...x,
    _p: typeof x.price === 'number' ? x.price : 999999
  }));
  const min = Math.min(...normalized.map(x => x._p));
  const max = Math.max(...normalized.map(x => x._p));
  const score = x => max === min ? 0.5 : 1 - ((x._p - min) / (max - min));
  return normalized.map(x => ({ ...x, score: score(x) }))
                   .sort((a,b) => b.score - a.score);
}
