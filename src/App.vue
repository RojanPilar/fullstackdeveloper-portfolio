<script setup>
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Tools from './components/Tools.vue';
import Contact from './components/Contact.vue';
</script>

<template>
	<!-- FIXED: Added 'bg-black text-white' styles directly onto the wrapper to enforce your dark workspace template -->
	<div class="bg-black text-white min-vh-100 position-relative" style="background-color: #000000 !important;">
		<Navbar />
		<About />
		<Projects />
		<Tools />
		<Contact />
	</div>
</template>

<style>
/* Global system-wide reset rules sheets */
html, body {
	background-color: #000000 !important;
	color: #ffffff !important;
	scroll-behavior: smooth;
	margin: 0;
	padding: 0;
}
</style>
