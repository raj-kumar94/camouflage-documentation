---
description: >-
  On some themes and third-party apps, classes and attributes (for example,
  '.hide-oos-disable') are removed from the variant picker during re-renders
  triggered by option changes. This custom JavaScript restores those
  attributes and classes.
---

# 🕵️‍♀️ Restoring Attributes with a MutationObserver

Camouflage relies on these attributes and classes to implement its hiding and strike-through functionality. Some themes or third-party apps remove them during re-renders, causing the functionality to stop working.

This configuration restores the missing attributes and classes after each re-render.

There are three ways to enable this:

### 1. Enable the built-in MutationObserver

```json
{
  "hide_oos_extras": {
    "use_class_mutation_observer": true
  }
}
```

### 2. Use the helper exposed by Camouflage

Add the following code to **Custom JS (PDP)**.

```javascript
document.addEventListener('hoos:executed', (event) => {
  const containerToObserve = event.detail.mainContainer;
  // Example:
  // const containerToObserve = event.detail.mainContainer.closest('.product-form--block');

  window.CAMOUFLAGEE.observeContainerForRestoringAttributes(
    event.detail,
    containerToObserve
  );
});
```

### 3. Implement your own MutationObserver

If you need full control over the observer logic, you can implement your own version.

Add the following code to **Custom JS (PDP)**.

```javascript
const observeContainerForRestoringAttributes = (hoosObj) => {
  const shouldDisableSoldOut =
    hoosObj.extras.disabled === true ||
    ['hide', 'disable', 'strike-through-disabled'].includes(
      hoosObj.variant_action
    );

  const shouldDisableMarkedUnavailable = true;

  function handleMutation(mutation) {
    if (
      mutation.type !== 'attributes' ||
      mutation.attributeName !== 'class'
    ) {
      return;
    }

    const target = mutation.target;
    const oldClassList = mutation.oldValue
      ? mutation.oldValue.split(' ')
      : [];
    const newClassList = Array.from(target.classList || []);

    const classesToCheck = [
      hoosObj.camouflageUnavailableClass,
      hoosObj.camouflageMarkedUnavailableClass,
      hoosObj.defaultUnavailableClass,
    ];

    classesToCheck.forEach((checkClass) => {
      const wasRemoved =
        oldClassList.includes(checkClass) &&
        !newClassList.includes(checkClass);

      if (!wasRemoved) {
        return;
      }

      console.log(
        'Camouflage',
        `Class "${checkClass}" was removed from:`,
        target
      );

      const propertyName = checkClass.replace(/-/g, '_');

      if (target[propertyName] === true) {
        console.log(
          'Camouflage',
          `Restoring class "${checkClass}".`
        );

        target.classList.add(checkClass);

        if (target.camouflage_disabled === true) {
          if (
            checkClass === hoosObj.defaultUnavailableClass &&
            shouldDisableSoldOut
          ) {
            target.disabled = true;
          } else if (
            checkClass === hoosObj.camouflageMarkedUnavailableClass &&
            shouldDisableMarkedUnavailable
          ) {
            target.disabled = true;
          } else if (
            checkClass === hoosObj.camouflageUnavailableClass
          ) {
            target.disabled = true;
          }
        }
      }
    });
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(handleMutation);
  });

  observer.observe(hoosObj.mainContainer, {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['class'],
    subtree: true,
  });

  console.log(
    'Camouflage: MutationObserver started. Tracking class removals.'
  );
};

document.addEventListener('hoos:executed', (event) => {
  observeContainerForRestoringAttributes(event.detail);
});
```