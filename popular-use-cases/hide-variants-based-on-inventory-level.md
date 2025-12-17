# Hide variants based on inventory level

You can set inventory level threshold on variants to "mark" a variant as sold out for Camouflage.

Eg: If you set the threshold inventory to 3, Camouflage will consider a variant to be sold out when the inventory is 3 or less. Depending on your "action on sold out variants" set in the Setup page of Camouflage, the variants will get hidden, strike-through or disabled.



To set a threshold quantity, go to the <code class="expression">space.vars.SETUP_PAGE</code> -> Switch to <code class="expression">space.vars.SETUP_TAB_ADVANCE</code> and then tick the "<code class="expression">space.vars.FEATURE_INVENTORY_THRESHOLD</code> checkbox.

It will ask you to enter the custom threshold quantity. Enter a number greater than 0 and update the settings.

<figure><img src="../.gitbook/assets/image (33).png" alt=""><figcaption></figcaption></figure>

