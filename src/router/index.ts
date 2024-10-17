import { createWebHistory, createRouter } from 'vue-router'
import Survey from '@/pages/Survey.vue'
import About from '@/pages/About.vue'
import Search from '@/pages/Search.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Survey,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
