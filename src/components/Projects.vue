<script setup>

	import projects from '../data/projects.json';
	import ProjectCard from './ProjectCard.vue';

</script>

<template>

	<!-- Portfolio Section -->
	<section id="projects" class="portfolio-section py-5 bg-black text-white">
		<div class="container">

			<!-- Header -->
			<div class="text-center mb-5">
				<h2 class="display-5 fw-bold text-white">My Creative Projects</h2>
				<p class="text-secondary">Explore a showcase of my diverse projects and creations</p>
			</div>

			<!-- Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop -->
			<!-- v-for loops through the projects array from projects.json -->
			<!-- :key binds each card to its unique project id -->
			<!-- :project passes the current project object as a prop to ProjectCard -->
			<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
				<ProjectCard
					v-for="project in projects"
					:key="project.id"
					:project="project"
				/>
			</div>

		</div>
	</section>
	<!-- End of Portfolio Section -->

</template>

<style scoped>

</style>