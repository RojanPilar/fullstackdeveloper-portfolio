<script setup>
import { defineProps } from 'vue';
defineProps({
  project: { type: Object, required: true }
});
</script>

<template>
  <div class="col">
    <div class="project-card p-4 h-100 d-flex flex-column text-start">
      
      <!-- Card Image Layer Container -->
      <div class="img-placeholder mb-3">
        <img :src="project.image" :alt="project.title" class="img-fluid rounded-4 portfolio-img" loading="lazy"> 
      </div>
      
      <!-- Card Content Container -->
      <div class="card-content d-flex flex-column flex-grow-1">
        <h4 class="text-white fw-bold mb-2 project-title">{{ project.title }}</h4>
        
        <!-- FIXED: Using high-contrast slate-white so it stands out sharply against the black background -->
        <p class="project-description flex-grow-1 text-light">
          {{ project.description }}
        </p>
        
        <!-- Card Footer Row Element -->
        <div class="d-flex justify-content-between align-items-center mt-4 pt-2 border-top border-dark">
          <div class="badge-group d-flex gap-2">
            <span class="custom-badge">{{ project.badge || 'Backend' }}</span>
            <span class="custom-badge">{{ project.date || 'Feb 2026' }}</span>
          </div>
          
          <!-- FIXED: Filled the empty link wrapper with a readable link and a Bootstrap Icon -->
          <a :href="project.link || ''" target="_blank" rel="noopener noreferrer" class="code-link text-decoration-none fw-bold">
            Code <i class="bi bi-arrow-up-right-square-fill ms-1"></i>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Core Card Surface Properties */
.project-card {
  background-color: #0b0c10 !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 16px !important;
  transition: all 0.25s ease-in-out;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #238845 !important; /* Green highlight border on card hover */
  box-shadow: 0 10px 30px rgba(35, 136, 69, 0.15);
}

.project-title {
  font-size: 1.25rem;
  letter-spacing: -0.02em;
}

/* FIXED: Boosted readability text color to light slate (#f1f5f9) */
.project-description {
  color: #f1f5f9 !important; 
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0;
  opacity: 0.85;
}

.portfolio-img {
  object-fit: cover;
  width: 100%;
  height: 200px;
  transition: transform 0.3s ease;
}

.project-card:hover .portfolio-img {
  transform: scale(1.02);
}

.custom-badge {
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
}

/* FIXED: Sleek look for your project button link matching your global template styles */
.code-link {
  color: #238845 !important;
  font-size: 0.95rem;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
}

.code-link:hover {
  color: #2fb15b !important;
  transform: scale(1.05);
}
</style>
