
<?php get_header(); ?>
    <div id="app-wrapper" role="main">
        <div id="app" class="app-container" data-namespace="blog-archive">
    
            <?php if( have_posts() ): ?>
                


                <div class="blog-archive-wrapper">
                    <div class="blog-archive">

                    <?php while( have_posts() ): the_post(); ?>
                        <div class="blog-archieve-article-wrapper">
                            <a href="<?php the_permalink(); ?>">
                                <div class="blog-archieve-article">
                                    <div class="article-img-block" style="background-image:url(<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full' ); ?>);"></div>
                                    <div class="article-text-block"><span class="lifestyle-text"><?php 
                                        $category = get_the_category();
                                        if ( ! empty( $category ) ) echo esc_html( $category[0]->name );?></span>
                                        <h3><?php the_title(); ?></h3>
                                        <p class="article-excerpt"><?php echo get_field("excerpt"); ?></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    <?php endwhile; ?>

                    <?php if($post_close_wrap){?>
                    </div>
                    <?php } ?>
                    </div>
                </div>


            <?php else: ?>
                <div id="post-404" class="noposts">
                    <p>
                        <?php _e('None found.','example'); ?>
                    </p>
                </div>
            <?php endif; wp_reset_query(); ?>
        </div>
    </div>
<?php get_footer(); ?>