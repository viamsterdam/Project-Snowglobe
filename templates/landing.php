<?php

/* Template Name: Landing page */

?>

<?php get_header(); ?>

<div id="loader" class="scene-loader">
    <div class="scene-loader__img-wrapper">
        <div id="load-animation" class="scene-loader__img" data-path="<?php echo get_template_directory_uri(); ?>/assets/lottie/loader.json"></div>
    </div>
    <div class="scene-loader__txt">
        <span>Website loading ...</span>
        <span><span id="loader-value">0</span>%</span>
    </div>
</div>

<div id="scene" class="scene">
    
    <div class="scene__intro">
        <div class="container">
            <h2 class="title title--lg scene__intro__title">Take a peek at what holiday fun is coming!</h2>
            <div class="content-block scene__intro__content">
                <p>Are you curious what surprises we'll have for you next year? Take a peek at what we are doing now to make your stay even better. Will we see you in 2022?</p>
                <p class="text--styled">Have a great Christmas & New Year!</p>
            </div>
        </div>
    </div>

    <div id="sceneScrollOuter" class="scene-scroll-outer">
        <div id="sceneScrollInner" class="scene-scroll-inner">
            <div class="scene-item scene-item-1" data-index="1">
                <div class="scene-item__content">
                    <div class="scene-item__content-point" data-appear="200">
                        Welcome
                    </div>
                    <div class="scene-item__content-point" data-appear="800">
                        Bye
                    </div>
                </div>
            </div>
            <div class="scene-item scene-item-2" data-index="2">
                    
            </div>
            <div class="scene-item scene-item-3" data-index="3">
                
            </div>
        </div>
    </div>
    
    <div class="scene-bg">
        <div class="scene-bg-layer scene-bg-layer-1">
            <div class="scene-bg-layer__item scene-bg-layer__item-1" data-index="1" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-1-1.json"></div>
            <div class="scene-bg-layer__item scene-bg-layer__item-2" data-index="2" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-1-2.json"></div>
            <div class="scene-bg-layer__item scene-bg-layer__item-3" data-index="3" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-1-3.json"></div>
        </div>
        <div class="scene-bg-layer scene-bg-layer-2">
            <div class="scene-bg-layer__item scene-bg-layer__item-1" data-index="1" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-1.json"></div>
            <div class="scene-bg-layer__item scene-bg-layer__item-2" data-index="2" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-2.json"></div>
            <div class="scene-bg-layer__item scene-bg-layer__item-3" data-index="3" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-2-3.json"></div>
        </div>
        <div class="scene-bg-layer scene-bg-layer-3">
            <div class="scene-bg-layer__item scene-bg-layer__item-1" data-index="1" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-3-1.json"></div>
            <div class="scene-bg-layer__item scene-bg-layer__item-2" data-index="2" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-3-2.json"></div>
            <div class="scene-bg-layer__item scene-bg-layer__item-3" data-index="3" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-3-3.json"></div>
        </div>
       
        <div class="scene-bg-layer scene-bg-layer-4">
            <div class="scene-bg-layer__full"><img src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-4.svg" alt=""></div>
        </div>
        <div class="scene-bg-layer scene-bg-layer-5">
            <div class="scene-bg-layer__full"><img src="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-5.svg" alt=""></div>
        </div>
    </div>

    <div class="scene-bar">

        <?php /* Website link button */ ?>
        <a href="#" class="link-icon scene-bar__link">
            <span class="link-icon__inner">
                <span class="link-icon_txt"><?php _e('Website','snowglobe'); ?></span>
                <span class="link-icon__icon"><img src="<?php echo get_template_directory_uri();?>/assets/images/icon-arrow-link.svg" alt="Button arrow"></span>
            </span>
        </a>

        <?php /* Start button */ ?>
        <div class="scene-bar__start">
            <button id="start-button" class="button"><?php _e('Start the journey!','snowglobe'); ?></button>
        </div>

        <?php /* Progress bar */ ?>
        <div class="scene-bar__progress">
            <p class="scene-bar__progress__txt"><?php _e('Scroll down to explore', 'snowglobe'); ?></p>
            <div id="progress" class="scene-bar__progress__circle">
                <img class="scene-bar__progress__circle__bg" src="<?php echo get_template_directory_uri();?>/assets/images/progress-circle.svg" alt="Progress circle">
                <svg id="progress-circle" width="50" height="50" viewPort="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
                </svg>
                <div class="scene-bar__progress__circle__icon">
                    <img class="icon-desk" src="<?php echo get_template_directory_uri();?>/assets/images/icon-scroll-desktop.svg" alt="Progress scroll icon">
                    <img class="icon-mob" src="<?php echo get_template_directory_uri();?>/assets/images/icon-scroll-mobile.svg" alt="Progress scroll icon">
                </div>
            </div>
        </div>

        <?php /* Language bar */ ?>
        <div class="language-bar scene-bar__language">
            <button class="language-bar__btn">
                <span class="language-bar__btn__txt">NL</span>
                <span class="language-bar__btn__icon"><img src="<?php echo get_template_directory_uri();?>/assets/images/icon-arrow-down.svg" alt=""></span>
            </button>
            <ul class="language-bar__list">
                <li class="language-bar__item">
                    <a href="#" class="language-bar__item__link">
                        <span class="language-bar__item__flag"><img src="<?php echo get_template_directory_uri();?>/assets/images/flag-nl.png" alt="NL Flag"></span>
                        <span class="language-bar__item__txt">NL</span>
                    </a>
                </li>
                <li class="language-bar__item">
                    <a href="#" class="language-bar__item__link">
                        <span class="language-bar__item__flag"><img src="<?php echo get_template_directory_uri();?>/assets/images/flag-de.png" alt="DE Flag"></span>
                        <span class="language-bar__item__txt">DE</span>
                    </a>
                </li>
                <li class="language-bar__item">
                    <a href="#" class="language-bar__item__link">
                        <span class="language-bar__item__flag"><img src="<?php echo get_template_directory_uri();?>/assets/images/flag-en.png" alt="EN Flag"></span>
                        <span class="language-bar__item__txt">EN</span>
                    </a>
                </li>
            </ul>
        </div>

    </div>
    
    <audio id="sound" src="<?php echo get_template_directory_uri(); ?>/assets/sound/bg.mp3" preload="auto"></audio>
</div>


<?php get_footer(); ?>