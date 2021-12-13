

<?php get_header(); ?>
<div id="app-wrapper" role="main">
   
	
	<?php /*==============================================*/ ?>	
	<?php /*===============CHANGABLE PART=================*/ ?>
	<?php /*
		Dont forget to change data-namespace
	*/ ?>	
    <div id="app" class="app-container" data-namespace="blog-archive">
    	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  		<?php /*=====WRITE YOUR CODE HERE=====*/ ?>
			
		  <?php if( have_posts() ): ?>
                <section class="articles-archive">
                    <div class="container">
                        <ul class="row">
                            <?php 
                            $loopCounter = 0;
                            while( have_posts() ): the_post(); ?>
                                <?php 
                                $image = get_the_post_thumbnail_url(get_the_ID(),'full');
                                $title = get_the_title();
                                $text = get_the_content();
                                $date = get_the_date('d.m.Y');
                                $permalnk = get_the_permalink();
                                ?>
                                <li class="<?php if($loopCounter==0) echo 'col-md-12 articles-block__item--featured'; else  echo 'col-md-6'; ?> articles-block__item">
                                    <a href="<?php echo $permalnk; ?>" class="articles-block__item__inner">
                                        <div class="img-block articles-block__item__img">
                                            <img src="<?php echo $image; ?>" alt="<?php the_title(); ?>">
                                        </div>
                                        <div class="articles-block__item__content">
                                            <div class="articles-block__item__content__main">
                                                <span class="articles-block__item__date"><?php echo $date; ?></span>
                                                <h3 class="articles-block__item__title"><?php echo $title; ?></h3>
                                            </div>
                                            <?php echo erraniButton(__('Read more','snowglobe'),$permalnk); ?>
                                        </div>
                                    </a>
                                </li>
                            <?php 
                            $loopCounter++;
                            endwhile; ?>
                        </ul>
                    </div>
                </section>

            <?php else: ?>
                <div id="post-404" class="noposts">
                    <p>
                        <?php _e('None found.','example'); ?>
                    </p>
                </div>
            <?php endif; wp_reset_query(); ?>
		


		<?php /*=====END OF YOUR CODE=====*/ ?>
		</div>
    </div>
    <?php /*==============================================*/ ?>

</div>
<?php get_footer(); ?>