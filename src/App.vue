<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/css/bootstrap.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/animate.min.css'
import './assets/css/boxicons.min.css'
import './assets/css/magnific-popup.min.css'
import './assets/css/flaticon.css'
import './assets/css/meanmenu.min.css'
import './assets/css/nice-select.min.css'
import './assets/css/odometer.min.css'
import './assets/css/responsive-two.css'
import Preloader from './components/Preloader.vue'
import FooterView from './views/FooterView.vue'
import CopyRightView from './views/CopyRightView.vue'
import GoToTop from './components/GoToTop.vue'
</script>

<template>
	<Preloader />
	<!-- Start Header Area -->
	<header class="header-area">
		<div class="navbar-area">
			<div class="mobile-nav">
				<div class="container">
					<a href="/" class="logo">
						<img src="assets/img/logo.png" alt="Logo">
					</a>
				</div>
			</div>
			<div class="main-nav">
				<div class="container">
					<nav class="navbar navbar-expand-md">
						<a href="http://" class="navbar-brand">
							<img src="./assets/img/logo.png" alt="">
						</a>
						<div class="collapse navbar-collapse mean-menu" style="display: block;">
							<ul class="navbar-nav m-auto">
								<li class="nav-item">
									<RouterLink to="/" class="nav-link active">网站首页</RouterLink>
								</li>
								<li class="nav-item">
									<RouterLink to="/new" class="nav-link">新闻动态</RouterLink>
								</li>
								<li class="nav-item">
									<RouterLink to="/help" class="nav-link">帮助中心</RouterLink>
								</li>
								<li class="nav-item">
									<RouterLink to="/service" class="nav-link">服务项目</RouterLink>
								</li>
								<li class="nav-item">
									<RouterLink to="/about" class="nav-link">关于我们</RouterLink>
								</li>
								<li class="nav-item">
									<RouterLink to="/contact" class="nav-link">联系我们</RouterLink>
								</li>
							</ul>
							<div class="others-option">
								<div class="get-quote">
									<a href="" class="default-btn">
										<span>开始定位体验</span>
									</a>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</header>
	<!-- End Header Area -->
	<RouterView />
	<GoToTop />
	<FooterView />
	<CopyRightView />
</template>

<style scoped>
#jarallax-container-0 {
	clip: rect(0 1854px 472.59375px 0);
	clip: rect(0, 1854px, 472.59375px, 0);
}
</style>