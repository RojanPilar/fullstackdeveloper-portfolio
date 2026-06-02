import './assets/main.css'

// Framework configuration libraries loaded cleanly
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bundles Popper natively
import 'notyf/notyf.min.css'; // Global alert styles asset

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
