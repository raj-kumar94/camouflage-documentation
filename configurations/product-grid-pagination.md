---
description: >-
  Mutation observer code for relaunching startCamouflageProductGrid() function
  to hide sold out variant swatches from product cards dynamically inserted on
  the product grid via pagination.
icon: grid
---

# Product Grid Pagination

Use the following in the **Global Custom JS**:

```
// ********* RESTARTING PRODUCT GRID ON PAGINATION ***********
document.addEventListener('hoos:grid_executed', () => {
  const gridCSSSelector = <cssSelector for the immediate container of the product cards>;
  const target = document.querySelector(gridCSSSelector);
  if (target) {
    const observer = new MutationObserver((mutationsList) => {
      let itemsAdded = false;
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList') {
          // Added nodes
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // ELEMENT_NODE
              // console.log('Child added:', node);
              itemsAdded = true;
            }
          });
  
          // Removed nodes
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              // console.log('Child removed:', node);
            }
          });
        }
      });
  
      if (itemsAdded) {
        console.log(`Paginated....!`);
        window.CAMOUFLAGEE.startCamouflageProductGrid({});
      }
    });
  
    observer.observe(target, {
      childList: true,   // observe direct children
      subtree: false     // IMPORTANT: do not observe deeper levels
    });
  }
});
```
