<?php 

$headerLogo = get_field('header_logo','option');

?>

<header id="header" class="">
	<div class="header container container--full">
        <div class="header__left">

        </div>

        <div class="header__center">
            <a href="<?php echo get_home_url() ?>/" title="snowglobe" class="header__logo">
                <?php if(!empty($headerLogo)): ?>
                    <img src="<?php echo $headerLogo['url']; ?>" alt="Logo">
                <?php endif; ?>
            </a>
        </div>
	</div>

</header>