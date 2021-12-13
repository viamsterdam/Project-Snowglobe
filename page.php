<?php /*DEAFULT PAGE TEMPLATE*/ ?>

<?php get_header(); ?>
<div id="app-wrapper" role="main">
    <div id="app" class="app-container" data-class="<?php if(get_field('white_header')) echo 'header-white'; ?> <?php if(get_field('transparent_header')) echo 'header-transparent'; ?> <?php echo get_field('page_classes'); ?>">
    	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="page-blocks">
              <?php 
                if ( ! post_password_required() ) :
                    // Your custom code should here
                    the_content();
                    the_acf_loop();
                else :
                  // we will show password form here
                  echo get_the_password_form();
                endif;
              ?>
            </div>
		  </div>
    </div>
</div>
<?php get_footer(); ?>