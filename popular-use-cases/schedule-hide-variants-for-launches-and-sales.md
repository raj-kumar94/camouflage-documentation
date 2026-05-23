---
description: >-
  Hide (or un-hide) specific variants automatically inside a date / time
  window. Useful for sales, seasonal products, pre-launches, and restock
  blackouts.
---

# Schedule hide variants for launches, sales & seasonal items

Schedule a from-and-to date window during which a specific variant should be hidden. Outside the window, the variant behaves normally. No manual flip required.

Real-world scenarios:

* **Seasonal colours.** "Christmas Red" should only be visible from Nov 1 → Dec 31. Hide it the rest of the year.
* **Pre-launch reveal.** You've added a new SKU in advance but don't want it visible until launch day at 10:00 AM. Schedule it to be hidden until that moment.
* **Limited-time sale variants.** A "Black Friday Bundle" SKU that disappears at 11:59 PM on Cyber Monday.
* **Restock blackout windows.** Your supplier is rebuilding the Navy XL pipeline between Aug 15 → Aug 30. Hide the variant during that period so customers don't order what you can't ship.
* **Region-aware drops.** A pre-launch that only opens to Australia on Day 1 — combine schedule hiding with [country rules](hide-specific-variants-based-on-countries.md) (see "Combining with other rules" below).

## Before you start

1. Make sure the theme setup is done correctly. Refer to [Step 1](../camouflage-setup-guide/basic-configuration.md).
2. Make sure your Shopify store's timezone is set correctly in **Shopify admin → Settings → General → Standards and formats → Timezone**. Camouflage uses your store timezone (or each shopper's local timezone, depending on settings) when comparing against the schedule window.
3. Go to the Camouflage app → `Hide specific variants` page → `Select variants individually` tab.

## Schedule-hide a variant

1. Go to the Camouflage app → `Hide specific variants` page → `Select variants individually` tab.
2. Search for the product.
3. Click the **"Select variants"** button.
4. Select the variants you want to hide on a schedule.
5. Click **"Schedule hide"** (sibling to "Always hide" and "Hide from countries").
6. Enter a **From** date / time and a **To** date / time. Both are required.
7. Click **Save**.

While the current store time is between **From** and **To**, the selected variants will be treated as hidden — exactly as if you'd ticked "Always hide" — for the whole window. Outside that window, they behave normally.

{% hint style="info" %}
You can schedule far in the future. Many merchants set up the next quarter's seasonal calendar in one sitting — "Halloween" variants hidden until Oct 1, "Christmas" variants hidden until Nov 15, etc.
{% endhint %}

## Common scheduling patterns

### "Hide everywhere except inside a window" (limited-edition / sale)

You want a variant **visible only** during the sale.

* Set the schedule to a date range *outside* the sale window. E.g. for a Black Friday sale (Nov 28 → Dec 1), set Schedule hide From `Jan 1` To `Nov 27`, then a second schedule from `Dec 2` To `Dec 31`.
* Alternatively, use **Always hide** (always hidden) and **manually un-hide** when the sale begins. Less automation, but easier to picture.

### "Hide only inside a window" (restock blackout / temporary pause)

* Just set From and To to the blackout dates. Outside the window the variant is automatically visible again.

### "Hide before a launch, then auto-reveal"

* Set From far in the past (e.g. `2020-01-01`).
* Set To to your launch moment (e.g. `2026-06-01 10:00`).
* At 10:00 AM on June 1, the variant becomes visible automatically.

### "Hide after a date forever"

* Set From to the cut-off date / time.
* Set To far in the future (e.g. `2099-01-01`).

## Make the hidden variants visible again

You have two ways to revert:

* **Change the window.** Open the variant in the `Select variants individually` flow and edit the From / To dates.
* **Remove the schedule entirely.** Select the variants again, click the 3 dots near the action buttons, and click **"Undo schedule hide"**.

## Combining with other rules

Schedule rules layer with all the other "Hide specific variants" features. Examples:

* **Schedule + country**: A Halloween colourway visible only in the US from Sep 15 → Oct 31. Set both a schedule and a country list on the same variants.
* **Schedule + customer tag**: A VIP early-access launch visible to `VIP`-tagged customers a week before everyone else (see [Show variants only to VIP / B2B / wholesale customers](show-variants-only-to-vip-or-b2b-customers.md)).
* **Schedule + bulk rule**: Use the `Global hide rules` tab to schedule a rule that affects many products at once — e.g. "hide all `XS` variants of Sweatshirts during the manufacturing delay window."

***

### Related

* [Hide specific variants regardless of inventory quantity](hide-specific-variants-regardless-of-inventory-quantity.md) — for permanent hides
* [Hide specific variants based on countries](hide-specific-variants-based-on-countries.md) — country-aware hiding
* [Hide variants in bulk regardless of inventory quantity](hide-variants-in-bulk-regardless-of-inventory-quantity.md) — apply a rule to many products at once

**Need help?** If the schedule isn't behaving the way you expect, double-check Shopify's store timezone first. If that looks right, see [Troubleshooting](../troubleshooting.md) or open the in-app chat from your Camouflage dashboard.
