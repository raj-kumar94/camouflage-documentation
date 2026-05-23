---
description: >-
  Try Camouflage on a copy of your theme before flipping it on for real
  customers. Zero risk, fully reversible.
---

# Testing in a draft theme

If you'd like to see how Camouflage behaves on your store before enabling it for real shoppers, set it up on a **draft theme** first. Nothing changes for your live customers until you decide to go live.

## Step 1: Duplicate your live theme

1. Shopify admin → **Online Store → Themes**.
2. Find your **live** theme. Click the **⋯** (three dots) → **Duplicate**.
3. Wait a few seconds — a copy appears under "Other themes" with a name like `Copy of Dawn`.
4. Rename it so you don't lose track. Click the three dots → **Rename** → e.g. `Dawn — Camouflage test`.

You now have an exact, safe copy of your live theme. Anything you do in this draft is invisible to customers until you publish it.

## Step 2: Enable Camouflage on the draft theme

1. On the **draft** theme card, click **Customise**.
2. In the customiser's left sidebar, click the **App embeds** icon (puzzle piece).
3. Find **"Camouflage sold variants"** and toggle it **on**.
4. Click **Save** at the top right.

{% hint style="info" %}
Your Camouflage Setup page settings (theme name, sold-out action, exception tags, "always hide" variants, etc.) apply to **every** theme that has the app embed turned on — both draft and live. So as soon as you enable the embed, your draft is using your current settings.
{% endhint %}

## Step 3: Preview the draft theme

There are two ways to view the draft:

### Option A — Share a preview link (recommended)

1. Back on the **Themes** page, click the **⋯** on your draft theme → **Preview**.
2. Shopify opens the storefront in a new tab with a special preview URL.
3. Browse to any product page and verify sold-out variants behave the way you expect.

The preview link works for anyone — you can share it with a teammate to get a second pair of eyes.

### Option B — Use a preview URL parameter

If you already know the theme ID, you can append `?preview_theme_id=XXXXXX` to any storefront URL. The theme ID is in the URL of the customiser (`https://admin.shopify.com/...themes/XXXXXX/editor`).

## Step 4: Verify before going live

Run through this short checklist on your draft:

* [ ] Sold-out variants on a single-option product (e.g. just sizes) behave correctly.
* [ ] Sold-out variants on a multi-option product (e.g. Color × Size) behave correctly.
* [ ] **Unavailable** combinations (combos that don't exist in your admin) are hidden if you ticked that option — see [Hide Unavailable variants but not sold-out variants](../popular-use-cases/hide-unavailable-variants-but-not-sold-out-variants.md).
* [ ] The "Add to cart" button updates when you switch variants.
* [ ] Collection pages look right (if you enabled collection-page features).
* [ ] Quick views, if your theme has them, behave correctly.

## Step 5: Go live

Happy with the draft? Publish it:

1. Shopify admin → **Themes**.
2. On the draft theme, click **Publish**.
3. Confirm — your draft becomes your live theme.

Camouflage is already enabled on it, so live customers see the new behaviour immediately.

{% hint style="warning" %}
After publishing, give it a hard refresh (`Cmd/Ctrl + Shift + R`) on your storefront to make sure your browser isn't showing a cached copy of the old theme.
{% endhint %}

## Rolling back

Made a mistake? Easy to undo:

1. Shopify admin → **Themes**.
2. Find your **previous** live theme under "Other themes" (Shopify keeps it as the new draft).
3. Click **Publish** on it.
4. You're back to the previous version. No data lost.

## Common questions

<details>

<summary>Will Camouflage's settings be different on each theme?</summary>

No. Camouflage's settings (Setup page, Hide specific variants, etc.) live at the **store** level. Whichever theme has the embed turned on uses the same settings.

If you want to test a *different* configuration on the draft, you'd need to change the Setup page — which would also affect any other theme that has the embed on. Most merchants just keep the live theme's settings and only use the draft to verify visual behaviour.

</details>

<details>

<summary>Can the preview link be seen by my customers?</summary>

The Shopify preview link is publicly accessible if someone knows the URL, but it's not indexed by Google and won't appear via your domain. Don't share it on social media if you're keeping the changes private.

</details>

<details>

<summary>Do I need a separate Camouflage subscription for testing?</summary>

No. Camouflage is one subscription per store, and it applies to all themes (draft, live, archived) on that store.

</details>
