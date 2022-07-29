import { createRouter, createWebHistory } from 'vue-router';

import CoverHome from '../views/CoverHome.vue';
import CoverSingleArtist from '../views/CoverSingleArtist.vue';

const routes = [
  { path: '/', component: CoverHome },
  { path: '/:id', component: CoverSingleArtist },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
