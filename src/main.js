import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';

import '../css/style.css';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue';
import router from './router';
// Providing habit store to app so it can be accessed by child components
import { useHabitStore } from './store/habitStore';

// Initialise Pinia store
const pinia = createPinia();
// Initialise Vuetify with imported components and directives
const vuetify = createVuetify({
  components,
  directives,
});
// Create Vue app instance using router, pinia, and Vuetify
const app = createApp(App).use(router).use(pinia).use(vuetify);
app.provide('useHabit', useHabitStore);

// Mounting app to DOM element with the ID 'app'
app.mount('#app');
