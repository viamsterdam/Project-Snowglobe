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
    <?php
    if( $intro ): ?>
        <div class="scene__intro">
            <div class="container">
                <h2 class="title title--lg scene__intro__title"><?php echo $intro['title']; ?></h2>
                <div class="content-block scene__intro__content">
                    <p><?php echo $intro['content']; ?></p>
                    <p class="text--styled"><?php echo $intro['subtext']; ?></p>
                </div>
            </div>
        </div>
    <?php endif; ?>
    <div id="sceneScrollOuter" class="scene-scroll-outer">
        <div id="sceneScrollInner" class="scene-scroll-inner">
            <div class="scene-item scene-item-1" data-index="1">
                    <div class="scene-item__content-point scene-item__content-point--text" data-appear="200">
                        <div class="content-block">
                            <h2>
                                <span class="text--styled">Camping</span>
                                Geversduin
                            </h2>
                        </div>
                    </div>
                    <?php
                    if( have_rows('geversduin') ):
                        while( have_rows('geversduin') ): the_row();
                        $geversduin_intro = get_sub_field('intro');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--text" data-appear="20">
                        <div class="content-block">
                            <h3><?php echo $geversduin_intro['title']; ?></h3>
                            <p><?php echo $geversduin_intro['content']; ?></p>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
                    <?php
                    if( have_rows('geversduin') ):
                        while( have_rows('geversduin') ): the_row();
                        $geversduin_first_card = get_sub_field('first_card');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="40">
                        <div class="card card-1">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-1.png" alt="Geversduin mark">
                            <div class="card__content">
                                <h3><?php echo $geversduin_first_card['title']; ?></h3>
                                <p><?php echo $geversduin_first_card['content']; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
                    <?php
                    if( have_rows('geversduin') ):
                        while( have_rows('geversduin') ): the_row();
                        $geversduin_second_card = get_sub_field('second_card');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="70">
                        <div class="card card-2">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-1.png" alt="Geversduin mark">
                            <div class="card__content">
                                <h3><?php echo $geversduin_second_card['title']; ?></h3>
                                <p><?php echo $geversduin_second_card['content']; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
            </div>
            <div class="scene-item scene-item-2" data-index="2">
                    <div class="scene-item__content-point scene-item__content-point--text" data-appear="200">
                        <div class="content-block">
                            <h2>
                                <span class="text--styled">Camping</span>
                                Bakkum
                            </h2>
                        </div>
                    </div>
                    <?php
                    if( have_rows('bakkum') ):
                        while( have_rows('bakkum') ): the_row();
                        $bakkum_intro = get_sub_field('intro');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--text" data-appear="20">
                        <div class="content-block">
                            <h3><?php echo $bakkum_intro['title']; ?></h3>
                            <p><?php echo $bakkum_intro['content']; ?></h3></p>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
                    <?php
                    if( have_rows('bakkum') ):
                        while( have_rows('bakkum') ): the_row();
                        $bakkum_first_card = get_sub_field('first_card');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="40">
                        <div class="card card-1">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-2.png" alt="Bakkum mark">
                            <div class="card__content">
                                <h3><?php echo $bakkum_first_card['title']; ?></h3>
                                <p><?php echo $bakkum_first_card['content']; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
                    <?php
                    if( have_rows('bakkum') ):
                        while( have_rows('bakkum') ): the_row();
                        $bakkum_second_card = get_sub_field('second_card');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="70">
                        <div class="card card-2">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-2.png" alt="Bakkum mark">
                            <div class="card__content">
                                <h3><?php echo $bakkum_second_card['title']; ?></h3>
                                <p><?php echo $bakkum_second_card['content']; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
                    <?php
                    if( have_rows('bakkum') ):
                        while( have_rows('bakkum') ): the_row();
                        $bakkum_third_card = get_sub_field('third_card');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="70">
                        <div class="card card-3">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-2.png" alt="Bakkum mark">
                            <div class="card__content">
                                <h3><?php echo $bakkum_third_card['title']; ?></h3>
                                <p><?php echo $bakkum_third_card['content']; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
            </div>
            <div class="scene-item scene-item-3" data-index="3">
                    <div class="scene-item__content-point scene-item__content-point--text" data-appear="200">
                        <div class="content-block">
                            <h2>
                                <span class="text--styled">Camping</span>
                                De Lakens
                            </h2>
                        </div>
                    </div>
                    <?php
                    if( have_rows('de_lakens') ):
                        while( have_rows('de_lakens') ): the_row();
                        $de_lakens_intro = get_sub_field('intro');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--text" data-appear="20">
                        <div class="content-block">
                            <h3><?php echo $de_lakens_intro['title']; ?></h3>
                            <p><?php echo $de_lakens_intro['content']; ?></p>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
                    <?php
                    if( have_rows('de_lakens') ):
                        while( have_rows('de_lakens') ): the_row();
                        $de_lakens_first_card = get_sub_field('first_card');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="40">
                        <div class="card card-1">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-3.png" alt="De Lakens mark">
                            <div class="card__content">
                                <h3><?php echo $de_lakens_first_card['title']; ?></h3>
                                <p><?php echo $de_lakens_first_card['content']; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
                    <?php
                    if( have_rows('de_lakens') ):
                        while( have_rows('de_lakens') ): the_row();
                        $de_lakens_second_card = get_sub_field('second_card');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="70">
                        <div class="card card-2">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-3.png" alt="De Lakens mark">
                            <div class="card__content">
                                <h3><?php echo $de_lakens_second_card['title']; ?></h3>
                                <p><?php echo $de_lakens_second_card['content']; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
                    <?php
                    if( have_rows('de_lakens') ):
                        while( have_rows('de_lakens') ): the_row();
                        $de_lakens_third_card = get_sub_field('third_card');
                    ?>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="70">
                        <div class="card card-3">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-3.png" alt="De Lakens mark">
                            <div class="card__content">
                                <h3><?php echo $de_lakens_third_card['title']; ?></h3>
                                <p><?php echo $de_lakens_third_card['content']; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php 
                    endwhile;
                    endif;
                    ?>
            </div>
        </div>
    </div>
    
    <div class="scene-bg">
        <div class="scene-bg-layer scene-bg-layer-1">
            <div class="scene-bg-layer__item scene-bg-layer__item-1" data-index="1" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-1-1.json"></div>
            <div class="scene-bg-layer__item scene-bg-layer__item-2" data-index="2" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-1-2.json"></div>
            <div class="scene-bg-layer__item scene-bg-layer__item-3" data-index="3" data-path="<?php echo get_template_directory_uri(); ?>/assets/scene/scene-1-3.json"></div>
        </div>
        <div id="scene-car" class="scene-bg-car" data-path="<?php echo get_template_directory_uri(); ?>/assets/lottie/auto.json"></div>
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

    <div id="footer" class="scene-footer">
        <div class="scene-footer__inner">
            <div class="scene-footer__logo">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-big.svg" alt="Site logo">
            </div>
            <div class="scene-footer__content content-block font--quicksand">
                <p>Meteen boeken voor 2022</p>
            </div>
            <ul class="scene-footer__nav">
                <li class="scene-footer__nav-item">
                    <a href="#" class="scene-footer__nav-item__link">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-geversduin-color.svg" alt="Geversduin logo">
                    </a>
                </li>
                <li class="scene-footer__nav-item">
                    <a href="#" class="scene-footer__nav-item__link">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-bakkum-color.svg" alt="Bakkum logo">
                    </a>
                </li>
                <li class="scene-footer__nav-item">
                    <a href="#" class="scene-footer__nav-item__link">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-de-lakum-color.svg" alt="De Lakum logo">
                    </a>
                </li>
            </ul>
            <a href="#" class="button button--dark scene-footer__btn-start">Start over</a>
            <a href="#" class="link-underline scene-footer__link">Visit our website</a>
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