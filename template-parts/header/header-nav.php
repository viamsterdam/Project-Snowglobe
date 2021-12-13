<section class="landing-wrapper header-nav">
    <?php 
    $navLinks = get_field('header_social_links','option');
    if($navLinks): ?>
		<ul class="header-nav__list">
			<?php foreach($navLinks as $item): ?>
                <?php
                $link = $item['link'];
                $icon = '';
			    if($item['custom_image']):
					$icon = $item['icon_image'];
					$icon = $icon?file_get_contents($icon['url']):'';
				else:
					$icon = $item['icon'];
				endif; 
									
				if($link):
					$link_url = $link['url'];
					$link_title = $link['title'];
					$link_target = $link['target'] ? $link['target'] : '_self';
				?>
					<li class="header-nav__item">
                        <a class="header-nav__item__link" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>" title="<?php echo esc_html( $link_title ); ?>">
                            <span class="header-nav__item__title"><?php echo esc_html( $link_title ); ?></span>
                            <span class="header-nav__item__icon"><?php echo $icon; ?></span>
                        </a>
                    </li>
				<?php endif; ?>
            <?php endforeach; ?>
		</ul>
	<?php endif; ?>
</section>