<script setup>
import { defineProps } from 'vue';
defineProps({
  project: { type: Object, required: true }
});
</script>

<template>
  <div class="col">
    <div class="project-card p-3 h-100 d-flex flex-column text-start">
      <div class="img-placeholder mb-3">
        <img :src="project.image" :alt="project.title" class="img-fluid rounded-4 portfolio-img" width="800" height="600" loading="lazy"> 
      </div>
      <div class="card-content d-flex flex-column flex-grow-1">
        <h4 class="text-white fw-bold">{{ project.title }}</h4>
        <p class="text-secondary small flex-grow-1">{{ project.description }}</p>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div class="badge-group d-flex gap-2">
            <span class="custom-badge">{{ project.badge }}</span>
            <span class="custom-badge">{{ project.date }}</span>
          </div>
          <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-success text-decoration-none fw-bold">Code ↗</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background-color: #0b0c10;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  transition: all 0.2s ease-in-out;
}
.project-card:hover {
  transform: translateY(-5px);
  border-color: #238845;
}
.custom-badge {
  background-color: rgba(255, 255, 255, 0.08);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.portfolio-img {
  object-fit: cover;
  width: 100%;
  height: 200px;
}
</style>
