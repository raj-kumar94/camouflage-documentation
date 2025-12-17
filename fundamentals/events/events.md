# 🤝 Events

{% hint style="info" %}
**All events are attached on \`document\` and the passed data can be accessed via \`event.detail\`**
{% endhint %}

### hoos:alldisabled

```jsx
document.addEventListener('hoos:alldisabled', (event) => {
	console.log("Camouflage", 'hoos:alldisabled event fired');
	const hoosObj = event.detail;
    const addBtn = hoosObj.mainContainer.querySelector('[name="add"]') || document.querySelector('[name="add"]');
	if (addBtn) {
		addBtn.disabled = true;
	}
});
```

### hoos:variantchanged

```jsx
document.addEventListener('hoos:variantchanged', (event) => {
	console.log("Camouflage", 'hoos:variantchanged event fired');
	const { currentVariant, hoosObj } = event.detail;
});
```

### hoos:scriptloaded

```jsx
document.addEventListener('hoos:scriptloaded', (event) => {
	console.log("Camouflage", 'hoos:scriptloaded event fired');
	const { currentTime } = event.detail;
});
```

### hoos:labelhideshow

```jsx
document.addEventListener('hoos:labelhideshow', (event) => {
	console.log("Camouflage", 'hoos:labelhideshow event fired');
	const action = event.detail;
});
```

### hoos:executed

```jsx
document.addEventListener('hoos:executed', (event) => {
	console.log("Camouflage", 'hoos:executed event fired');
	const hoosObj = event.detail;
});
```

### hoos:prepared

```jsx
document.addEventListener('hoos:prepared', (event) => {
	console.log("Camouflage", 'hoos:prepared event fired');
	const hoosObj = event.detail;
});
```

### hoos:camouflage\_params\_built

```jsx
document.addEventListener('camouflage_params_built', (event) => {
	console.log("Camouflage", 'camouflage_params_built event fired');
	const camouflageParams = event.detail;
	window.initCamouflage(camouflageParams);
});
```



## Overview

| Event Name          | JavaScript Code                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hoos:alldisabled    | `document.addEventListener('hoos:alldisabled', (event) => { console.log("Camouflage", 'hoos:alldisabled event fired'); const hoosObj = event.detail; const addBtn = hoosObj.mainContainer.querySelector('[name="add"]')` |
| hoos:variantchanged | `document.addEventListener('hoos:variantchanged', (event) => { console.log("Camouflage", 'hoos:variantchanged event fired'); const { currentVariant, hoosObj } = event.detail; });`                                      |
| hoos:scriptloaded   | `document.addEventListener('hoos:scriptloaded', (event) => { console.log("Camouflage", 'hoos:scriptloaded event fired'); const { currentTime } = event.detail; });`                                                      |
| hoos:labelhideshow  | `document.addEventListener('hoos:labelhideshow', (event) => { console.log("Camouflage", 'hoos:labelhideshow event fired'); const action = event.detail; });`                                                             |
| hoos:executed       | `document.addEventListener('hoos:executed', (event) => { console.log("Camouflage", 'hoos:executed event fired'); const hoosObj = event.detail; });`                                                                      |
| hoos:prepared       | `document.addEventListener('hoos:prepared', (event) => { console.log("Camouflage", 'hoos:prepared event fired'); const hoosObj = event.detail; });`                                                                      |
