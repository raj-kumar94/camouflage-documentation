---
description: >-
  Hide specific variants from customers carrying a particular tag — the
  inverse of the VIP-only pattern. Useful when wholesale or B2B customers
  shouldn't see consumer-priced or single-unit variants.
---

# Hide variants from B2B / wholesale customers

The "show only to tagged customers" pattern has a useful inverse: **hide a variant from anyone carrying a tag, while still showing it to everyone else** (including logged-out shoppers).

Real-world scenarios:

* **B2B catalogues shouldn't show retail-priced single units.** Hide the "Pack of 1" SKU from `B2B`-tagged customers — they should only see "Pack of 12" and "Pack of 24."
* **Hide promo / clearance variants from wholesale buyers.** Your "30% off summer leftovers" SKU is for retail customers only — `Wholesale`-tagged customers shouldn't see it on the picker.
* **Staff-only hidden products.** A separate SKU only meant for retail customers, while staff (tagged `Staff`) should see a different one.
* **Region-specific buyer types.** A variant available to consumers (logged-out, anonymous, or non-B2B-tagged) but blocked for distributors who'd circumvent pricing rules.

## The pattern: a customer tag prefixed with `-`

Camouflage uses a simple convention: **prefix a customer tag with a minus sign** (`-Tag`) to mean "hide from anyone whose tags include this."

* `B2B` → hide unless the shopper has the `B2B` tag (the [VIP-only pattern](show-variants-only-to-vip-or-b2b-customers.md)).
* `-B2B` → hide **from** anyone with the `B2B` tag.

You can list multiple tags. `-B2B, -Wholesale` means "hide from anyone with `B2B` *or* `Wholesale`."

## Before you start

1. Make sure the theme setup is done correctly. Refer to [Step 1](../camouflage-setup-guide/basic-configuration.md).
2. Tag the customers you want to **block**:
   * Shopify admin → Customers → open a customer → Tags field → add the tag (e.g. `B2B`) → Save.
3. Decide whether the rule applies to one product (individual flow) or many products at once (bulk-rules flow).

## Option A — hide a variant from tagged customers (one product)

1. Go to the Camouflage app → `Hide specific variants` page → `Select variants individually` tab.
2. Search for the product.
3. Click the **"Select variants"** button.
4. Select the variant(s) you want to block from B2B / wholesale.
5. Click **"Hide from countries"** (same flow handles customer tags).
6. Find the **Customer tags** field. Enter the tag with a minus prefix, e.g. `-B2B`.
7. Save.

The variant is now visible to **everyone except** customers tagged `B2B`.

## Option B — hide variants from tagged customers (many products at once)

1. Go to the Camouflage app → `Hide specific variants` page → `Global hide rules` tab.
2. Click **"+Add Rule"**.
3. Pick a rule type (Product Option, Variant Title, or Variant SKU).
4. Set the option name + values to match the variants you want hidden from B2B.
5. In **Customer tags**, enter `-B2B` (or `-B2B, -Wholesale` for multiple).
6. Optionally narrow the rule to specific **product types** or **product tags**.
7. Click **"Save Rules"**.

## Verify it's working

1. Open your store in an incognito tab (logged out) — the variant **should be visible**.
2. Log in as a test customer **with** the `B2B` tag — the variant **should be hidden**.
3. Log in as a test customer **without** the `B2B` tag — the variant **should be visible**.

## Common pitfalls

<details>

<summary>Logged-out shoppers can still see the variant — is that right?</summary>

Yes, that's the whole point of the `-Tag` pattern. Anonymous / logged-out shoppers don't carry any customer tags, so the "hide from `B2B`" rule doesn't apply to them — they see the variant normally.

If you want to **also** hide the variant from anonymous shoppers, you have two options:

* Use the **positive** pattern instead: list the tags of customers who *should still see* the variant (e.g. `Retail`). Anyone whose tags don't include `Retail` — including logged-out shoppers — won't see the variant. See [Show variants only to VIP / B2B / wholesale customers](show-variants-only-to-vip-or-b2b-customers.md).
* Make it a permanent `Always hide` (see [Hide specific variants regardless of inventory quantity](hide-specific-variants-regardless-of-inventory-quantity.md)) — but that hides from everyone, including retail customers.

</details>

<details>

<summary>The B2B customer can still see the variant after logging in</summary>

Check:

* The customer actually has the `B2B` tag in Shopify admin → Customers (no typo, no extra whitespace).
* The customer is logged in on the storefront (not just on Shopify admin) — open the same browser session that's logged in.
* You used the exact same case — `B2B`, not `b2b`. Customer tags are case-sensitive in Camouflage rules.
* Browser cache. Try a hard refresh (`Cmd/Ctrl + Shift + R`).

</details>

<details>

<summary>I want different variants hidden from different customer tiers</summary>

Set up multiple rules — one per tier:

* "Hide bulk-pack from `-Retail`" (so only retail customers can't see it… wait, that's the opposite). Use the positive form: "Show bulk-pack only to `B2B-Gold`."
* "Hide consumer-priced single unit from `-B2B`" — hide it from any B2B customer.
* "Hide promotional SKU from `-Wholesale, -B2B`" — hide it from anyone in the wholesale or B2B segments.

The [Global hide rules](hide-variants-in-bulk-regardless-of-inventory-quantity.md) tab is the right place when you have multiple tier-specific rules.

</details>

## Make the hidden variants visible again

* **Option A (individual):** Re-open the variant in `Select variants individually`, click the 3 dots near the action buttons, click **"Undo hide from countries"**.
* **Option B (bulk rule):** `Global hide rules` tab → delete the rule → **"Save Rules"**.

***

### Related

* [Show variants only to VIP / B2B / wholesale customers](show-variants-only-to-vip-or-b2b-customers.md) — the positive form
* [Hide specific variants based on countries](hide-specific-variants-based-on-countries.md) — same flow, country-based
* [Hide variants in bulk regardless of inventory quantity](hide-variants-in-bulk-regardless-of-inventory-quantity.md) — bulk-rules walkthrough

**Need help?** If the rule isn't behaving the way you expect, see [Troubleshooting](../troubleshooting.md) or open the in-app chat from your Camouflage dashboard.
