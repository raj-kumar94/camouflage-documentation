# 🔍 Availability filter on collection pages

### Set in-stock filter on page load

```javascript
document.addEventListener('hoos:script2loaded', () => {
    if (window.CAMOUFLAGEE.setInStockFilterOnLoad && window.camouflage_global_config?.hide_oos_m_settings?.update_collection_links === 'yes') {
        if (!window.location.search.includes('filter.v.availability')) {
            window.CAMOUFLAGEE.setInStockFilterOnLoad();
        }
    }
});
```



### Append availability to search form

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('#SearchInput--mobile, #SearchInput--desktop, form.search-form .input-holder input[type="search"]');
  for (const input of inputs) {
      const form = input.closest('form');
      if (form) {
          const newInput = document.createElement('input');
          newInput.name = 'filter.v.availability';
          newInput.value = '1';
          newInput.setAttribute('type', 'hidden');
          form.appendChild(newInput);
      }
  }
});
```
