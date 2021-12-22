<?php 

$headerLogo = get_field('header_logo','option');

?>

<header id="header" class="header">

    <div class="header-logo">
        <img class="header-logo__item header-logo__item-main active" src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.svg" alt="Snowglobe">
        <img class="header-logo__item header-logo__item-1" src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-geversduin.svg" alt="Geversduin Logo">
        <img class="header-logo__item header-logo__item-2" src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-bakkum.svg" alt="Bakkum Logo">
        <img class="header-logo__item header-logo__item-3" src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-de-lakum.svg" alt="De Lakum Logo">
    </div>
    
    <button id="sound-button" class="link-icon scene-sound">
        <span class="link-icon__inner">
            <span class="link-icon_txt"><?php _e('Music','snowglobe'); ?></span>
            <span class="link-icon__icon link-icon__icon--toggle">
                <img class="link-icon__icon-1" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-sound-off.svg" alt="Sounds Off">
                <img class="link-icon__icon-2" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-sound-on.svg" alt="Sound On">
            </span>
        </span>
    </button>
    
</header>