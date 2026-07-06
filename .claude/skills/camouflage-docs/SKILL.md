---
name: camouflage-docs
description: Authoring guide for the Camouflage customer documentation (this GitBook repo). Use this skill BEFORE creating or editing ANY page here - it covers the publishing model (pushing main goes live to customers), the section map, GitBook syntax conventions, and the audience rules that decide what internal details may never appear in merchant-facing pages. Activate proactively when the working directory is the camouflage-documentation repo or when asked to add FAQs, use cases, configuration pages, or troubleshooting entries for Camouflage customers.
---

# Camouflage Documentation — Authoring Guide

Customer-facing GitBook for the Camouflage Shopify app, git-synced with GitBook.

## Publishing model — the one hard rule

**GitBook publishes from `main`. Pushing to `main` publishes live to customers immediately.** Write and commit locally as asked, but never push without explicit approval from the maintainer. GitBook's own edits arrive as `GITBOOK-*` sync commits — pull before working to avoid conflicts. A `draft` branch exists for staged content. UI variables live in `.gitbook/vars.yaml` (e.g. `SETUP_TAB_ADVANCE`) — use them instead of hardcoding UI labels that may change.

## Section map

| Section | Contents |
| --- | --- |
| `README.md` | Welcome + quick links |
| `overview/` | what-we-do, our-features |
| `camouflage-setup-guide/` | Steps 1–3 (basic config, activate embed, advanced setup) + draft-theme testing + theme-change survival |
| `popular-use-cases/` | Merchant-facing task recipes (12+: always hide, countries, schedules, B2B/VIP tags, metafields, bulk rules, inventory level, swatches, quick views, availability filter) |
| `configurations/` | **Developer/agency pages** — JS config strings per surface/theme (product page, quick view, product grid, image hide, featured product, third-party apps, shadow DOM, mutation observers) |
| `fundamentals/events/` | Public JS API: global functions + `hoos:*` events |
| `faqs.md`, `troubleshooting.md`, `glossary.md` | Reference |
| `SUMMARY.md` | **The nav — every new page MUST be added here or it won't appear** |

## Audience rules (what may appear where)

- **Merchant pages** (overview, setup guide, popular-use-cases, faqs, troubleshooting, glossary): plain English, UI-level instructions only. **Never mention internal implementation**: no `custom_js` / `custom_js2` / `codecrux_settings`, no Mongo/metafield keys, no admin Customisations field internals, nothing about how Camouflage is coded. When custom setup is needed, the path is: "open the in-app chat / email raj@codecrux.dev and our team will set it up".
- **Developer pages** (`configurations/`, `fundamentals/`): may document the PUBLIC config surface — `window.hide_oos_*` globals, `window.CAMOUFLAGEE` functions, `hoos:*` events, `camouflagePre/Post*` hooks. Start each with the standard banner: a `{% hint style="warning" %}` saying "**This page is for theme developers / agencies.**" plus the most-merchants-never-touch-this + contact-support fallback.
- Never document backend internals, admin-only tooling, analytics pipelines, or checkout Function implementation anywhere in this repo.

## Style conventions

- Emoji-prefixed H1 titles (`# 🎁 Product Page`); optional frontmatter `description:` / `icon:`.
- `{% hint style="info|warning" %}` for callouts; `<details><summary>` for FAQ/troubleshooting collapsibles; `{% content-ref %}` for internal cross-links; `{% code overflow="wrap" lineNumbers="true" %}` around long code blocks.
- Code blocks always carry a language tag (`javascript`, `liquid`, `json`, `css`).
- Bold for UI elements ("tick **Enable Camouflage in the quick view**"), backticks for code identifiers.
- Open with a one-paragraph problem statement ("useful when…"), then numbered steps; real-world examples ("hide XS during a manufacturing delay"); end with a support escape hatch.
- Images live in `.gitbook/assets/`; text-only pages are acceptable when no screenshot exists yet.
- Define jargon on first use or link the glossary (sold-out vs unavailable distinction matters — see `popular-use-cases/hide-unavailable-variants-but-not-sold-out-variants.md`).

## Source of truth for technical claims

The app code is in the sibling repo `../camouflage-app` (skills at `../camouflage-app/.claude/skills/`). Verify feature behavior there before documenting it — do not guess timings, key names, or behaviors. Storefront config keys come from `app-extensions/storefront/base/global-typedefs.js`.
