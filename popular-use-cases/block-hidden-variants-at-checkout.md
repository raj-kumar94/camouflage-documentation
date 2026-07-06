---
description: >-
  Stop shoppers from purchasing hidden variants through direct links, saved
  carts, or other sales channels.
---

# 🛡️ Block hidden variants at checkout

Camouflage hides variants on your storefront - but the storefront isn't the only door into checkout. A shopper can still end up buying a hidden variant if:

* they **added it to their cart before** you hid it,
* they follow a **direct link** to the variant (e.g. from an old email, a shared cart, or a bookmark),
* they come through **another sales channel** - Google Shopping, Facebook / Instagram, a buy-button embed - where Camouflage doesn't run.

**Checkout validation** closes that door. When enabled, Camouflage double-checks the cart at checkout: if it contains a variant your rules say should be hidden, the shopper sees an error message and cannot complete the purchase until the item is removed.

{% hint style="info" %}
Checkout validation runs entirely inside Shopify's checkout - it doesn't slow down your checkout and doesn't depend on our servers being reachable.
{% endhint %}

## The two validations

| Validation | What it enforces |
| --- | --- |
| **Camouflage Checkout Validation** | Variants you hid individually - "Always hide" selections and country-based hiding rules |
| **Camouflage Global variants validation** | Your bulk / global hiding rules (hide by variant title, SKU, or option value) |

Enable the one that matches how you hide variants - or both.

## How to enable

1. In your Shopify admin, go to **Settings → Checkout** and scroll to **Checkout rules**.
2. Click **Add rule**.
3. Pick **Camouflage Checkout Validation** (or **Camouflage Global variants validation**).
4. Enter the validation name in the title field, and **untick** the **"Block checkout if app experiences a problem"** checkbox - we recommend keeping it off so your checkout never gets held up.
5. Set the rule to **Active** from the dropdown and click **Save**.

Then open the Camouflage app → [**Hide specific variants**](https://camouflage.codecrux.dev/hide-specific-variants) page - you'll see a status card for each validation. Click **Verify Activation** to confirm it shows **Enabled**.

## How to disable

**Settings → Checkout → Checkout rules** → click the Camouflage validation → **Turn off**.

## What the shopper sees

If a hidden variant is in the cart, checkout shows an error message and the purchase can't be completed until the item is removed. In-stock, visible variants are never affected.

{% hint style="warning" %}
Checkout validation follows the same rules as your storefront hiding. If you remove a hiding rule, the variant becomes purchasable again everywhere - storefront and checkout - within a few minutes.
{% endhint %}

Questions or an edge case we should look at? Open the in-app chat or email [raj@codecrux.dev](mailto:raj@codecrux.dev).
