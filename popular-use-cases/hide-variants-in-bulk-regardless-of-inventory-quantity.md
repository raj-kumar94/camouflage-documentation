# Hide variants in bulk regardless of inventory quantity

Set a single rule that hides matching variants across **many products at once** — handy when you need to pull a size, colour, or SKU pattern site-wide, e.g. "hide every XS size during a manufacturing delay" or "hide all Navy Blue items from B2B customers in the US."

You can layer extra conditions on each rule:

* Limit to products with specific **tags** (e.g. `seasonal-summer`).
* Limit to products of a specific **type** (e.g. "Sweatshirts").
* Show or hide only for tagged **customers** (e.g. B2B / VIP).
* Restrict to specific **countries**.



### Before you select and hide any variants

1. Make sure the theme setup is done correctly. Refer to [Step 1](../camouflage-setup-guide/basic-configuration.md)
2. Go to the Camouflage app -> `Hide specific variants` page -> `Select variants individually` tab
3. If you want to hide only the specifically selected variants, tick the checkbox `Hide only specifically selected variants` at the top of the page.



### Let's hide a specific variant

1. Go to the Camouflage app -> `Hide specific variants` page -> `Global hide rules` tab
2.  Click +Add Rule button<br>

    <figure><img src="../.gitbook/assets/image (35).png" alt=""><figcaption></figcaption></figure>
3.  Select a rule type. Options are - "Product Option Rule", "Variant Title Rule" and "Variant SKU Rule".\
    \
    **Product Option Rule -** You can set a rule on product options like Size, Color, Material etc.\
    \
    **Variant Title Rule -** You can enter a list of full variant titles to match variants to hide across different products. Eg: if you enter `Red / XL` and `Blue / XL` , then the XL size in the Red and Blue color will get hidden for all products\
    \
    **Variant SKU Rule -** You can enter a list of SKUs to match variants to hide across different products.\
    \
    In our example, we'll select "Product Option Rule".

    <figure><img src="../.gitbook/assets/image (36).png" alt=""><figcaption></figcaption></figure>
4.  Set the form fields `Option name`, `Option values` and Optional fields in the `Step 2`\
    \
    The following example will hide Deep Red and Navy Blue Color options if the product type is "Sweatshirts" and if the current customer is tagged with B2B

    <figure><img src="../.gitbook/assets/image (37).png" alt=""><figcaption></figcaption></figure>


5. Click "Save Rules" button and head over to your website to see the results.

### Make the hidden variants visible again

Just delete the rule and click "Save Rules" button.

***

**Need help?** If a rule isn't behaving the way you expect, see [Troubleshooting](../troubleshooting.md) or open the in-app chat from your Camouflage dashboard.
