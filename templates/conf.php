<?php

/*
Template Name: Conf
*/

?>

<?php get_header(); ?>
<?php get_template_part('sections/navigation'); ?>

<!-- HOME HEADER -->
<header class="header-container l-page" data-id="glitch">
	<div class="content">
		
		<h1 class="header__logo">
			<img src="<?php asset_path('img/logos/brjs-logo-vertical-72.png') ?>" alt="BrazilJS" />
		</h1>
		
		<div class="header-wrapper">
			<div class="row">
				<div class="header__tp">
					<h2 class="header__title yellow">The biggest fucking javascript event in the world</h2>
				</div>
			</div>
			
			<div class="row">
				<div class="header__li">
					<a href="<?php bloginfo('url'); ?>/sobre" class="anchor-button anchor-button--color-5" style="visibility: hidden;">Sobre a BrazilJS</a>
					<a href="<?php bloginfo('url'); ?>/blog" class="paragraph" title="Explore os artigos disponíveis no Portal BrazilJS">24 e 24 de agosto porto alegre rs barra shopping sul</a>
				</div>
			</div>
		</div>
		
		<?php $headerWarning = get_field('header_habilitar_aviso', 'option'); ?>
		<?php if($headerWarning): ?>
			<?php
				$headerTitle = get_field('header_titulo', 'option');
				$headerDescription = get_field('header_descrição', 'option');
				$headerLink = get_field('header_link', 'option');
				$headerLinkText = get_field('header_valor-link', 'option');
			?>
		<?php endif; ?>
	</div>
</header>
<!-- END * HOME HEADER -->


<!-- SECTION BUY -->
<section class="content">
	<div class="conf-wp-buy">
		<div class="conf__description">
			<p>Venha fazer parte da braziljs conf, uma experiência única e verdadeira em eventos</p>
		</div>
		
		<div class="background-divisor"></div>
		
		<div class="conf__call-and-buy">
			<div class="desc">
				<p class="paragraph">Levamos conteúdo de qualidade para toda a comunidade, por meio da braziljs weekly, artigos, vídeos, screencast, cursos e muito mais.</p>
			</div>
			<div class="conf__buttons">
				<a href="" class="anchor-button">comprar ingresso</a>
				<a href="" class="anchor-button">call 4 papers</a>
			</div>
		</div>
	</div>
</section>
<!-- END * SECTION BUY -->

<!-- MAIN -->
<main id="js-conf-page" class="conf-wrapper brjs-conf-theme">
	<?php //get_template_part('sections/conf/speakers-list'); ?>
	
	<!-- SPEAKERS LIST -->
	<section class="section-wrapper">
		<div class="content">
			<h2 class="title" id="speakers-title">Keynotes</h2>

			<div class="speakers-grid__wrapper">
				<ul class="speakers-grid__list" aria-labelledby="speakers-title">
					
					<li class="speakers-list__item">
						<div class="speakers-card">
							<div class="speakers-card__header">
								<div class="speakers-card__thumb" style="background-image: url(<?php asset_path("img/conf/2018/ada-rose-cannon.jpeg"); ?>)"></div>
							</div>
							<div class="speakers-card__content">
								<h3 class="speakers-card__title">Ada Rose Cannon</h3>
								<p class="speakers-card__paragraph">Developer Advocate da Samsung para o navegador <a href="https://twitter.com/SamsungInternet">@SamsungInternet</a>. Web fangirl. Geralmente em Londres. WebXR Device API, Web Components, PWA.</p>
							</div>
						</div>
					</li>

					<li class="speakers-list__item">
						<div class="speakers-card">
							<div class="speakers-card__header">
								<div class="speakers-card__thumb" style="background-image: url(<?php asset_path("img/conf/2018/kyle-simpson.jpeg"); ?>)"></div>
							</div>
							<div class="speakers-card__content">
								<h3 class="speakers-card__title">Kyle Simpson</h3>
								<p class="speakers-card__paragraph">É um escritor, palestrante, professor, e contribuidor em projeto open-source. Evangelista da open web, apaixonado por todas as coisas relacionadas ao javascript.</p>
							</div>
						</div>
					</li>

					<li class="speakers-list__item">
						<div class="speakers-card">
							<div class="speakers-card__header">
								<div class="speakers-card__thumb" style="background-image: url(<?php asset_path("img/conf/2018/feross-aboukhadijeh.jpg"); ?>)"></div>
							</div>
							<div class="speakers-card__content">
								<h3 class="speakers-card__title">Feross Aboukhadijeh</h3>
								<p class="speakers-card__paragraph">Programador, designer, professor e cientista louco. Atualmente, construindo o <a href="https://webtorrent.io/">WebTorrent</a>, um cliente de streaming BitTorrent para o navegador, alimentado pela WebRTC. Antes disso, construiu o <a href="https://web.archive.org/web/20150810065820/https://peercdn.com/">PeerCDN</a>, uma rede de entrega de conteúdo peer-to-peer para tornar os sites mais rápidos e mais baratos.</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<!-- END * SPEAKERS LIST -->

	<?php get_template_part('sections/conf/hotels'); ?>
</main>
<!-- END * MAIN -->

<?php //get_template_part('sections/sponsors'); ?>
<?php get_template_part('sections/footer'); ?>
<?php get_footer(); ?>