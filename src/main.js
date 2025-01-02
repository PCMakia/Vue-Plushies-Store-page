// import './assets/base.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// // import Vue from 'vue';
// // import VueRouter from 'vue-router';



// import { createApp } from 'vue'
// import App from './App.vue'

// import router from './../router.js';


// createApp(App).use(router).mount('#app')
// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import the router
import { loadCart } from './cart';
loadCart();

const app = createApp(App);

app.use(router);  // Use the router

app.mount('#app');
