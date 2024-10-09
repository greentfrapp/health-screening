import { createWebHistory, createRouter } from 'vue-router'
import Main from '@/pages/Main.vue'
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
