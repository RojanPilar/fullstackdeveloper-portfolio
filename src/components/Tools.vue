<script setup>
// Static Skills Matrix
</script>

<template>
  <section id="tools" class="tools-section py-5 text-white bg-black">
    <div class="container">
      
      <div class="text-center mb-5">
        <h2 class="fw-bold display-6">Tools I Use with Ease</h2>
        <p class="text-secondary mx-auto">Categorized expertise for robust and innovative solutions</p>
      </div>

      <!-- FRONT END -->
      <div class="category-block mb-5 text-start">
        <h4 class="mb-4 fw-bold text-center text-md-start">Front-End</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          <div class="col" v-for="tool in ['HTML', 'CSS', 'Bootstrap', 'JavaScript']" :key="tool">
            <div class="tool-card p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-box me-3">
                  <img :src="`/images/${tool.toLowerCase() === 'javascript' ? 'js' : tool.toLowerCase()}.png`" class="tool-icon" width="45" height="45">
                </div>
                <h5 class="m-0 fw-bold">{{ tool }}</h5>
              </div>
              <p class="tool-desc text-secondary small">Expert level implementation using modular, scalable, modern design methodologies.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- MERN LAYER -->
      <div class="category-block mb-5 text-start">
        <h4 class="mb-4 fw-bold text-center text-md-start">MERN</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          <div class="col" v-for="tool in ['MongoDB', 'ExpressJS', 'ReactJS', 'Node']" :key="tool">
            <div class="tool-card p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-box me-3">
                  <img :src="`/images/${tool.toLowerCase()}.png`" class="tool-icon" width="45" height="45">
                </div>
                <h5 class="m-0 fw-bold">{{ tool }}</h5>
              </div>
              <p class="tool-desc text-secondary small">Architecting robust full-stack data structures and custom application microservices.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.tool-card {
  background-color: #0b0c10;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  transition: .2s;
}
.tool-card:hover {
  transform: translateY(-4px);
  border-color: #238845;
}
.icon-box {
  background-color: rgba(255, 255, 255, 0.03);
  padding: 6px;
  border-radius: 8px;
}
</style>
