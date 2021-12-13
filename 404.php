<?php get_header(); ?>
<div id="app-wrapper" role="main">
    <div id="app" class="app-container" data-class="page-404">
    	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="container txt--center">
                    <section class="text--center section section--fullscreen">
                            <h1 class="h1 spacing-pb-40"><?php _e('Page not found.','snowglobe'); ?></h1>
                            <?php echo button(__('Back to home','snowglobe'),get_home_url(),'_self','button--bg'); ?>
                    </section>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>