---
description: >-
  Native Publishing removes hidden variants from your sales channels entirely,
  so they stop showing up in storefront search, filters, and collections - not
  just on the product page.
---

# 🚀 Remove hidden variants from search & collections (Native Publishing)

Here is a thing most merchants only notice after they have been hiding variants for a while: hiding a variant on the product page does not make Shopify forget about it. Shopify still counts that variant as published. So it keeps leaking out in places Camouflage's page-level hiding never touches:

* **storefront search** still finds it,
* **collection filters** (size, color, availability) still offer it,
* other **sales channels** connected to your store still list it.

**Native Publishing** closes that gap. Instead of only hiding the variant visually, Camouflage tells Shopify to **unpublish** it from the sales channels you choose. As far as that channel is concerned, the variant is simply not for sale. No search result, no filter option, no leak.

And when the variant should come back - you unhide it, or the rule that was hiding it no longer matches - Camouflage publishes it right back.

{% hint style="info" %}
Nothing is ever deleted. Unpublished variants stay safely in your Shopify admin with all their inventory, prices and history intact. Your Point of Sale is never touched either.
{% endhint %}

## What gets synced

Native Publishing works on the variants you hide from the **Hide specific variants** page:

| You hide variants by... | Synced to sales channels |
| --- | --- |
| Picking them individually per product ("Always hide") | ✅ Applied when you save |
| Catalog-wide rules (by option value, variant title, or SKU) | ✅ Applied during the regular sync passes |

## Before you start

* Native Publishing is available on **paid plans**.
* It currently supports stores with up to about **5,000 products**. Bigger catalog? Message us - we onboard larger stores individually.
* The first time you turn it on, Shopify will ask you to approve an **extra permission** so Camouflage is allowed to manage publishing. One click, one time.

## How to turn it on

1. Open the [**Hide specific variants**](https://camouflage.codecrux.dev/hide-specific-variants) page in the Camouflage app.
2. Tick the **Native publishing** box (it sits right next to **Hide only specifically selected variants**).
3. If Shopify asks for the extra permission, approve it. You will land back in the app - tick the box once more and you are done.

You can also manage it from the **Setup** page, under the **Advance setup** tab, where the full **Native publishing** card lives (channels, sync options, and pause).

## Choosing your sales channels

Next to the **Native publishing** checkbox you will see a small channels button showing something like `1/2`. That is how many of your sales channels Camouflage is managing. Click it to open the picker.

* **Online Store** is selected by default.
* Tick any additional channels you want Camouflage to manage, then press **Save**.
* If the button shows `0` selected, Camouflage manages nothing - the feature is effectively idle until you pick at least one channel.

{% hint style="warning" %}
**Point of Sale is not supported.** Shopify does not allow apps to manage variant publishing on POS, so your in-store sales are never affected.
{% endhint %}

You can also override the channels for a single product while hiding its variants - handy when one product should disappear from Google but stay on your Online Store.

## How it behaves day to day

* **Individual picks apply immediately.** Hide a variant, hit Save, and it comes off your selected channels right away.
* **Catalog-wide rules are applied by the sync passes.** On a large catalog, give it a few minutes.
* **Camouflage only republishes what it unpublished.** If you unpublished a product from a channel yourself, Camouflage will never sneak it back on. It keeps track of exactly which channels it removed each variant from, and restores only those.

## Pausing and turning it off

* **Pause** (on the **Advance setup** tab) stops all syncing but keeps everything exactly as it is - hidden variants stay hidden, settings stay saved. Resume whenever you like.
* **Unticking the box** on the Hide specific variants page stops Camouflage from syncing your picks and rules going forward. Variants that are already unpublished stay that way for the moment.
* Want everything **republished right away**? Open the in-app chat and we will run a full revert for you - it restores every variant to the channels it was on before Camouflage stepped in.

{% hint style="warning" %}
Planning to uninstall Camouflage? Message us first so we can revert your channels. After the app is removed we can no longer republish variants on your behalf.
{% endhint %}

## A note on checkout

Native Publishing keeps variants out of search and collections, but a determined shopper with an old direct link is a different problem. For that, pair it with checkout validation:

{% content-ref url="block-hidden-variants-at-checkout.md" %}
[block-hidden-variants-at-checkout.md](block-hidden-variants-at-checkout.md)
{% endcontent-ref %}

## FAQs

<details>

<summary>Will my variants or their data get deleted?</summary>

No, never. Unpublishing only controls where a variant is offered for sale. The variant itself, its inventory, prices, images and history all stay untouched in your Shopify admin.

</details>

<details>

<summary>Can I still see unpublished variants in my Shopify admin?</summary>

Yes. Your admin always shows the full catalog. Only the shopper-facing channels are affected.

</details>

<details>

<summary>Does this replace the normal Camouflage hiding?</summary>

No, it works on top of it. Page-level hiding reacts instantly in the shopper's browser; Native Publishing cleans up search, filters and other channels. Together they cover everything.

</details>

<details>

<summary>Why is the checkbox locked on my store?</summary>

Native Publishing is a paid-plan feature. If you are on the free plan you will see an upgrade link next to the checkbox.

</details>

Questions, or a channel behaving oddly? Open the in-app chat or email [raj@codecrux.dev](mailto:raj@codecrux.dev).
