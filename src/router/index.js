import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('../views/Features.vue')
  },
  
  {
    path: '/mynews',
    name: 'MyNews',
    component: () => import('../views/mynews/List.vue')
  },
  {
    path: '/mynews/:title',
    name: 'MyOneNews',
    component: () => import('../views/mynews/One.vue')
  },

  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
















  {
    path: '/news',
    name: 'News',
    component: () => import('../views/news/List.vue')
  },
  {
    path: '/news/:title',
    name: 'OneNews',
    component: () => import('../views/news/One.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'NotFound',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
