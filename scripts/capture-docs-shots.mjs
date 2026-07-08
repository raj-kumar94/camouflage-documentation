// capture-docs-shots.mjs — proof-of-concept screenshot pipeline for the Camouflage docs.
//
// WHY THIS EXISTS
//   Hand-captured screenshots drift: different crops, cursor positions, window sizes, and
//   they go stale the moment the admin UI changes. This script drives the *real* admin in a
//   fixed viewport and dumps uniform, optionally-annotated shots straight into .gitbook/assets,
//   so re-capturing a whole tutorial after a UI change is one command, not an afternoon.
//
// ONE-TIME SETUP
//   1. npm i -D playwright && npx playwright install chromium      (run inside this repo)
//   2. Log in to the admin once and save the session so the script starts authenticated:
//        node scripts/capture-docs-shots.mjs --login
//      A browser opens; sign in to the Camouflage admin, then press Enter in the terminal.
//      The session is saved to scripts/.auth.json (gitignored — never commit it).
//
// CAPTURE
//   CAMOUFLAGE_ADMIN_URL=http://localhost:3000 node scripts/capture-docs-shots.mjs
//   node scripts/capture-docs-shots.mjs --only schedule-hide     (one flow)
//   node scripts/capture-docs-shots.mjs --headed                 (watch it run)
//
// Output: .gitbook/assets/<name>.png at 2x (retina-crisp). Reference it from a page with
//   <figure><img src="../.gitbook/assets/<name>.png" alt="..."><figcaption></figcaption></figure>

import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';
import { createInterface } from 'node:readline';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const ASSETS_DIR = join(REPO_ROOT, '.gitbook', 'assets');
const AUTH_FILE = join(__dirname, '.auth.json');

// Uniform capture surface. Keep these stable so every shot in the docs matches.
const VIEWPORT = { width: 1440, height: 900 };
const DEVICE_SCALE = 2; // retina; halves apparent size in GitBook so text stays sharp

const BASE_URL = process.env.CAMOUFLAGE_ADMIN_URL || 'http://localhost:3000';
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };

// ── The shot list. Add a flow, list its steps; `annotate` overlays a numbered badge. ──
// A step's `action` runs BEFORE the screenshot (click/fill the UI into the right state).
// `clip: 'selector'` shoots just that element; omit it to shoot the whole viewport.
const FLOWS = {
  'schedule-hide': [
    {
      name: 'schedule-hide-step2-select-variants',
      path: '/hide-specific-variants',
      action: async (page) => {
        await page.getByRole('button', { name: /select variants/i }).first().click();
      },
      annotate: { n: 1, selector: 'button:has-text("Select variants")' },
    },
    {
      name: 'schedule-hide-step5-schedule-button',
      path: '/hide-specific-variants',
      annotate: { n: 2, selector: 'button:has-text("Schedule hide")' },
    },
    {
      name: 'schedule-hide-step6-date-window',
      path: '/hide-specific-variants',
      annotate: { n: 3, selector: '[data-tour="schedule-window"], .schedule-date-range' },
    },
  ],
  // Add more flows here, e.g. 'countries': [ ... ], 'setup-step1': [ ... ]
};

async function saveLogin() {
  const browser = await chromium.launch({ headless: false });
  const ctx = await browser.newContext({ viewport: VIEWPORT });
  const page = await ctx.newPage();
  await page.goto(BASE_URL);
  console.log('\n▶ Sign in to the Camouflage admin in the opened window.');
  await new Promise((res) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    rl.question('  Once you see the dashboard, press Enter here to save the session… ', () => { rl.close(); res(); });
  });
  await ctx.storageState({ path: AUTH_FILE });
  await browser.close();
  console.log(`✔ Session saved to ${AUTH_FILE} (gitignored).`);
}

// Overlay a numbered callout badge on an element, so the badge in the image matches the
// numbered step in the tutorial. Baked into the PNG because GitBook has no annotation layer.
async function drawBadge(page, { n, selector }) {
  await page.evaluate(({ n, selector }) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const r = el.getBoundingClientRect();
    const box = document.createElement('div');
    Object.assign(box.style, {
      position: 'fixed', left: `${r.left - 3}px`, top: `${r.top - 3}px`,
      width: `${r.width + 6}px`, height: `${r.height + 6}px`,
      border: '2.5px solid #008060', borderRadius: '10px',
      boxShadow: '0 0 0 4px rgba(0,128,96,0.15)', zIndex: 2147483646, pointerEvents: 'none',
    });
    const badge = document.createElement('div');
    badge.textContent = n;
    Object.assign(badge.style, {
      position: 'fixed', left: `${r.left - 16}px`, top: `${r.top - 16}px`,
      width: '30px', height: '30px', borderRadius: '50%', background: '#008060',
      color: '#fff', font: '700 16px -apple-system, sans-serif', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 2147483647, pointerEvents: 'none',
    });
    document.body.append(box, badge);
  }, { n, selector });
}

async function capture() {
  if (!existsSync(AUTH_FILE)) {
    console.error(`\n✖ No saved session at ${AUTH_FILE}. Run with --login first.\n`);
    process.exit(1);
  }
  const only = opt('--only');
  const flows = only ? { [only]: FLOWS[only] } : FLOWS;
  if (only && !FLOWS[only]) { console.error(`Unknown flow "${only}". Known: ${Object.keys(FLOWS).join(', ')}`); process.exit(1); }

  const browser = await chromium.launch({ headless: !flag('--headed') });
  const ctx = await browser.newContext({
    viewport: VIEWPORT, deviceScaleFactor: DEVICE_SCALE, storageState: AUTH_FILE,
  });
  const page = await ctx.newPage();

  for (const [flow, steps] of Object.entries(flows)) {
    console.log(`\n● ${flow}`);
    for (const step of steps) {
      await page.goto(BASE_URL + step.path, { waitUntil: 'networkidle' });
      if (step.action) { try { await step.action(page); } catch (e) { console.warn(`  ⚠ action failed for ${step.name}: ${e.message}`); } }
      await page.waitForTimeout(400); // let animations settle
      if (step.annotate) await drawBadge(page, step.annotate);
      const out = join(ASSETS_DIR, `${step.name}.png`);
      const target = step.clip ? page.locator(step.clip) : page;
      await target.screenshot({ path: out });
      console.log(`  ✔ ${step.name}.png`);
    }
  }
  await browser.close();
  console.log(`\nDone. Shots in .gitbook/assets/. Review, then reference them from pages.\n`);
}

if (flag('--login')) await saveLogin();
else await capture();
