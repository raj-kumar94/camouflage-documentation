# Hide specific variants using metafields

You can set a metafield on variants for Camouflage to hide them on your website. If you have hundreds of products where specific variants/SKUs need to be hidden, using metafields would be perfect.



### Before you select and hide any variants

1. Make sure the theme setup is done correctly. Refer to [Step 1](../camouflage-setup-guide/basic-configuration.md)
2. Go to the Camouflage app -> `Hide specific variants` page -> `Select variants individually` tab
3. If you want to hide only the specifically selected variants, tick the checkbox `Hide only specifically selected variants` at the top of the page.



### Create a metafield definition on variant

1. Go to Shopify admin -> Settings -> Metafields -> Variants -> Click **"Add definition"** button
2.  Set the following:\
    Name: Always hide\
    Namespace and key: camouflage\_custom.always\_hide\
    Description: Camouflage always hide variant\
    Type: Boolean\
    Storefront API access: Yes/Enable<br>

    <figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>


3. Click "Save" button to save the metafield



### Let's hide specific variants using metafields

Go to any variant view on your Shopify admin

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>



Scroll to the bottom of the metafields section. You should see the "Always hide" metafield we just created. Set it to True and click Save. After this you can visit your website to see the results.

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>



### Third party apps to manage metafield in bulk

Manually setting each variant's metafield in Shopify admin can be a lot of work. You can instead use a third-party app or Shopify's Bulk Editor / API to manage metafields for many variants at once. Remember the metafield namespace + key:

* **Namespace**: `camouflage_custom`
* **Key**: `always_hide`
* **Type**: Boolean (set to `True` to hide the variant)

Popular bulk-editing apps that work with this:

* **Matrixify (Excelify)** - import a CSV with one row per variant and the metafield column filled in
* **Bulk Editor in Shopify admin** - Products → select variants → "Edit products" → add the metafield column
* **Shopify's Admin API** - for engineering teams managing variant data programmatically

***

### Related

* Want to hide variants without leaving the Camouflage app? See [Hide specific variants regardless of inventory quantity](hide-specific-variants-regardless-of-inventory-quantity.md).
* Need a single rule that applies to many products at once? See [Hide variants in bulk regardless of inventory quantity](hide-variants-in-bulk-regardless-of-inventory-quantity.md).

**Need help?** Hit a snag? Read [Troubleshooting](../troubleshooting.md) or open the in-app chat from your Camouflage dashboard.
