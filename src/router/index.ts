import { createWebHistory, createRouter } from 'vue-router'
import Main from '@/pages/Main.vue'
import About from '@/pages/About.vue'
import Search from '@/pages/Search.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
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
