# Hide specific variants using metafields

You can set a metafield on variants for Camouflage to hide them on your website. If you have hundreds of products where specific variants/SKUs need to be hidden, using metafields would be perfect.



### Before you select and hide any variants

1. Make sure the theme setup is done correctly. Refer to [Step 1](../camouflage-setup-guide/basic-configuration.md)
2. Go to the Camouflage app -> `Hide specific variants` page -> `Select variants individually` tab
3. If you want to hide only the specifically selected variants, tick the checkbox `Hide only spefically selected variants` at the top of the page.



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

Manually setting each variant's metafield in Shopify admin can be a lot of work. You can intead use a third party app or APIs to manage metafields in bulk for multiple variants. Remember, the namespace of the metafield to use is `camouflage_custom` and the key is `always_hide`
