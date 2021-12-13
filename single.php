<?php get_header(); ?>

                <?php 
                if ( ! post_password_required() ) :
                    // Your custom code should here
                    get_template_part('template-parts/post/header','post');
                    
                    ?>
                    <div class="blog-post__content">
                      <?php the_acf_loop(); ?>
                    </div>
                    <?php
                    
                    get_template_part('template-parts/post/footer','post');
                else :
                  // we will show password form here
                  echo get_the_password_form();
                endif;
              ?>

<?php get_footer(); ?>