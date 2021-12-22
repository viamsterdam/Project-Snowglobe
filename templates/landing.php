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
                    <div class="scene-item__content-point scene-item__content-point--text" data-appear="200">
                        <div class="content-block">
                            <h2>
                                <span class="text--styled">Camping</span>
                                Geversduin
                            </h2>
                        </div>
                    </div>
                    <div class="scene-item__content-point scene-item__content-point--text" data-appear="20">
                        <div class="content-block">
                            <h3>Welcome to Geversduin!</h3>
                            <p>Discover the luxurious feeling of camping in the middle of nature here. Of course with lots of new surprises in 2022!</p>
                        </div>
                    </div>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="40">
                        <div class="card card-1">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-1.png" alt="Geversduin mark">
                            <div class="card__content">
                                <h3>A fantastic new square!</h3>
                                <p>The front square has been extended and newly refurbished, meaning more space and more fun for everyone. We hope to see you leisurely enjoying yourself here soon!</p>
                            </div>
                        </div>
                    </div>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="70">
                        <div class="card card-2">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-1.png" alt="Geversduin mark">
                            <div class="card__content">
                                <h3>New: Plastic House</h3>
                                <p>Unique! Book a stay in one of the two holiday houses that we partially made from local waste plastic. The plastic was collected from the Castricum aan Zee beach. Super-green and still luxurious!</p>
                            </div>
                        </div>
                    </div>
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
                    <div class="scene-item__content-point scene-item__content-point--text" data-appear="20">
                        <div class="content-block">
                            <h3>Welcome to Bakkum!</h3>
                            <p>Enjoying your own personal paradise together is the standard at Bakkum, because we always ask ourselves how we can make each season even better than the last!</p>
                        </div>
                    </div>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="40">
                        <div class="card card-1">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-2.png" alt="Bakkum mark">
                            <div class="card__content">
                                <h3>New! <br>Bakkum’s Musical Group</h3>
                                <p>A new Musical Group where children rehearse for a whole month to put on the musical Bon Bonni Beach. Will it star your family's musical talent too?</p>
                            </div>
                        </div>
                    </div>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="70">
                        <div class="card card-2">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-2.png" alt="Bakkum mark">
                            <div class="card__content">
                                <h3>New:<br> Campervan Pitches de Luxe</h3>
                                <p>A lovely sunny pitch for your campervan. Now with electricity, running water and a drain. Luxurious holiday enjoyment in 2022!</p>
                            </div>
                        </div>
                    </div>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="70">
                        <div class="card card-3">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-2.png" alt="Bakkum mark">
                            <div class="card__content">
                                <h3>Bakkum Vertelt: bigger and better!</h3>
                                <p>Renewed! Bakkum Vertelt. The multi-day festival full of exciting, moving and festive stories, performances and music has undergone a facelift. Bigger and Better still in 2022! </p>
                            </div>
                        </div>
                    </div>
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
                    <div class="scene-item__content-point scene-item__content-point--text" data-appear="20">
                        <div class="content-block">
                            <h3>Welcome to the Lakens</h3>
                            <p>The campsite where enjoying yourself, being active and relaxing go hand in hand, only 100 metres from the beach at Bloemendaal. Come and take your dose of Sun and Sea with us and become as Zen as possible!</p>
                        </div>
                    </div>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="40">
                        <div class="card card-1">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-3.png" alt="De Lakens mark">
                            <div class="card__content">
                                <h3>New: Sun, Sea, Zen and…… <br>Sweat!</h3>
                                <p>Before or after you spend loads of time unwinding, why not do that workout in our brand new building full of sports facilities? Or would you prefer to take your yoga-mat to a great relax-session? It is all here in 2022!</p>
                            </div>
                        </div>
                    </div>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="70">
                        <div class="card card-2">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-3.png" alt="De Lakens mark">
                            <div class="card__content">
                                <h3>A New welcome</h3>
                                <p>Our Reception building is being rebuilt and adjusted so that you'll feel more welcome than ever when you arrive next. The scaffolding is up now, but it will be all yours in good time!</p>
                            </div>
                        </div>
                    </div>
                    <div class="scene-item__content-point scene-item__content-point--card" data-appear="70">
                        <div class="card card-3">
                            <img class="card__mark" src="<?php echo get_template_directory_uri(); ?>/assets/images/mark-3.png" alt="De Lakens mark">
                            <div class="card__content">
                                <h3>Back and Better: Beachcamp de Lakens!</h3>
                                <p>Come to surf and to sleep in one of the lovely furnished glamping tents, and to enjoy diners, surfing equipment and activities. Or relax using facilities such as the hot tubs and the terrace. Especially good for families and those over 25.</p>
                            </div>
                        </div>
                    </div>
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