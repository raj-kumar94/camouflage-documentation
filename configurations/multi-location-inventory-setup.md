---
icon: boxes-stacked
description: >-
  How to make sure Camouflage hides the right variants when your inventory is
  spread across multiple Shopify locations.
---

# Multi-Location inventory setup

If your store has inventory in **more than one location** (e.g. a warehouse + a retail store, or different regional warehouses), Shopify reports a variant as **available** even if the stock you actually ship to a given shopper is zero. To make Camouflage hide the right variants for the right shoppers, you need to tell Shopify which locations serve which countries.

This is done with **Shipping profiles** — a built-in Shopify feature, not a Camouflage setting.

{% hint style="info" %}
You only need this guide if you ship from **multiple locations** AND the products you sell at each location are different. If every location can fulfill every product, Shopify already does the right thing and you can skip this page.
{% endhint %}

## Step 1: Set up Shipping profiles

Shipping profiles tell Shopify "this product can only be fulfilled from this location, and only ships to these countries."

1. In your Shopify admin, go to **Settings → Shipping and delivery**.
2. Under **Shipping**, click **Create new profile**.
3. Add the products that ship only from this location.
4. Under **Shipping origins**, pick the location.
5. Under **Shipping zones**, add the countries this location ships to.
6. Click **Save**.

<figure><img src="../.gitbook/assets/image (30).png" alt=""><figcaption><p>Create a shipping profile in Shopify admin</p></figcaption></figure>

<figure><img src="../.gitbook/assets/image (31).png" alt=""><figcaption><p>Add products and pick the origin location + shipping zones</p></figcaption></figure>

Repeat for each location that has its own product mix.

## Step 2: Set each product's inventory per location

For products that are stocked at more than one location, make sure the per-location inventory numbers are correct. Otherwise Shopify thinks the variant is in stock globally, even if the location that ships to your customer has zero.

1. In Shopify admin, open the product.
2. Scroll to the **Inventory** section.
3. For each location, set the available quantity.

<figure><img src="../.gitbook/assets/image (32).png" alt=""><figcaption><p>Per-location inventory on a product</p></figcaption></figure>

## Step 3: Verify in Camouflage

Once Shopify is reporting variant availability correctly **per country**, Camouflage automatically picks up those signals — no extra Camouflage setting needed. Open a product page in an incognito window using a country / region that has limited stock and confirm the right variants are hidden.

## Troubleshooting

<details>

<summary>A variant is still showing as available even though that location has 0 stock</summary>

* Confirm the product is in a Shipping profile that uses the right origin location.
* Confirm the customer's country falls into a Shipping zone that's linked to that origin.
* Open the product page from an incognito browser tab in the customer's country (you can use a VPN or change your Shopify localisation country in the URL with `?country=US`).
* If it still doesn't behave correctly, please open the in-app chat — we'll inspect the setup with you.

</details>

<details>

<summary>I want country-specific hiding without using Shipping profiles</summary>

You can hide specific variants for specific countries using Camouflage's own per-variant country rules — without touching Shopify Shipping profiles. See [Hide specific variants based on countries](../popular-use-cases/hide-specific-variants-based-on-countries.md).

</details>
