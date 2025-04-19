import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import Home from '../views/Home.vue';
import Components from '../views/Components.vue';
import Documentation from '../views/Documentation.vue';
import Demo from '../views/Demo.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'components',
        name: 'Components',
        component: Components,
      },
      {
        path: 'documentation',
        name: 'Documentation',
        component: Documentation,
      },
      {
        path: 'demo',
        name: 'Demo',
        component: Demo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
