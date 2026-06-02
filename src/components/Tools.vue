<script setup>
// Explicitly map your skills to their exact file names in your sidebar
const frontEndTools = [
  { name: 'HTML', icon: 'html5.png', desc: 'The structural foundation of every high-performing web application.' },
  { name: 'CSS', icon: 'css3.png', desc: 'Crafting visually stunning, responsive, and modern user interfaces.' },
  { name: 'Bootstrap', icon: 'bootstrap.png', desc: 'Leveraging powerful frameworks for rapid, mobile-first development.' },
  { name: 'JavaScript', icon: 'js.png', desc: 'Bringing static designs to life with dynamic, interactive logic.' }
]

const mernTools = [
  { name: 'MongoDB', icon: 'mongodb.png', desc: 'Architecting flexible, scalable NoSQL databases for modern data.' },
  { name: 'Express.js', icon: 'expressjs.png', desc: 'Building the robust server-side logic that powers web APIs.' },
  { name: 'React.js', icon: 'reactjs.png', desc: 'Creating seamless, component-based user experiences with high performance.' },
  { name: 'Node.js', icon: 'node.png', desc: 'Running lightning-fast JavaScript on the server for real-time applications.' }
]

const otherTools = [
  { name: 'Heroku', icon: 'heroku.png', desc: 'Streamlining deployment to ensure applications are live and stable.' },
  { name: 'Git', icon: 'git.png', desc: 'Mastering version control to collaborate and track every line of code.' },
  { name: 'Postman', icon: 'postman.png', desc: 'Rigorously testing and documenting APIs for flawless integration.' },
  { name: 'Sublime Text', icon: 'sublime.png', desc: 'Utilizing a lightweight, efficient environment for clean coding.' }
]
</script>

<template>
  <section id="tools" class="tools-section py-5 text-white bg-black">
    <div class="container">
      
      <div class="text-center mb-5">
        <h2 class="fw-bold display-6">Tools I Use with Ease</h2>
        <p class="text-secondary mx-auto">Categorized expertise for robust and innovative solutions</p>
      </div>

      <!-- FRONT-END CATEGORY -->
      <div class="category-block mb-5 text-start">
        <h4 class="mb-4 fw-bold text-center text-md-start">Front-End</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          <div class="col" v-for="tool in frontEndTools" :key="tool.name">
            <div class="tool-card p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-box me-3">
                  <!-- FIXED: Now loads paths cleanly without messy string manipulation -->
                  <img :src="`/images/${tool.icon}`" :alt="tool.name" class="tool-icon" width="45" height="45" loading="lazy">
                </div>
                <h5 class="m-0 fw-bold">{{ tool.name }}</h5>
              </div>
              <p class="tool-desc text-secondary small">{{ tool.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- MERN CATEGORY -->
      <div class="category-block mb-5 text-start">
        <h4 class="mb-4 fw-bold text-center text-md-start">MERN</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          <div class="col" v-for="tool in mernTools" :key="tool.name">
            <div class="tool-card p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-box me-3">
                  <img :src="`/images/${tool.icon}`" :alt="tool.name" class="tool-icon" width="45" height="45" loading="lazy">
                </div>
                <h5 class="m-0 fw-bold">{{ tool.name }}</h5>
              </div>
              <p class="tool-desc text-secondary small">{{ tool.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- OTHER TOOLS CATEGORY -->
      <div class="category-block text-start">
        <h4 class="mb-4 fw-bold text-center text-md-start">Other Tools</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          <div class="col" v-for="tool in otherTools" :key="tool.name">
            <div class="tool-card p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-box me-3">
                  <img :src="`/images/${tool.icon}`" :alt="tool.name" class="tool-icon" width="45" height="45" loading="lazy">
                </div>
                <h5 class="m-0 fw-bold">{{ tool.name }}</h5>
              </div>
              <p class="tool-desc text-secondary small">{{ tool.desc }}</p>
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
  display: inline-flex;
}
</style>
