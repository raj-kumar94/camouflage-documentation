---
description: >-
  Make specific variants visible only to logged-in customers carrying a
  particular tag - VIP, B2B, Wholesale, or any custom segment.
---

# Show variants only to VIP / B2B / wholesale customers

Reserve specific variants for a chosen customer segment by tagging customers in Shopify and then telling Camouflage "this variant is for tag X only - hide it from everyone else."

Real-world scenarios:

* **B2B-only bulk packs.** Your B2B customers get a "Case of 24" SKU that retail customers never see.
* **Wholesale tier exclusives.** `Wholesale-Gold` customers can buy a "Trade Pack" colourway that `Wholesale-Bronze` customers cannot.
* **VIP-exclusive launches.** Tag your top 100 customers `VIP` and reveal an early-access colourway to them while it stays hidden from the public.
* **Staff / employee SKUs.** A discounted variant only visible to customers tagged `Staff`.

## How customer tags work

Customer tags are managed in Shopify, not Camouflage:

1. Open a customer in **Shopify admin → Customers**.
2. In the **Tags** field on the right-hand sidebar, type the tag (e.g. `VIP`, `B2B`, `Wholesale-Gold`) and press Enter.
3. Save.

A customer can have any number of tags. Common patterns:

* A single tag like `B2B` covering all wholesale buyers.
* Tier tags like `Wholesale-Bronze`, `Wholesale-Silver`, `Wholesale-Gold` for graduated access.

{% hint style="warning" %}
Customer tags only apply to **logged-in** shoppers. Anonymous visitors have no tags and won't see the tagged-exclusive variants. If you want exclusive variants visible to logged-out shoppers too, you'd need a different rule pattern - open the in-app chat and we'll help you think it through.
{% endhint %}

## Before you start

1. Make sure the theme setup is done correctly. Refer to [Step 1](../camouflage-setup-guide/basic-configuration.md).
2. Tag the customers you want to give access to (see above).
3. Decide whether you want to apply the rule to one product (use the individual flow) or many products at once (use the bulk-rules flow).

## Option A - show a variant only to tagged customers (one product)

Use this when you want to give VIPs access to a specific colour / size on one specific product.

1. Go to the Camouflage app → `Hide specific variants` page → `Select variants individually` tab.
2. Search for the product.
3. Click the **"Select variants"** button.
4. Select the variants you want to make tag-exclusive.
5. Click **"Hide from countries"** - yes, the same flow handles customer tags too. (The label will likely be expanded to also mention customer tags in the next UI revision.)
6. In the modal, find the **Customer tags** field. Enter the tag (e.g. `VIP`).
7. Save.

The variant is now hidden from everyone - including logged-out shoppers - and visible only to customers logged in with the `VIP` tag.

## Option B - show variants only to tagged customers (many products at once)

Use this when the rule should apply to a whole product type, a whole tag, or many products at once.

1. Go to the Camouflage app → `Hide specific variants` page → `Global hide rules` tab.
2. Click **"+Add Rule"**.
3. Pick a rule type:
   * **Product Option Rule** - match by option name + values (e.g. all "Wholesale" sizes).
   * **Variant Title Rule** - match by full variant titles.
   * **Variant SKU Rule** - match by SKU patterns.
4. Set the option name and values you want to hide from non-tagged customers.
5. In the **Customer tags** field, enter the tag(s) of customers who **should still see** the variant. *(Yes - somewhat counter-intuitive: list the tag that means "still allowed to see this.")*
6. Optionally limit the rule to a specific **product type** or **product tag** so the rule only applies to part of your catalogue.
7. Click **"Save Rules"**.

{% hint style="info" %}
For a rule that says "show these variants only to a tagged customer", you're effectively telling Camouflage: "hide these variants from everyone whose tags do not include the listed tag." The behaviour is "hide unless tagged."
{% endhint %}

## Combining with other features

* **Tag + country.** "VIP-tagged customers in the US see this exclusive colourway." Add both a country list and a customer tag.
* **Tag + schedule.** "VIPs see this colourway from Oct 15, public from Nov 1." See [Schedule hide variants for launches & sales](schedule-hide-variants-for-launches-and-sales.md).
* **Multiple tier tags.** Tag your top customers `Gold` and the next tier `Silver`. Add `Gold, Silver` (comma-separated) in the Customer tags field to allow either tier in.

## Verify it's working

The fastest way:

1. Open your store in a regular browser tab while **logged out** - the variant should be hidden.
2. Log in as a test customer **with** the required tag (you can create a test customer in Shopify admin and tag them).
3. Reload the product page - the variant should now appear.
4. Log in as a test customer **without** the tag - the variant should be hidden again.

## Make the hidden variants visible again

* **Option A (individual):** Re-open the variant in `Select variants individually`, click the 3 dots near the action buttons, and click **"Undo hide from countries"** (which also removes the customer-tag restriction).
* **Option B (bulk rule):** Go to the `Global hide rules` tab, delete the rule, and click **"Save Rules"**.

***

### Related

* [Hide variants from specific customer groups (the opposite)](hide-variants-from-b2b-or-wholesale-customers.md) - hide from a tag instead of show-only-to a tag
* [Hide variants in bulk regardless of inventory quantity](hide-variants-in-bulk-regardless-of-inventory-quantity.md) - full bulk-rules walkthrough
* [Hide specific variants based on countries](hide-specific-variants-based-on-countries.md) - same flow handles country filtering

**Need help?** If the variant isn't appearing for the right customers, double-check the customer's tags in Shopify admin first. Then [Troubleshooting](../troubleshooting.md) or open the in-app chat from your Camouflage dashboard.
