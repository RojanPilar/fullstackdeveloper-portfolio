<script setup>
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Tools from './components/Tools.vue';
import Contact from './components/Contact.vue';
</script>

<template>
  <div class="bg-black text-white min-vh-100 position-relative">
    <Navbar />
    <main>
      <About />
      <Projects />
      <Tools />
      <Contact />
    </main>
  </div>
</template>
