---
description: >-
  Some third party apps render the variant picker in a shadow root. This causes
  the script to fail to find the selectors for the PDP config. The following is
  an example of handling such shadow roots.
---

# Handling Variant Picker in Shadow Root (Rubik-Swatch)

PDP Config:

```
{
  "hide_oos_query_selectors": {
  "selector_type": "radio",
  "input_selector": "radio",
  "field_selector": "fieldset.rubik-swatch__option",
  "mainContainer": "rubik-swatch"
},
  "hide_oos_extras": {
    "disabled": false,
    "observer_selector": "rubik-swatch .rubik-swatch",
    "render_global_hide_script": "yes"
  }
}
```

Custom JS PDP :&#x20;

```
// *********** CUSTOM CODE TO HANDLE SHADOW ROOT ************ //

window.getCamouflageProduct = (product, hoosObj) => {
  hoosObj.mainContainer = document.querySelector('rubik-swatch')?.shadowRoot.querySelector('.rubik-swatch');

  if (hoosObj.product.options_with_values) {
      const options_with_values_flat_keys = {};
      product.options_with_values.map(o => o.values).flat().forEach(item => {
          options_with_values_flat_keys[item.id] = item;
      });
      product.options_with_values_flat_keys = options_with_values_flat_keys;
  }
  return product;
}


document.addEventListener('hoos:executed', (event) => {
    setTimeout(() => {
        const mainContainer = event.detail.mainContainer;
        const style = document.getElementById('camouflage-custom-css-pdp');
        if (style) {
            // add the style before the mainContainer
            mainContainer.parentNode.insertBefore(style, mainContainer);
        }
    }, 200);
});
```
