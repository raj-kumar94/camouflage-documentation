---
icon: pen-to-square
---

# Theme edits/configurations for additional features

## Show image of first available image if the current item's image is not available

### Collection page - _Dawn theme_

card-product.liquid

```liquid
{%- liquid
  assign media_item = card_product.selected_or_first_available_variant.featured_media | default: card_product.featured_media
  assign always_hide = card_product.metafields['app--5320329--camouflage'].always_hide | join: ', '
  
  if card_product.selected_or_first_available_variant.available == false or always_hide contains card_product.selected_or_first_available_variant.id
    for variant in card_product.variants 
      if always_hide contains variant.id
      else
        if variant.available and variant.featured_media
          assign media_item = variant.featured_media 
          break 
        endif 
      endif
    endfor 
  endif 
-%}
```

### Predictive search - _Dawn theme_

predictive-search.liquid

```liquid
{%- liquid
  assign media_item = product.selected_or_first_available_variant.featured_media | default: product.featured_media
  assign always_hide = product.metafields['app--5320329--camouflage'].always_hide | join: ', '
  
  if product.selected_or_first_available_variant.available == false or always_hide contains product.selected_or_first_available_variant.id
    for variant in product.variants 
      if always_hide contains variant.id
      else
        if variant.available and variant.featured_media
          assign media_item = variant.featured_media 
          break 
        endif 
      endif
    endfor 
  endif 
-%}

```

## Keep the variant picker hidden until Camouflage is initialised

{% hint style="info" %}
Note:  replace `variant-picker` with the actual variant picker selector and add the code as liquid to your theme.
{% endhint %}

```liquid
{% assign variant_picker_query = "variant-picker" %}
<style>
	/* Skeleton loading placeholder */
	@keyframes shimmer {
		0% {
			background-position: -1000px 0;
		}

		100% {
			background-position: 1000px 0;
		}
	}

	/* Position relative for the wrapper */
	{{variant_picker_query}} {
		position: relative;
	}

	/* Hide the actual content initially */
	{{variant_picker_query}}>* {
		visibility: hidden;
	}

	/* Show the content when loaded */
	{{variant_picker_query}}.loaded>* {
		visibility: visible;
	}

	/* Skeleton placeholder - visible from start */
	{{variant_picker_query}}::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 200px;
		/* Fixed height for skeleton */
		border-radius: 8px;
		background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
		background-size: 1000px 100%;
		animation: shimmer 2s infinite linear;
		z-index: 10;
		display: block;
		visibility: visible;
		/* Explicitly make skeleton visible */
	}

	/* Hide skeleton elements after loaded */
	{{variant_picker_query}}.loaded::before,
	{{variant_picker_query}}.loaded::after {
		display: none;
	}
</style>

<script>
	// keep the threshold to 1500ms
	const variantPicker = document.querySelector('{{variant_picker_query}}');
	setTimeout(() => {
		variantPicker.classList.add('loaded');
	}, 1500);

	// show the variant picker as soon as Camouflage has loaded
	document.addEventListener('hoos:executed', () => {
		variantPicker.classList.add('loaded');
	})
</script>
```

## &#x20;

## Identifying image/variant using liquid

```liquid
{%- assign hidden_variant_ids = '' -%}
{%- assign hidden_media_ids = '' -%}
{%- for option in product.options_with_values -%}
  {%- assign option_index = forloop.index0 -%}
  {%- assign option_name = option.name | downcase -%}
  {%- assign product_always_hide = product.metafields['app--5320329--camouflage'].always_hide | join: ', ' -%}

  {%- liquid
    for hide_variants_option in shop.metafields.camouflage.hide_variants_options.value
      if hide_variants_option.name == option.name
        assign c_option_values = hide_variants_option.values | split: ','
        assign option_value_condition = false
    
        for c_option_value in c_option_values
          assign c_option_value_trimmed = c_option_value | strip
          assign shopify_option_values = option.values | join: ','
          if shopify_option_values contains c_option_value_trimmed
            assign option_value_condition = true
            break
          else
          endif
        endfor
    
        if option_value_condition == false
          continue
        endif
    
        if hide_variants_option.ex_countries.size >= 1 and hide_variants_option.ex_countries contains localization.country.iso_code
          continue
        endif
        if hide_variants_option.product_types.size >= 1 and product.type.size >= 1
          if hide_variants_option.product_types contains product.type
          else
            continue
          endif
        endif
    
    
        if hide_variants_option.countries and hide_variants_option.countries.size >= 1
          if hide_variants_option.countries contains localization.country.iso_code
          else
            continue
          endif
        endif
    
        assign product_tag_condition = false
        if hide_variants_option.product_tags.size >= 1 and product.tags.size >= 1
          assign option_product_tags = hide_variants_option.product_tags | split: ','
          for product_tag in option_product_tags
            assign product_tag_trimmed = product_tag | strip
            if product.tags contains product_tag_trimmed
              assign product_tag_condition = true
              break
            endif
          endfor
          if product_tag_condition == false
            continue
          endif
        endif
    
        if customer.id
          assign customer_tag_condition = true
          if hide_variants_option.customer_tags.size >= 1 and customer.tags.size >= 1
            assign option_customer_tags = hide_variants_option.customer_tags | split: ','
            for customer_tag in option_customer_tags
              assign customer_tag_trimmed = customer_tag | strip
              if customer.tags contains customer_tag_trimmed
                assign customer_tag_condition = true
                break
              endif
            endfor
            if customer_tag_condition == false
              continue
            endif
          endif
        endif
    
        assign hide_variants_option_data = hide_variants_option
        for value in option.values
            assign variant_available = false
            assign matching_variant = null
            assign variant_price = nil
            assign marked_unavailable = true
            assign variant_exists = true
            
            for variant in product.variants
            if variant.options[option_index] == value
                if variant.metafields.camouflage_custom.always_hide != true
                    if product_always_hide contains variant.id
                    else
                        assign marked_unavailable = false
                    endif
                endif
    
                if variant.available == true and marked_unavailable == false
                    assign variant_available = true
                endif
                assign matching_variant = variant
                if total_options == 1
                    assign variant_price = variant.price | money
                endif
                if variant_available
                    break
                endif
            endif
            endfor
    
            if hide_variants_option_data.values contains value
            assign marked_unavailable = true
            assign variant_available = false
            endif
            assign disable_option = false
            if marked_unavailable == true
            assign disable_option = true
            elsif variant_available == false and shop.metafields.hide_oos['codecrux_settings'].variant_action == "hide"
            assign disable_option = true
            endif
    
    
            if disable_option == true
                assign hidden_variant_ids = hidden_variant_ids | append: ', ' | append: matching_variant.id
                if matching_variant.featured_media and matching_variant.featured_media.id
                    assign hidden_media_ids = hidden_media_ids | append: ', ' | append: matching_variant.featured_media.id
                endif
            endif
        endfor
        assign hide_variants_option_data = nil

      endif
    endfor
  -%}

{%- endfor -%}

{{ hidden_variant_ids }}####{{ hidden_media_ids }}
```

#### Then, in the media liquid file

```liquid
{% capture camouflage_data %}
  {% render 'camouflage-media-snippet' product %}
{% endcapture %}
{% assign camouflage_data_split_parts = camouflage_data | split: '###' %}
{% assign hidden_variant_ids = camouflage_data_split_parts[0] %}
{% assign hidden_media_ids = camouflage_data_split_parts[1] %}



.....

{%- for media in product.media -%}
  ...
  {% if hidden_media_ids contains media.id %} {% continue %} {% endif %}
  ...
{%- endfor -%}
```

