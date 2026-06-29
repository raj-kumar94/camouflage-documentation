---
description: >-
 The following code is used to change the images on the cards of those products which are displaying the images of sold out variants. 
---

# Swapping product card images with images of available variants

This is to be used when the cards on the collection pages show individual products, and not variants of the same product.

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
  // if (!window.location.href.includes('test=camouflage')) {
  //   return;
  // }

  console.log('FIRING CAMOUFLAGE POST PRODUCT GRID');

  /**
   * Returns the filename portion of an image URL.
   *
   * Example:
   * https://cdn.shopify.com/.../shirt.jpg?width=500
   * -> shirt.jpg
   */
  const extractFilename = (url) => {
    if (!url) {
      return null;
    }

    return url.split('?')[0].split('/').pop() ?? null;
  };

  /**
   * Find the first available variant that has an associated featured image.
   * This image will be used as the replacement if the product card is
   * currently displaying an unavailable variant's image.
   */
  const firstAvailableVariantWithMedia = availableVariants.find(
    (variant) => variant.featured_image?.src
  );

  if (!firstAvailableVariantWithMedia) {
    console.log('No available variant with media found.');
    return;
  }

  console.log({ firstAvailableVariantWithMedia });

  const featuredMediaSrc = firstAvailableVariantWithMedia.featured_image.src;
  const availableImageFilename = extractFilename(featuredMediaSrc);

  if (!availableImageFilename) {
    console.log('Available image filename not found.');
    return;
  }

  /**
   * Locate the image currently displayed inside the product card.
   */
  const imageElement = productGridItem.querySelector('.card__media img');

  if (!imageElement) {
    console.log('Image element not found.');
    return;
  }

  const currentSrc = imageElement.getAttribute('src');

  if (!currentSrc) {
    console.log('Current image source not found.');
    return;
  }

  const displayedImageFilename = extractFilename(currentSrc);

  if (!displayedImageFilename) {
    console.log('Displayed image filename not found.');
    return;
  }

  console.log({
    availableImageFilename,
    displayedImageFilename,
  });

  /**
   * Abort if the displayed image already belongs to the first available
   * variant. No update is necessary.
   */
  if (availableImageFilename === displayedImageFilename) {
    console.log(
      'Displayed image already belongs to the first available variant.'
    );
    return;
  }

  console.log('Image mismatch detected. Updating image...');

  /**
   * Preserve the responsive image widths defined by the theme's existing
   * srcset so that we only swap the underlying image, not the responsive
   * behaviour.
   */
  const currentSrcset = imageElement.getAttribute('srcset');

  const widths = currentSrcset
    ? currentSrcset
        .split(',')
        .map((entry) => {
          const match = entry.match(/(\d+)w/);
          return match ? match[1] : null;
        })
        .filter(Boolean)
    : [];

  console.log({ widths });

  /**
   * Preserve the width parameter currently used by the theme's src
   * attribute to avoid changing the rendered image size.
   */
  const srcWidthMatch = currentSrc.match(/[?&]width=(\d+)/);
  const srcWidth = srcWidthMatch?.[1];

  const updatedSrc = srcWidth
    ? `${featuredMediaSrc}&width=${srcWidth}`
    : featuredMediaSrc;

  imageElement.setAttribute('src', updatedSrc);

  /**
   * Rebuild the srcset using the new image while keeping all of the
   * original responsive width descriptors.
   */
  if (widths.length) {
    const updatedSrcset = widths
      .map((width) => `${featuredMediaSrc}&width=${width} ${width}w`)
      .join(',');

    imageElement.setAttribute('srcset', updatedSrcset);
  }

  console.log({
    availableImageFilename,
    displayedImageFilename,
    updatedSrc,
    updatedSrcset: imageElement.getAttribute('srcset'),
    currentSrcUsedByBrowser: imageElement.currentSrc,
  });

  console.log('Image successfully updated.');
};
```