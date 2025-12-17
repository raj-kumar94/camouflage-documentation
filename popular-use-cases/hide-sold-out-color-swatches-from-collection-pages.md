# Hide sold out color swatches from Collection pages

Call the method `window.CAMOUFLAGEE.startCamouflageProductGrid` when the page loads with swatches on collection pages or when a filter is applied or when paginated results are added to the end of the products list.

```javascript
window.CAMOUFLAGEE.startCamouflageProductGrid({
  "camouflageProductGridConfig": {
     "is_enabled": "yes",
     "grid_container": "all-product-cards-container-css-selector",
     "grid_item_container": "individual-product-card-css-selector",
     "swatch_container": "swtch-container-css-selector",
     "swatch_item": "individual-swatch-css-selector",
     "swatch_data_attribute": "data-value", // attribute on which swatch value can be found on swatch_item
     "target_parent": false, // if after the swatch is hidden there's any extra gap between remaining swatches, set it to true
     "handle_query": "a.product-link", // css query selector to find the element containing product's handle
     "handle_query_attribute": "href", // attribute that contains the product handle or product link
     "options_to_hide": [ // these are the option names that Camouflage tries to find on the collection page to hide them. The first matched option is taken for hiding
       "Color",
       "Colour",
       "Couleur",
       "Farbe"
     ]
  },
  "delay": 100 // delay in ms before hiding swatches
});
```



#### Example for Symmetry theme

```javascript
window.CAMOUFLAGEE.startCamouflageProductGrid({
  "camouflageProductGridConfig": {
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
  },
  "delay": 100 // delay in ms before hiding swatches
});
```
