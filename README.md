# Wylie Colorguard Digest

A calm, mobile friendly digest for the Wylie HS Pure Gold colorguard, built from the Wylie Color Guard BAND group and its chats (the guard group chat and the Parents 2026 chat), read read-only. Until Nov 9, 2026 the digest also drew on the WHS Pure Gold Band group; since then it is colorguard only.

**Live:** [colorguard.northbrand.net](https://colorguard.northbrand.net) (Cloudflare Pages, project `wyliecolorguard`; also answers at wyliecolorguard.pages.dev)

## What the page shows

- **Next Up**: the very next event, first
- **Need to Know Now**: the pressing items and changes to act on
- **Major Dates**: the season's fixed dates, kept in view
- **Coming Up**: the following two weeks
- **Volunteers & Sign-Ups**: concessions, chaperones, and other asks, with sign-up links
- **Standing Info**: fees, links, and rules that do not change week to week

## Refresh

Twice daily, America/Chicago: 05:00 (inside the morning data pass, folded into the morning rollup) and 17:00. Each refresh reads the Color Guard group and its chats read-only, rewrites only the content between the DIGEST CONTENT markers in `index.html`, pushes the page here as the archive of record, uploads it to Cloudflare Pages, and verifies the live page.

BAND access is read-only, always: nothing is ever posted, commented, or reacted to from this workflow.

## Rules the page follows

- No student names on the page, ever
- Official links only, and only when verified
- Past events drop off at the next refresh
- Layout stays chunked and uncluttered: one bold fact plus one short line per item

## Design

Deep purple and gold, the guard's colors, inside the Northbrand shell. `DESIGN.md` beside the local master carries the page tokens; the shared design DNA lives in the northbrand-hub repo.

Local master: `~/workspace/colorguard-digest/index.html`
