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
            
			<div class="section container searchBlock__item__title">
	  			<div class="row">
	  				<div class="col-lg-10 offset-lg-1">
					  	<h1 class="h1 searchBlock__title"><?php printf( __( 'Search results for: %s', 'snowglobe' ), get_search_query() ); ?></h1>
					
						<?php if ( have_posts() ) : ?>
								<ul class="searchBlock__list">
									<?php while ( have_posts() ) : the_post(); ?>
										<li class="searchBlock__item">
											<h2 class="searchBlock__item__title text--24 font--weight--semiBold " ><?php the_title(); ?></h2>
											<a class="text--18 link--underline--2 text--color--primary searchBlock__item__link" href="<?php the_permalink(); ?>"><?php _e('Read More','snowglobe'); ?></a>
										</li>
									<?php endwhile; ?>
								</ul>
						<?php else : ?>
							
						<?php endif; ?>
					</div>
				</div>
			</div>


        <?php /*=====END OF YOUR CODE=====*/ ?>
    </div>
    <?php /*==============================================*/ ?>

</div>
<?php get_footer(); ?>