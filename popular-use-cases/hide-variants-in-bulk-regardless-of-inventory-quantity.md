# Hide variants in bulk regardless of inventory quantity

You can set a rule to hide multiple variants across different products at once. You can also limit the variants to be hidden based on product tags or product types. Even you can set conditions like if a customer is tagged with "B2B" and is browsing from "United States", hide specified variants etc.



### Before you select and hide any variants

1. Make sure the theme setup is done correctly. Refer to [Step 1](../camouflage-setup-guide/basic-configuration.md)
2. Go to the Camouflage app -> `Hide specific variants` page -> `Select variants individually` tab
3. If you want to hide only the specifically selected variants, tick the checkbox `Hide only spefically selected variants` at the top of the page.



### Let's hide a specific variant

1. Go to the Camouflage app -> `Hide specific variants` page -> <code class="expression">space.vars.FEATURE_GLOBAL_HIDE_RULE_TAB</code> tab
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
