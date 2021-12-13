<?php
/*
=====================
	Theme Setup Function
=====================
*/

function snowglobe_setup(){
	load_theme_textdomain( 'snowglobe', get_template_directory() . '/languages' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support('menus');

	global $content_width;
	if ( ! isset( $content_width ) ) $content_width = 640;

	//main menu
	register_nav_menus(
		array( 
			'main-menu' => __( 'Main Menu', 'snowglobe' ),
            'footer-bottom-menu' => __( 'Footer Bottom Menu', 'snowglobe'),  
		)
    );
    
}

add_action( 'after_setup_theme', 'snowglobe_setup' );