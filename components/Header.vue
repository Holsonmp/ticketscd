<template>
	<header class="header">
		<div class="header-inner">
			<nav class="navbar navbar-expand-lg bg-tickets tickets-head navbar fixed-top justify-content-sm-start pt-0 pb-0">
				<div class="container header__container">
					<div class="headerMobile__left">
						<button class="header__menuBtn" type="button" data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
							<i class="icon-main-menu"></i>
						</button>
					</div>
					<NuxtLink class="navbar-brand order-1 order-lg-0" to="/">
						<div class="res-main-logo">
							<img src="/assets/images/logo_tickets.png" alt="">
						</div>
						<div class="main-logo" id="logo">
							<img src="/assets/images/logo_tickets.png" alt="">
							<img class="logo-inverse" src="/assets/images/dark-logo.svg" alt="">
						</div>
					</NuxtLink>
					<div class="xl:d-none ml-30">
						<div class="header__search js-liverSearch js-form-dd">
							<i class="icon-search text-18"></i>
							<input type="text" placeholder="Rechercher des événements.." class="js-search"
								data-x-click="headerSearch">
						</div>
					</div>
					<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel">
						<div class="offcanvas-header">
							<div class="offcanvas-logo" id="offcanvasNavbarLabel">
								<img src="/assets/images/fav.png" alt="">
							</div>
							<button type="button" class="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
								<i class="fa-solid fa-xmark"></i>
							</button>
						</div>
						<div class="offcanvas-body">
							<div class="offcanvas-top-area">
								<div class="create-bg">
									<a href="/login" class="offcanvas-create-btn">
										<i class="icon-calendars"></i>
										<span>Créer un évent</span>
									</a>
								</div>
							</div>
							<ul class="navbar-nav justify-content-end flex-grow-1 pe_5">
								<li class="nav-item">
									<NuxtLink class="nav-link" :class="{ active: $route.path === '/' }" aria-current="page" to="/">Accueil</NuxtLink>
								</li>
								<li class="nav-item dropdown">
									<NuxtLink class="nav-link dropdown-toggle" to="events" :class="{ active: $route.path === '/events' }" role="button" data-bs-toggle="dropdown"
										aria-expanded="false">
										Trouver des événements
									</NuxtLink>
									<ul class="dropdown-menu dropdown-submenu">
										<li><NuxtLink class="dropdown-item" to="/events/musique">Musique</NuxtLink></li>
										<li><a class="dropdown-item" href="#">Conférence</a></li>
										<li><a class="dropdown-item" href="#">Sports</a></li>
										<li><a class="dropdown-item" href="#">Arts du spectacle</a></li>
										<li><a class="dropdown-item" href="#">Cinéma</a></li>
										<li class="diver"><NuxtLink class="dropdown-item" to="/events">Tout parcourir</NuxtLink></li>
									</ul>
								</li>
								<li class="nav-item">
									<NuxtLink class="nav-link" :class="{ active: $route.path === '/contact' }" to="/contact">Aide</NuxtLink>
								</li>

							</ul>
						</div>
						<div class="offcanvas-footer">
							<div class="offcanvas-social">
								<h5>Follow Us</h5>
								<ul class="social-links">
									<li><a href="#" class="social-link"><i class="fab fa-facebook-square"></i></a></li>
									<li><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
									<li><a href="#" class="social-link"><i class="fab fa-twitter"></i></a></li>
									<li><a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a></li>
									<li><a href="#" class="social-link"><i class="fab fa-youtube"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="right-header order-2">
						<ul class="align-self-stretch">
							<li>
								<a href="create.html" class="create-btn btn-hover">
									<i class="icon-calendars"></i>
									<span>Créer un évent</span>
								</a>
							</li>
							<!--
							<li class="dropdown account-dropdown">
								<a href="#" class="account-link" role="button" id="accountClick"
									data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
									<img src="https://app.holduix.dev/assets/images/avatar.png" alt="">
									<i class="fas fa-caret-down arrow-icon"></i>
								</a>
								<ul class="dropdown-menu dropdown-menu-account dropdown-menu-end"
									aria-labelledby="accountClick">
									<li>
										<div class="dropdown-account-header">
											<div class="account-holder-avatar">
												<img src="https://app.holduix.dev/assets/images/avatar.png" alt="">
											</div>
											<h5>John Doe</h5>
											<p>lorem@tickets.cd</p>
										</div>
									</li>
									<li class="profile-link">
										<a href="#" class="link-item">Dashboard</a>
										<a href="#" class="link-item">Profil</a>
										<a href="sign_in.html" class="link-item">Déconnexion</a>
									</li>
								</ul>
							</li>-->
						</ul>
					</div>
				</div>
			</nav>
			<div class="overlay"></div>
		</div>
	</header>
</template>
