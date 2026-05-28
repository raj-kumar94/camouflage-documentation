---
icon: book-open
description: Plain-English meanings for the Shopify and Camouflage terms used in this guide.
---

# 📖 Glossary

Quick reference for the terms you'll see across this documentation. Skim it once and pages will read a lot faster.

***

## Variants and options

**Variant** - A single buyable version of a product. If you sell a t-shirt in Red / Blue × S / M / L, you have 6 variants.

**Option** (or "option axis") - A *type* of choice on a product. The t-shirt above has 2 options: **Color** and **Size**. Each option has values (Red, Blue, etc.).

**Single-option product** - A product with one option. e.g. a hat that only comes in different colours.

**Multi-option product** - A product with two or three options. e.g. a t-shirt with Color × Size, or a shoe with Color × Size × Width. Multi-option products need Camouflage's upgraded plan (14-day free trial available).

**Variant picker** - The set of dropdowns / buttons / colour circles on a product page that shoppers use to choose a variant.

***

## Variant states

**In stock** - At least one unit available to ship.

**Sold out** - The variant exists in your Shopify admin but currently has zero inventory. Usually comes back when you restock.

**Unavailable** - A combination the *picker* offers (because other combos exist) but which **doesn't exist in your admin**. Only happens on multi-option products. E.g. you have Red / S, Red / M, Blue / S - the picker still shows Blue / M as a clickable option even though you never created it. That's "unavailable".

See: [Hide Unavailable variants but not sold-out variants](popular-use-cases/hide-unavailable-variants-but-not-sold-out-variants.md).

**Always-hide variant** - A variant you've manually marked to stay hidden regardless of its inventory. Useful for seasonal products, samples, or items you don't want to sell online for a while.

See: [Hide specific variants regardless of inventory quantity](popular-use-cases/hide-specific-variants-regardless-of-inventory-quantity.md).

***

## What Camouflage does to a sold-out variant

You pick one of these on the Setup page. The choice applies to every sold-out / hidden variant in your store.

**Hide** - The variant disappears entirely from the picker. Cleanest look, but shoppers can't tell something was ever there.

**Strike-through** - The variant stays in the picker but with a line through it. Greys out so it's clearly unavailable, but still visible. Good for sold-out products you expect to restock.

**Strike-through + disabled** - Same as strike-through, but the variant is also un-clickable.

**Diagonal strike-through** - A diagonal line across the variant (mostly used for swatches).

**Append text** - Adds a small suffix to the variant label, e.g. "Red - Sold out". Common for dropdown-style pickers.

**None** - Camouflage doesn't do anything. Useful if you only want Camouflage to hide *unavailable* combinations on multi-option products, but want sold-out variants left alone.

***

## Themes

**Live theme** - The theme your real customers see. Marked "Current theme" in Shopify admin → Themes.

**Draft theme** - Any theme you have set up but not published. Customers don't see drafts. Camouflage works in draft themes so you can test safely - see [Testing in a draft theme](camouflage-setup-guide/testing-in-a-draft-theme.md).

**App embed** - A Shopify mechanism that lets apps add code / behaviour to a theme. Camouflage installs as an app embed. The embed is **per theme** - duplicating or switching themes means re-enabling the embed.

***

## Pages where Camouflage runs

**Product page (PDP)** - The page for a single product, with the variant picker. URL usually looks like `/products/<product-handle>`.

**Collection page** - The page listing many products. URL usually looks like `/collections/<collection-handle>`. Camouflage hides sold-out swatches on the product cards here.

**Quick view** - A popup that some themes show when a customer clicks a button on a collection card (e.g. "Quick add"). Has its own variant picker.

**Featured product** - A variant picker shown outside the standard product page - on the home page, a custom landing page, or any section that lets the merchant feature one product.

***

## Visibility rules

**Exclude tag** - A product tag that tells Camouflage *not* to run on that product. e.g. tag a product `camouflage-exclude` to keep its sold-out variants visible.

**Include tag** - A product tag that tells Camouflage *only* to run on tagged products. e.g. tag a product `new-arrivals` and set the include tag to `new-arrivals` so Camouflage runs only on those.

**Inventory threshold** - A number you set so Camouflage treats variants with **that many or fewer** units as sold out. e.g. threshold 3 means a variant with 0, 1, 2, or 3 units in stock is treated as sold out.

See: [Hide variants based on inventory level](popular-use-cases/hide-variants-based-on-inventory-level.md).

**Schedule hide** - A from / to date window during which a specific variant should be hidden. Used for time-limited sales, seasonal products, etc.

**Country rules** - Per-variant country lists that say "hide this variant when the shopper's country is one of these". Supports the special value `EU` for all EU countries.

See: [Hide specific variants based on countries](popular-use-cases/hide-specific-variants-based-on-countries.md).

**Customer-tag rules** - Show or hide specific variants based on customer tags. e.g. a `B2B` variant only visible to logged-in customers tagged `B2B`. A tag prefixed with `-` means "hide from customers WITHOUT this tag" (i.e. hide from logged-out shoppers).

***

## Still unsure?

If a term we've used isn't here, open the in-app chat from your Camouflage dashboard and ask - we'll add it to the glossary.
