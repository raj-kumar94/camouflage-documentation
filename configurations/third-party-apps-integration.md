# ➕ Third party apps integration

### Multi-location inventory



```javascript
const currentProductPageHandle = window.location.pathname.split('/').pop();
let currentProductPageInventoryFetch = fetch(`https://api.locationinventory.info/inventory?shop=${window.Shopify?.shop}&handle=${window.location.pathname.split('/').pop()}`);
window.getCamouflageProduct = async (currentProduct, hoosObj) => {
    /** 
     * Example:
     * UK people should be able to see inventory of location 1234
     * Rest of the world should see the inventory other than the location 112233
     */
    const response = currentProductPageHandle == currentProduct.handle ? await currentProductPageInventoryFetch : await fetch(`https://api.locationinventory.info/inventory?shop=${window.Shopify?.shop}&handle=${currentProduct.handle}`);
    const data = await response.json();
    let locationIds = [];
    // if (window.location.href.includes('example.eu') || window.location.pathname.split('/')[0] === 'es-es') {
    //     locationIds = [1234];
    // }

    if (window.location.pathname.split('/').includes('en-aus')) {
        locationIds = [1122, 3344]; // China & Shenzhen Warehouse
    } else if (window.location.pathname.split('/').includes('en-hk')) {
        locationIds = [1122, 3344]; // China & Shenzhen Warehouse
    } else {
        locationIds = [5566]; // Singapore Warehouse
    }

    // const locationsFound = data.variantLocations[0].inventoryLocations.filter(li => (locationIds.includes(li.location.id)));
    // console.log({ locationsFound });
    // if (!locationsFound) {
    //     return currentProduct;
    // }

    const available = {};
    // console.group('multi location');
    // console.debug(currentProduct);
    for (const v of data.variantLocations) {
        const shopifyVariant = currentProduct.variants.find(vrnt => vrnt.id == v.variant);
        if (!shopifyVariant) continue;

        // if (shopifyVariant.title.toLowerCase().includes('digital')) {
        //     continue;
        // }

        const locationInventories = v.inventoryLocations.filter(li => (locationIds.includes(li.location.id)));
        if (locationInventories.length) {
            for (const locationInventory of locationInventories) {
                shopifyVariant.inventory_quantity = locationInventory.quantity;
                if (locationInventory.quantity > 0 || (available[v.variant] && available[v.variant] > 0)) {
                    shopifyVariant.available = true;
                } else {
                    shopifyVariant.available = shopifyVariant.inventory_management === 'shopify' ? false : v.available;
                }
                available[v.variant] = (available[v.variant] || 0) + locationInventory.quantity;
            }
        } else {
            shopifyVariant.available = false;
        }
    }
    // console.groupEnd('multi location');

    if (hoosObj) {
        hoosObj.hide_oos_variant_qty = currentProduct.variants.map(v => v.inventory_quantity || 0);
        window.hide_oos_variant_qty = hoosObj.hide_oos_variant_qty;
    } else {
        console.debug(`Camouflage not found`);
    }
    console.debug(available);
    // currentProduct.variants = currentProduct.variants.filter(v => available[v.id]);

    return currentProduct;
}
```



## Product Variant Reloaded (PVR) app

```javascript
window.camouflagePostSelectorsSet = ({ hoosObj }) => {
    let mainContainer = hoosObj.mainContainer || document.body;
    if (typeof mainContainer === 'string') {
        mainContainer = document.querySelector(mainContainer);
    }
    const product = hoosObj.product;
    const pvrProductVariantsString = mainContainer.querySelector('#variantsJson')?.innerText;
    if (pvrProductVariantsString) {
        try {
            const pvrVariants = JSON.parse(pvrProductVariantsString);
            if (product.variants.find(v => v.id == pvrVariants[0].id)) {
                product.variants = pvrVariants;
            } else {
                console.log(`Camouflage:: json not found - 1`);
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log(`Camouflage:: json not found - 2`);
    }

    product.from_function = true;
    hoosObj.product = product;
    return product;
}
```



### Qickify Quick Views

{% embed url="https://codecrux-dev.gitbook.io/camouflage-api-doc/configurations/quick-view#qickify-from-navigation" %}

## Frequenty Bought Together | Hide from dropdown having value as variant ID

<figure><img src="../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

```javascript
document.addEventListener('hoos:script2loaded', () => {
    if (!window.location.href.includes('/products/')) {
        return;
    }
    // for all the featured products section
    document.querySelectorAll('.cbb-frequently-bought-selector-list li').forEach(featuredProduct => {
        let productHandle = featuredProduct.querySelector('a.cbb-frequently-bought-selector-link')?.getAttribute('href');
        if (!productHandle) {
            productHandle = window.location.pathname.split('/').pop();
        }
        // console.log({ productHandle })
        if (!productHandle) return;

        if (typeof CAMOUFLAGEE.getProductConfig !== 'function') {
            return;
        }
        CAMOUFLAGEE.getProductConfig({productHandle: productHandle}).then(productConfig => {
          const availableVariants = productConfig.availableVariants;
        //   console.log({ availableVariants });
          const variantPicker = featuredProduct.querySelector('select.cbb-recommendations-variant-select');
          if (!variantPicker) return;

          let optionsArray = [...variantPicker.options];
          optionsArray.forEach(option => {
            const variant_id = option.getAttribute('data-variant-id');
            if (!variant_id) return;
            if (!availableVariants.find(variant => variant.id == variant_id)) {
              option.disabled = true;
              option.classList.add('hide-oos-disable');
            }
          });

          // set select to the first non disabled option
          let firstNonDisabledOption = optionsArray.find(option => !option.disabled);
          if (firstNonDisabledOption) {
              variantPicker.value = firstNonDisabledOption.value;
              variantPicker.dispatchEvent(new Event('change', { bubbles: true }));
          }
        });
    });
});
```



