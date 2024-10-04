import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'

import { defineCustomElements } from '@telekom/scale-components/loader';
import '@telekom/scale-components/dist/scale-components/scale-components.css';

import router from '../router/route';

// ...
// Vue.use(router);
defineCustomElements();

createApp(App).use(router).mount('#app')
