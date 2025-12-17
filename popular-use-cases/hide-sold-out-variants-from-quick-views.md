# Hide sold out variants from Quick views

Camouflage may know when a quick view has been opened and what the product details are for the quick view product, since every theme may implement quick views in their own way. Camouflage offers a function that you can call whenever a quick view button is pressed or when the quick view UI is opened.

```javascript
// call this when a quick view is triggered
window.CAMOUFLAGEE.initCamouflageQuickViewUsingProductHandle({
    product_handle: "actual-product-handle",
    quick_view_variants_container: ".actual-quick-view-container",
    is_quick_view_cached: false, // optional
    selected_or_first_available_variant_id: null, // optional
});
```

`product_handle` and `quick_view_variants_container` are required

`product_handle` is the handle of the product. Replace `"actual-product-handle"` with the product's handle.

`quick_view_variants_container`  is the CSS selector of the quick view that can be uniquely identified for the current product. Replace `".actual-quick-view-container"` with the actual css selector of the variant picker container within the quick view.



### Enable Camouflage on quick views as well

After the above is done, go to Camouflage app -> open the setup page -> switch to the Advanced setup tab -> tick the `Enable Camouflage in the quick view` checkbox and click `Save`&#x20;



{% hint style="info" %}
If you face any difficulties setting this up, please feel free to reach out to us via in-app chat support or email to raj@codecrux.dev
{% endhint %}

