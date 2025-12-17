# 🌐 Global functions

{% hint style="info" %}
Camouflage's global functions are either attached to `window` or <mark style="color:blue;">`window.CAMOUFLAGEE`</mark> <mark style="color:blue;"></mark><mark style="color:blue;">object</mark>&#x20;
{% endhint %}



## 1. Variant hiders

### window.initCamouflage

```jsx
window.initCamouflage({
    ...window.camouflage_global_config,
    product: camouflage_product,
    selected_or_first_available_variant_id: selected_or_first_available_variant_id,
    hide_oos_variant_qty: hide_oos_variant_qty, // not required if variant.inventory_quantity is set
    ...product_metafields // sets always_hide, always_show, schedule_hide and always_hide_show_field
});
```

### window.getCamouflageAvailableVariants

```jsx
window.getCamouflageAvailableVariants = (product, availableVariants) => {
    if (!product.available) {
        return { product, availableVariants: product.variants };
    }
    return { product, availableVariants };
}
```

### window.getCamouflageProduct

```jsx
window.getCamouflageProduct = async (product) => {
    // make API call or add more variants to the product or apply custom logic for the product
    return product;
}
```

### **Combine variants (Product variant reloaded integration)**

```jsx
window.getCamouflageProduct = () => {
    const finalProduct = {{ product | json }};
    finalProduct.variants = {{ shsd_product_variants | json }};
    finalProduct.from_function = true;
    return finalProduct;
}
```

### window.**getHoosObj**

```jsx
const params = {
    ...window.camouflage_global_config,
    product: camouflage_product,
    selected_or_first_available_variant_id: selected_or_first_available_variant_id,
    hide_oos_variant_qty: hide_oos_variant_qty, // not required if variant.inventory_quantity is set
    ...product_metafields // sets always_hide, always_show, schedule_hide and always_hide_show_field
};
const hoosObj = window.getHoosObj(params);
```

### window.camouflagePostSelectorsSet

```javascript

window.camouflagePostSelectorsSet({ hoosObj });

```

### window.camouflageDispatchVariantChange

Usecase: `Symmetry 6.0.0` has to fire change event on `.option-selectors` as it doesn't fire the change event on input

```javascript
window.camouflageDispatchVariantChange = ({
    selectElem, selectedValue, index, hoosObj,
}) => {
    if (selectElem && selectElem.nodeName === 'INPUT') {
        const variantPicker = selectElem.closest('option-selectors');
        if (variantPicker) {
            variantPicker.dispatchEvent(new Event('change'));
        }
    }
}
```

## 2. Quick view

### window.CAMOUFLAGEE.**initCamouflageQuickViewUsingProductHandle**

```jsx
window.CAMOUFLAGEE.initCamouflageQuickViewUsingProductHandle({
  productHandle: productHandle,
  quick_view_variants_container: '.qview-variants .qview-fields',
  is_quick_view_cached: false
});
```

### window.CAMOUFLAGEE.startQuickViewFromEvent

```jsx
document.addEventListener('hoos:script2loaded', () => {
    window.CAMOUFLAGEE.startQuickViewFromEvent('quickview:loaded', document);
});
```

### window.camouflagePreQuickviewFunction

```jsx
if (typeof window.camouflagePreQuickviewFunction === "function") {
    const result = window.camouflagePreQuickviewFunction({ event });
    if (result && result.productHandle) productHandle = result.handle;
    if (result && result.quick_view_variants_container) quick_view_variants_container = result.quick_view_variants_container;
}
```

## 3. Filters

### window.CAMOUFLAGEE.setAvailabilityFilterInCollectionLinks

```jsx
window.camouflagePreQuickviewFunction = ({ event }) => {
    return {
        handle: event.target.productHandle,
        quick_view_variants_container: event.target.mainContainer,
    };
}
```

## 4. Product Grid

### window.CAMOUFLAGEE.startCamouflageProductGrid

```jsx
window.CAMOUFLAGEE.startCamouflageProductGrid({ theme_name: '' });
```

### window.camouflagePostProductGridFunction

* Can be used to update price of the product and fix other issues on product cards

```jsx
window.camouflagePostProductGridFunction = ({
    productGridItem: productGrid[i], product, handle, availableOptions, allOptions, markedUnavailableOptions, availableVariants,
}) => {
	// TODO...
}
```

## 5. Image Hide or 1 product option variants hide

```javascript
window.camouflagePostImageHideFunction({ hoosObj, mediaObj, availableVariants })
```

## 6. Pre and Post Script Functions

### window.camouflagePreScriptFunction

```jsx
window.camouflagePreScriptFunction({ camouflage_global_config });
```

### window.camouflagePreQuickviewFunction

```jsx
if (typeof window.camouflagePreQuickviewFunction === "function") {
    const result = window.camouflagePreQuickviewFunction({ event });
    if (result && result.productHandle) productHandle = result.handle;
    if (result && result.quick_view_variants_container) quick_view_variants_container = result.quick_view_variants_container;
}
```

### window.camouflagePostSelectorsSet

```javascript
window.camouflagePostSelectorsSet = ({ hoosObj }) => {
    // selectors have been set so far
}
```

