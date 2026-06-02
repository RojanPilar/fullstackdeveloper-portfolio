import './assets/main.css'

// FIXED: Standard core Bootstrap 5 framework style layout definitions mounted safely
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper automatically

// Core global alerts styles asset layer
import 'notyf/notyf.min.css';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
