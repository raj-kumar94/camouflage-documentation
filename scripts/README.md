# Docs tooling — screenshot capture

`capture-docs-shots.mjs` drives the real Camouflage admin in a fixed viewport and writes
uniform, optionally-annotated screenshots straight into `../.gitbook/assets/`. It exists so
tutorial screenshots stay consistent and are cheap to re-capture when the UI changes.

> This folder is tooling, not documentation. It is not in `SUMMARY.md`, so it never publishes
> to the GitBook. `scripts/.auth.json` (your saved admin session) is gitignored — never commit it.

## Setup (once)

```bash
npm i -D playwright
npx playwright install chromium
node scripts/capture-docs-shots.mjs --login   # sign in, then press Enter to save the session
```

## Capture

```bash
# point at your local admin (default) or a deployed one via CAMOUFLAGE_ADMIN_URL
node scripts/capture-docs-shots.mjs                    # all flows
node scripts/capture-docs-shots.mjs --only schedule-hide
node scripts/capture-docs-shots.mjs --headed           # watch it run
```

Then reference a shot from a page:

```html
<figure><img src="../.gitbook/assets/schedule-hide-step2-select-variants.png" alt="…"><figcaption></figcaption></figure>
```

## Adding a flow

Edit the `FLOWS` map in `capture-docs-shots.mjs`. Each step is `{ name, path, action?, annotate?, clip? }`:

- **name** — output filename (kebab-case, matches the tutorial: `schedule-hide-step2-…`).
- **path** — admin route to open.
- **action** — optional async fn run before the shot, to click/fill the UI into the right state.
- **annotate** — `{ n, selector }` overlays a numbered green badge; `n` matches the tutorial step.
- **clip** — optional selector to shoot just one element instead of the whole viewport.

## Two-track visual strategy (see the `camouflage-docs` skill)

- **Track A — screenshots**: UI walkthroughs, via this script. Uniform 1440×900 @2x.
- **Track B — diagrams**: concept illustrations as inline SVG in `.gitbook/assets/` (no live
  store needed). Match the Polaris palette — green `#008060`, red `#d72c0d`, text `#202223`,
  border `#e1e3e5`. Existing examples: `diagram-before-after-hide.svg`,
  `diagram-soldout-vs-unavailable.svg`, `diagram-schedule-hide-timeline.svg`,
  `diagram-variant-action-choices.svg`.
