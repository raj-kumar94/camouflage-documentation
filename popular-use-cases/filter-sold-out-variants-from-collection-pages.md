# Filter sold out variants from Collection pages

This feature rewrites all collection page links to append the `filter.v.availability=1` param to the URL. The result is that when a customer goes to a collection page, the sold-out items (products and variants) are filtered out.

To enable this, visit the <code class="expression">space.vars.SETUP_PAGE</code> ->  <code class="expression">space.vars.SETUP_TAB_ADVANCE</code> -> tick the <code class="expression">space.vars.FEATURE_COLLECTION_FITER</code> checkbox and update the settings.

<figure><img src="../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>



{% hint style="info" %}
Note: You must enable the "Availability" filter from the "Search & Discovery" app by Shopify. See the video below for the steps to enable the Availability filter if you don't have done it already.
{% endhint %}

{% embed url="https://camouflage-hoos.s3.ap-south-1.amazonaws.com/add+availability+filter.mp4" %}
