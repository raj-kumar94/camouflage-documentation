# ♾️ Additional code configurations

### Custom \`setCustomCamouflageSelectors\` function for mixed layout. Ref Broadcast 3.x theme

```javascript
window.setCustomCamouflageSelectors = ({ hoosObj, product }) => {
    let { mainContainer, enableDisabledSelectorsArr, selectors } = hoosObj;
    if (!mainContainer) {
        mainContainer = document.body;
        hoosObj.mainContainer = mainContainer;
    }

    if (typeof mainContainer === "string") {
        mainContainer = document.querySelector(mainContainer);
    }

    const swatchAndButtonselectors = [...mainContainer.querySelectorAll('.selector-wrapper')];
    selectors = [];
    enableDisabledSelectorsArr = [];
    for (let i = 0; i < product.options.length; i++) {
        const optionName = product.options[i].toLowerCase();
        if (['color', 'colour', 'fabre', 'farbe', 'farve'].includes(optionName)) {
            // swatches
            const swatches = [...swatchAndButtonselectors[i].querySelectorAll("input[type=radio], li.select-popout__item a[data-value]")];
            selectors.push(swatches);
            enableDisabledSelectorsArr.push(swatchAndButtonselectors[i]);
        } else {
            // dropdown
            const swatches2 = [...swatchAndButtonselectors[i].querySelectorAll("input[type=radio], li.select-popout__item a[data-value]")];
            selectors.push(swatches2);
            enableDisabledSelectorsArr.push(swatchAndButtonselectors[i]);
        }
    }

    // set the data-value for all the selectors
    for (const selector of selectors) {
        for (const selectorItem of selector) {
            const value = selectorItem.getAttribute('value');
            if (value) {
                selectorItem.setAttribute('data-value', value);
            }
        }
    }
    return { selectors, enableDisabledSelectorsArr };
}
```







### Move the disabled variants in a dropdown to the end of the list

```javascript
document.addEventListener('hoos:executed', (event) => {
    function moveDisabledOptionsToEnd() {
        const selectors = event.detail.selectors;
        if (selectors.length > 1 || selectors[0].nodeName !== 'SELECT') {
            return;
        }
        let disabledOptions = [];

        // Remove disabled options from the select element and store them
        for (let i = 0; i < selectors[0].options.length; i++) {
            if (selectors[0].options[i].disabled) {
                let disabledOption = selectors[0].options[i];
                disabledOptions.push(disabledOption);
                selectors[0].remove(i);
                i--; // Decrement index to adjust for removed option
            }
        }

        // Append disabled options to the end of the select element
        for (let j = 0; j < disabledOptions.length; j++) {
            selectors[0].add(disabledOptions[j]);
        }
    }

    // Call the function to move disabled options to the end
    moveDisabledOptionsToEnd();
});
```



### Handle case where themes lowercase color values

```javascript
if (window.camouflage_global_config.hide_oos_m_settings.theme_name === 'influence') {
    const productOptions = camouflage_global_config.hide_oos_t_settings.product.options;
    const colorOptionToCheck = ['color', 'colour', 'couleur', 'colore', 'farbe', '색', '色', 'färg', 'farve'];

    for (let i = 0; i < productOptions.length; i++) {
        if (colorOptionToCheck.includes(productOptions[i].toLowerCase())) {
            if (colorIndex !== -1) {
                for (const variant of camouflage_global_config.hide_oos_t_settings.product.variants) {
                    variant[`option${i + 1}`] = variant[`option${i + 1}`].toLowerCase();
                    variant.options[i] = variant.options[i].toLowerCase();
                }
            }
        }
    }
}
```



### Cross mark on swatches

```css
input.hide-oos-disable+label:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, transparent calc(50% - 1px), #000 50%, transparent calc(50% + 1px)) no-repeat;
  opacity: 1;
}
```

Note: for the selected variant option, the background color can be reverse

```css
input.selected.hide-oos-disable+label:after {
  background: linear-gradient(to bottom right, transparent calc(50% - 1px), #fff 50%, transparent calc(50% + 1px)) no-repeat;
}
```



### Hide the entire Size/Color options&#x20;

```javascript
document.addEventListener('hoos:executed', (event) => {
    const hoosObj = event.detail;
    const optionToHide = 'Size'; // TODO: update this line

    if (hoosObj.skip_execution) return;
    const sizeIndex = hoosObj.product.options.indexOf(optionToHide);
    if (sizeIndex === -1) return;

    let selectors = [];
    const containerItem = hoosObj.selectors[sizeIndex][0].closest('ul'); // TODO: update this line
    if (containerItem) {
        containerItem.style.display = 'none';
        selectors.push(`#${containerItem.id}`); // TODO: update this line

        // TODO: update this line; logic to hide the containerItem's label (if applicable)
        if (containerItem.previousElementSibling.nodeName === 'LABEL') {
            containerItem.previousElementSibling.style.display = 'none';
            selectors.push(`#label[for="${containerItem.previousElementSibling.getAttribute('for')}"]`);
        }
    }

    const style = document.createElement('style');
    style.innerHTML = `${selectors.join(', ')} {display: none !important;}`;
    document.head.appendChild(style);
});
```



### Hiding variants in the floating add to cart dropdowns

#### Minimog theme

```javascript
document.addEventListener('hoos:camouflage_params_built', (event) => {
	const camouflageParams = event.detail;
    setTimeout(() => {
        if (typeof window.initCamouflage === "function") {
            window.initCamouflage({
                ...camouflageParams,
                hide_oos_query_selectors: {
                    "selector_type": "select",
                    "input_selector": "select",
                    "field_selector": "select.m-product-option--dropdown-select",
                    "mainContainer": ".m-sticky-addtocart--rightblock"
                },
                hide_oos_extras: {
                    "disabled": false,
                    "hide_from_variantid_dropdown": "yes"
                }
            });
        } else {
            console.log("window.initCamouflage not found");
        }
    }, 1000);
});
```



### Hide from quick order table list

#### Product page -> Trade theme

```javascript
document.addEventListener('hoos:executed', (event) => {
	const hoosObj = event.detail;
	const optionToHideIndex = hoosObj.product.options.map(o => o.toLowerCase()).indexOf('add monogramming?');
	const fieldset = hoosObj.selectors[optionToHideIndex][0].closest('fieldset');
	if (fieldset) {
		fieldset.style.display = 'none';
	}
});


document.addEventListener('hoos:scriptloaded', (event) => {
  window.initCamouflage({
    ...camouflageParams, 
    "hide_oos_query_selectors": {
      "selector_type": "tr",
      "input_selector": "tr[data-variant-id]",
      "field_selector": ".quick-order-list__table tbody",
      "mainContainer": "body"
    },
    "hide_oos_extras": {
      "target_parent_element": false,
      "target_parent2_element": false,
      "attribute_name": "data-variant-id",
      "hide_from_variantid_ui": "yes"
    }
  });
});
```



#### Collection page quick view -> Trade theme

```javascript
const qvContainer = document.querySelector('.product-grid-container');
if (qvContainer) {
  qvContainer.addEventListener("click", (event) => {
    let quickTriggerElem = event.target.closest('.quick-add__submit');
    if (!quickTriggerElem) return;

    // eslint-disable-next-line no-eval
    const productHandleElem = quickTriggerElem;
    const productId = quickTriggerElem.getAttribute('aria-labelledby').split('-').pop();
    const quickViewContainer = document.getElementById(`QuickAddInfo-${productId}`);
    // console.log({ quickViewContainer, productHandleElem, productId });
    const productHandle = productHandleElem.getAttribute('data-product-url').split('/').pop().split('?')[0];
    window.CAMOUFLAGEE.initCamouflageQuickViewUsingProductHandle({
      productHandle: productHandle,
      quick_view_variants_container: quickViewContainer,
      is_quick_view_cached: true,
      hide_oos_query_selectors: {
        "selector_type": "tr",
        "input_selector": "tr[data-variant-id]",
        "field_selector": ".quick-order-list__table tbody",
        "mainContainer": quickViewContainer
      },
      hide_oos_extras: {
        "target_parent_element": false,
        "target_parent2_element": false,
        "attribute_name": "data-variant-id",
        "hide_from_variantid_ui": "yes"
      }
    });
  });
}
```



#### Collection grid: Correct "save" price/amount

<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

```javascript
window.camouflagePostProductGridFunction = ({
  productGridItem, product, handle, availableOptions, allOptions, markedUnavailableOptions, availableVariants,
}) => {
  if (availableVariants.length) {
    const sortedVariants = availableVariants.sort((v1, v2) => Number(v1.price) - Number(v2.price));
    const leastPriceVariant = sortedVariants[0];
    const compare_at_price = Number(leastPriceVariant.compare_at_price || 0);
    if (compare_at_price && compare_at_price > Number(leastPriceVariant.price)) {
      const savings = compare_at_price - Number(leastPriceVariant.price);
      const savingsSpan = productGridItem.querySelector('span.grid-product__price--savings');
      if (savingsSpan) {
        const savingsSpanText = savingsSpan.innerText.trim();
        const amount = new Intl.NumberFormat(`${window.Shopify.locale}-${window.Shopify.country}`, {
          // style: 'currency',
          currency: window.Shopify.currency.active,
          minimumFractionDigits: 2,
        }).format(savings);
        let replacedText = savingsSpanText.replace(/(\d+)?(\.|\,)?\d+/, amount);
        savingsSpan.innerText = replacedText;
      }
    }
  }
}
```



### Show the cheapest or least price variants first until its sold out

```javascript
if (window.location.href.includes('shopifypreview.com')) {
    const optionNameToCheck = 'Ships from';
    const markCamouflageUnavailable = (availableVariants, product) => {
        if (availableVariants.length >= 2) {
            for (let i = 1; i < availableVariants.length; i++) {
                const tempVariant = product.variants.find(v => v.id == availableVariants[i].id);
                tempVariant.available = false;
                tempVariant.marked_unavailable = true;
            }
        }
    }
    window.getCamouflageProduct = (originalProduct, hoosObj) => {
        let product = {...originalProduct};
        if (!product.options.includes(optionNameToCheck)) {
            return product;
        }
        if (window.camouflage_global_config?.hide_oos_m_settings?.hsoi !== 'd') {
            return product;
        }

        const sortedVariants = product.variants.sort((variant1, variant2) => Number(variant1.price) - Number(variant2.price));

        if (product.options.length === 1) {
            const availableVariants = sortedVariants.filter(v => v.available);
            markCamouflageUnavailable(availableVariants, product);
            window.hide_ships_from = true;
            return product;
        }

    
        const optionIndex = product.options.indexOf(optionNameToCheck);    
        const indexesToCheck = [];
        for (let i = 0; i < product.options.length; i++) {
            if (i !== optionIndex) {
                indexesToCheck.push(i);
            }
        }

        for (const variant of product.variants) {
            let foundVariants = sortedVariants.slice();
            for (const reverseOptionIndex of indexesToCheck) {
                foundVariants = foundVariants
                    .filter(v =>
                        v.options[reverseOptionIndex] === variant.options[reverseOptionIndex]
                    );
            }
        
            // console.log({foundVariants, variant});
            const availableVariants = foundVariants.filter(v => v.available);
            markCamouflageUnavailable(availableVariants, product);
        }
    
        window.hide_ships_from = true;
        return product;
    }
    
    document.addEventListener('hoos:executed', (event) => {
        const hoosObj = event.detail;
        // console.log({ hide_ships_from: window.hide_ships_from });
        if (window.hide_ships_from) {
            const optionIndex = hoosObj.product.options.indexOf(optionNameToCheck);
            // console.log({ optionIndex });
            if (optionIndex !== -1) {
                const style = document.createElement('style');
                style.innerHTML = `variant-selects fieldset:nth-child(${optionIndex + 1}) {display: none !important;}`;
                document.head.appendChild(style);
            }
        }
    });
}
```

## Handle the case when a theme rebuilds the variant options

#### Impact Theme

{% hint style="info" %}
Use Script-A
{% endhint %}

**Config:**

```json
{
  "hide_oos_query_selectors": {
    "input_selector": "input",
    "field_selector": "variant-picker fieldset",
    "mainContainer": "product-rerender",
    "selector_type": "input"
  },
  "hide_oos_extras": {
    "disabled": false,
    "target_parent_element": false,
    "target_parent2_element": false,
    "attribute_name": "value",
    "value_type": "option_id",
    "variant_change_delay": 100
  }
}
```

Additional code in PDP

```javascript
document.addEventListener('variant:change', function(event) {
    const { variant, previousVariant } = event.detail;
    console.log("variant changed", {variant, previousVariant});
    const currentVariantId = variant?.id || previousVariant?.id;
    const hoosObj = window.CAMOUFLAGEE.items.filter(item => item.product.variants.find(v => v.id == currentVariantId) ? true: false)?.pop() || CAMOUFLAGEE.items[0];
    // const hoosObj = CAMOUFLAGEE.items[0];
    setTimeout(() => {
        const firstRadio = hoosObj.selectors[0][0];
        if (!hoosObj.mainContainer.contains(firstRadio)) {
            hoosObj.ref.rebuildSelectors();
        }
        setTimeout(() => {
            if (hoosObj.product.options.length > 1) {
                hoosObj.ref.hideSelectOptionBasedOnPrevChoice(1);
            }
        }, 10);
        setTimeout(() => {
            if (hoosObj.product.options.length > 2) {
                hoosObj.ref.hideSelectOptionBasedOnPrevChoice(2);
            }
        }, 20);
    }, 100);
});
```



## Hide collection filter swatch colors if hide\_variants\_options\_arr is set

```javascript
const hideSwatchesFromMainFilters = () => {
    window.camouflage_global_config?.hide_variants_options_arr?.forEach((variantsOption) => {
        const currentCountry = window.Shopify?.country;
        if (Array.isArray(variantsOption.countries) && variantsOption.countries.length && !variantsOption.countries.includes(currentCountry)) {
            return;
        }

        // if only a certain option needs to be hidden
        if (!['Color', 'COLOR', 'color'].includes(variantsOption.name)) {
            return;
        }
    
        const values_arr = variantsOption.values_arr || [];
    
        const collectionSidebar = document.getElementById('CollectionSidebar');
        if (!collectionSidebar) return;
        for (const value of values_arr) {
            const filterOption = collectionSidebar.querySelector(`.collection-filters__content-wrapper input[name="filter.v.option.${variantsOption.name}"][value="${value}"]`) ||
            collectionSidebar.querySelector(`.collection-filters__content-wrapper input[name="filter.v.option.${variantsOption.name.toLowerCase()}"][value="${value}"]`);
            if (filterOption) {
                const parentElem = filterOption.closest('label');
                if (parentElem) {
                    parentElem.classList.add('camouflage-hidden');
                }
            }
        }
    });
}

window.camouflagePreProductGridFunction = ({productGridItem}) => {
    hideSwatchesFromMainFilters();
};
```



## Custom MutationObserver for Collection page product grid

### Theme name: \`Enterprise\`

```javascript
const observeGridContainerContainer2 = ({ theme_name }) => {
    const targetNode = document.querySelector('#filter-results > ul');
    if (!targetNode) {
        console.log('targetNode not found');
        return;
    }
    if (targetNode.classList.contains('camouflage-observer-added')) {
        console.log('observer already added');
        return;
    }

    // Options for the observer (which mutations to observe)
    const config = { childList: true, subtree: false };

    // Callback function to execute when mutations are observed
    const mutaionCallback = (mutationList, observer) => {
        let childListChanged = false;
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                // console[logLevel](...loggerPrefix, "A child node has been added or removed.");
                childListChanged = true;
            } else if (mutation.type === "attributes") {
                // console[logLevel](...loggerPrefix, `The ${mutation.attributeName} attribute was modified.`);
            }
        }
        if (childListChanged) {
            window.CAMOUFLAGEE.startCamouflageProductGrid({ theme_name });
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(mutaionCallback);

    // Start observing the target node for configured mutations
    if (targetNode) {
        observer.observe(targetNode, config);
        targetNode.classList.add('camouflage-observer-added');
        console.log('observing....');
    }
};
setInterval(() => {
    // console.log('adding observer');
    observeGridContainerContainer2({});
}, 1000);
```

### On filter updated - Enterprise theme

```javascript
document.addEventListener('on:facet-filters:updated', (event) => {
    console.log('on:facet-filters:updated');
    window.CAMOUFLAGEE.startCamouflageProductGrid({ theme_name: '' });
});
```





