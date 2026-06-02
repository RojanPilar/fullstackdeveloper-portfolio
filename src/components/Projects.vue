<script setup>
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard.vue';
</script>

<template>
  <section id="projects" class="portfolio-section py-5 bg-black text-white">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="display-5 fw-bold text-white">My Creative Projects</h2>
        <p class="text-secondary">Explore a showcase of my diverse projects and creations</p>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>
