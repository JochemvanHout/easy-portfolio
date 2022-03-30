import { createRouter, createWebHistory } from 'vue-router'

const Main = () => import('@/views/Main.vue')

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
