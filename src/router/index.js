import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/404.vue'),
    },
  ],
});

export default router;
