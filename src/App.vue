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
import HeaderView from './views/HeaderView.vue'
</script>

<template>
	<Preloader />
	<HeaderView />
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