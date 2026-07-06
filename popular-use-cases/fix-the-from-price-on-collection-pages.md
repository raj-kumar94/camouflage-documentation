---
description: >-
  Make the "From $X" price on collection cards reflect the cheapest variant
  shoppers can actually buy.
---

# 💲 Fix the "From" price on collection pages

Shopify calculates the "From $X" price on a product card from the **cheapest variant of the product** - whether or not that variant is in stock or visible. So if your $19 size is sold out (or you hid it with Camouflage) and the cheapest buyable variant is $29, the card still advertises "From $19". Shoppers click through, discover the price is higher, and feel baited.

Camouflage can rewrite that price: as part of its collection-page feature, it checks each product card and updates the "From" price to the **cheapest variant that's actually available to that shopper** - respecting stock levels and all of your hiding rules (including country-based ones).

## How to get it

The from-price fix rides on Camouflage's **collection page swatches** feature:

1. Set up [Hide sold out color swatches from Collection pages](hide-sold-out-color-swatches-from-collection-pages.md) - on supported themes this is a checkbox; on custom themes our team configures it for you.
2. Ask us to enable the **from-price fix** for your theme - open the in-app chat and share a collection URL plus one product where the "From" price looks wrong. It's usually a quick addition to the same setup.

{% hint style="info" %}
Theme developers / agencies: the from-price selector is part of the product-grid configuration - see [Product Grid - Collection page swatches](../configurations/product-grid-collection-page-swatches.md).
{% endhint %}

## Good to know

* The corrected price updates automatically as shoppers filter, sort, or paginate the collection.
* It's shopper-aware: a visitor from a country where you hid the cheap variant sees the price of the cheapest variant available **to them**.
* If every variant of a product is hidden or sold out, the price is left as-is - consider [filtering those products out](filter-sold-out-variants-from-collection-pages.md) or hiding their cards entirely (ask us).
