<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width" />
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
	<?php wp_head(); ?>
	
	<?php the_field('header_scripts','option'); ?>
</head>

<?php
$body_classes = '';
if(is_page_template('templates/landing.php')){
	$body_classes .= 'loading';
}
?>

<body <?php body_class($body_classes); ?>>
	
	<?php get_template_part('template-parts/header/header'); ?>
	
	<div id="main">