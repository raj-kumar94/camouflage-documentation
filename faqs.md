# FAQs

<details>

<summary>How to find the theme name?</summary>

Go to Shopify Admin -> Sales Channels -> Online Store -> Themes

You can find the theme name just below the Last saved information. Refer to the following screenshot:

<img src=".gitbook/assets/find-theme-name (1).webp" alt="" data-size="original">

</details>

<details>

<summary>How to enable the app?</summary>

Navigate to Shopify admin -> Themes -> Click on Customise button -> Click on App embeds Icon at the left sidebar -> Click on the switch button next to **Camouflage sold variants** and Save

The direct link to activate Camouflage can be found in the [step 2](https://camouflage.codecrux.dev/) of the Setup page. If it still doesn't work for you, please reach out to us via chat or email.

<figure><img src=".gitbook/assets/activate-camouflage.webp" alt=""><figcaption></figcaption></figure>

{% embed url="https://camouflage-hoos.s3.ap-south-1.amazonaws.com/enable+camouflage+in+app+embeds.mp4" %}

</details>

<details>

<summary>I want to test Camouflage in a non-live (draft) theme. Is it possible?</summary>

Yes, you can test Camouflage in a non-live (draft) theme.

Just navigate to Shopify admin -> Themes -> Click on Customise button of the draft theme -> Click on App embeds Icon at the left sidebar -> Click on the switch button next to **Camouflage sold variants** and Save.

</details>

<details>

<summary>The app works in the preview link and theme editor but does not work in the online store.</summary>

Most probably you're looking at a product that has 2 or 3 product options/dropdowns (eg: Color, Size and Material options). You are just one step away from making it work in the online store as well by upgrading (14 days trial before you pay).

**Examples of product having 1 product option (Size options):**

![Product with 1 option](.gitbook/assets/product-1-option.png)

**Examples of product having 2 product options (Size and Width options):**

![Product with 2 options](.gitbook/assets/product-2-options.png)

</details>

<details>

<summary>What is the product with '1 option' or '2 options'? Is it different from variants?</summary>

To understand it with example, product options are Size/Color/Material etc. Variant are the combination of product options. eg: Small/Red, Medium/Red, Medium/Blue etc.

**Examples of product having 1 product option (Size options):**

![Product with 1 option](.gitbook/assets/product-1-option.png)

**Examples of product having 2 product options (Size and Width options):**

![Product with 2 options](.gitbook/assets/product-2-options.png)

</details>

<details>

<summary>What is the difference between "Sold out" and "Unavailable" variants?</summary>

**Sold out variant:** When a variant exists in the Shopify admin but there is no inventory to sell, the variant is Sold out.

**Unavailable variant:** If the variant doesn't exist in Shopify admin, it is called Unavailable variant. It happens only when the product has 2 or more options. Eg: Size and Color options.

**Example:** If you have a Red/XL variant, it might be in-stock or out-of-stock. But if Red/XXL variant doesn't exist but the product has XXL size in other colors, Red/XXL will be called Unavailable variant.

</details>

<details>

<summary>How to hide specific variants of a product?</summary>

After the basic setup is done on the setup page, Go to the [Hide specific variants](https://camouflage.codecrux.dev/hide-specific-variants?tab=individual) page. Then search for the product and click on **Select Variants** button. Select variants to hide and then click on **Always hide**.

To unhide the variants, select those variants, click on the 3 dots near the action buttons and then click on **Undo always hide**.

</details>

<details>

<summary>How to filter sold out variants from Collection page results?</summary>

**Step 1:** Add the Availability filter from Shopify's Search & Discovery app.

**Step 2:** Follow the instructions in the [Advance setup tab](https://camouflage.codecrux.dev/?step=3)

[Checkout the result](https://camouflage-demo.myshopify.com/collections/all?filter.v.availability=1) (password: camouflage)

</details>

<details>

<summary>My theme is listed in the supported themes list, but it is still not working for me.</summary>

This can happen if you have modified the variant selectors in your product page or have integrated any third party app that changes variant selectors. You can still reach out to us so that we can have a look at your current product page structure and make Camouflage work.

</details>

<details>

<summary>Does the app work in a product QuickView?</summary>

If you are using a Shopify free 2.0 theme, yes! Go to the Setup page -> Advance Setup tab and tick the checkbox **"Enable Camouflage in the quick view"**.

If it doesn't work out of the box or if you've any other theme, check [this guide](https://codecrux-dev.gitbook.io/camouflage-api-doc/camouflage-setup-guide/popular-use-cases/hide-sold-out-variants-from-quick-views) or contact us.

</details>

<details>

<summary>Does the app work in a Featured Product section?</summary>

Yes. To activate Camouflage on featured product sections, go to the Setup page -> Advance Setup tab and tick the checkbox **"Enable Camouflage in featured product"**.

If it doesn't work out of the box, please feel free to contact us.

</details>

<details>

<summary>Even after applying all the settings, the app doesn't work. Can it support my theme?</summary>

It is possible that your theme might need some extra setup from our end. It just takes a few minutes to make it support a theme that is not heavily customised for the product variant pickers. Please feel free to reach out to us via chat/email for the same.

</details>

<details>

<summary>I have changed my theme and now the app doesn't work.</summary>

Please update the theme and variant picker information, and activate the app on your new theme by following the step 1 & 2 in the setup page. Make sure you click on the **"Save"** button at the top right corner in the theme customiser.

</details>

<details>

<summary>How does hide specific variants feature work?</summary>

It marks the variant as sold out and hides from the customers. It doesn't prevent customers from buying the product if they previously had added the variant to the cart. It is recommended to not display variants at multiple places where the in-stock variants could be exposed for customers to add to the cart.

</details>

<details>

<summary>How to turn off the app?</summary>

Please follow these steps:

Navigate to Shopify admin -> Themes -> Customise -> Click on App embeds Icon at the left sidebar -> Click on the switch button next to **Camouflage sold variants** and Save

</details>

<details>

<summary>If I remove the app, will the hidden variants show again?</summary>

Yes, all variants hidden by Camouflage will show again.

</details>
