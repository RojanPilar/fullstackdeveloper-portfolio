<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
	<!-- FIXED: Added 'navbar-dark bg-black' and a clean shadow boundary -->
	<nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-black shadow-sm py-3" id="menu">
		<div class="container">
			
			<!-- Branding/Profile Section -->
			<div class="d-flex align-items-center brand-section">
				<img src="/images/rojan.png" alt="Rojan Pilar profile photo" class="profile-circle me-3" style="width: 40px; height: 40px; border-radius: 50%;">
				<div class="brand-text">
					<span class="d-block text-white fw-bold lh-1">Rojan</span>
					<small class="text-muted d-none d-sm-block">Full Stack Web Developer</small>
				</div>
			</div>

			<!-- Mobile Burger Toggler Trigger Button -->
			<button class="navbar-toggler border-0 shadow-none" type="button" @click="toggleMenu">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!-- Collapsible Links with light readable text states -->
			<div class="collapse navbar-collapse justify-content-end" :class="{ 'show': isMenuOpen }" id="navbarNav">
				<div class="navbar-nav ms-lg-4 gap-lg-4 text-center mt-3 mt-lg-0">
					<a class="nav-link text-white-50 px-2" href="#landing" @click="isMenuOpen = false">Home</a>
					<a class="nav-link text-white-50 px-2 text-nowrap" href="#projects" @click="isMenuOpen = false">My Projects</a>
					<a class="nav-link text-white-50 px-2" href="#tools" @click="isMenuOpen = false">Tools</a>
					<a class="nav-link text-white px-2 active fw-bold border-bottom border-purple" href="#contact" @click="isMenuOpen = false">Contact</a>
				</div>
			</div>

		</div>
	</nav>
</template>

<style scoped>
/* FIXED: Clean layout boundary dimensions for your sticky positioning context */
nav.navbar {
	background-color: #000000 !important;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	z-index: 1050; /* Keeps it layered completely on top of scrolling sections */
}

.nav-link:hover {
	color: #ffffff !important;
}
</style>
