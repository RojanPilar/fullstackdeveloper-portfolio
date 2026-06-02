<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)
const activeSection = ref('landing') // Default active section

// Toggles mobile hamburger drop-down menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Sets active section when a user manually clicks a navbar item
const setSection = (sectionName) => {
  activeSection.value = sectionName
  isMenuOpen.value = false // Automatically close mobile drawer menu
}

// Optional: Automatically updates active section highlighting as you scroll down the page
const handleScroll = () => {
  const sections = ['landing', 'projects', 'tools', 'contact']
  const scrollPosition = window.scrollY + 200 // Offset for modern navigation bars

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-black py-3" id="menu">
    <div class="container">
      
      <!-- Branding / Profile Section -->
      <div class="d-flex align-items-center brand-section">
        <img src="/images/rojan.png" alt="Rojan Pilar profile photo" class="profile-circle me-3" style="width: 40px; height: 40px; border-radius: 50%;">
        <div class="brand-text">
          <span class="d-block text-white fw-bold" style="line-height: 1;">Rojan</span>
          <small class="text-secondary d-none d-sm-block">Full Stack Web Developer</small>
        </div>
      </div>

      <!-- Mobile Hamburger Toggler Trigger Button -->
      <button class="navbar-toggler border-0 shadow-none" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible Links with Responsive Vue-Driven Highlighting -->
      <div class="collapse navbar-collapse justify-content-end" :class="{ 'show': isMenuOpen }" id="navbarNav">
        <div class="navbar-nav ms-lg-4 gap-lg-4 text-center mt-3 mt-lg-0">
          
          <!-- Home Link -->
          <a 
            class="nav-link custom-link" 
            :class="{ 'active-indicator': activeSection === 'landing' }" 
            href="#landing" 
            @click="setSection('landing')"
          >Home</a>
          
          <!-- My Projects Link -->
          <a 
            class="nav-link custom-link text-nowrap" 
            :class="{ 'active-indicator': activeSection === 'projects' }" 
            href="#projects" 
            @click="setSection('projects')"
          >My Projects</a>
          
          <!-- Tools Link -->
          <a 
            class="nav-link custom-link" 
            :class="{ 'active-indicator': activeSection === 'tools' }" 
            href="#tools" 
            @click="setSection('tools')"
          >Tools</a>
          
          <!-- Contact Link (FIXED: Active state is no longer permanently frozen here) -->
          <a 
            class="nav-link custom-link" 
            :class="{ 'active-indicator': activeSection === 'contact' }" 
            href="#contact" 
            @click="setSection('contact')"
          >Contact</a>

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

/* Base custom links text styling configuration definitions */
.custom-link {
  color: rgba(255, 255, 255, 0.6) !important; /* Visible light gray text */
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid transparent; /* Keeps spacing layout uniform */
}

/* Brighter white on element hover state transitions */
.custom-link:hover {
  color: #ffffff !important;
}

/* Dynamic active state: Automatically turns white and bold with a purple underline */
.custom-link.active-indicator {
  color: #ffffff !important;
  font-weight: 700 !important;
  border-bottom: 2px solid #238845 !important; /* Matches your premium green theme design color */
}
</style>
