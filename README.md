# Woolley Lab — website mockup

A redesign mockup of [andrewwoolleylab.org](https://www.andrewwoolleylab.org/): same content,
in a warm "gruvbox"-inspired dark theme (warm browns, cream text, pastel accents) with a
UV→far-red light spectrum — remapped to those pastel hues — as the accent language throughout.

## Viewing it

It's plain static HTML/CSS — **double-click `index.html`** to open it in any browser.
No build step, no server, no dependencies. (Internet is only used to load the two web fonts;
it works offline too, just with fallback fonts.)

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `protein-engineering.html` | Protein Engineering |
| `photopharmacology.html` | Photopharmacology |
| `publications.html` | Publications |
| `people.html` | People |
| `crosslinkers.html` | Crosslinkers |
| `pyp-chromophore.html` | PYP Chromophore |

`css/style.css` holds the whole design system (colors, spectrum, layout).
`js/nav.js` handles the mobile menu and the Resources dropdown.

## Real images vs. placeholders

All downloaded from the live site (in `images/`): the sheep logo, both group photos
(`group_pic` on the Home banner, `group_potluck` on People), Andrew's portrait, the two
Photopharmacology figures, and the seven Protein Engineering figures (`pe_*`).

**Placeholders still to replace:**
- **Lab member photos** (People page) — silhouette slots, one per member. Drop a square
  image into `images/` and swap the `<div class="placeholder">…</div>` block for
  `<img src="images/<name>.webp" alt="…">`.
- **Member roles** — each card shows an italic "Role / position" placeholder to fill in.

## Notes / things to confirm
- The palette lives entirely in CSS variables at the top of `css/style.css` — the warm
  surfaces, cream text, and the pastel spectrum stops (`--uv` … `--farred`). Tweak there.
- Color accents map loosely to switching wavelength (e.g. UV cross-linkers = pink-violet,
  red-light = red) — easy to adjust.
- The alumni period groupings reproduce what's on the current site; double-check the ranges.
- Publications are a selection; link each to its DOI/PubMed as desired.
