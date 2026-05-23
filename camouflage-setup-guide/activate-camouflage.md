# 2️ Step 2: Activate Camouflage in the theme

After you've finished [Step 1](basic-configuration.md), you need to switch Camouflage **on** inside your theme. Without this step Camouflage is installed but not running on your storefront.

{% hint style="info" %}
Want to test Camouflage on a copy of your theme first, without touching the live store? Use a draft theme — see [Testing in a draft theme](testing-in-a-draft-theme.md).
{% endhint %}

## The fast way (one click)

1. Open the Camouflage app from your Shopify admin.
2. On the Setup page, click the **"Enable Camouflage"** button.
3. Shopify will open the **Theme customiser** with the Camouflage app embed already selected.
4. Click the **"Save"** button at the top right corner of the customiser.

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

That's it. Refresh any product page in your store — sold-out / unavailable variants should now behave the way you configured on the Setup page (hidden, strike-through, or disabled).

## The manual way (any theme)

If the "Enable Camouflage" button doesn't open the customiser, or you want to enable Camouflage on a different theme, you can do it manually:

1. Go to Shopify admin → **Online Store → Themes**.
2. On the theme you want to enable, click **Customise**.
3. In the customiser's left sidebar, click the **App embeds** icon (looks like a puzzle piece).
4. Find **"Camouflage sold variants"** in the list and toggle it **on**.
5. Click **Save** at the top right.

The short video below walks through exactly that:

{% embed url="https://camouflage-hoos.s3.ap-south-1.amazonaws.com/enable+camouflage+in+app+embeds.mp4" %}

## Verify it's running

After saving, open any product in your store (in a regular browser tab, not the customiser) and check:

* Sold-out colour / size options behave the way you chose on the Setup page.
* The "Add to cart" button updates correctly when you switch variants.
* No console error messages appear in the page.

{% hint style="warning" %}
Still seeing the sold-out variants? Try a **hard refresh** first (`Cmd/Ctrl + Shift + R`) — your browser may be caching the old page. If that doesn't help, see [Troubleshooting](../troubleshooting.md).
{% endhint %}

## Next step

* Want to fine-tune behaviour like inventory thresholds, exception tags, or hiding variants with no image? Continue to [Advanced Setup (optional)](advanced-setup-optional.md).
* If something's not behaving correctly, head over to [Troubleshooting](../troubleshooting.md) or open the in-app chat from the Camouflage dashboard — we're happy to help.
