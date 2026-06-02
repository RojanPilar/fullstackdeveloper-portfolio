<script setup>

	import { defineProps } from 'vue';

	// defineProps() is used to receive data from a parent component
	// Parent Component: Projects.vue - contains the list of projects and passes each project's data to ProjectCard.vue.
	// Child Component: ProjectCard.vue - receives the project data through props and displays it.
	defineProps({
		// The "project" prop will contain the project data object
		project: Object
	})

</script>

<template>

	<div class="col">
		<div class="project-card p-3 h-100 d-flex flex-column">
			<div class="img-placeholder mb-3">
				<!-- Bind the image source dynamically using the project.image value -->
				<img
					:src="project.image"
					:alt="project.title"
					class="img-fluid rounded-4 portfolio-img"
					width="800"
					height="600"
					loading="lazy"
				>
			</div>
			<div class="card-content d-flex flex-column flex-grow-1">
				<h4 class="text-white fw-bold">{{ project.title }}</h4>
				<p class="text-secondary small flex-grow-1">
					{{ project.description }}
				</p>
				<div class="d-flex justify-content-between align-items-center mt-3">
					<div class="badge-group d-flex gap-2">
						<span class="custom-badge">{{ project.badge || 'Backend' }}</span>
						<span class="custom-badge">{{ project.date || 'Feb 2026' }}</span>
					</div>
					<a
						:href="project.link || 'https://github.com/'"
						target="_blank"
						rel="noopener noreferrer"
						class="arrow-btn"
					>
						<i class="bi bi-arrow-up-right"></i>
					</a>
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>

</style>