# Amazon 2.0 — Meta‑Commerce MVP (Starter Kit)

This repo is a **lean starter** for a meta-commerce MVP: a KI‑gestützte Produktsuche,
die Angebote von externen Shops aggregiert (Affiliate/Partner), bewertet und verlinkt.

## Tech (empfohlen)
- Frontend: Next.js (React) — bereit für Vercel
- Backend: Node/Express (separate API-Schicht) — kann auf Render/Fly/Heroku laufen
- Daten: Supabase (Postgres + Auth)
- KI: OpenAI API (GPT-4.1/4o) + eigene Scoring-Logik
- Scraping/Preisquellen: SerpAPI / Partner-APIs (Awin, Rakuten, Amazon PartnerNet)

> Dieses Starterkit ist **minimal**: Es enthält Platzhaltercode, API-Schnittstellen, Datenmodelle
und eine sofort nutzbare Landingpage. Erweitere die Endpunkte schrittweise.

## Setup (15–30 Min)
1) **GitHub Repo** anlegen und diesen Ordner pushen.
2) **Vercel**: `/web` als Projekt importieren → ENV Variablen setzen (siehe `.env.example`).
3) **Supabase** Projekt anlegen → URL/Key eintragen.
4) **OpenAI API-Key** erstellen → `.env` füllen.
5) **SerpAPI** Key (optional für Google Shopping) → `.env` füllen.
6) Lokal starten:
   ```bash
   cd web && npm i && npm run dev
   # in neuem Terminal
   cd server && npm i && npm run dev
   ```

## Ordnerstruktur
- `web/` — Next.js App (Landing + Such-UI)
- `server/` — Express API (Produktsuche, Ranking, Partnerlinks)
- `infra/` — OpenAPI Spec, Env-Beispiel
- `docs/` — Roadmap, Aufgaben, Architektur
- `product/` — Copy, Pitch, Branding

## Sicherheit & Recht
- **Kein Scraping von Seiten mit verbotenen AGB**.
- Impressum/Datenschutz (DE/EU) anlegen (Vorlagen siehe `product/legal/`).

Viel Erfolg! 🚀
