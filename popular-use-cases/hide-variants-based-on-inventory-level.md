# Hide variants based on inventory level

By default, Shopify only considers a variant "sold out" when its inventory hits **zero**. With Camouflage you can set a higher threshold so a variant is treated as sold out **before** it actually runs out - useful when:

* You want to hold back the last few units for in-store walk-ins, wholesale orders, or returns processing.
* You're seeing too many "near sold-out" situations where two shoppers race to buy the last item.
* You're carrying samples in inventory that you don't want to sell online.

## How the threshold works

You set a single number. Any variant with inventory **at or below** that number gets the same treatment you chose for sold-out variants on your Setup page (hide, strike-through, or disable).

| Threshold | Variant inventory | What happens? |
| --------- | ----------------- | ------------- |
| 3         | 5                 | Visible normally |
| 3         | 3                 | Treated as sold out |
| 3         | 0                 | Treated as sold out (always) |

So if your sold-out action is **Hide**, a variant with 3 units left disappears from the picker. If your action is **Strike-through**, it shows up crossed out.

## How to set it up

1. Open the Camouflage app from your Shopify admin.
2. Go to the **Setup** page.
3. Switch to the **Advance Setup** tab.
4. Tick the **"Hide variants based on inventory level"** checkbox.
5. Enter a threshold number greater than 0 (e.g. `3`).
6. Click **Save**.

<figure><img src="../.gitbook/assets/image (33).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
The threshold applies to **all** products and variants in your store. If you want a different threshold for a specific product or variant, contact us via in-app chat - we can help you set per-product rules.
{% endhint %}

## Verify it's working

1. Pick a product where one variant has low inventory (at or below your threshold).
2. Open that product in your storefront in a regular browser tab.
3. The low-stock variant should now be hidden / struck-through / disabled - the same way sold-out variants are.

If it's not behaving as expected, see [Troubleshooting](../troubleshooting.md).

## Related

* Tweak what happens to sold-out variants: [Step 1: Setup basic configuration](../camouflage-setup-guide/basic-configuration.md)
* Always hide specific variants regardless of inventory: [Hide specific variants regardless of inventory quantity](hide-specific-variants-regardless-of-inventory-quantity.md)
