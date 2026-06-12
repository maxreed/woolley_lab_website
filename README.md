# Woolley Lab — website mockup

A redesign mockup of [andrewwoolleylab.org](https://www.andrewwoolleylab.org/): same content,
in a warm "gruvbox"-inspired dark theme (warm browns, cream text, pastel accents) with a
UV→far-red light spectrum — remapped to those pastel hues — as the accent language throughout.

## Viewing it

It's plain static HTML/CSS — **double-click `index.html`** to open it in any browser.
No build step, no server, no dependencies. (Internet is only used to load the two web fonts;
it works offline too, just with fallback fonts.)

---

# Editing the site — a beginner's guide

You do **not** need to know how to code. Each page is a plain text file, and editing it is
mostly **copy an existing block, paste it, and change the words inside.** This guide walks
through the two most common jobs: adding a person and adding a publication.

## Before you start

1. **Get a plain-text editor.** [VS Code](https://code.visualstudio.com/) (free) is ideal — it
   colour-codes the file so the words you should change stand out from the code you shouldn't.
   TextEdit also works in a pinch (open it in *plain text* mode, not rich text).
2. **Open the project folder** in your editor (in VS Code: *File → Open Folder…*).
3. The files you'll edit are `people.html` and `publications.html`. Open the one you need.

## Five rules of safe editing

1. **Copy, don't create.** To add something, copy a block that already exists, paste it right
   below, then change the text. That way the structure is always correct.
2. **Only change the words *between* the `>` and `<` symbols** — e.g. in
   `<div class="person-name">Danlin Zhen</div>`, only change `Danlin Zhen`.
3. **Don't delete the angle-bracket tags** like `<article …>` or `</article>`. Every tag that
   opens (`<article>`) must still close (`</article>`).
4. **Work on one thing at a time, then preview** (see below). If it looks wrong, undo with
   **Cmd+Z** until it's back to normal.
5. When in doubt, **don't touch anything with `style=`, `class=`, `svg`, or `path` in it** —
   those control the colours and layout. Just copy them along unchanged.

---

## How to add a new lab member

Open **`people.html`** and find the line that says `<div class="people-grid">` (the current
team). Each person is one `<article class="person">…</article>` block. Copy one whole block,
paste it right after another, and edit it.

### If you have a photo

1. Save the photo as a **square** image (crop it to a square first — it'll look best).
2. Put the file in the **`images/`** folder. Name it simply, e.g. `jane-smith.webp`
   (`.jpg` or `.png` are fine too — just match the name you type below).
3. Paste this block and change the three highlighted parts:

```html
          <article class="person" style="--accent: linear-gradient(90deg,#83a598,#8ec07c);">
            <div class="person-photo">
              <img src="images/jane-smith.webp" alt="Jane Smith" />
            </div>
            <div class="person-body">
              <div class="person-name">Jane Smith</div>
              <div class="person-role">PhD student</div>
            </div>
          </article>
```

Change `images/jane-smith.webp` (twice: the filename and the name after `alt=`),
`Jane Smith`, and `PhD student`. Leave everything else exactly as-is.

### If you don't have a photo yet

Use this version instead — it shows the grey silhouette placeholder:

```html
          <article class="person" style="--accent: linear-gradient(90deg,#83a598,#8ec07c);">
            <div class="person-photo">
              <div class="placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.7-9 6v2h18v-2c0-3.3-4-6-9-6Z"/></svg>
              </div>
            </div>
            <div class="person-body">
              <div class="person-name">Jane Smith</div>
              <div class="person-role placeholder-role">Role / position</div>
            </div>
          </article>
```

When you later add a photo, swap the whole `<div class="placeholder">…</div>` line group for the
`<img …>` line shown above. (Tip: the role here says `placeholder-role`, which makes it grey and
italic. Once you fill in a real role, use the photo version's `<div class="person-role">` instead,
so it's not greyed out.)

> The little `style="--accent: …"` part just sets the thin coloured bar at the bottom of the
> card. You can leave whatever you copied — or, to match the spectrum theme, pick a pair of
> colours from this list (each card flows from one to the next):
> `#d3869b` (pink) · `#83a598` (blue) · `#8ec07c` (aqua) · `#b8bb26` (green) ·
> `#fabd2f` (yellow) · `#fe8019` (orange) · `#fb4934` (red).

### To add a past member (alumni)

Scroll to the **Alumni** section near the bottom of `people.html`. Each time period is one block.
Just add the name to the list inside the grey paragraph, separated by ` · `, for example:

```html
          <p class="muted">Dr. Kate Brechun · Dr. Jane Smith · …</p>
```

---

## How to add a new publication

Open **`publications.html`**. Publications are grouped by year. The newest year is at the top.

### Adding a paper to a year that already exists

Find the right year (look for e.g. `<div class="year-label">2025</div>`). Copy one
`<article class="pub">…</article>` block, paste it just below another in that year, and edit it:

```html
          <article class="pub">
            <span class="pub-rail"></span>
            <div>
              <p class="pub-title"><a href="https://doi.org/10.1234/example" target="_blank" rel="noopener">Full title of the paper goes here <span class="ext">↗</span></a></p>
              <p class="pub-authors">First Author, Second Author, G. Andrew Woolley</p>
              <p class="pub-venue">Journal Name 12(3):123–130</p>
            </div>
          </article>
```

Change these four things only:
- **The link** — replace `https://doi.org/10.1234/example` with the paper's DOI link. Find the
  DOI on the journal page (it looks like `10.1038/s41592-023-01764-8`) and put
  `https://doi.org/` in front of it.
- **The title** — replace `Full title of the paper goes here`. *Keep the
  `<span class="ext">↗</span>` arrow at the end* — that's the little ↗ icon.
- **The authors** — replace the author list.
- **The journal line** — replace `Journal Name 12(3):123–130`.

**If it's a preprint** (e.g. bioRxiv), add this one line right above the `<p class="pub-title">` line
so it shows the purple "Preprint" tag:

```html
              <div class="pub-meta"><span class="pub-badge preprint">Preprint</span></div>
```

### Adding a brand-new year

If the year doesn't exist yet (e.g. a new 2026), copy a whole year block — from
`<div class="year-group">` down to its matching `</div>` — and paste it **above** the current
top year. Change the year number in `<div class="year-label">2026</div>`, then put your
publication article(s) inside it.

---

## Preview your change

After saving the file (**Cmd+S**), find the page you edited in the project folder and
**double-click it** (or, if it's already open in your browser, press **Cmd+R** to refresh).
Check that your new person or paper appears and looks right. Nothing is "live" on the internet
yet — this is just your local copy.

## Publish your change (put it on GitHub)

When you're happy with the preview, open the **Terminal** app, then copy-paste these three lines
one at a time (the first one moves into the project folder — adjust the path if yours differs):

```bash
cd ~/Desktop/woolley_test_website
git add .
git commit -m "Add Jane Smith to the team"
git push
```

Change the message in quotes to describe what you did. After `git push` finishes, your changes
are saved to the GitHub repository. (The very first time you run `git push` on a new computer,
it may ask you to set up access — ask whoever set up the repo if so.)

---

## Reference

### Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `protein-engineering.html` | Protein Engineering |
| `photopharmacology.html` | Photopharmacology |
| `publications.html` | Publications |
| `people.html` | People |
| `crosslinkers.html` | Crosslinkers |
| `pyp-chromophore.html` | PYP Chromophore |

`css/style.css` holds the whole design system (colours, spectrum, layout).
`js/nav.js` handles the mobile menu and the Resources dropdown.

### Images

All live in `images/`. The lab logo, both group photos (`group_pic` on the Home banner,
`group_potluck` on People), Andrew's portrait, the two Photopharmacology figures, and the
seven Protein Engineering figures (`pe_*`).

**Still to fill in:** individual lab-member photos and their role labels on the People page
(see the guide above).

### Notes for a more technical editor
- The palette lives entirely in CSS variables at the top of `css/style.css` — the warm
  surfaces, cream text, and the pastel spectrum stops (`--uv` … `--farred`).
- Colour accents map loosely to switching wavelength (e.g. UV cross-linkers = pink-violet,
  red-light = red).
- The alumni period groupings reproduce what's on the current site; double-check the ranges.
- Publication titles link to the DOI; preprints link to bioRxiv.
