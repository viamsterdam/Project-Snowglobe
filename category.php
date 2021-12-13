<?php get_header(); ?>
<div id="app-wrapper" role="main">
    
    <?php 
    /*==============================================*/ 
    /*===============CHANGABLE PART=================*/ 
    /* Dont forget to change dta-namespace */ 
    ?>   

    <?php 
      $headerWhite = false;   
      $headerClasses = '';   
      if(get_field('header_white_buttons')):
        $headerClasses .= 'header--whiteButtons';
      endif; 
    ?>

    <div id="app" class="app-container" namespace="page" data-header="<?php echo $headerClasses; ?>" data-cta="<?php echo get_field('disable_footer_cta'); ?>">
        <?php /*=====WRITE YOUR CODE HERE=====*/ ?>
            
			<div id="post-<?php the_ID('default-page'); ?>" <?php post_class(); ?>>
				
                <?php 
                if ( ! post_password_required() ) :
                ?>    
                <section class="section">
                    <div class="blog-archive__heading spacing-pb-60 spacing-pt-60">
                        <?php 
                        $category = get_queried_object();
                        $content = get_field('description',$category);
                        ?>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-8 offset-lg-3 offset-md-2">
                                    <div class="content-block text--center">
                                        <h1><?php echo $category->name; ?></h1>
                                        <?php echo $content; ?></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="blog-archive__archive">
                        <div class="container">
                            <?php 
                           
                            query_posts(array(
                                'post_type' => 'post',
                                'post_status' => 'publish',
                                'order' => 'ASC',
                                'posts_per_page' => 8,
                                'paged' => get_query_var('paged'),
                                'tax_query' => array(
                                    array (
                                        'taxonomy' => 'category',
                                        'field' => 'slug',
                                        'terms' => $category->slug,
                                    )
                                ),
                            ));
                            ?>
                            <?php if(have_posts()): ?>
                                <ul class="row archive__list articlesCategory__list">
                                    <?php 
                                    $loopCounter = 0;
                                    while( have_posts() ) : the_post(); ?>
                                        <?php get_template_part('template-parts/post/post','archive-item'); ?>
                                        <?php 
                                        $loopCounter++;
                                    endwhile; ?>
                                    <?php wp_reset_postdata(); 
                                    ?>
                                </ul>
                                <div class="row blog-archive__pagination-wrapper">
                                    <div class="col-12">
                                            <?php 
                                            $pages = paginate_links( array(
                                                'type'  => 'array',
                                                //'prev_next' => FALSE
                                            ) );
                                            if( is_array( $pages ) ) {
                                                $paged = ( get_query_var('paged') == 0 ) ? 1 : get_query_var('paged');
                                                $prev_link = '<span class="prev disabled">'.__('Previous').'</span>';
                                                $next_link = '<span class="next disabled">'.__('Next').'</span>';
                                                $total   = isset( $wp_query->max_num_pages ) ? $wp_query->max_num_pages : 1;
                                                $current = get_query_var( 'paged' ) ? (int) get_query_var( 'paged' ) : 1;
                                                
                                                if($current == 1){
                                                    array_unshift($pages, $prev_link);
                                                }
                                                if($current == $total){
                                                    array_push($pages, $next_link);
                                                }

                                                echo '<div class="text--24 blog-archive__pagination"><ul class="blog-archive__pagination__list">';
                                                foreach ( $pages as $page ) {
                                                        echo '<li class="blog-archive__pagination__item">'.$page.'</li>';
                                                }
                                               echo '</ul></div>';
                                            }
                                            ?>
                                    </div>
                                </div>
                            <?php else: ?>
                                <div class="blog-archive__no-posts">
                                    <p class="text--center text--size--28 font--weight--medium">
                                        <?php esc_html_e( 'No posts found', 'corso-como' ); ?>
                                    </p>
                                </div>
                            <?php endif;?>
                        </div>
                    </div>
                </section>


                <?php
                else :
                  // we will show password form here
                  echo get_the_password_form();
                endif;
              ?>
			</div>
            
        <?php /*=====END OF YOUR CODE=====*/ ?>
    </div>
    <?php /*==============================================*/ ?>

</div>
<?php get_footer(); ?>