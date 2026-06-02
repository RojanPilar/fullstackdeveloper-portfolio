<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top py-3 px-2">
    <div class="container d-flex justify-content-center">
      <div class="custom-navbar-container px-4 py-2 d-flex align-items-center justify-content-between w-100">
        
        <div class="d-flex align-items-center brand-section">
          <img src="/images/rojan.png" alt="Rojan" class="profile-circle me-3" style="width: 35px; height: 35px; border-radius: 50%;">
          <div class="brand-text text-start">
            <span class="d-block text-white fw-bold lh-1">Rojan</span>
            <small class="text-white-50 d-none d-sm-block" style="font-size: 0.75rem;">Full Stack Web Developer</small>
          </div>
        </div>

        <button class="navbar-toggler border-0 shadow-none text-white" type="button" @click="isMenuOpen = !isMenuOpen">
          <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" :class="{ 'show': isMenuOpen }">
          <div class="navbar-nav ms-lg-4 gap-lg-4 text-center mt-3 mt-lg-0">
            <a class="nav-link text-white-50 px-2" href="#landing" @click="isMenuOpen = false">Home</a>
            <a class="nav-link text-white-50 px-2 text-nowrap" href="#projects" @click="isMenuOpen = false">My Projects</a>
            <a class="nav-link text-white-50 px-2" href="#tools" @click="isMenuOpen = false">Tools</a>
            <a class="nav-link text-white px-2 fw-bold" href="#contact" @click="isMenuOpen = false">Contact</a>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar-container {
  background-color: rgba(11, 12, 16, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  backdrop-filter: blur(10px);
}
.nav-link {
  transition: color 0.2s ease;
}
.nav-link:hover {
  color: #ffffff !important;
}
</style>
