# Filter sold out variants from Collection pages

## What this does

When this feature is on, every link to a collection page in your store gets an "in stock only" filter automatically applied. So when a shopper clicks **Collections → Shoes**, they only see products with at least one variant in stock — no sold-out products in the grid at all.

This is different from hiding **swatches** on the collection page (which shows the product but greys out unavailable colours). Use this feature when you want to remove entire sold-out **products** from view.

## Before you enable it

You must first enable the **Availability** filter in Shopify's free **Search & Discovery** app. Without it, the filter has nothing to apply.

{% hint style="info" %}
If you don't already have the Availability filter set up, this short video walks through enabling it in Search & Discovery:
{% endhint %}

{% embed url="https://camouflage-hoos.s3.ap-south-1.amazonaws.com/add+availability+filter.mp4" %}

## Enable it in Camouflage

1. Open the Camouflage app from your Shopify admin.
2. Go to the **Setup** page.
3. Switch to the **Advance Setup** tab.
4. Tick the **"Filter sold out variants from Collection pages"** checkbox.
5. Click **Save**.

<figure><img src="../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

## Verify it's working

Open your storefront in a regular browser tab and click any link that leads to a collection page (the main nav, "Shop all", category pages, etc.). The URL should now end with `?filter.v.availability=1` and sold-out products should be absent from the grid.

{% hint style="warning" %}
The first navigation might still show cached results — do a hard refresh (`Cmd/Ctrl + Shift + R`) to see the change.
{% endhint %}

## Want sold-out **swatches** hidden instead?

If you want to keep showing sold-out **products** but hide unavailable **colours / sizes** on each card, that's a different feature — see [Hide sold out color swatches from Collection pages](hide-sold-out-color-swatches-from-collection-pages.md).
