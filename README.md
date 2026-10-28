# Wylie Colorguard Digest

A calm, mobile friendly digest for the Wylie HS Pure Gold colorguard, built from the two BAND groups (WHS Pure Gold Band and Wylie Color Guard).

**Live:** [colorguard.northbrand.net](https://colorguard.northbrand.net) (Cloudflare Pages, project `wyliecolorguard`; also answers at wyliecolorguard.pages.dev)

## What the page shows

- **Next Up**: the very next event, first
- **Need to Know Now**: anything landing in the next 48 hours
- **Coming Up**: the following two weeks
- **Standing Info**: fees, links, and rules that do not change week to week

## Refresh

Twice daily, America/Chicago: 05:30 (folded into the morning rollup) and 17:00. Each refresh reads the BAND groups read-only, rewrites only the content between the DIGEST CONTENT markers in `index.html`, pushes the page here as the archive of record, uploads it to Cloudflare Pages, and verifies the live page.

BAND access is read-only, always: nothing is ever posted, commented, or reacted to from this workflow.

## Rules the page follows

- No student names on the page, ever
- Official links only, and only when verified
- Past events drop off at the next refresh
- Layout stays chunked and uncluttered: one bold fact plus one short line per item

## Design

Deep purple and gold, the guard's colors, inside the Northbrand shell. `DESIGN.md` beside the local master carries the page tokens; the shared design DNA lives in the northbrand-hub repo.

Local master: `~/workspace/colorguard-digest/index.html`
