<?php 

$headerLogo = get_field('header_logo','option');

$headerSocial = get_field('header_social_links','option');
?>

<header id="header" class="hide-cursor stop-cursor">
	<div class="header container container--full <?php echo $headerClasses; ?>">
        <div class="header__left">
            <span id="nav-toggle" class="nav-toggle">
                <div class="nav-toggle-icon">
                    <span class="nav-toggle-icon__inner"></span>
                </div>
            </span>
        </div>

        <div class="header__center">
            <a href="<?php echo get_home_url() ?>/" title="snowglobe" class="header__logo">
                <?php if(!empty($headerLogo)): ?>
                    <img src="<?php echo $headerLogo['url']; ?>" alt="Logo">
                <?php endif; ?>
            </a>
        </div>
	</div>

    <?php get_template_part('template-parts/header/header','nav'); ?>
</header>