import { createRouter, createWebHistory } from 'vue-router';

import Profile from '../views/Profile.vue';
import Settings from '../views/Settings.vue';
import Home from '../views/Home.vue';
import AddHabit from '../views/AddHabit.vue';
import Timer from '../views/Timer.vue';

// Define array of route objects
const routes = [
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/AddHabit',
    name: 'AddHabit',
    component: AddHabit,
    props: true,
  },
  {
    path: '/Timer',
    name: 'Timer',
    component: Timer,
  },
];
// Create and export router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
