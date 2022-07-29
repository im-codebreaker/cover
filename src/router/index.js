import { createRouter, createWebHistory } from 'vue-router';

import AppHome from '../components/AppMain.vue';
import ArtistView from '../components/ArtistView.vue';

const routes = [
  { path: '/', component: AppHome },
  { path: '/:id', component: ArtistView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
