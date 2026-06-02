// 1. Mount your local global styles and resets first
import './assets/main.css'

// 2. FIXED: Core Bootstrap 5 framework style layout definitions mounted safely
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper engine for navigation toggles

// 3. Core global alerts styling asset layer
import 'notyf/notyf.min.css';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
