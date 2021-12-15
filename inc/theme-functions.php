<?php
/*
	=====================
		Theme functions
	=====================	
*/



/*
	=====================
		Don't scale down large images
	=====================	
*/
add_filter( 'big_image_size_threshold', '__return_false' );



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

