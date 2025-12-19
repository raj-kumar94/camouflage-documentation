---
description: Custom configuration for product pages
---

# 🎁 Product Page

If Camouflage is not working on product pages, a simple Javascript configuration can be added to product pages in order to assist Camouflage to correctly identify the variant picker on the product pages. The configuration looks like the following. Note: You may need to update the configuration as per your theme's HTML structure.

```javascript
window.hide_oos_query_selectors = {
  "selector_type": "radio",
  "input_selector": "radio",
  "field_selector": "fieldset.variant-option__wrapper",
  "mainContainer": "variant-picker[data-main-product='true']"
};
window.hide_oos_extras = {
  "target_parent_element": false,
  "target_parent2_element": false,
  "attribute_name": "value",
  "observer_selector": "variant-picker"
}
```

**Where**

`hide_oos_query_selectors` contains the query selectors to correct target the variant picker on the page and the variant options

`hide_oos_extras` contains options to manipulate Camouflage's behaviour on the variant picker

`hide_oos_query_selectors.selector_type` - The nodename of the HTML tag which contains the product options (The HTML tag of the product options container) Eg: `span`, `div` etc. In case of `input`, use `radio` instead. Note : Some themes use custom tags to make the product options containers such as `custom-select`.

`hide_oos_query_selectors.input_selector` - HTML tag in lowercase that holds the product option value. In case of selector/dropdown, the product option value is found in the option itself, in case of swatches, it might be found in some adjacent/parent label or `input` tag.&#x20;

`hide_oos_query_selectors.field_selector` - It is the CSS selector of the element which wraps a product options container.&#x20;

`hide_oos_query_selectors.mainContainer` - CSS selector that uniquely identifies the variant picker for the given product.



`hide_oos_extras.attribute_name` - The attribute name on `hide_oos_query_selectors.input_selector` that holds the variant option value. Eg: `value` or `data-value`

`hide_oos_extras.target_parent_element` - If it is set to true, the parent element of the `hide_oos_query_selectors.input_selector` will get hidden if `hide_oos_query_selectors.input_selector` is hidden

`hide_oos_extras.target_parent2_element` - If it is set to true, the parent element of the parent element of the `hide_oos_query_selectors.input_selector` will get hidden if `hide_oos_query_selectors.input_selector` is hidden

`hide_oos_extras.observer_selector` - CSS selector to attach mutation observer to. The immediate children are checked for the mutation. Use it when the theme deletes and re-adds the variant picker on variant option change.
