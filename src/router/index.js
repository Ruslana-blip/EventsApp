import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/events'
  },
  {
    path: '/events',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'EventsPage',
        component: () => import('@/pages/EventsPage.vue')
      },
      {
        path: ':id',
        name: 'SingleEventPage',
        component: () => import('@/pages/EventDetails/SingleEventPage.vue')
      },
      {
        path: 'register',
        name: 'RegisterPage',
        component: () => import('@/pages/EventDetails/RegisterPage.vue')
      },
      {
        path: 'users',
        name: 'RegisteredUsers',
        component: () => import('@/pages/EventDetails/RegisteredUsers.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
