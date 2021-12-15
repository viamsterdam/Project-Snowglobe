<?php

/* Template Name: Landing page */

?>

<?php get_header(); ?>


<div id="scene" class="scene">
    <div id="sceneScroll" class="scene-wrapper">
        <div class="scene-item scene-item-1" data-length="5000" data-index="1">
            <div class="scene-item__content">
                <div class="scene-item__content-point" data-appear="200">
                    Welcome
                </div>
                <div class="scene-item__content-point" data-appear="800">
                    Bye
                </div>
            </div>
        </div>
        <div class="scene-item scene-item-2" data-length="5000" data-index="2">
                
        </div>
        <div class="scene-item scene-item-3" data-length="5000" data-index="3">
            
        </div>
    </div>

    <div class="scene-bg">
        <div class="scene-bg-item scene-bg-item-1" data-index="1">
            <div class="scene-bg-item__bg-list">
                <div class="scene-bg-item__bg-static scene-bg-item__bg-1 lottie" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-front-1.json"></div>
                <img class="scene-bg-item__bg scene-bg-item__bg-2" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-1-2.svg" alt="">
                <img class="scene-bg-item__bg scene-bg-item__bg-3" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-1-3.svg" alt="">
                <img class="scene-bg-item__bg scene-bg-item__bg-4" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-1-4.svg" alt="">
                <img class="scene-bg-item__bg scene-bg-item__bg-5" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-1-5.svg" alt="">
            </div>
        </div>
        <div class="scene-bg-item scene-bg-item-2" data-index="2">
            <div class="scene-bg-item__bg-list">
                <div class="scene-bg-item__bg-static scene-bg-item__bg-1 lottie" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-front-2.json"></div>
                <img class="scene-bg-item__bg scene-bg-item__bg-2" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-2.svg" alt="">
                <img class="scene-bg-item__bg scene-bg-item__bg-3" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-3.svg" alt="">
                <img class="scene-bg-item__bg scene-bg-item__bg-4" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-4.svg" alt="">
                <img class="scene-bg-item__bg scene-bg-item__bg-5" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-5.svg" alt="">
            </div>
        </div>
        <div class="scene-bg-item scene-bg-item-3" data-index="3">
            <div class="scene-bg-item__bg-list">
                <div class="scene-bg-item__bg-static scene-bg-item__bg-1 lottie" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-front-3.json"></div>
                <img class="scene-bg-item__bg scene-bg-item__bg-2" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-2.svg" alt="">
                <img class="scene-bg-item__bg scene-bg-item__bg-3" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-3.svg" alt="">
                <img class="scene-bg-item__bg scene-bg-item__bg-4" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-4.svg" alt="">
                <img class="scene-bg-item__bg scene-bg-item__bg-5" src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-5.svg" alt="">
            </div>
        </div>
    </div>
</div>


<?php get_footer(); ?>