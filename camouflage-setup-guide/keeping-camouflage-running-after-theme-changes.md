---
description: >-
  What to check whenever you publish a new theme, install a new app, or switch
  templates — so Camouflage doesn't go quiet.
---

# Keeping Camouflage running after theme changes

Camouflage runs from inside your active theme. Most of the time you can ignore that detail — but a few common Shopify actions can switch it off without warning. Here's what to do.

***

## When you publish a new theme

Publishing a different theme is the **most common** reason Camouflage stops working. Shopify doesn't automatically carry app embeds across themes.

**What to do:**

1. Shopify admin → **Themes** → click **Customise** on your newly published theme.
2. In the customiser's left sidebar, click the **App embeds** icon (puzzle piece).
3. Find **"Camouflage sold variants"** and toggle it **on**.
4. Click **Save**.

**Re-verify on the Camouflage Setup page:**

* The theme dropdown shows your **new** theme's name (not the old one).
* The sold-out action is what you want.
* If you use exception tags or include-tags, they're still configured.

{% hint style="info" %}
Camouflage settings (sold-out action, exception tags, "always hide" variants, etc.) survive theme changes — they're saved at the store level. You only need to re-enable the **app embed** and confirm the **theme name** dropdown is up to date.
{% endhint %}

***

## When you update your existing theme

Some themes (like Dawn or third-party themes you bought from the Theme Store) get version updates. Updating usually means a duplicated theme with the new version, which you then publish.

Treat it the same as publishing a new theme — go through the checklist above.

***

## When you install a new app that touches the variant picker

Many apps add features around the variant picker:

* Swatch / colour picker apps (Swatch King, Globo Swatch, etc.)
* Page builders (PageFly, Shogun, GemPages)
* Product bundle apps
* B2B / wholesale apps with custom pickers
* Subscription apps that add "Subscribe & Save" options

If you install one of these, Camouflage may need to be told about it so it works alongside the new picker.

**What to do:**

1. Open the Camouflage app → **Setup** page.
2. Look for the **"Third party app integrations"** dropdown.
3. If the new app is listed, select it and click **Save**.
4. Reload your product page — confirm Camouflage is hiding the right variants on the new picker.

If the app isn't listed, [open the in-app chat](mailto:raj@codecrux.dev) — we add new integrations regularly and can usually have it working within a day.

***

## When you switch product templates

If you (or your designer) creates a new product template like `product.custom-pdp.json` and assigns it to certain products, those products may render a non-standard picker that Camouflage doesn't recognise yet.

**Quick check:**

* Open Camouflage app → **Status** (or the in-app health check).
* Browse to the affected product page — does Camouflage say it detected the picker correctly?

If it doesn't pick it up, share the product URL via in-app chat and we'll add the right configuration.

***

## When you change Camouflage's settings

This one's straightforward, but worth saying: after **any** change to the Camouflage Setup page (theme name, sold-out action, advanced options), do a hard refresh on your storefront (`Cmd/Ctrl + Shift + R`) — your browser may be caching the old config.

***

## When you uninstall and reinstall Camouflage

Uninstalling removes the app embed from all themes automatically. After reinstalling:

1. Re-do [Step 2: Activate Camouflage in the theme](activate-camouflage.md).
2. Your previous settings (theme name, action, exception tags, "always hide" variants) should still be there. If anything's missing, open the in-app chat and we'll restore it from our backups.

***

## Quick post-change checklist

After any of the changes above, run through this in 60 seconds:

1. Hard refresh a product page in your storefront.
2. The picker should match what you configured on the Setup page (hide / strike-through / disable).
3. Switch between variants — Add to Cart should update correctly.
4. Open a collection page if you use collection-grid swatches — verify the swatches look right.

If any step is off, head to [Troubleshooting](../troubleshooting.md).
