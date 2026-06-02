<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)
const activeSection = ref('landing')

const setSection = (sectionName) => {
  activeSection.value = sectionName
  isMenuOpen.value = false 
}

const handleScroll = () => {
  const sections = ['landing', 'projects', 'tools', 'contact']
  const scrollPosition = window.scrollY + 200 
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => { window.addEventListener('scroll', handleScroll) })
onBeforeUnmount(() => { window.removeEventListener('scroll', handleScroll) })
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-black py-3" id="menu">
    <div class="container d-flex justify-content-center">
      <div class="custom-navbar-container px-4 py-2 d-flex align-items-center justify-content-between w-100">
        
        <div class="d-flex align-items-center brand-section">
          <img src="/images/rojan.png" alt="Rojan" class="profile-circle me-3">
          <div class="brand-text text-start">
            <span class="d-block text-white fw-bold" style="line-height: 1;">Rojan</span>
            <small class="text-secondary d-none d-sm-block">Full Stack Web Developer</small>
          </div>
        </div>

        <button class="navbar-toggler border-0 shadow-none text-white" type="button" @click="isMenuOpen = !isMenuOpen">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" :class="{ 'show': isMenuOpen }">
          <div class="navbar-nav ms-lg-4 gap-lg-4 text-center mt-3 mt-lg-0">
            <a class="nav-link custom-link" :class="{ 'active-indicator': activeSection === 'landing' }" href="#landing" @click="setSection('landing')">Home</a>
            <a class="nav-link custom-link text-nowrap" :class="{ 'active-indicator': activeSection === 'projects' }" href="#projects" @click="setSection('projects')">My Projects</a>
            <a class="nav-link custom-link" :class="{ 'active-indicator': activeSection === 'tools' }" href="#tools" @click="setSection('tools')">Tools</a>
            <a class="nav-link custom-link" :class="{ 'active-indicator': activeSection === 'contact' }" href="#contact" @click="setSection('contact')">Contact</a>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<style scoped>
nav.navbar {
  background-color: #000000 !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1050;
}
.custom-navbar-container {
  background-color: rgba(11, 12, 16, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  backdrop-filter: blur(10px);
}
.profile-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.custom-link {
  color: rgba(255, 255, 255, 0.6) !important;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid transparent;
}
.custom-link:hover, .custom-link.active-indicator {
  color: #ffffff !important;
}
.custom-link.active-indicator {
  font-weight: 700 !important;
  border-bottom: 2px solid #238845 !important;
}
</style>
