<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
	<!-- Bootstrap 5 navbar wrapper forcing high-contrast light elements across dark theme -->
	<nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-black py-3" id="menu">
		<div class="container">
			
			<!-- Branding/Profile Section -->
			<div class="d-flex align-items-center brand-section">
				<img src="/images/rojan.png" alt="Rojan Pilar profile photo" class="profile-circle me-3" style="width: 40px; height: 40px; border-radius: 50%;">
				<div class="brand-text">
					<span class="d-block text-white fw-bold" style="line-height: 1;">Rojan</span>
					<small class="text-secondary d-none d-sm-block">Full Stack Web Developer</small>
				</div>
			</div>

			<!-- Mobile Burger Toggler Trigger Button -->
			<button class="navbar-toggler border-0 shadow-none" type="button" @click="toggleMenu">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!-- Collapsible Links with Explicit Text and Active Color Rules -->
			<div class="collapse navbar-collapse justify-content-end" :class="{ 'show': isMenuOpen }" id="navbarNav">
				<div class="navbar-nav ms-lg-4 gap-lg-4 text-center mt-3 mt-lg-0">
					<!-- FIXED: Applied explicit custom CSS classes and forced white/grey text visibility states -->
					<a class="nav-link custom-link" href="#landing" @click="isMenuOpen = false">Home</a>
					<a class="nav-link custom-link text-nowrap" href="#projects" @click="isMenuOpen = false">My Projects</a>
					<a class="nav-link custom-link" href="#tools" @click="isMenuOpen = false">Tools</a>
					<a class="nav-link custom-link active-indicator" href="#contact" @click="isMenuOpen = false">Contact</a>
				</div>
			</div>

		</div>
	</nav>
</template>

<style scoped>
/* Clear configuration layer formatting to prevent any global stylesheet overrides */
nav.navbar {
	background-color: #000000 !important;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	z-index: 1050;
}

/* Base custom links text state rules */
.custom-link {
	color: rgba(255, 255, 255, 0.7) !important; /* Forces light gray visible text */
	font-weight: 500;
	transition: color 0.2s ease-in-out;
}

/* Hover link state rules */
.custom-link:hover {
	color: #ffffff !important; /* Brighter white on hover state change context */
}

/* Highlight indicator styling targeting the contact endpoint link structure specifically */
.active-indicator {
	color: #ffffff !important;
	font-weight: 700;
	border-bottom: 2px solid #6f42c1; /* Underline accent */
}
</style>
