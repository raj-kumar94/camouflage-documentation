# 🪶 Featured Product - Variant picker on any page

{% hint style="info" %}
**For merchants:** if you only need this on a standard Shopify 2.0 theme, just tick the "**Enable Camouflage in featured product**" checkbox under the Camouflage app → Setup → Advance Setup tab. The snippets below are for theme developers handling featured-product blocks on custom or unsupported themes.
{% endhint %}

This page is closely related to [Quick View](quick-view.md) — both use the same underlying `initCamouflageQuickViewUsingProductHandle` function. Featured-product blocks are essentially "always-open quick views" on landing pages, the home page, or any section that promotes a single product outside the main product page.

## Configuration for themes

### Dawn

{% code lineNumbers="true" %}
```javascript
document.addEventListener('hoos:script2loaded', () => {
  const startCamouflageQuickView = (productHandle, variantsContainer) => {
    const classToCheck = 'camouflage-added';
    if (!variantsContainer.classList.contains(classToCheck)) {
        window.CAMOUFLAGEE.initCamouflageQuickViewUsingProductHandle({
          productHandle: productHandle,
          quick_view_variants_container: variantsContainer,
          is_quick_view_cached: false,
          is_featured_product: true,
          source: 'quick_view'
        });
        variantsContainer.classList.add(classToCheck);
    }
  }

  // for all the featured products section
  document.querySelectorAll('.featured-product').forEach(featuredProduct => {
    const productHandle = featuredProduct.querySelector('a.product__view-details')?.href?.split('/')?.pop();
    if (!window.initCamouflage) {
      document.addEventListener('hoos:scriptloaded', () => {
        startCamouflageQuickView(productHandle, featuredProduct);  
      });
    } else {
      startCamouflageQuickView(productHandle, featuredProduct);
    }
  });
});
```
{% endcode %}

{% hint style="info" %}
You may only need to change the lines 14 and 15 to loop through all featured blocks and find the product handle in each featured product block.

Eg: In the Dawn theme, the featured product section has a class "<mark style="color:blue;">.featured-product</mark>" and each section has an anchor tag with class <mark style="color:blue;">product\_\_view-details</mark> that has the product handle/link
{% endhint %}

