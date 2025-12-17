---
description: Hide sold out swatches from collection page's product grids
---

# 🎛️ Product Grid - Collection page swatches

{% hint style="info" %}
**Property name**: <mark style="color:blue;">product\_grid</mark>

Global property name: <mark style="color:blue;">`window.hide_oos_product_grid`</mark>
{% endhint %}

{% hint style="info" %}
To hide no image variant swatches, add this liquid code to the product card

```javascript
<script type="application/json" class="camouflage-product">{{ card_product | json }}</script>
```
{% endhint %}



To hide swatches on collection page's product grid, a couple of things are required:

**`grid_container`** -> An unique CSS selector containing all the products in the collection or search result pages. This must be the immediate container of all product items that doesn't get replaced via AJAX

**`grid_item_container`** -> CSS selector that contains each product

**`swatch_container`** -> CSS selector for the swatches container

**`swatch_item`** -> CSS selector for each swatch item that contains its actual value. Eg: ...

**`swatch_data_attribute`** -> The CSS attribute that contains the swatch's value. Eg: data-value

**`target_parent`** -> If you see some gaps between swatches after some swatches get hidden, then set it to true, else set it to false

**`handle_query`** -> CSS selector from the "grid\_item\_container" element that contains the product handle or product link in any attribute. Eg: a.product-link

**`handle_query_attribute`**: Attribute on handle\_query that has the product handle or product link, eg: href or data-link

**`options_to_hide`**: List of product options that you're interested in for Camouflage to hide.



**Sample configuration that you can add to your theme.liquid:**

{% code overflow="wrap" %}
```javascript
 window.hide_oos_product_grid = {
  "is_enabled": "yes",
  "grid_container": ".filter-container",
  "grid_item_container": ".product-block[data-product-id]",
  "swatch_container": ".product-block-options__inner",
  "swatch_item": "span.product-block-options__item",
  "swatch_data_attribute": "data-option-item",
  "target_parent": false,
  "handle_query": "a.product-link",
  "handle_query_attribute": "href",
  "options_to_hide": [
    "Color",
    "Colour",
    "Couleur",
    "Farbe"
  ]
} 

```
{% endcode %}

##

## Camouflage configuration for themes

### Symmetry theme

```jsx
{
  "is_enabled": "yes",
  "grid_container": ".filter-container",
  "grid_item_container": ".product-block[data-product-id]",
  "swatch_container": ".product-block-options__inner",
  "swatch_item": "span.product-block-options__item",
  "swatch_data_attribute": "data-option-item",
  "target_parent": false,
  "handle_query": "a.product-link",
  "handle_query_attribute": "href",
  "options_to_hide": [
    "Color",
    "Colour",
    "Couleur",
    "Farbe"
  ]
}
```

### Enterprise theme

```json

{
  "is_enabled": "yes",
  "grid_container": ".main-products-grid__results",
  "grid_item_container": "product-card",
  "swatch_container": ".card__swatches",
  "swatch_item": "input.opt-btn",
  "swatch_data_attribute": "value",
  "target_parent": false,
  "handle_query": "a.js-prod-link",
  "handle_query_attribute": "href",
  "options_to_hide": [
    "Strength"
  ]
}

```

### Marble theme

```json

{
  "is_enabled": "yes",
  "grid_container": ".collection__grid-items",
  "grid_item_container": ".spf-product-card",
  "swatch_container": ".spf-product__swatchs",
  "swatch_item": "span[data-option-value]",
  "swatch_data_attribute": "data-option-value",
  "target_parent": false,
  "handle_query": "a.spf-product-card__image-wrapper",
  "handle_query_attribute": "href",
  "options_to_hide": [
    "Color",
    "Colour",
    "Couleur",
    "Farbe"
  ]
}

```



### Impulse theme

First, set the color value attribute

```jsx
window.camouflagePreProductGridFunction = ({
    productGridItem, product, handle, availableOptions, allOptions, markedUnavailableOptions, availableVariants,
}) => {
    productGridItem.querySelectorAll(".grid-product__colors a").forEach(swatchItem => {
        const spanItem = swatchItem.querySelector('span.visually-hidden');
        if (spanItem) {
          const value = spanItem.textContent.trim();
          if (value) {
            swatchItem.setAttribute('data-camouflage-value', value);
          }
        }
    });
}
```

`product_grid` Configuration

```jsx
{
  "is_enabled": "yes",
  "grid_container": "body",
  "grid_item_container": ".grid__item[data-product-handle]",
  "swatch_container": ".grid-product__colors",
  "swatch_item": "a.color-swatch",
  "swatch_data_attribute": "data-camouflage-value",
  "target_parent": false,
  "handle_query": "a.grid-product__link",
  "handle_query_attribute": "href",
  "options_to_hide": [
    "Color",
    "Colour",
    "Pattern"
  ]
}
```

**Handling the collection filter reload case**

```javascript
document.addEventListener('collection:reloaded', function() {
    window.CAMOUFLAGEE.startCamouflageProductGrid({theme_name: 'impulse'}) 
});
```

### Broadcast

```json
{
    "is_enabled": "yes",
    "grid_container": ".collection__products",
    "grid_item_container": ".product-item",
    "swatch_container": ".external_product_swatches",
    "swatch_item": ".swatch__button input",
    "swatch_data_attribute": "value",
    "target_parent": false,
    "handle_query": "a.product-link",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
}
```

```json
{
      "is_enabled": "yes",
      "grid_container": ".collection__products",
      "grid_item_container": ".product-item",
      "swatch_container": "grid-swatch",
      "swatch_item": "tooltip-component",
      "swatch_data_attribute": "data-tooltip",
      "target_parent": false,
      "handle_query": "a.product-link",
      "handle_query_attribute": "href",
      "options_to_hide": [
        "Color",
        "Colour",
        "Couleur",
        "Farbe"
      ]
}
```

### Palo Alto

```javascript
{
  "is_enabled": "yes",
  "grid_container": ".collection__products",
  "grid_item_container": ".product-grid-item",
  "swatch_container": "product-grid-item-swatch",
  "swatch_item": ".swatch__button",
  "swatch_data_attribute": "data-value",
  "target_parent": false,
  "handle_query": "a.product-grid-item__title",
  "handle_query_attribute": "href",
  "options_to_hide": [
    "Color",
    "Colour",
    "Couleur",
    "Farbe"
  ]
}
```



### With custom-product-container

```jsx
{
  "grid_container": "#custom-product-container",
  "grid_item_container": "product-block[data-product-id]",
  "swatch_container": ".product-block-options__inner",
  "swatch_item": "span.product-block-options__item",
  "swatch_data_attribute": "data-value",
  "target_parent": false,
  "handle_query": "a.product-link",
  "handle_query_attribute": "href",
  "options_to_hide": [
    "Color",
    "Colour",
    "Couleur",
    "Farbe",
    "Style"
  ]
}
```



### Impact 5.x

```json
{
    "is_enabled": "yes",
    "grid_container": ".shopify-section--main-collection",
    "grid_item_container": "product-card",
    "swatch_container": ".product-card__swatch-list",
    "swatch_item": "input",
    "swatch_data_attribute": "value",
    "target_parent": false,
    "handle_query": ".product-card__title a",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
  }
```

### Avone

```javascript
{
    "is_enabled": "yes",
    "grid_container": ".productList .grid--view-items",
    "grid_item_container": ".grid__item",
    "swatch_container": ".gridSwatches",
    "swatch_item": "li.swatch",
    "swatch_data_attribute": "title",
    "target_parent": false,
    "handle_query": "a.grid-view-item__title",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
  }
```

### Baseline

```javascript
{
    "is_enabled": "yes",
    "grid_container": "#results",
    "grid_item_container": "ul.collection-list > li, ul.splide__list > li.splide__slide",
    "swatch_container": ".camouflage-swatch-container",
    "swatch_item": "a[data-color]",
    "swatch_data_attribute": "data-color",
    "target_parent": false,
    "handle_query": "a.absolute",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
  }
```

### Woodstock

```javascript
{
    "is_enabled": "yes",
    "grid_container": "#ProductGridContainer",
    "grid_item_container": "#product-grid .grid__item",
    "swatch_container": "card-product-colors",
    "swatch_item": "a.card__product-color-list__button",
    "swatch_data_attribute": "data-swatch-color",
    "target_parent": true,
    "handle_query": "h3.card__heading a",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe",
      "Frame"
    ]
}
```

### Xclusive

```javascript
{
      "is_enabled": "yes",
      "grid_container": "#shopify-section-template--23114041917762__main-collection",
      "grid_item_container": "li.product-card",
      "swatch_container": "ul.color",
      "swatch_item": "li label a[aria-label]",
      "swatch_data_attribute": "aria-label",
      "target_parent": true,
      "handle_query": "h3.p0 a",
      "handle_query_attribute": "href",
      "options_to_hide": [
        "Color",
        "COLOR",
        "Colour",
        "Couleur",
        "Farbe"
      ]
}
```

### Next

```javascript
{
    "is_enabled": "yes",
    "grid_container": ".shopify-section.has-m6cl",
    "grid_item_container": "#collection li.product-card",
    "swatch_container": "ul.check.color",
    "swatch_item": "a[aria-label]",
    "swatch_data_attribute": "aria-label",
    "target_parent": true,
    "handle_query": "a[href]",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
}
```

### Blockshop

```javascript
{
    "is_enabled": "yes",
    "grid_container": ".collection--body--grid",
    "grid_item_container": ".product--root[data-product-item]",
    "swatch_container": "radios-root .radios--container",
    "swatch_item": "input.radios--input",
    "swatch_data_attribute": "value",
    "target_parent": true,
    "handle_query": "a[href]",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "COLOR",
      "Colour",
      "COLOUR",
      "Couleur",
      "Farbe"
    ]
}
```

### Warehouse

```javascript
{
    "is_enabled": "yes",
    "grid_container": ".collection__dynamic-part",
    "grid_item_container": ".product-item",
    "swatch_container": ".color-swatch-list",
    "swatch_item": ".color-swatch input",
    "swatch_data_attribute": "value",
    "target_parent": true,
    "handle_query": "a.product-item__image-wrapper",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
  }
```

### Empire

```javascript
{
    "is_enabled": "yes",
    "grid_container": "body",
    "grid_item_container": ".productgrid--item[data-product-quickshop-url]",
    "swatch_container": "form.productitem--swatches-container",
    "swatch_item": "input.productitem--swatches-input",
    "swatch_data_attribute": "value",
    "target_parent": true,
    "handle_query": ".productitem--title a",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
}
```

### Marble

```javascript
{
    "is_enabled": "yes",
    "grid_container": ".collection__grid-items",
    "grid_item_container": ".spf-product-card",
    "swatch_container": ".spf-product__swatchs",
    "swatch_item": "span[data-option-value]",
    "swatch_data_attribute": "data-option-value",
    "target_parent": false,
    "handle_query": "a.spf-product-card__image-wrapper",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
}
```

### Showcase

```javascript
{
    "is_enabled": "yes",
    "grid_container": ".product-list",
    "grid_item_container": ".product-block--has-swatches",
    "swatch_container": ".cc-swatches",
    "swatch_item": "a",
    "swatch_data_attribute": "title",
    "target_parent": true,
    "options_to_hide": [
      "Color",
      "color"
    ],
    "handle_query": "a[data-variant-image], a[data-option-item]",
    "handle_query_attribute": "href"
}
```

### Shella

```javascript
{
    "is_enabled": "yes",
    "grid_container": ".collection-products",
    "grid_item_container": ".product-collection",
    "swatch_container": ".product-options__section",
    "swatch_item": ".product-options__value",
    "swatch_data_attribute": "data-value2",
    "target_parent": false,
    "handle_query": ".product-collection__title a",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "größe",
      "Größe",
      "Color",
      "Colour",
      "Couleur",
      "Farbe",
      "Ring Farbe"
    ]
  }
```

### Prestige 4.x

```json
{
    "is_enabled": "yes",
    "grid_container": ".ProductListWrapper div[data-globo-filter-items]",
    "grid_item_container": ".ProductItem",
    "swatch_container": ".color-swatches",
    "swatch_item": ".ProductItem__ColorSwatchItem input",
    "swatch_data_attribute": "value",
    "target_parent": true,
    "handle_query": "a.qview-product-handle, a.ProductItem__ImageWrapper",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
}
```

### Stiletto

```json
{
    "is_enabled": "yes",
    "grid_container": "#root",
    "grid_item_container": ".product-item",
    "swatch_container": "ul.product-swatches-options__list",
    "swatch_item": "li.product-swatches-options__item",
    "swatch_data_attribute": "data-color",
    "target_parent": false,
    "handle_query": ".product-item__product-title a",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
}
```

## App integration

### Vario app

```json

{
  "is_enabled": "yes",
  "grid_container": "#shopify-section-collection",
  "grid_item_container": ".product-grid-item",
  "swatch_container": ".vario-variant-wrapper ul.vario-variants",
  "swatch_item": "li.vario-variant",
  "swatch_data_attribute": "data-value",
  "target_parent": false,
  "handle_query": "a.product-grid-item__image",
  "handle_query_attribute": "href",
  "options_to_hide": [
    "Color",
    "Colour"
  ]
}

```



### Globo Swatch app

```json

{
  "is_enabled": "yes",
  "grid_container": "body",
  "grid_item_container": ".swatches-globo--list",
  "swatch_container": ".globo-swatch-list ul.ul-swatches-list",
  "swatch_item": "li.swatches-options input",
  "swatch_data_attribute": "value",
  "target_parent": true,
  "handle_query": ".swatches-globo[product-swatch-url]",
  "handle_query_attribute": "product-swatch-url",
  "options_to_hide": [
    "Color",
    "Colour"
  ]
}

```



## Hide the whole product card if the variants are displayed as products

```javascript
document.addEventListener('hoos:collection_swatch_executed', (event) => {
    const {
        productGridItem,
        camouflageProductGridConfig,
        handle,
        swatches,
        availableVariants,
    } = event.detail;

    const product_grid = window.camouflage_global_config.product_grid;

    for (const swatch of swatches) {
        if (!swatch.classList.contains(product_grid.hide_class)) {
            continue;
        }
        const value = swatch.getAttribute(product_grid.swatch_data_attribute);
        const elemFound = swatch.closest(`.cProductCard-wrapper[data-value="${value}"]`); // TODO: change this query based on theme
        if (elemFound) {
            elemFound.closest(product_grid.grid_item_container).classList.add(product_grid.hide_class);
        }
    }
});
```

### For Dawn theme when product.options.length === 1

```javascript
document.addEventListener('hoos:collection_swatch_executed', (event) => {
    const {
        productGridItem,
        camouflageProductGridConfig,
        handle,
        swatches,
        availableVariants,
        product
    } = event.detail;

    if (product.options.length > 1) return;

    const productLinkWithVariat = productGridItem.querySelector('.card__heading a')?.href;
    if (!productLinkWithVariat) return;

    const variantID = new URL(productLinkWithVariat).searchParams.get('variant');
    if (!variantID) return;
    const variantAvailable = availableVariants.find(v => v.id == variantID);
    if (!variantAvailable) {
      productGridItem.classList.add('camouflage-grid-disable');
    }
});
```







## Fix 'From' price from the product cards

The `product_grid` must be present. A dummy configuration can be added that should correctly identify the product grid to also the `grid_from_price_selector` selector

Eg: Config for Dawn theme

### Dawn theme

<pre class="language-json"><code class="lang-json">{
    "is_enabled": "yes",
    "grid_container": ".product-grid-container",
    "grid_item_container": ".card__information",
    "swatch_container": ".card__content",
    <a data-footnote-ref href="#user-content-fn-1">"swatch_item": ".price",</a>
    "swatch_data_attribute": "data-option-item",
    "target_parent": false,
    "handle_query": ".card__heading a[href]",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ],
<a data-footnote-ref href="#user-content-fn-1">    </a>"grid_from_price_selector": "div.price--on-sale span.price-item.price-item--sale.price-item--last, div.price:not(.price--on-sale) span.price-item.price-item--regular",
    "strike_through_price_selector": ".price__sale s.price-item.price-item--regular"
}
</code></pre>

Enable the `fix_from_price` by ticking the following

<figure><img src="../.gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure>

### Impulse theme - fix from price

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

### Be Yours theme - fix from price

`product_grid` config

```json
{
    "is_enabled": "yes",
    "grid_container": "#usf_container ul.product-grid",
    "grid_item_container": "li.usf-sr-product",
    "swatch_container": ".card-information",
    "swatch_item": ".price",
    "swatch_data_attribute": "data-option-item",
    "target_parent": false,
    "handle_query": ".card-wrapper a",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe"
    ]
}
```

```javascript
const updatePriceText = (pricesElem, variant, isSale) => {
  const savingsSpan = pricesElem.querySelector('bdi').childNodes;
  let amount = variant.price;
  if (isSale) {
    const compare_at_price = Number(variant.compare_at_price || 0);
    if (compare_at_price && compare_at_price > Number(variant.price)) {
      amount = compare_at_price - Number(variant.price);
    }
  }

  // console.log('check-4', savingsSpan);
  for (const node of savingsSpan) {
    if (node.nodeType === Node.TEXT_NODE) {
      // console.log('check-5', 'node.nodeType', node.nodeType, Node.TEXT_NODE, amount);
      const savingsSpanText = node.textContent.trim();
      const amountText = new Intl.NumberFormat(`${window.Shopify.locale}-${window.Shopify.country}`, {
        // style: 'currency',
        currency: window.Shopify.currency.active,
        minimumFractionDigits: 0,
      }).format(amount);
      let replacedText = savingsSpanText.replace(/(\d+)?(\.|\,)?\d+/, amountText);
      node.textContent = replacedText;
      // console.log('check-6', replacedText);
      break;
    }
  }
}

window.camouflagePostProductGridFunction = ({
  productGridItem, product, handle, availableOptions, allOptions, markedUnavailableOptions, availableVariants,
}) => {
  const pricesElems = productGridItem.querySelectorAll('.card-information .price__regular .price-item--regular price-money');
  // console.log('check-1', pricesElems);
  if (availableVariants.length) {
    const sortedVariants = availableVariants.sort((v1, v2) => Number(v1.price) - Number(v2.price));
    const leastPriceVariant = sortedVariants[0];
    const expensiveVariant = sortedVariants[sortedVariants.length - 1];
    if (leastPriceVariant.price === expensiveVariant.price) {
      // only 1 variant
      // console.log('check-2', leastPriceVariant);
      updatePriceText(pricesElems[0], leastPriceVariant, Number(leastPriceVariant.compare_at_price || 0) > Number(leastPriceVariant.price));
    } else if (pricesElems.length === 2) {
      // console.log('check-3', leastPriceVariant, expensiveVariant);
      updatePriceText(pricesElems[0], leastPriceVariant, false);
      updatePriceText(pricesElems[1], expensiveVariant, false);
    }
  }
}
```

### Reformation

```javascript
{
    "is_enabled": "yes",
    "grid_container": "#ProductGridContainer",
    "grid_item_container": "product-card",
    "swatch_container": ".product-card-swatches",
    "swatch_item": ".product-card-swatch",
    "swatch_data_attribute": "data-color",
    "target_parent": false,
    "handle_query": "a.product-card-title",
    "handle_query_attribute": "href",
    "options_to_hide": [
      "Color",
      "Colour",
      "Couleur",
      "Farbe",
      "BAG COLOR"
    ]
}
```

### Custom fix - From price and other price

```javascript
window.camouflagePreFixFromPriceV2 = (params, {
  leastAvailablePriceVariant,
  mostExpensivePriceVariant,
  priceVaries,
  currentPriceFormatted,
  compareAtAmountFormatted,
  savingsAmount,
  savingsAmountFormatted,
  savingsAmountPercentage
}) => {
  // console.log("camouflagePreFixFromPriceV2:start");

  let currentPriceWithCurrency = camouflage_global_config.money_format.replace('{{amount}}', currentPriceFormatted);
  const compareAtAmountWithCurrency = compareAtAmountFormatted ? camouflage_global_config.money_format.replace('{{amount}}', compareAtAmountFormatted) : '';
  // debugger;
  let priceHtml = '';
  let fromText = window.Shopify.country === 'CA' ? 'From' : 'From';
  
  const compareAtPrice = Number(leastAvailablePriceVariant.compare_at_price || 0);
  let savings = compareAtPrice ? compareAtPrice - Number(leastAvailablePriceVariant.price) : 0;
  savings = savings > 0 ? parseInt(savings) : 0;

  if (priceVaries) {
    currentPriceWithCurrency = `${fromText} ${currentPriceWithCurrency}`;
  }

  priceHtml = `<div class="h5">
      ${compareAtAmountWithCurrency && `<span class="grid-product__price--original">${compareAtAmountWithCurrency}</span>`}
      ${currentPriceWithCurrency}
      ${savings > 0 ? `<span class="grid-product__price--savings">Save ${savings}%</span>` : ''}
  </div>`;
  let priceContainer = params.productGridItem.querySelector(`.price`);
  if (priceContainer) {
      priceContainer.innerHTML = priceHtml;
  }
}

```



## Update the \`+ n more\` text when some swatches are hidden

```javascript
window.camouflagePostProductGridFunction = ({
    productGridItem, product, handle, availableOptions, allOptions, markedUnavailableOptions, availableVariants,
}) => {
    const moreSwatchesElem = productGridItem.querySelector('.card__swatches span.text-end');
    if (!moreSwatchesElem) return;

    
    const camouflageProductGridConfig = window.camouflage_global_config.product_grid;
    const options_to_hide = camouflageProductGridConfig.options_to_hide || [];
    let option_to_hide;
    for (const option of options_to_hide) {
        if (product.options.includes(option)) {
            option_to_hide = option;
            break;
        }
    }
    if (!option_to_hide) return;

    const swatches = productGridItem.querySelectorAll(`${camouflageProductGridConfig.swatch_container} ${camouflageProductGridConfig.swatch_item}`);

    let visibleSwatches = 0;
    let hiddenSwatchCount = 0;
    const swatchCount = availableOptions[option_to_hide].length;

    for (let i = 0; i < swatches.length; i++) {
        if (!swatches[i].classList.contains('camouflage-grid-disable') && swatches[i].getAttribute(camouflageProductGridConfig.swatch_data_attribute)) {
            visibleSwatches++;
        }
    }

    const moreSwatchesCount = swatchCount - visibleSwatches;

    // console.log({ hiddenSwatchCount, moreSwatchesCount, visibleSwatches, swatchCount, product: product.id, handle: product.handle, swatches });

    if (!moreSwatchesCount || moreSwatchesCount < 0) {
        // console.log(`Hide moreSwatchesElem`);
        moreSwatchesElem.style.display = 'none';
    } else {
        // console.log(`Update moreSwatchesElem`, moreSwatchesCount);
        moreSwatchesElem.textContent = moreSwatchesElem.textContent.replace(/(\d+)?(\.|\,)?\d+/, moreSwatchesCount);
    }
    // console.log(swatches);
}
```

## Restart Camouflage grid on DOM changes - MutationObserver

```javascript
const camouflageGridOnDomChange = () => {
  // Select the parent element to observe
  const parentElement = document.getElementById('RecentlyViewed-recently-viewed');

  // Define the callback function to execute when mutations are observed
  const callback = function (mutationsList, observer) {
    let startCamouglageGrid = false;
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // Check if the child node is replaced
        if (mutation.addedNodes.length > 0) {
          startCamouglageGrid = true;
        }
      }
    }
    console.log({ startCamouglageGrid });

    if (startCamouglageGrid) {
      window.CAMOUFLAGEE.startCamouflageProductGrid({});
    }
  };
  const observer = new MutationObserver(callback);
  const config = { childList: true, subtree: false };

  // Start observing the target node for configured mutations
  observer.observe(parentElement, config);
}

camouflageGridOnDomChange();
```



## Replace the sold out variant's image with the available variant image on product cards

```javascript
// reset variant images on collection pages
window.camouflagePostProductGridFunction = ({
    productGridItem, product, handle, availableOptions, allOptions, markedUnavailableOptions, availableVariants,
}) => {

    if (availableVariants.length === product.variants.length) return;

    const img = productGridItem.querySelector('.card__media img');
    if (!img) return;

    if (window.location.href.includes('filter.v.option.')) {
        // a filter has been applied
        return;
    }

    const colorIndex = product.options.findIndex(option => option.toLowerCase() === 'color');
    if (colorIndex === -1) return;
    const firstColorOption = product.options_with_values[colorIndex].values[0].name;
    const colorOptionName = product.options_with_values[colorIndex].name;
    

    // update image
    const imgSrc = img.src;
    if (!imgSrc) return;

    // find associated variant
    const imgFileName = imgSrc.split('?')[0].split('/').pop();
    const imageAssociatedVariant = product.variants.find(v => v.image?.url?.includes(imgFileName));
    if (!imageAssociatedVariant) return;

    const colorOfAssociatedVariant = imageAssociatedVariant.options[colorIndex];

    // check if the color is sold out
    if (!markedUnavailableOptions || !markedUnavailableOptions[colorOptionName]) return;
    
    if (!markedUnavailableOptions[colorOptionName].includes(colorOfAssociatedVariant)) {
        return;
    }

    // the colorOfAssociatedVariant is sold out - find the next available color

    if (!availableVariants[0].image?.url) return;
    
    const availableVariantImageSrc = availableVariants[0].image?.url;

    img.src = [availableVariantImageSrc, imgSrc.split('?').pop()].join('?');

    // update image srcset
    if (img.srcset) {
        const srcSetArr = img.srcset.split(',').map(src => {
            parts = src.split('?');
            parts[0] = availableVariantImageSrc;
            return parts.join('?')
        });
        
        img.srcset = srcSetArr.join(',');
    }
}
```

[^1]: 
