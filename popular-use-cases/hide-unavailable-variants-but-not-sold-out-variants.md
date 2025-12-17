# Hide Unavailable variants but not sold-out variants

### Background:

When a variant exists in the Shopify admin but there is no inventory to sell, the variant is called **"Sold out"**. However, if the variant doesn't exist in the Shopify admin, it is called **"Unavailable variant"**. It happens only when the product has 2 or more options. Eg: **Size** and **Color** options.<br>

**Example:** If you have a Red/XL variant, it might be in-stock or out-of-stock. But if Red/XXL variant doesn't exist but the product has XXL size in other colors, Red/XXL will be called Unavailable variant.



### How to hide only unavailable variants

1. Refer to the "[Step 1](../camouflage-setup-guide/basic-configuration.md)" of the setup.&#x20;
2. Set the action on sold out variants to **"None"**
3. Tick the **"Hide Unavailable Variants**" checkbox
4. Click **"Save settings"** button

