# Recht & Compliance — Vergleichs-/Meta-Shop (Deutschland/EU)

**Du bist KEIN Händler**, sondern ein Vergleich/Weiterleitungsdienst. Trotzdem gelten Pflichten:

## Pflichtseiten
- **Impressum** (TMG §5) – ladungsfähige Anschrift, E-Mail, ggf. USt-ID, Vertretungsberechtigter.
- **Datenschutzerklärung** (DSGVO) – Verarbeitung (Suche/Klicks), Rechtsgrundlagen, Auftragsverarbeiter, Speicherdauer, Rechte der Betroffenen.
- **Cookie-Banner** (TTDSG/DSGVO) – nur für nicht-essenzielle Cookies (Analytics/Marketing).

## Kennzeichnung
- **Affiliate-Hinweis** deutlich sichtbar: „*Werbe-/Affiliate-Links: Wenn du über einen Link kaufst, erhalten wir eine Provision. Dir entstehen keine Mehrkosten.*“
- **Werbung** kennzeichnen, wenn Reihenfolge/Platzierung bezahlt ist.
- **Preisangaben**: Wenn du Preise zeigst, gib **inkl. MwSt.** und Hinweis zu **Versandkosten** (falls unbekannt: „zzgl. Versand, abhängig vom Händler“) an (PangV).
- **Zeitstempel** bei Amazon-Preisen + **keine Speicherung >24h** (PA API Lizenz).

## Tracking & Daten
- **IP-Anonymisierung** bei Analytics.
- **Auftragsverarbeitungsverträge** (AVV) mit Supabase, Vercel, ggf. Mail-Anbieter abschließen.
- **Serverstandort** bevorzugt EU/EWR.
- Datenminimierung: nur Such- & Klick-Events speichern; keine sensiblen Daten.

## Inhalte/Marken
- Verwende **offiziell gelieferte Bilder/Texte** aus Partner-APIs; kein unautorisiertes Scraping von Bildern/Logos.
- Markenrechte beachten; nutze Namen/Titel nur zur **Produktidentifikation**.

## Verbraucherinformation
- Da du nicht der Verkäufer bist, musst du **Widerrufsbelehrung/AGB** nicht stellen; verweise klar auf den Händler beim Kauf.
- **Haftungs-Disclaimer**: Informationen ohne Gewähr, Verfügbarkeit/Preise können sich beim Händler ändern.

## Google/Amazon
- **Amazon PA API**: Teilnahmebedingungen, Associate-Tag, Kennzeichnung, 24h-Cachinggrenze, keine Preismanipulation.
- **Google Shopping via SerpAPI**: technisch möglich, aber **AGB-Risiko** (Google untersagt Scraping). Für Produktion **Google Custom Search JSON API** oder Händler-/Affiliate-Feeds verwenden.

---
**Kurz-Fazit:** Für die „rechtlich sichere Seite“ nutze **offizielle APIs/Feeds** (Amazon PA API, Awin/Rakuten-Händlerfeeds, Google Custom Search). Vermeide unautorisiertes Scraping und kennzeichne Affiliate-Links deutlich.
