---
description: >-
  On some themes/ third party apps, classes and attributes (eg:
  '.hide-oos-disable') are removed from the variant picker upon re-render caused
  by option change. This custom js restores those attributes
---

# 🕵️‍♀️ Mutation Observer for restoring attributes

Camouflage cannot implement its hiding / striking-through functionality without these attributes. This configuration restores those attributes/classes after the re-render. There are two ways to use this : \
\
(Both will be used in **custom js PDP**)

```javascript
// 1. Use the definition provided on the window: 
document.addEventListener('hoos:executed', (event) => {
  const containerToObserve = event.detail.mainContainer; //event.detail.mainContainer.closest('.product-form--block');
  window.CAMOUFLAGEE.observeContainerForRestoringAttributes(event.detail, containerToObserve);
})
```

```javascript
// 2. If you want more control on the logic: 
const observeContainerForRestoringAttributes = (hoosObj) => {
  // debugger;
  let shouldDisableSoldOut = hoosObj.extras.disabled === true || ['hide', 'disable', 'strike-through-disabled'].includes(hoosObj.variant_action);
  let shouldDisableMarkedUnavailable = true;
  function handleMutation(mutation) {
    if (mutation.type !== 'attributes' || mutation.attributeName !== 'class') {
      return;
    }

    const target = mutation.target;
    const oldClassList = mutation.oldValue ? mutation.oldValue.split(' ') : [];
    const newClassList = Array.from(target.classList || []);

    const classesToCheck = [
      hoosObj.camouflageUnavailableClass,
      hoosObj.camouflageMarkedUnavailableClass,
      hoosObj.defaultUnavailableClass,
    ];

    classesToCheck.forEach(checkClass => {
      const wasRemoved = oldClassList.includes(checkClass) && !newClassList.includes(checkClass);
      if (!wasRemoved) {
        return;
      }

      console.log("Camouflage", `Class ${checkClass} was removed from:`, target);

      const propertyName = checkClass.replace(/-/g, '_');
      if (target[propertyName] === true) {
        console.log("Camouflage", `Restoring class ${checkClass} because the property is true`);
        target.classList.add(checkClass);
        if (target.camouflage_disabled === true) {
          if ((checkClass === hoosObj.defaultUnavailableClass) && shouldDisableSoldOut) {
            target.disabled = true;
          } else if ((checkClass === hoosObj.camouflageMarkedUnavailableClass) && shouldDisableMarkedUnavailable) {
            target.disabled = true;
          } else if (checkClass === hoosObj.camouflageUnavailableClass) {
            target.disabled = true;
          }
        }
      }
    });
  }

  const observer = new MutationObserver(mutations => {
    mutations.forEach(handleMutation);
  });

  const config = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['class'],
    subtree: true,
  };

  const variantPicker = hoosObj.mainContainer;
  console.log({variantPicker});
  if (variantPicker) {
    observer.observe(variantPicker, config);
    console.log('MutationObserver started to track specific class removal');
  } else {
    console.log('variant-picker element not found, observer not started');
  }
};


document.addEventListener('hoos:executed', (event) => {
	const hoosObj = event.detail;
  observeContainerForRestoringAttributes(hoosObj);
});
```
