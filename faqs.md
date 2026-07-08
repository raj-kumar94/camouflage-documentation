# 🔎 FAQs

{% hint style="info" %}
Looking for a setup walkthrough? Start with the [Setup Guide](camouflage-setup-guide/basic-configuration.md). Working through a specific issue? See [Troubleshooting](troubleshooting.md).
{% endhint %}

**Jump to a section:**

* [🚀 Getting started](#getting-started)
* [🧩 Variants & options](#variants-and-options)
* [🔧 Something's not working](#something-s-not-working)
* [📌 Quick views, featured products & multiple themes](#quick-views-featured-products-and-multiple-themes)
* [🔒 Privacy, performance & SEO](#privacy-performance-and-seo)
* [🛑 Turning off or removing Camouflage](#turning-off-or-removing-camouflage)

***

## 🚀 Getting started <a href="#getting-started" id="getting-started"></a>

<details>

<summary>How do I find my theme name?</summary>

Go to **Shopify admin → Online Store → Themes**.

You can find the theme name just below the "Last saved" information. Refer to the following screenshot:

<img src=".gitbook/assets/find-theme-name (1).webp" alt="" data-size="original">

</details>

<details>

<summary>How do I enable the app on my theme?</summary>

Navigate to **Shopify admin → Themes → Customise → App embeds icon (left sidebar) → Camouflage sold variants → toggle on → Save**.

You can also use the **"Enable Camouflage"** button on the [Setup page](https://camouflage.codecrux.dev/) (Step 2) - it takes you directly into the theme customiser with the Camouflage embed pre-selected. If that doesn't work, follow the manual steps above or reach out via chat / email.

<figure><img src=".gitbook/assets/activate-camouflage.webp" alt=""><figcaption></figcaption></figure>

For the full walkthrough, see [Step 2: Activate Camouflage in the theme](camouflage-setup-guide/activate-camouflage.md).

</details>

<details>

<summary>Can I test Camouflage in a draft theme before going live?</summary>

Yes. Camouflage works in draft themes - duplicate your live theme, enable the Camouflage embed on the copy, and preview it.

Step-by-step (with screenshots): [Testing in a draft theme](camouflage-setup-guide/testing-in-a-draft-theme.md).

</details>

<details>

<summary>I want help setting it up. Can you do it for us?</summary>

Yes. Our support team will set Camouflage up for your theme - including third-party integrations and custom selectors. Just open the in-app chat from your Camouflage dashboard and share your store URL.

We typically respond within a few hours and most setups finish in less than a day.

</details>

***

## 🧩 Variants & options <a href="#variants-and-options" id="variants-and-options"></a>

<details>

<summary>What's the difference between an "option" and a "variant"?</summary>

They're related but different.

* **Options** are the *types* of choices on a product: Size, Color, Material, etc. A t-shirt that comes in different sizes only has **1 option**. A t-shirt with Size *and* Color has **2 options**.
* **Variants** are the actual combinations. The 2-option t-shirt with Sizes (S, M, L) and Colors (Red, Blue) has 6 variants: S/Red, S/Blue, M/Red, M/Blue, L/Red, L/Blue.

Camouflage works on single-option products on every plan. Multi-option products (2 or 3 options) need the upgraded plan - there's a 14-day free trial.

</details>

<details>

<summary>What's the difference between "Sold out" and "Unavailable" variants?</summary>

**Sold out** - the variant **exists in your Shopify admin** (you set it up with a price, SKU, etc.) but has zero inventory right now. Usually comes back when you restock.

**Unavailable** - the variant **doesn't exist in your Shopify admin**, but the picker still offers the combination because other combos do exist. Only happens on multi-option products.

**Example:** If you have a Red/XL variant, it might be in-stock or sold out. But if Red/XXL doesn't exist yet your product has XXL in other colours, the picker will show Red/XXL as a clickable option - that's an "Unavailable" variant.

See: [Hide Unavailable variants but not sold-out variants](popular-use-cases/hide-unavailable-variants-but-not-sold-out-variants.md).

</details>

<details>

<summary>How do I hide specific variants of a product?</summary>

After the basic setup is done on the Setup page, go to the [Hide specific variants](https://camouflage.codecrux.dev/hide-specific-variants?tab=individual) page. Search for the product, click **Manage Variants**, pick the variants you want hidden, and click **Always hide**.

To unhide: select those variants, click the 3 dots near the action buttons, then click **Undo always hide**.

Full walkthrough: [Hide specific variants regardless of inventory quantity](popular-use-cases/hide-specific-variants-regardless-of-inventory-quantity.md).

</details>

<details>

<summary>How does the "hide specific variants" feature work behind the scenes?</summary>

Camouflage marks the variant as sold-out for the storefront - it doesn't delete or modify the variant in Shopify. The variant still exists in your admin; it just doesn't appear in the picker for shoppers.

One thing to keep in mind: the variant is still technically buyable via direct cart URL. If you have your variants exposed via a different surface (a search-results widget from another app, an external feed, etc.) and a shopper had previously added the variant to their cart, the order could still go through. To block those purchases too, enable [checkout validation](popular-use-cases/block-hidden-variants-at-checkout.md).

</details>

<details>

<summary>Can shoppers still buy a hidden variant (direct links, saved carts, other channels)?</summary>

By default, yes - Camouflage hides variants on your storefront, but a shopper who added the item to their cart earlier, follows a direct link, or comes through another sales channel (Google, Facebook, etc.) could still check out with it.

To close that door, enable **checkout validation**: Camouflage then re-checks the cart at checkout and blocks the purchase of any variant your rules say should be hidden, with an error message.

Setup guide: [Block hidden variants at checkout](popular-use-cases/block-hidden-variants-at-checkout.md).

</details>

<details>

<summary>How quickly does Camouflage react to inventory changes?</summary>

As soon as a variant sells out (or comes back in stock), Camouflage picks it up on the **next page load** - there's nothing to sync on our side, because Camouflage reads the product data Shopify already sends to the page.

The only delay you might notice is Shopify's own page caching: after an inventory change, Shopify's CDN can serve the previous copy of a product page for roughly **2–5 minutes**. Shoppers loading the page after that see the updated picker. A hard refresh (`Cmd/Ctrl + Shift + R`) shows you the fresh state immediately.

</details>

<details>

<summary>Does Camouflage work with Shopify Markets, multiple currencies and languages?</summary>

Yes.

* **Markets & country rules:** Camouflage's [country-based hiding](popular-use-cases/hide-specific-variants-based-on-countries.md) builds on Shopify Markets / localisation - you can hide variants for specific countries, use the `EU` shortcut for all EU countries, or hide from everyone *except* a region.
* **Multiple currencies:** currency conversion is handled by Shopify as usual; features like the collection-page price fix respect the shopper's local pricing.
* **Multiple languages:** Camouflage works on translated storefronts. If you use translated option values (e.g. *Couleur* instead of *Color*) and something doesn't hide correctly on one language, open the in-app chat - adding the translated names to your setup is a quick fix on our side.

</details>

<details>

<summary>How do I filter sold-out variants from collection page results?</summary>

**Step 1:** Enable the Availability filter in Shopify's free **Search & Discovery** app.

**Step 2:** Open the Camouflage app → Setup → **Advance Setup** tab → tick **"Filter sold out variants from Collection pages"** → Save.

[Live demo](https://camouflage-demo.myshopify.com/collections/all?filter.v.availability=1) (password: `camouflage`)

Full walkthrough: [Filter sold out variants from Collection pages](popular-use-cases/filter-sold-out-variants-from-collection-pages.md).

</details>

***

## 🔧 Something's not working <a href="#something-s-not-working" id="something-s-not-working"></a>

<details>

<summary>The app works in the preview / theme editor but not on my live store.</summary>

Two common causes:

**1. The app embed is not enabled in your live theme.** The customiser preview runs the embed for that preview session even if it's not saved - but the live store needs the embed switched on and saved. Go to **Shopify admin → Themes → Customise (your live theme) → App embeds → Camouflage sold variants → toggle on → Save**.

**2. The product has 2 or 3 option axes (e.g. Color and Size).** Multi-option variant hiding requires the upgraded plan - Camouflage offers a 14-day free trial. Open the in-app **Pricing** page from the Camouflage dashboard to start the trial.

Still doesn't work? See [Troubleshooting](troubleshooting.md).

</details>

<details>

<summary>My theme is listed as supported, but Camouflage still isn't working.</summary>

This usually happens when:

* Your theme has been customised (the variant picker structure was changed from the original).
* A third-party app has replaced your standard variant picker with its own.
* A new theme version is structured differently from older versions.

In any of those cases, reach out via chat or email - share your store URL and a product link, and we'll look at the page structure and add the right configuration. It's usually a quick fix on our side.

</details>

<details>

<summary>Even after applying all the settings, the app doesn't work. Can it support my theme?</summary>

Almost certainly yes. Most "this theme isn't supported" cases just need a small additional setup from our end - a few minutes for a standard theme, a bit longer for heavily customised ones.

Please open the in-app chat or email [raj@codecrux.dev](mailto:raj@codecrux.dev) with your store URL.

</details>

<details>

<summary>I changed my theme and now Camouflage doesn't work.</summary>

When you publish a different theme, Shopify doesn't carry the app embed over - you have to re-enable it on the new theme:

1. Shopify admin → **Themes** → click **Customise** on your newly published theme.
2. Click the **App embeds** icon in the sidebar.
3. Toggle **Camouflage sold variants** on and click **Save**.

Then open the Camouflage app → **Setup** and confirm the **theme dropdown** matches your new theme's name (Camouflage's selectors depend on it).

Full checklist: [Keeping Camouflage running after theme changes](camouflage-setup-guide/keeping-camouflage-running-after-theme-changes.md).

</details>

<details>

<summary>I changed a setting in Camouflage but my storefront still looks the same.</summary>

Three things to try in this order:

1. **Hard-refresh the page** (`Cmd/Ctrl + Shift + R`). Your browser may be serving you a cached copy.
2. **Wait 1–2 minutes.** Shopify's CDN can hold onto the old page briefly. New shoppers see the change right away; you'll see it after a refresh.
3. **Confirm the app embed is still on** in your live theme (Themes → Customise → App embeds → Camouflage sold variants → toggle on → Save).

If none of these fix it, see [Troubleshooting](troubleshooting.md).

</details>

<details>

<summary>I marked a variant as hidden, but it's still visible on the product page.</summary>

Run through this checklist - it catches nearly every case:

1. **Hard-refresh the page** and wait 2–5 minutes - Shopify's CDN may still be serving the old copy.
2. **Check the action you picked on the Setup page.** If it's *Strike-through*, *Disable* or *Append text*, the variant is supposed to stay visible - just unselectable. Only the *Hide* action removes it. See [Choosing what happens to sold-out variants](overview/choosing-a-sold-out-variant-action.md).
3. **Confirm the app embed is on** in the theme you're looking at (Themes → Customise → App embeds → Camouflage sold variants → on → Save).
4. **Confirm the Setup page's theme dropdown matches your current theme** - Camouflage's configuration depends on it.
5. **Multi-option product on the free plan?** Products with 2–3 options (e.g. Color × Size) need the upgraded plan (14-day free trial).
6. **Looking at a collection page or quick view?** Those surfaces have their own setup - the product-page rule alone doesn't cover them. See [collection swatches](popular-use-cases/hide-sold-out-color-swatches-from-collection-pages.md) and [quick views](popular-use-cases/hide-sold-out-variants-from-quick-views.md).

Still showing? Open the in-app chat with the product link - we'll take it from there.

</details>

***

## 📌 Quick views, featured products & multiple themes <a href="#quick-views-featured-products-and-multiple-themes" id="quick-views-featured-products-and-multiple-themes"></a>

<details>

<summary>Does Camouflage work in product quick views?</summary>

Yes. Open the Camouflage app → Setup → **Advance Setup** tab → tick **"Enable Camouflage in the quick view"** and Save.

If it doesn't work out of the box, see [Hide sold out variants from Quick views](popular-use-cases/hide-sold-out-variants-from-quick-views.md) or open the in-app chat - most quick-view setups take us less than a day.

</details>

<details>

<summary>Does Camouflage work in a Featured Product section (home page, landing pages, etc.)?</summary>

Yes. Open the Camouflage app → Setup → **Advance Setup** tab → tick **"Enable Camouflage in featured product"** and Save.

If it doesn't work out of the box, open the in-app chat and share the page URL - we'll have it sorted quickly.

</details>

<details>

<summary>Can I use Camouflage on more than one theme at the same time?</summary>

Yes. Camouflage's settings live at the **store** level and apply to every theme that has the app embed enabled. So:

* Live theme + draft theme - both can have Camouflage active simultaneously.
* You can keep Camouflage enabled on the live theme while you test a redesign in a draft theme.
* If you publish a different theme, you'll need to re-enable the embed on it ([details](camouflage-setup-guide/keeping-camouflage-running-after-theme-changes.md)).

There's no extra cost - one Camouflage subscription per store covers all your themes.

</details>

***

## 🔒 Privacy, performance & SEO <a href="#privacy-performance-and-seo" id="privacy-performance-and-seo"></a>

<details>

<summary>Will Camouflage slow down my storefront?</summary>

Camouflage is built to be light:

* The script is small and loads from Shopify's CDN.
* It runs after your page's content is visible - sold-out variants disappear or get a strike-through smoothly rather than holding up the page.
* No backend calls happen between your storefront and our servers during page load. Camouflage uses the data Shopify already sends to the page.

If you're seeing slowness on your storefront and suspect Camouflage, open the in-app chat and share the page URL. We're happy to look at it.

</details>

<details>

<summary>Is Camouflage GDPR / privacy compliant?</summary>

Yes. Camouflage doesn't track or store any shopper personal data on the storefront. Everything happens in the shopper's browser using data Shopify already sent to the page.

The only things Camouflage stores in our database are the **merchant-side** settings you configure (theme name, action, "always hide" lists, etc.). No shopper data is ever stored.

</details>

<details>

<summary>Will Camouflage affect my SEO?</summary>

No negative SEO impact. Sold-out / hidden variants are still part of the product - Camouflage just adjusts which options are shown in the picker. The product page itself - its title, description, and primary image - remains unchanged and fully crawlable by Google.

</details>

***

## 🛑 Turning off or removing Camouflage <a href="#turning-off-or-removing-camouflage" id="turning-off-or-removing-camouflage"></a>

<details>

<summary>How do I turn off the app temporarily (without uninstalling)?</summary>

Navigate to **Shopify admin → Themes → Customise → App embeds icon (left sidebar) → Camouflage sold variants → toggle off → Save**.

Camouflage stops running immediately. Your settings stay saved - toggle it back on whenever you want to re-enable.

</details>

<details>

<summary>If I uninstall the app, will the hidden variants show again?</summary>

Yes. Camouflage hides variants at page-render time, not by deleting or modifying anything in Shopify. Uninstalling removes the page-render layer and every variant becomes visible again.

If you have specific variants marked **"Always hide"** in the Camouflage app, those settings stay saved on our side for a while in case you reinstall - but they won't have any effect while the app is uninstalled.

</details>

***

## Didn't find your answer?

* Run through [Troubleshooting](troubleshooting.md) - many setup-time issues are covered there with click-by-click fixes.
* Skim the [Glossary](glossary.md) if a term in the docs is unfamiliar.
* Open the **in-app chat** from your Camouflage dashboard, or email [raj@codecrux.dev](mailto:raj@codecrux.dev). We're fast.
