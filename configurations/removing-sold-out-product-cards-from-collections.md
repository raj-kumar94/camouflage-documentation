---
description: >-
 The following code removes the product cards of those variants which display the images of sold out variants. 
---

# Removing product cards displaying sold out variants

This is to be used when the cards on the collection pages show variants instead of products. However, logic can be modified if needed. The template is as follows: 

```javascript
window.camouflagePostProductGridFunction = ({
  productGridItem, 
  product, 
  handle, 
  availableOptions, 
  allOptions, 
  markedUnavailableOptions, 
  availableVariants,
}) => {

  /* TEST GUARD */
  // if (!window.location.href.includes("test=camouflage")) {
  //   return;
  // }

  /* GET THE NODE CONTAINING THE PRODUCT HANDLE, IT ENDS WITH THE ID OF THE VARIANT*/
  const variantAnchor = productGridItem.querySelector('a.product-info__caption');
  if (!variantAnchor) return;
  
  /* GET THE ID OF THE VARIANT*/
  const variantId = new URL(variantAnchor.href).searchParams.get('variant');
  if (!variantId) return;

  /* IF ANY OF THE OPTIONS IN THE PRODUCT.OPTIONS EXISTS IN THE options_to_hide in the product_grid config, GET ITS INDEX RELATIVE TO prodcuct.options*/
  const options_to_hide = window.camouflage_global_config.product_grid.options_to_hide;
  let option_to_hide_index = -1;
  for (let option_index = 0; option_index < product.options.length; option_index++) {
    if (options_to_hide.includes(product.options[option_index])) {
      option_to_hide_index = option_index;
      break;
    }
  }

  if (option_to_hide_index === -1) return;

  /* GET THE CORRECT VARIANT FROM THE VARIANT ID EXTRACTED ABOVE*/
  const variant = product.variants.find(v => v.id == variantId);
  if (!variant) return;

  /* FROM THE VARIANT, GET THE VALUE OF THAT OPTION WHICH IS SET TO BE HIDDEN IN THE options_to_hide in the product_grid config*/
  const currentOptionValue = variant.options[option_to_hide_index];

  /* GET THE NAME OF THE OPTION THAT IS SET TO BE HIDDEN IN THE options_to_hide*/
  const optionName = product.options[option_to_hide_index]
  if (!availableOptions[optionName].includes(currentOptionValue)) {
    // hide variant
    console.log(`Hide the option`, currentOptionValue);

    // refer to this log in the console to understand the flow of the logic
    /*
    console.log("Variant Data : ", {
      variantId,
      options_to_hide,
      option_to_hide_index,
      variant,
      availableOptions
    })
    */
    productGridItem.classList.add('camouflage-grid-disable');
  }
};
```