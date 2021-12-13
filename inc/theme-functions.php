<?php
/*
	=====================
		Theme functions
	=====================	
*/



/*
	=====================
		Limit excerpt length function
	=====================	
*/
function excerpt($limit,$post_id=-1) {
    if($post_id==-1):
      $excerpt = explode(' ', get_the_excerpt(), $limit);
    else:
      $excerpt = explode(' ', get_the_excerpt($post_id), $limit);
    endif;
    if (count($excerpt)>=$limit) {
      array_pop($excerpt);
      $excerpt = implode(" ",$excerpt).'...';
    } else {
      $excerpt = implode(" ",$excerpt);
    } 
    $excerpt = preg_replace('`[[^]]*]`','',$excerpt);
    return $excerpt;
}
  

/*
	=====================
		Don't scale down large images
	=====================	
*/
add_filter( 'big_image_size_threshold', '__return_false' );


/*
	=====================
		Header nav menu
	=====================	
*/
//Nav arrows
function filter_walker_nav_menu_start_el( $item_output, $item, $depth, $args ) {
    if(in_array('menu-item-has-children',$item->classes)){
        return '<div class="menu-item__parent">'.$item_output.'<span class="menu-item__icon"><img src="'.get_template_directory_uri().'/assets/images/icon-nav-arrow.svg"/></span></div>';
    }
	return $item_output;
}
add_filter( 'walker_nav_menu_start_el', 'filter_walker_nav_menu_start_el', 10, 4 );


/*
	=====================
		Move Yoast to bottom
	=====================	
*/
function yoasttobottom() {
	return 'low';
}
add_filter( 'wpseo_metabox_prio', 'yoasttobottom');


/*
	=====================
		Remove Gutenberg Block Library CSS from loading on the frontend
	=====================	
*/
function smartwp_remove_wp_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
}
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css' );


/*
	=====================
		Get width and height from SVG files
	=====================	
*/
function fix_wp_get_attachment_image_svg($image, $attachment_id, $size, $icon) {
   if (is_array($image) && preg_match('/\.svg$/i', $image[0]) && $image[1] <= 1) {
       if(is_array($size)) {
           $image[1] = $size[0];
           $image[2] = $size[1];
       } elseif(($xml = simplexml_load_file($image[0])) !== false) {
           $attr = $xml->attributes();
           $viewbox = explode(' ', $attr->viewBox);
           $image[1] = isset($attr->width) && preg_match('/\d+/', $attr->width, $value) ? (int) $value[0] : (count($viewbox) == 4 ? (int) $viewbox[2] : null);
           $image[2] = isset($attr->height) && preg_match('/\d+/', $attr->height, $value) ? (int) $value[0] : (count($viewbox) == 4 ? (int) $viewbox[3] : null);
       } else {
           $image[1] = $image[2] = null;
       }
   }
   return $image;
} 
add_filter( 'wp_get_attachment_image_src', 'fix_wp_get_attachment_image_svg', 10, 4 );


/*
	=====================
		Get SVG file content
	=====================	
*/
function get_inline_svg($name){
    if($name):
    return file_get_contents(esc_url(get_template_directory().'/assets/images/'.$name));
    endif;
    return '';
}


/**
 * 
 * Contact 7 Button
 */

remove_action('wpcf7_init', 'wpcf7_add_form_tag_submit');
add_action('wpcf7_init', 'theme_cf7_button');
if (!function_exists('theme_cf7_button')) {
    function theme_cf7_button() {
        wpcf7_add_form_tag('submit', 'theme_cf7_button_handler');
    }
}

if (!function_exists('theme_cf7_button_handler')) {
    function theme_cf7_button_handler($tag) {
        $tag = new WPCF7_FormTag($tag);
        $class = wpcf7_form_controls_class($tag->type);
        $atts = array();
        $atts['class'] = '';
        $atts['class'] .= $tag->get_class_option();
        $atts['class'] .= ' surfly-custom-btn';
        $atts['id'] = $tag->get_id_option();
        $atts['tabindex'] = $tag->get_option('tabindex', 'int', true);
        $value = isset($tag->values[0]) ? $tag->values[0] : '';
       
        $atts['type'] = 'submit';
        $atts = wpcf7_format_atts($atts);
    
        $html = sprintf('<button class="wpcf7-form-control wpcf7-submit button-submit '.$tag->get_class_option().' '.$extraClass.'" ' . $atts . '><span class="button-submit__inner"><span class="button-submit__text">%2$s</span><span class="button-submit__icon"><img src="'.get_template_directory_uri().'/assets/images/icon-plane.svg" alt="Submit button"></span></span></button>', $atts, $value);
        return $html;
    }
}