<script setup>
import Navbar from './components/Navbar.vue';
import About from './components/About.vue'; // This maps your Landing section layout
import Projects from './components/Projects.vue';
import Tools from './components/Tools.vue';
import Contact from './components/Contact.vue';
import FooterComponent from './components/FooterComponent.vue'; // Imports your newly updated footer view
</script>

<template>
	<!-- Master Dark Container Theme Element Wrapper -->
	<div class="bg-black text-white min-vh-100">
		
		<Navbar />
		
		<main>
			<About />
			<Projects />
			<Tools />
			<Contact />
		</main>

		<!-- Placed at the bottom edge layout context boundary of the container -->
		<div class="container pb-5">
			<FooterComponent />
		</div>

	</div>
</template>

<style>
/* Global CSS scroll modifications */
html {
	scroll-behavior: smooth;
}
body {
	background-color: #000000 !important;
}
</style>
