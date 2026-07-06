---
icon: life-ring
description: >-
  Camouflage isn't behaving the way you expect? Try these in order before
  reaching out to support.
---

# 🛟 Troubleshooting

Most issues fall into one of the buckets below. Click the one that matches what you're seeing.

If none of these fix it, open the in-app chat from the Camouflage dashboard, or email [raj@codecrux.dev](mailto:raj@codecrux.dev) with:
* your store URL
* a link to one example product where you see the issue
* a short description of what you expected vs. what's happening

We'll usually have an answer within a few hours.

***

## Quickest fixes (try these first)

<details>

<summary>1. Hard-refresh the page</summary>

Your browser or Shopify's CDN may be serving you an old copy of the page. Hard refresh forces it to fetch the latest:

* **Mac:** `Cmd + Shift + R`
* **Windows / Linux:** `Ctrl + F5` or `Ctrl + Shift + R`

If the change shows up after a hard refresh, you're done - just let your customers know to refresh too (Shopify's CDN should sort itself out within a few minutes).

</details>

<details>

<summary>2. Confirm the app embed is ON in your live theme</summary>

Camouflage only runs on themes where its **app embed** is enabled. To check:

1. Shopify admin → **Online Store → Themes**
2. On the **live theme**, click **Customise**
3. In the customiser's left sidebar, click the **App embeds** icon (puzzle piece)
4. Find **"Camouflage sold variants"** - the toggle must be **on**
5. Click **Save**

If the toggle was already on, toggle it off, click Save, then toggle it back on and Save again. This forces Shopify to re-deploy the embed.

See [Step 2: Activate Camouflage in the theme](camouflage-setup-guide/activate-camouflage.md) for the full walkthrough.

</details>

<details>

<summary>3. Re-check Step 1 of the Setup page</summary>

If you've changed themes recently, the Camouflage Setup page might still have the **old** theme name selected. Open the Camouflage app → **Setup** → check that the theme name in the dropdown matches your current live theme.

See [Step 1: Setup basic configuration](camouflage-setup-guide/basic-configuration.md).

</details>

***

## "It worked yesterday - today it doesn't"

<details>

<summary>You (or another app) updated the theme</summary>

When you publish a new theme version, the **app embed** isn't always carried over. Re-enable it:

1. Shopify admin → **Themes** → Customise the live theme.
2. Click **App embeds** in the sidebar.
3. Toggle **Camouflage sold variants** on.
4. Save.

See also: [Keeping Camouflage running after theme changes](camouflage-setup-guide/keeping-camouflage-running-after-theme-changes.md).

</details>

<details>

<summary>You installed another app that touches the variant picker</summary>

Some apps replace the standard variant picker with their own (swatch apps, custom product builders, B2B portals, etc.). If you installed one recently, Camouflage may need to be told about it.

1. Open the Camouflage app → **Setup**.
2. Look for the **"Third party app integrations"** dropdown.
3. If the new app is listed, select it and **Save**.
4. If it's not listed, [open the in-app chat](mailto:raj@codecrux.dev) - we add new integrations regularly.

For the full integrations list, see [Third party apps integration](configurations/third-party-apps-integration.md).

</details>

<details>

<summary>You changed inventory or variant settings in Shopify</summary>

Shopify caches product data for a few minutes per page. If you just edited inventory or marked a variant out of stock, give it 2–5 minutes and hard-refresh.

</details>

***

## "Camouflage works in the preview / draft theme - but not on the live store"

<details>

<summary>Most common cause: app embed not enabled in your live theme</summary>

When you "Preview" a theme inside the Shopify customiser, Camouflage runs because the embed is on **for that preview session**. On the live store, the embed has to be saved.

Fix: go to **Themes → Customise (live theme) → App embeds → Camouflage sold variants** → toggle on → Save.

</details>

<details>

<summary>Your product has 2 or 3 option axes (Color × Size, Color × Size × Material…)</summary>

Single-option products work on every plan. Multi-option products need a plan upgrade - Camouflage offers a 14-day free trial first.

Open the Camouflage app and check the banner on the dashboard. Or see your plan options in the in-app **Pricing** page.

</details>

<details>

<summary>The live theme has the embed but the theme template itself is custom</summary>

Some agencies build product pages on a fully custom template (`product.custom-pdp.json`, for example) where the standard Shopify rendering doesn't happen. Camouflage still works on these, but may need a small additional setup. Open the in-app chat - share the product URL and we'll walk you through it.

</details>

***

## "Sold-out variants are still showing on product pages"

<details>

<summary>Check what action you picked on the Setup page</summary>

If your sold-out action is **None** (the default), Camouflage **deliberately** keeps sold-out variants visible. Set the action to **Hide** / **Strike-through** / **Strike-through-disabled** on the Setup page and Save.

See [Step 1: Setup basic configuration](camouflage-setup-guide/basic-configuration.md).

</details>

<details>

<summary>The variant is actually NOT sold out in Shopify</summary>

Camouflage uses Shopify's own inventory data. Check the variant in Shopify admin → Products. If the **Available** count is greater than zero (or "Continue selling when out of stock" is on), Camouflage treats it as available.

If you want to hide a specific variant **regardless of inventory**, use [Hide specific variants regardless of inventory quantity](popular-use-cases/hide-specific-variants-regardless-of-inventory-quantity.md).

</details>

<details>

<summary>The product is multi-option and you're on the free plan</summary>

Multi-option (2+ axes) variant hiding requires the upgraded plan. There's a 14-day free trial - open the in-app **Pricing** page.

</details>

***

## "Sold-out swatches still showing on collection pages"

<details>

<summary>Collection-page swatches need their own setup</summary>

The product-page picker and the collection-page swatches are different things. To hide sold-out swatches on the collection grid, see [Hide sold out color swatches from Collection pages](popular-use-cases/hide-sold-out-color-swatches-from-collection-pages.md).

If you'd like our team to do this setup for you, open the in-app chat and share your collection URL - it usually takes us less than a day.

</details>

<details>

<summary>You want to hide entire sold-out products, not just swatches</summary>

That's a different feature - see [Filter sold out variants from Collection pages](popular-use-cases/filter-sold-out-variants-from-collection-pages.md). It requires the Shopify **Search & Discovery** app's Availability filter to be on.

</details>

***

## "Swatch order looks wrong after enabling Camouflage"

<details>

<summary>Some themes reorder swatches when one is hidden</summary>

Camouflage hides swatches by adding a CSS class; it doesn't change their DOM order. If the order shifts visually, it's usually because the theme uses CSS to lay swatches out in a grid (e.g. `flex` wrap) and removing one shifts the rest.

If this is causing a problem, open the in-app chat and we'll add a small CSS adjustment to keep the layout stable.

</details>

***

## "Variants jump back to visible when the customer clicks one"

<details>

<summary>Your theme is re-rendering the variant picker</summary>

Some themes (especially newer "linked products" themes) rebuild the variant picker from scratch every time a swatch is clicked. Camouflage handles this automatically for most themes, but a few custom themes need an extra hint.

Open the in-app chat and share a product URL - we'll add the right configuration. (This is a one-time setup per theme.)

</details>

***

## "Strike-through line doesn't show on dropdown options"

<details>

<summary>Safari restriction on `option` styling</summary>

Safari doesn't let Shopify themes style individual `<option>` tags inside dropdowns. Camouflage works around this for many themes, but a few cases need a tweak.

Workaround: switch the sold-out action from **Strike-through** to either **Hide** or **Strike-through-disabled** - both work in Safari.

If you specifically need strike-through to work in dropdowns on Safari, open the in-app chat.

</details>

***

## "I uninstalled and reinstalled Camouflage - now nothing works"

<details>

<summary>Re-do the activation step</summary>

When the app is uninstalled, Shopify removes the app embed from your themes automatically. After reinstalling, re-enable the embed:

1. Open Camouflage from your Shopify admin.
2. Click **"Enable Camouflage"** on the Setup page.
3. Save in the theme customiser.

Your previous settings (theme name, action, exception tags, "always hide" variants, etc.) should still be saved.

</details>

***

## "A hidden variant can still be purchased"

<details>

<summary>The purchase came through a direct link, saved cart, or another sales channel</summary>

Camouflage hides variants on your storefront pages. A shopper who added the variant to their cart **before** you hid it, followed a direct product/cart link, or bought through another channel (Google, Facebook, a buy button…) bypasses the storefront picker entirely.

Fix: enable **checkout validation** so Camouflage re-checks the cart at checkout and blocks hidden variants there too.

Setup guide: [Block hidden variants at checkout](popular-use-cases/block-hidden-variants-at-checkout.md).

</details>

<details>

<summary>Checkout validation is on, but the purchase still went through</summary>

Check two things on the [Hide specific variants](https://camouflage.codecrux.dev/hide-specific-variants) page in the Camouflage app:

1. The **right validation** is enabled - *Checkout Validation* covers individually hidden variants and country rules; *Global variants validation* covers bulk rules (by title / SKU / option value). Click **Verify Activation** to confirm the badge shows **Enabled**.
2. The rule that should hide the variant is actually **active** - if the variant was un-hidden (or the rule edited) shortly before the purchase, the change applies within a few minutes.

If both look right and it still happened, open the in-app chat with the order number and product link - we'll investigate.

</details>

***

## Still stuck?

* Read [FAQs](faqs.md) - most common questions are answered there.
* Open the **in-app chat** from the Camouflage dashboard. Include your product URL.
* Email [raj@codecrux.dev](mailto:raj@codecrux.dev).

We respond fast and we're happy to look at your specific theme.
