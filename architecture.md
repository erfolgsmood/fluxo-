# Architektur (Kurz)

- **web** (Next.js): UI (SearchBar, ResultsList, ProductCard).
- **server** (Express): Endpunkte `/health`, `/search`, `/resolve`.
- **ranker**: Regelbasiert: Preis (niedriger besser), Review-Score, ETA, Händlervertrauen; anschließend LLM Rescoring.
- **data** (Supabase): Tabellen `search_events`, `click_events`, `product_cache`.
- **connectors**: SerpAPI, Partner-Feeds (Awin/Rakuten/Amazon).

Datenfluss: User → web → server:/search → connectors → normalize → rank → return → web render → track.
