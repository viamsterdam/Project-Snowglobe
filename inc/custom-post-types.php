<?php
/*
	=====================
		Custom Post Types
	=====================	
*/

function cptui_register_my_cpts_postcard() {

	/**
	 * Post Type: Postcards.
	 */

	$labels = [
		"name" => __( "Postcards", "'snowglobe'" ),
		"singular_name" => __( "Postcard", "'snowglobe'" ),
	];

	$args = [
		"label" => __( "Postcards", "'snowglobe'" ),
		"labels" => $labels,
		"description" => "",
		"public" => false,
		"publicly_queryable" => false,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => false,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "postcard", "with_front" => false ],
		"query_var" => "post",
		"supports" => [ "title", "thumbnail" ],
		"show_in_graphql" => false,
		'register_meta_box_cb' => 'postcard_meta_box'
	];

	register_post_type( "postcard", $args );
}

add_action( 'init', 'cptui_register_my_cpts_postcard' );
