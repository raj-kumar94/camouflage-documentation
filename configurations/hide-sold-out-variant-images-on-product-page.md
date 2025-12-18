---
icon: image-polaroid
---

# Hide sold out variant images on product page

{% hint style="info" %}
Add `window.camouflagePostImageHideFunction` function to your product template liquid file or `theme.liquid` file. Function `camouflagePostImageHideFunction` receives a param that contains hoosObj, mediaObj and availableVariants.\
\
Update `imagesCSSSelectors` object for Camouflage to correctly target the slider images as well as thumbnail images on the product page.
{% endhint %}

## Pre-configured function for some of the themes:

### Vision theme (Latest method)

```js
// Vision (2.8.1) theme
window.camouflagePostImageHideFunction = ({ hoosObj, mediaObj, availableVariants }) => {

  // exit early cases:

  // 1. don't run on desktop (depending on the theme, update the width)
  // if (window.screen.width >= 750) {
  //   return;
  // }

  // 2. don't run if not in debug mode
  // if (!window.location.href.includes('test=camouflage')) {
  //   return;
  // }

  const imagesCSSSelectors = {
    imagesContainerSelector: '.product-image-container', // contains the main slider images and thumbnail images
    mainImages: {
      cssSelector: 'product-slider .product-images__slide',
      mediaIDAttribute: 'data-media-id', // attribute to get the image's media ID
      indexAttribute: 'data-index' // attribute to get the image's index, set it to null if no image index has been set
    },
    thumbnailImages: {
      cssSelector: '.product-thumbnail-container .product-thumbnail',
      mediaIDAttribute: 'id', // attribute to get the image's media ID
      indexAttribute: 'data-index' // attribute to get the image's index, set it to null if no image index has been set
    }
  }

  const mediaContainer = document.querySelector(imagesCSSSelectors.imagesContainerSelector);
  if (!mediaContainer) return;


  // set the data-slide-index correctly
  let mainImages = [...mediaContainer.querySelectorAll(`${imagesCSSSelectors.mainImages.cssSelector}[${imagesCSSSelectors.mainImages.mediaIDAttribute}]`)];
  let thumbnailImages = [...mediaContainer.querySelectorAll(`${imagesCSSSelectors.thumbnailImages.cssSelector}[${imagesCSSSelectors.thumbnailImages.mediaIDAttribute}]`)];

  let deletedMainImages = 0;
  let deletedThumbnailImages = 0;

  for (let mediaId in mediaObj) {
    if (mediaObj[mediaId].soldout) {
      const imageItem = mainImages.find((imageItem) => imageItem.getAttribute(imagesCSSSelectors.mainImages.mediaIDAttribute).includes(mediaId));
      if (imageItem) {
        imageItem.remove();
        deletedMainImages++;
      }

      const thumbnailItem = thumbnailImages.find((imageItem) => imageItem.getAttribute(imagesCSSSelectors.thumbnailImages.mediaIDAttribute).includes(mediaId));
      if (thumbnailItem) {
        thumbnailItem.remove();
        deletedThumbnailImages++;
      }
    }
  }

  // set the data-index correctly so images are synced properly between main images and thumbnail images
  if (imagesCSSSelectors.mainImages.indexAttribute) {
    mainImages = [...mediaContainer.querySelectorAll(`${imagesCSSSelectors.mainImages.cssSelector}[${imagesCSSSelectors.mainImages.mediaIDAttribute}]`)];
    mainImages.forEach((imageItem, index) => {
      imageItem.setAttribute(imagesCSSSelectors.mainImages.indexAttribute, index);
    });
  }

  if (imagesCSSSelectors.thumbnailImages.indexAttribute) {
    thumbnailImages = [...mediaContainer.querySelectorAll(`${imagesCSSSelectors.thumbnailImages.cssSelector}[${imagesCSSSelectors.thumbnailImages.mediaIDAttribute}]`)];
    thumbnailImages.forEach((imageItem, index) => {
      imageItem.setAttribute(imagesCSSSelectors.thumbnailImages.indexAttribute, index);
    });
  }

};
```



### For Ecomfy

```javascript
window.camouflagePostImageHideFunction = ({ hoosObj, mediaObj, availableVariants }) => {
  const mediaContainer = document.querySelector('.product-gallery');
  if (!mediaContainer) return;

  const mainImagesSelector = '.main-splide .splide__track .splide__list .splide__slide';
  const thumbnailImagesSelector = '.thumbs-splide .splide__track .splide__list .splide__slide';

  const mainImages = mediaContainer.querySelectorAll(mainImagesSelector);
  const thumbnailImages = mediaContainer.querySelectorAll(thumbnailImagesSelector);
  if (mainImages.length !== hoosObj.product.media.length) return;

  // set the data-media-id
  for (let i = 0; i < hoosObj.product.media.length; i++) {
    mainImages[i].setAttribute('data-media-id', hoosObj.product.media[i].id);
    thumbnailImages[i].setAttribute('data-media-id', hoosObj.product.media[i].id);
  }

  // remove images
  for (let mediaId in mediaObj) {
    if (mediaObj[mediaId].soldout) {
      const imageItem = mediaContainer.querySelector(`${mainImagesSelector}[data-media-id$="${mediaId}"]`);
      if (imageItem) {
        imageItem.remove();
      }

      const thumbnailItem = mediaContainer.querySelector(`${thumbnailImagesSelector}[data-media-id$="${mediaId}"]`);
      if (thumbnailItem) {
        thumbnailItem.remove();
      }
    }
  }
}
```

### Impulse theme

```javascript
window.camouflagePostImageHideFunction = ({ hoosObj, mediaObj, availableVariants }) => {
  if (hoosObj.params.hide_oos_m_settings.hsoi !== 'd') {
    return;
  }
  const mediaContainer = document.querySelector('.product__photos--beside');
  if (!mediaContainer) return;

  const mainImagesSelector = '.product__main-photos .product-main-slide[data-index]';
  const thumbnailImagesSelector = '.product__thumbs .product__thumb-item';

  const mainImages = mediaContainer.querySelectorAll(mainImagesSelector);
  const thumbnailImages = mediaContainer.querySelectorAll(thumbnailImagesSelector);
  if (mainImages.length !== hoosObj.product.media.length) return;

  // set the data-media-id
  for (let i = 0; i < hoosObj.product.media.length; i++) {
    mainImages[i].setAttribute('data-media-id', hoosObj.product.media[i].id);
    thumbnailImages[i].setAttribute('data-media-id', hoosObj.product.media[i].id);
  }

  // console.log("camouflagePostImageHideFunction:1", mainImages, thumbnailImages);

  // remove images
  for (let mediaId in mediaObj) {
    if (mediaObj[mediaId].soldout) {
      const imageItem = mediaContainer.querySelector(`${mainImagesSelector}[data-media-id$="${mediaId}"]`);
      if (imageItem) {
        // console.log('removed main', imageItem);
        imageItem.remove();
      }

      const thumbnailItem = mediaContainer.querySelector(`${thumbnailImagesSelector}[data-media-id$="${mediaId}"]`);
      if (thumbnailItem) {
        // console.log('removed thumb', thumbnailItem);
        thumbnailItem.remove();
      }
    }
  }
}
```



### Dawn

```javascript
window.camouflagePostImageHideFunction = ({ hoosObj, mediaObj, availableVariants }) => {
  // don't run if not in debug mode
  // if (!window.location.href.includes('test=camouflage')) {
  //   return;
  // }
  const mediaContainer = document.querySelector('media-gallery, .product-single__gallery') || document.body;
  for (let mediaId in mediaObj) {
    if (mediaObj[mediaId].soldout) {
      const imageItem = mediaContainer.querySelector(`li.product__media-item[data-media-id$="${mediaId}"],div[data-media-id$="${mediaId}"]`);
      if (imageItem) {
        imageItem.remove();
      }

      const thumbnailItem = mediaContainer.querySelector(`li.thumbnail-list__item[data-target$="${mediaId}"],div.product-single__thumbnail[data-id$="${mediaId}"]`);
      if (thumbnailItem) {
        thumbnailItem.remove();
      }
    }
  }
}
```



### Symmetry

```javascript
window.camouflagePostImageHideFunction = ({ hoosObj, mediaObj, availableVariants }) => {
  if (camouflage_global_config.hide_oos_m_settings.hsoi !== 'd') {
    return;
  }
  const mediaContainer = document.querySelector('.product-detail') || document.body;
  console.log({ mediaObj });
  let firstThumbnail = null;
  for (let mediaId in mediaObj) {
    if (mediaObj[mediaId].soldout) {
      const imageItem = mediaContainer.querySelector(`.product-slideshow .slide[data-media-id="${mediaId}"]`);
      if (imageItem) {
        console.log('removing image', imageItem);
        imageItem.remove();
      }

      const thumbnailItem = mediaContainer.querySelector(`.gallery .thumbnails a.thumbnail[data-media-id="${mediaId}"]`);
      if (thumbnailItem) {
        console.log('removing thumbnail', thumbnailItem);
        thumbnailItem.remove();
      }
    } else if (!firstThumbnail) {
      firstThumbnail = mediaContainer.querySelector(`.gallery .thumbnails a.thumbnail[data-media-id="${mediaId}"] img`);
    }
  }

  if (firstThumbnail) {
    document.addEventListener('DOMContentLoaded', () => {
      // console.log({firstThumbnail})
      setTimeout(() => {
        firstThumbnail.click();
      }, 1000);
    });
  }
}
```



### Avone

```javascript
window.camouflagePostImageHideFunction = ({ hoosObj, mediaObj, availableVariants }) => {
  // if (!window.location.href.includes('shopifypreview.com')) {
  //   return;    
  // }
  const mediaContainer = document.querySelector('.product-single__photos') || document.body;
  for (let mediaId in mediaObj) {
    if (mediaObj[mediaId].soldout) {
      const imageItem = mediaContainer.querySelector(`.prod-large-img div[id$="${mediaId}"],div[data-media-id$="${mediaId}"]`);
      if (imageItem) {
        imageItem.remove();
      }

      const thumbnailItem = mediaContainer.querySelector(`.thumbnails-wrapper .product-single__thumbnails-item a[id="${mediaId}"],div.product-single__thumbnail[data-id$="${mediaId}"]`);
      if (thumbnailItem) {
        thumbnailItem.parentElement.remove();
      }
    }
  }
}
```



### Ecomify

```javascript
window.camouflagePostImageHideFunction = ({ hoosObj, mediaObj, availableVariants }) => {
  console.log('Shopify.theme.id', Shopify?.theme?.id);
  if (window.Shopify?.theme?.id != 135774830732) return;
  const mediaContainer = document.querySelector('.product-gallery');
  if (!mediaContainer) return;

  const mainImages = mediaContainer.querySelectorAll('.main-splide .splide__track .splide__list .splide__slide');
  const thumbnailImages = mediaContainer.querySelectorAll('.thumbs-splide .splide__track .splide__list .splide__slide');
  if (mainImages.length !== hoosObj.product.media.length) return;

  for (let i = 0; i < hoosObj.product.media.length; i++) {
    mainImages[i].setAttribute('data-media-id', hoosObj.product.media[i].id);
    thumbnailImages[i].setAttribute('data-media-id', hoosObj.product.media[i].id);
  }

  for (let mediaId in mediaObj) {
    if (mediaObj[mediaId].soldout) {
      const imageItem = mediaContainer.querySelector(`.main-splide .splide__track .splide__list .splide__slide[data-media-id$="${mediaId}"]`);
      if (imageItem) {
        imageItem.remove();
        console.debug('remove', imageItem);
      }

      const thumbnailItem = mediaContainer.querySelector(`.thumbs-splide .splide__track .splide__list .splide__slide[data-media-id$="${mediaId}"]`);
      if (thumbnailItem) {
        thumbnailItem.remove();
        console.debug('thumbnail remove', thumbnailItem);
      }
    }
  }
}
```

### ShowTime

```javascript
// Image hide on both PDP and quick views
window.camouflagePostImageHideFunction = ({ hoosObj, mediaObj, availableVariants }) => {
  // console.log('camouflagePostImageHideFunction:start', mediaObj);
  if (window.camouflage_global_config?.hide_oos_m_settings?.hsoi === 'd' || window.location.href.includes('shopifypreview.com')) {
    //
  } else {
    return;
  }

  let mainContainer = document.body;
  if (hoosObj.params.source === 'quick_view') {
    mainContainer = document.querySelector('.\\#product-quick-view') || mainContainer;
  }
  const mediaContainer = mainContainer.querySelector('product-gallery');
  let marginToAdd = 0;
  for (let mediaId in mediaObj) {
    if (mediaObj[mediaId].soldout) {
      const imageItem = mediaContainer.querySelector(`div.\\#product-gallery-stage-inner .swiper-slide[data-media-id$="${mediaId}"]`);
      if (imageItem) {
        // imageItem.remove();
        imageItem.classList.add('camouflage-image-hide');
      }

      const thumbnailItem = mediaContainer.querySelector(`slideshow-thumbnails div[data-media-id$="${mediaId}"]`);
      if (thumbnailItem) {
        // thumbnailItem.remove();
        thumbnailItem.classList.add('camouflage-image-hide');
        marginToAdd += 20;
      }
    } else {
      if (marginToAdd) {
        const thumbnailItem = mediaContainer.querySelector(`slideshow-thumbnails div[data-media-id$="${mediaId}"]`);
        if (thumbnailItem) {
          // thumbnailItem.remove();
          thumbnailItem.style.marginTop = `-${marginToAdd}px`;
          marginToAdd = 0;
          // console.log('------added margingtop---------- ')
        }
      }
    }
  }

  setTimeout(() => {
    mediaContainer.querySelectorAll(`slideshow-thumbnails div[data-media-id]`).forEach(thumbnailItem => {
      const hoosObj2 = window.CAMOUFLAGEE.items.find(item => item.product?.id === hoosObj.product.id);
      syncMediaWithVariants(thumbnailItem, hoosObj2 || hoosObj);
    });    
  }, 1000);
  // console.log({marginToAdd});
}

document.addEventListener('hoos:executed', (event) => {
	const hoosObj = event.detail;
  const params = hoosObj.params;
  // console.log('params', params)
  if (params.source === 'quick_view') {
    const productFromQuickView = document.getElementById('quick-view-product-json');
    if (productFromQuickView) {
      try {
        const newProductJSON = JSON.parse(productFromQuickView.innerHTML.trim());
        if (newProductJSON && newProductJSON.product) {
          hoosObj.product.media = newProductJSON.product.media;
          hoosObj.product.product_images_with_id = newProductJSON.product_images_with_id;
          for (const variant of hoosObj.product.variants) {
            const newVariant = newProductJSON.product.variants.find((v) => v.id === variant.id);
            if (newVariant) {
              variant.image_id = newVariant.image_id;
              variant.featured_image = newVariant.featured_image;
              variant.featured_media = newVariant.featured_media;
            }

          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    const mediaObj = window.CAMOUFLAGEE.getMediaObj({ hoosObj });
    window.camouflagePostImageHideFunction({ hoosObj, mediaObj });
  }
});
```

### Palo Alto

```javascript
window.camouflagePostImageHideFunction = ({ hoosObj, mediaObj, availableVariants }) => {
  const mediaContainer = document.querySelector('media-gallery, .product-single__gallery') || document.body;
  for (let mediaId in mediaObj) {
    if (mediaObj[mediaId].soldout) {
      const imageItem = mediaContainer.querySelector(`li.product__media-item[data-media-id$="${mediaId}"],div[data-media-id$="${mediaId}"]`);
      if (imageItem) {
        imageItem.remove();
        // console.log('image removed', imageItem);
      }

      const thumbnailItem = mediaContainer.querySelector(`li.thumbnail-list__item[data-target$="${mediaId}"],div.product-single__thumbnail[data-id$="${mediaId}"]`);
      if (thumbnailItem) {
        thumbnailItem.remove();
        // console.log('thumbnail removed', thumbnailItem);
      }
    }
  }
}
```

### Broadcast 6.1.0

```javascript
window.camouflagePostImageHideFunction = ({ hoosObj, mediaObj, availableVariants }) => {
  if (window.camouflage_global_config?.hide_oos_m_settings?.hsoi !== 'd') return;
  // console.log('camouflagePostImageHideFunction', mediaObj)
  const mediaContainer = document.querySelector('product-images') || document.body;
  for (let mediaId in mediaObj) {
    if (mediaObj[mediaId].soldout) {
      const imageItem = mediaContainer.querySelector(`div.product__slide[data-image-id="${mediaId}"]`);
      if (imageItem) {
        const dataMediaId = imageItem.getAttribute('data-media-id');
        imageItem.remove();
        if (dataMediaId) {
          const thumbnailItem = mediaContainer.querySelector(`product-thumbs a.product__thumb__link[data-media-id="${dataMediaId}"]`)
          if (thumbnailItem) {
            if (thumbnailItem.closest('.product__thumb')) {
              thumbnailItem.closest('.product__thumb').remove();
            } else {
              thumbnailItem.remove();
            }
          }
        }
      }
    }
  }
}
```





## Configuration for themes (v1) - Depricated

### ShowTime theme

```jsx
{
  "is_enabled": "yes",
  "thumbnail_wrapper": ".owl-stage-outer",
  "thumbnail_key": "id",
  "thumbnail_element": "a.thumbnail",
  "thumbnail_attribute": "data-media-id",
  "thumbnail_hide_or_remove": "hide",
  "hide_class": "camouflage-thumbnail-hidden",
  "thumbnail_target_parent": true
}
```

### Palo Alto

```jsx
{
  "is_enabled": "yes",
  "thumbnail_wrapper": ".product-single__media-slider",
  "thumbnail_key": "id",
  "thumbnail_element": ".product-single__media-slide",
  "thumbnail_attribute": "data-id",
  "thumbnail_hide_or_remove": "hide",
  "hide_class": "camouflage-thumbnail-hidden",
  "thumbnail_target_parent": false
}
```

### Pipeline

```jsx
{
  "is_enabled": "yes",
  "thumbnail_wrapper": ".media__thumb__holder .media__thumb__wrapper",
  "thumbnail_key": "id",
  "thumbnail_element": ".media__thumb",
  "thumbnail_attribute": "data-media-select",
  "thumbnail_hide_or_remove": "hide",
  "hide_class": "camouflage-thumbnail-hidden",
  "thumbnail_target_parent": false
}
```
