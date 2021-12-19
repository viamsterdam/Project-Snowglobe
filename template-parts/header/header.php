<?php 

$headerLogo = get_field('header_logo','option');

?>

<header id="header" class="header">

    <a href="<?php echo get_home_url() ?>/" title="snowglobe" class="header__logo">
        <?php if(!empty($headerLogo)): ?>
            <img src="<?php echo $headerLogo['url']; ?>" alt="Logo">
        <?php endif; ?>
    </a>

    <button id="sound-button" class="link-icon scene-sound">
        <span class="link-icon__inner">
            <span class="link-icon_txt"><?php _e('Music','snowglobe'); ?></span>
            <span class="link-icon__icon"></span>
        </span>
    </button>
    
</header>