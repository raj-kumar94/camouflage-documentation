---
description: >-
  Camouflage exposes events and global functions that can be used to extend its
  functionality
---

# 🛠️ Global Functions & Events



<details>

<summary>hoos:alldisabled</summary>

{% code lineNumbers="true" %}
```javascript
document.addEventListener('hoos:alldisabled', (event) => {
	console.log("Camouflage", 'hoos:alldisabled event fired');
	const hoosObj = event.detail;
        const addBtn = hoosObj.mainContainer.querySelector('[name="add"]') || document.querySelector('[name="add"]');
	if (addBtn) {
	  addBtn.disabled = true;
	}
});
```
{% endcode %}

</details>

<details>

<summary>hoos:variantchanged</summary>

{% code lineNumbers="true" %}
```javascript
document.addEventListener('hoos:variantchanged', (event) => {
	console.log("Camouflage", 'hoos:variantchanged event fired');
	const { currentVariant, hoosObj } = event.detail;
});
```
{% endcode %}

</details>

<details>

<summary>hoos:scriptloaded</summary>

{% code lineNumbers="true" %}
```javascript
document.addEventListener('hoos:scriptloaded', (event) => {
	console.log("Camouflage", 'hoos:scriptloaded event fired');
	const { currentTime } = event.detail;
});
```
{% endcode %}

</details>

<details>

<summary>hoos:labelhideshow</summary>

{% code lineNumbers="true" %}
```javascript
document.addEventListener('hoos:labelhideshow', (event) => {
	console.log("Camouflage", 'hoos:labelhideshow event fired');
	const action = event.detail;
});
```
{% endcode %}

</details>

<details>

<summary>hoos:variantchanged</summary>

{% code lineNumbers="true" %}
```javascript
document.addEventListener('hoos:executed', (event) => {
	console.log("Camouflage", 'hoos:executed event fired');
	const hoosObj = event.detail;
});
```
{% endcode %}

</details>

<details>

<summary>hoos:prepared</summary>

{% code lineNumbers="true" %}
```javascript
document.addEventListener('hoos:prepared', (event) => {
	console.log("Camouflage", 'hoos:prepared event fired');
	const hoosObj = event.detail;
});
```
{% endcode %}

</details>

<details>

<summary>hoos:camouflage_params_built</summary>

```javascript
document.addEventListener('hoos:camouflage_params_built', (event) => {
  const camouflageParams = event.detail;

  if (!window.CAMOUFLAGEE || !window.CAMOUFLAGEE.getHoosObj || !window.CAMOUFLAGEE.getAvailableVariants) {
    console.debug('Camouflage', 'script not loaded correctly');
    return;
  }

  camouflageParams.no_hoos_obj = true;
  camouflageParams.no_camouflage_items = true;
  const hoosObj = window.CAMOUFLAGEE.getHoosObj(camouflageParams);
  const availableVariants = window.CAMOUFLAGEE.getAvailableVariants({ hoosObj });

  const mediaObj = window.CAMOUFLAGEE.getMediaObj({ hoosObj });

  // can be used to hide the variants as soon as the code executes to avoid flicker
  // best suited for variants having 1 product option
  if (typeof window.camouflagePostImageHideFunction === "function") {
    window.camouflagePostImageHideFunction({ hoosObj, mediaObj, availableVariants });
  }
});
```

</details>
