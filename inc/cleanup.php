<?php
/*
	=====================
		Clean up
	=====================	
*/


/*
	=====================
		Clean up the WordPress head
	=====================	
*/

// remove header links
add_action('init', 'wp_head_cleanup');
function wp_head_cleanup() {
    remove_action( 'wp_head', 'feed_links_extra', 3 );                      // Category Feeds
    remove_action( 'wp_head', 'feed_links', 2 );                            // Post and Comment Feeds
    remove_action( 'wp_head', 'rsd_link' );                                 // EditURI link
    remove_action( 'wp_head', 'wlwmanifest_link' );                         // Windows Live Writer
    remove_action( 'wp_head', 'index_rel_link' );                           // index link
    remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );              // previous link
    remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );               // start link
    remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );   // Links for Adjacent Posts
    remove_action( 'wp_head', 'wp_generator' );                             // WP version
    remove_action( 'wp_head', 'wp_shortlink_wp_head');                      // Remove shortlink
    remove_action('wp_head', 'rest_output_link_wp_head', 10);               // Disable Link header for the REST API
    remove_action('template_redirect', 'rest_output_link_header', 11, 0);   // Disable Link header for the REST API
    if (!is_admin()) {
        //wp_deregister_script('jquery');                                     // De-Register jQuery
    }
}

// remove WP version from RSS
add_filter('the_generator', 'wp_rss_version');
function wp_rss_version() { return ''; }

// remove query strings from all resources
function crunchify_cleanup_query_string( $src ){ 
	$parts = explode( '?', $src ); 
	return $parts[0]; 
} 
add_filter( 'script_loader_src', 'crunchify_cleanup_query_string', 15, 1 ); 
add_filter( 'style_loader_src', 'crunchify_cleanup_query_string', 15, 1 );